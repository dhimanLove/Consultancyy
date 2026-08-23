import { useEffect, useRef } from "react";
import { loadGsap, type GsapContext } from "@/lib/gsap";

interface Props {
  target: number;
  suffix?: string;
}

export function StatCounter({ target, suffix = "" }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let done = false;
    let cancelled = false;
    let ctx: GsapContext | undefined;

    loadGsap().then(({ gsap, ScrollTrigger }) => {
      if (cancelled) return;

      const animate = () => {
        if (done) return;
        done = true;
        el.textContent = "0" + suffix;
        gsap.to(el, {
          textContent: target,
          duration: 1.5,
          ease: "expo.out",
          snap: { textContent: 1 },
          modifiers: {
            textContent: (v) => Math.round(Number(v)).toLocaleString("en-IN") + suffix,
          },
        });
      };

      ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 92%",
          once: true,
          onEnter: animate,
        });
      });

      if (el.getBoundingClientRect().top < window.innerHeight * 0.92) animate();
    });

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [target, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}
