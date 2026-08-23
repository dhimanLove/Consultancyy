import { useEffect, useRef } from "react";
import { loadGsap, type GsapContext } from "@/lib/gsap";

export function RevealParagraph({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let ctx: GsapContext | undefined;
    let cancelled = false;
    loadGsap().then(({ gsap }) => {
      if (cancelled) return;
      ctx = gsap.context(() => {
        gsap.from(el, {
          opacity: 0,
          y: 20,
          duration: 0.7,
          ease: "expo.out",
          scrollTrigger: {
            trigger: el,
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
    <div ref={ref} className={`text-[16px] text-steel leading-relaxed ${className}`}>
      {children}
    </div>
  );
}
