import { motion } from "framer-motion";
import { cardChild } from "@/lib/motion";

interface Props {
  number: string;
  title: string;
  body: string;
}

export function TrustPillar({ number, title, body }: Props) {
  return (
    <motion.div
      {...cardChild}
      className="bg-white border border-border rounded-[5px] p-8 group hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
    >
      <div className="text-[48px] font-bold text-warm/30 leading-none select-none">{number}</div>
      <h3 className="text-[20px] font-bold text-navy mt-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-[15px] text-steel mt-3 leading-relaxed">{body}</p>
    </motion.div>
  );
}
