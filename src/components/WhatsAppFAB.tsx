import { motion } from "framer-motion";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function WhatsAppFAB() {
  return (
    <motion.a
      href="https://wa.me/918815553899"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 hover:brightness-110 transition-all duration-200"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.2 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <WhatsAppIcon className="w-7 h-7 text-white" />
    </motion.a>
  );
}
