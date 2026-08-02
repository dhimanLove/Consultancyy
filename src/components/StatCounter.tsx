import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface Props {
  target: number;
  suffix?: string;
}

export function StatCounter({ target, suffix = "" }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.registerPlugin(ScrollTrigger);

    let done = false;
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

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 92%",
        once: true,
        onEnter: animate,
      });
    });

    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) animate();

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, [target, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}
