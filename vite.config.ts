import { defineConfig, loadEnv, mergeConfig, type UserConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";

export default defineConfig(({ command, mode }) => {
  const envDefine: Record<string, string> = {};
  const loadedEnv = loadEnv(mode, process.cwd(), "VITE_");
  for (const [key, value] of Object.entries(loadedEnv)) {
    envDefine[`import.meta.env.${key}`] = JSON.stringify(value);
  }

  const plugins = [
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

  plugins.push(react());

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
                test: (id) => /(react|react-dom|scheduler|use-sync-external-store)/.test(id),
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
