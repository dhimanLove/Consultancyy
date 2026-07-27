import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import type { ComponentProps } from "react";

interface Props {
  to?: string;
  href?: string;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  variant?: "warm" | "navy";
  onClick?: () => void;
  fullWidth?: boolean;
}

export function EmberButton({
  to,
  href,
  children,
  className = "",
  type,
  variant = "warm",
  onClick,
  fullWidth,
}: Props) {
  const isWarm = variant === "warm";
  const base = `inline-flex items-center justify-center gap-1.5 ${
    isWarm
      ? "bg-warm text-navy-dark hover:bg-warm-dark hover:text-white"
      : "bg-navy text-white hover:bg-navy-light"
  } rounded-[8px] px-5 py-2.5 text-[14px] font-semibold transition-all duration-200 active:scale-[0.97] ${
    fullWidth ? "w-full py-3 text-[15px]" : ""
  } ${className}`;

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.97 },
    transition: { duration: 0.15 },
  };

  if (to) {
    return (
      <motion.span {...motionProps} className="inline-block">
        <Link to={to as ComponentProps<typeof Link>["to"]} className={base}>
          {children}
        </Link>
      </motion.span>
    );
  }
  if (href) {
    return (
      <motion.a href={href} className={base} {...motionProps}>
        {children}
      </motion.a>
    );
  }
  return (
    <motion.button type={type ?? "button"} onClick={onClick} className={base} {...motionProps}>
      {children}
    </motion.button>
  );
}
