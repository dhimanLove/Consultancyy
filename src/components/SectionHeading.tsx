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
        <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-steel mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-[24px] md:text-[27px] font-bold uppercase tracking-[0.055em] text-navy leading-[1.3]">
        {heading}
      </h2>
      <span
        aria-hidden
        className={`block h-1 w-[35px] bg-[#FFD712] mt-3 ${center ? "mx-auto" : ""}`}
      />
      {subtext && (
        <p
          className={`text-[15px] text-steel mt-4 max-w-[620px] leading-relaxed ${
            center ? "mx-auto" : ""
          }`}
        >
          {subtext}
        </p>
      )}
    </div>
  );
}
