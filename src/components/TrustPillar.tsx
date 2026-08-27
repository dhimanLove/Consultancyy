import { m } from "framer-motion";
import { cardChild } from "@/lib/motion";

interface Props {
  number: string;
  title: string;
  body: string;
}

export function TrustPillar({ number, title, body }: Props) {
  return (
    <m.div
      {...cardChild}
      className="bg-white border border-border rounded-[5px] p-8 group relative overflow-hidden hover:border-warm/40 hover:shadow-lg hover:shadow-warm/10 transition-all duration-300"
    >
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-warm to-warm/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="text-[48px] font-bold text-warm/30 leading-none select-none group-hover:text-warm/50 transition-colors">{number}</div>
      <h3 className="text-[20px] font-bold text-navy mt-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-[15px] text-steel mt-3 leading-relaxed">{body}</p>
    </m.div>
  );
}
