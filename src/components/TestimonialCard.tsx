import { m } from "framer-motion";
import { cardChild } from "@/lib/motion";
import { Quote } from "lucide-react";

interface Props {
  quote: string;
  author: string;
  date: string;
}

export function TestimonialCard({ quote, author, date }: Props) {
  return (
    <m.div
      {...cardChild}
      className="bg-white border border-border rounded-[5px] p-8 relative overflow-hidden group hover:border-warm/40 hover:shadow-lg hover:shadow-warm/10 transition-all duration-300"
    >
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-warm to-warm/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <Quote className="w-6 h-6 text-warm/20 absolute top-6 right-6" />
      <div className="text-warm text-[13px] tracking-widest mb-4">★★★★★</div>
      <p className="text-[15px] text-steel leading-relaxed">&ldquo;{quote}&rdquo;</p>
      <div className="mt-5 pt-4 border-t border-border/50">
        <p className="text-[14px] font-semibold text-navy">{author}</p>
        <p className="text-[11px] text-muted-foreground mt-0.5">{date}</p>
      </div>
    </m.div>
  );
}
