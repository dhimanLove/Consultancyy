import type { Variants } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease },
};

export const staggerContainer = {
  initial: "hidden" as const,
  whileInView: "visible" as const,
  viewport: { once: true, margin: "-40px" },
  variants: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
  } satisfies Variants,
};

export const cardChild: { variants: Variants } = {
  variants: {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease },
    },
  },
};

export const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.35, ease },
};

export const navDropdown = {
  initial: { opacity: 0, scaleY: 0.94, y: -6 },
  animate: { opacity: 1, scaleY: 1, y: 0 },
  exit: { opacity: 0, scaleY: 0.94, y: -6 },
  transition: { duration: 0.2, ease },
};
