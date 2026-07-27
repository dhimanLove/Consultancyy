import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

interface Props {
  target: number;
  suffix?: string;
}

export function StatCounter({ target, suffix = "" }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    if (!ref.current || animated.current) return;
    animated.current = true;

    const el = ref.current;
    el.textContent = "0" + suffix;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        textContent: target,
        duration: 1.5,
        ease: "expo.out",
        snap: { textContent: 1 },
        modifiers: {
          textContent: (v) => Math.round(Number(v)).toLocaleString("en-IN") + suffix,
        },
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          once: true,
        },
      });
    });
    return () => ctx.revert();
  }, [target, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}
