import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import type { ComponentProps } from "react";

interface Props {
  to?: string;
  href?: string;
  children: React.ReactNode;
}

export function GhostButton({ to, href, children }: Props) {
  const inner = (
    <span className="inline-flex items-center gap-1.5 text-[14px] font-medium text-navy">
      {children}
      <motion.span whileHover={{ x: 4 }} className="inline-block">
        &rarr;
      </motion.span>
    </span>
  );
  if (to) {
    return (
      <Link to={to as ComponentProps<typeof Link>["to"]} className="group">
        {inner}
      </Link>
    );
  }
  return (
    <a href={href} className="group">
      {inner}
    </a>
  );
}
