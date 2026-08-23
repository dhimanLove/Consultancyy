import {
  defineConfig,
  loadEnv,
  mergeConfig,
  type Plugin,
  type PluginOption,
  type UserConfig,
} from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";

/**
 * gsap is client-only (all usage lives inside useEffect via loadGsap()).
 * In every non-client graph (SSR/nitro), swap "gsap"/"gsap/ScrollTrigger"
 * for a stub so the real library never lands in .output/server — Workers
 * has no DOM and must not evaluate animation-library code on cold start.
 */
const ssrGsapStubPlugin: Plugin = {
  name: "ssr-gsap-stub",
  buildStart() {
    const envName = (this as unknown as { environment?: { name?: string } }).environment?.name;
    console.log(`[gsap-stub] buildStart in env: ${envName}`);
  },
  resolveId(source) {
    if (/^gsap/.test(source)) {
      const envName = (this as unknown as { environment?: { name?: string } }).environment?.name;
      console.log(`[gsap-stub] resolveId("${source}") env=${envName}`);
    }
    if (!/^gsap(\/ScrollTrigger)?$/.test(source)) return null;
    const envName = (this as unknown as { environment?: { name?: string } }).environment?.name;
    if (envName === "client") return null;
    return `${process.cwd()}/src/lib/gsap.server-stub.ts`;
  },
};

export default defineConfig(({ command, mode }) => {
  const envDefine: Record<string, string> = {};
  const loadedEnv = loadEnv(mode, process.cwd(), "VITE_");
  for (const [key, value] of Object.entries(loadedEnv)) {
    envDefine[`import.meta.env.${key}`] = JSON.stringify(value);
  }

  const plugins: PluginOption[] = [
    tailwindcss(),
    tanstackStart({
      server: {
        entry: "server",
      },
      importProtection: {
        behavior: "error",
        client: {
          files: ["**/server/**"],
          specifiers: ["server-only"],
        },
      },
    }),
  ];

  if (command === "build") {
    plugins.push(
      nitro({
        defaultPreset: "cloudflare-module",
        compatibilityDate: "2025-01-01",
        cloudflare: {
          nodeCompat: true,
          deployConfig: true,
        },
      }),
    );
  }

  plugins.push(ssrGsapStubPlugin, react());

  let config: UserConfig = {
    define: envDefine,
    css: { transformer: "lightningcss" },
    resolve: {
      alias: {
        "@": `${process.cwd()}/src`,
      },
      tsconfigPaths: true,
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
    optimizeDeps: {
      include: [
        "react",
        "react-dom",
        "react-dom/client",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
      ],
      ignoreOutdatedRequests: true,
    },
    build: {
      // NOTE: no top-level codeSplitting here — it would also apply to the
      // SSR build, where cross-chunk splitting broke @tanstack/react-router's
      // internal class ordering ("Class extends value undefined" on Workers).
      // Client-only vendor chunking is configured under environments.client.
    },
    environments: {
      client: {
        build: {
          rolldownOptions: {
            output: {
              codeSplitting: {
                groups: [
                  {
                    name: "vendor-gsap",
                    test: /[\\/]node_modules[\\/]gsap[\\/]/,
                    includeDependenciesRecursively: false,
                  },
                  {
                    name: "vendor-icons",
                    test: (id) => id.includes("lucide-react"),
                    includeDependenciesRecursively: false,
                  },
                  {
                    name: "vendor-react",
                    test: (id) =>
                      /[\\/]node_modules[\\/](react|react-dom|scheduler|use-sync-external-store)[\\/]/.test(
                        id,
                      ),
                    includeDependenciesRecursively: false,
                  },
                  {
                    name: "vendor",
                    test: (id) =>
                      id.includes("node_modules") &&
                      !/[\\/](framer-motion|motion-dom|motion-utils)[\\/]/.test(id),
                    includeDependenciesRecursively: false,
                  },
                ],
              },
            },
          },
        },
      },
    },
    plugins,
  };

  config = mergeConfig(
    {
      server: { host: "::", port: 8080 },
    },
    config,
  );

  return config;
});
