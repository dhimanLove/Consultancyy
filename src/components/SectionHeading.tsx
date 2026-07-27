import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface Props {
  eyebrow?: string;
  heading: string;
  center?: boolean;
  subtext?: string;
}

export function SectionHeading({ eyebrow, heading, center, subtext }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapRef.current) return;
    const children = Array.from(wrapRef.current.children);
    const ctx = gsap.context(() => {
      gsap.from(children, {
        opacity: 0,
        y: 28,
        stagger: 0.1,
        duration: 0.7,
        ease: "expo.out",
        scrollTrigger: {
          trigger: wrapRef.current!,
          start: "top 85%",
          once: true,
        },
      });
    });
    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <div ref={wrapRef} className={center ? "text-center" : ""}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 text-[11px] font-semibold text-warm uppercase tracking-[0.15em] mb-1">
          <span className="w-5 h-[2px] rounded-full bg-warm/50" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-[32px] md:text-[42px] font-bold text-navy leading-[1.15] tracking-tight">
        {heading}
      </h2>
      {subtext && (
        <p
          className={`text-[15px] text-steel mt-3 max-w-[560px] leading-relaxed ${center ? "mx-auto" : ""}`}
        >
          {subtext}
        </p>
      )}
    </div>
  );
}
