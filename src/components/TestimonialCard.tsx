import { motion } from "framer-motion";
import { cardChild } from "@/lib/motion";
import { Quote } from "lucide-react";

interface Props {
  quote: string;
  author: string;
  date: string;
}

export function TestimonialCard({ quote, author, date }: Props) {
  return (
    <motion.div
      {...cardChild}
      className="bg-white border border-border rounded-[10px] p-8 relative"
    >
      <Quote className="w-6 h-6 text-warm/20 absolute top-6 right-6" />
      <div className="text-warm text-[13px] tracking-widest mb-4">★★★★★</div>
      <p className="text-[15px] text-steel leading-relaxed">&ldquo;{quote}&rdquo;</p>
      <div className="mt-5 pt-4 border-t border-border/50">
        <p className="text-[14px] font-semibold text-navy">{author}</p>
        <p className="text-[11px] text-muted-foreground mt-0.5">{date}</p>
      </div>
    </motion.div>
  );
}
