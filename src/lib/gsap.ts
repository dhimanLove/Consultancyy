type Gsap = (typeof import("gsap"))["gsap"];
type ScrollTrigger = (typeof import("gsap/ScrollTrigger"))["ScrollTrigger"];

export type GsapContext = ReturnType<Gsap["context"]>;

let cached: Promise<{ gsap: Gsap; ScrollTrigger: ScrollTrigger }> | null = null;

/**
 * Client-only gsap loader.
 *
 * Uses dynamic imports so gsap never enters the SSR/server bundle
 * (Cloudflare Workers has no DOM; gsap must not be evaluated there).
 * All consumers already call this from inside useEffect / event handlers.
 */
export function loadGsap() {
  cached ??= Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
    ([{ gsap }, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger);
      return { gsap, ScrollTrigger };
    },
  );
  return cached;
}
