import { useEffect, useRef } from "react";
import { loadGsap, type GsapContext } from "@/lib/gsap";

interface Props {
  eyebrow?: string;
  heading: string;
  center?: boolean;
  subtext?: string;
}

export function SectionHeading({ eyebrow, heading, center, subtext }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    let ctx: GsapContext | undefined;
    let cancelled = false;
    loadGsap().then(({ gsap }) => {
      if (cancelled) return;
      const children = Array.from(wrap.children);
      ctx = gsap.context(() => {
        gsap.from(children, {
          opacity: 0,
          y: 28,
          stagger: 0.1,
          duration: 0.7,
          ease: "expo.out",
          scrollTrigger: {
            trigger: wrap,
            start: "top 85%",
            once: true,
          },
        });
      });
    });
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <div ref={wrapRef} className={center ? "text-center" : ""}>
      {eyebrow && (
        <p className="eyebrow flex items-center gap-2.5 mb-3">
          {!center && <span aria-hidden className="block h-px w-6 bg-warm-dark/50" />}
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-[26px] md:text-[32px] font-bold uppercase tracking-[0.04em] text-navy leading-[1.22]">
        {heading}
      </h2>
      <span
        aria-hidden
        className={`block h-[3px] w-9 bg-[#FFD712] mt-4 rounded-full ${center ? "mx-auto" : ""}`}
      />
      {subtext && (
        <p
          className={`text-[16px] text-steel mt-5 max-w-[620px] leading-relaxed ${
            center ? "mx-auto" : ""
          }`}
        >
          {subtext}
        </p>
      )}
    </div>
  );
}
