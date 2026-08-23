/**
 * SSR stub for "gsap" / "gsap/ScrollTrigger".
 *
 * gsap touches browser-only APIs and is only ever used client-side
 * (inside useEffect, via loadGsap()). This stub replaces it in the
 * server bundle so .output/server contains zero animation-library code.
 */
export const gsap = undefined as never;
export const ScrollTrigger = undefined as never;
