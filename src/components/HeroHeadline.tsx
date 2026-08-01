import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export function HeroHeadline() {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const words = ref.current.querySelectorAll("[data-word]");
    const ctx = gsap.context(() => {
      gsap.from(words, {
        opacity: 0,
        y: 50,
        rotateX: -25,
        stagger: 0.07,
        duration: 0.8,
        ease: "expo.out",
        delay: 0.15,
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <h1
      ref={ref}
      className="text-[44px] sm:text-[56px] lg:text-[70px] font-bold text-navy leading-[1.04] tracking-tight"
    >
      <span data-word className="inline-block will-change-transform">
        Business
      </span>{" "}
      <span data-word className="inline-block will-change-transform">
        Registration
      </span>
      <br />
      <span data-word className="inline-block will-change-transform">
        &amp;
      </span>{" "}
      <span data-word className="inline-block will-change-transform">
        Compliance
      </span>
      <br />
      <span data-word className="inline-block will-change-transform">
        in
      </span>{" "}
      <span data-word className="inline-block will-change-transform text-[#FFB000]">
        Indore
      </span>
      <span data-word className="inline-block will-change-transform text-[#FFB000]">
        .
      </span>
    </h1>
  );
}
