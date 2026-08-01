import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { X, Send, CheckCircle, User, Phone, ChevronDown } from "lucide-react";
import { SERVICES } from "@/lib/services-data";

interface Props {
  open: boolean;
  onClose: () => void;
  preselected?: string;
}

const PHONE = "918815553899";

const inputCls =
  "w-full border border-border bg-white rounded-[2px] px-4 py-2.5 text-[14px] placeholder:text-steel/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all";
const labelCls = "block text-[12px] font-bold text-navy mb-1";

const fields = [
  {
    key: "name",
    label: "Full Name",
    icon: User,
    type: "text",
    placeholder: "Your name",
    required: true,
  },
  {
    key: "phone",
    label: "Phone Number",
    icon: Phone,
    type: "tel",
    placeholder: "+91 XXXXX XXXXX",
    required: true,
  },
] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const fieldVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

export function QuickEnquiry({ open, onClose, preselected }: Props) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [vals, setVals] = useState({ name: "", phone: "", service: preselected ?? "" });

  const update = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setVals((v) => ({ ...v, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    const svc = SERVICES.find((s) => s.slug === vals.service);
    const msg = [
      "*New Enquiry - Chartered Solution*",
      "",
      `*Name:* ${vals.name}`,
      `*Phone:* ${vals.phone}`,
      `*Service:* ${(svc?.title ?? vals.service) || "Not specified"}`,
      "",
      "Sent via Quick Enquiry",
    ].join("\n");

    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;

    setTimeout(() => {
      setSending(false);
      setSent(true);
      window.open(url, "_blank");
    }, 600);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-2xl shadow-2xl max-h-[85vh] overflow-y-auto"
          >
            <div className="relative px-6 pt-6 pb-8 max-w-md mx-auto">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 w-8 h-8 flex items-center justify-center rounded-full bg-fog hover:bg-border transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4 text-navy" />
              </button>

              {sent ? (
                <motion.div
                  initial={{ scale: 0.92, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="py-10 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 180, damping: 14, delay: 0.1 }}
                    className="w-14 h-14 rounded-full bg-warm/10 flex items-center justify-center mx-auto"
                  >
                    <CheckCircle className="w-7 h-7 text-warm" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-navy mt-4">Enquiry sent!</h3>
                  <p className="text-[13px] text-steel mt-1.5 leading-relaxed">
                    Your message has been delivered via WhatsApp. We'll respond shortly.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-6 text-[13px] font-medium text-warm hover:text-warm-dark transition-colors underline underline-offset-2"
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="w-5 h-[3px] rounded-full bg-warm" />
                    <span className="text-[10px] font-semibold text-warm uppercase tracking-widest">
                      Quick Enquiry
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-navy">Get started in seconds</h3>
                  <p className="text-[13px] text-steel mt-1 mb-5 leading-relaxed">
                    Fill in your details and we'll reach out to you on WhatsApp.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="space-y-3.5"
                    >
                      {fields.map((f) => (
                        <motion.div key={f.key} variants={fieldVariants}>
                          <label className={labelCls}>
                            {f.label} <span className="text-error">*</span>
                          </label>
                          <div className="relative group">
                            <f.icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within:text-primary transition-colors" />
                            <input
                              type={f.type}
                              required={f.required}
                              value={vals[f.key as keyof typeof vals]}
                              onChange={update(f.key)}
                              className={`${inputCls} pl-9`}
                              placeholder={f.placeholder}
                            />
                          </div>
                        </motion.div>
                      ))}
                      <motion.div variants={fieldVariants}>
                        <label className={labelCls}>Service Needed</label>
                        <div className="relative group">
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 pointer-events-none group-focus-within:text-primary transition-colors" />
                          <select
                            value={vals.service}
                            onChange={update("service")}
                            className={`${inputCls} appearance-none cursor-pointer pr-9 text-navy`}
                          >
                            <option value="">Select a service...</option>
                            {SERVICES.map((s) => (
                              <option key={s.slug} value={s.slug}>
                                {s.title}
                              </option>
                            ))}
                          </select>
                        </div>
                      </motion.div>
                      <motion.div variants={fieldVariants} className="pt-1">
                        <button
                          type="submit"
                          disabled={sending}
                          className="w-full flex items-center justify-center gap-2 bg-primary text-white rounded-[2px] px-4 py-3 text-[14px] font-bold hover:bg-primary-70 active:scale-[0.97] transition-all disabled:opacity-60"
                        >
                          {sending ? (
                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="none"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                              />
                            </svg>
                          ) : (
                            <>
                              Send enquiry <Send className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </motion.div>
                    </motion.div>
                  </form>
                  <p className="text-[10px] text-steel/50 mt-3 text-center">
                    Your info stays confidential. No spam.
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
