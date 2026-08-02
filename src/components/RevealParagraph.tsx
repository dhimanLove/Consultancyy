import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function RevealParagraph({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ref.current!,
          start: "top 85%",
          once: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div ref={ref} className={`text-[16px] text-steel leading-relaxed ${className}`}>
      {children}
    </div>
  );
}
