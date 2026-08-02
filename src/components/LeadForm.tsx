import { useState, type FormEvent, type ReactNode } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { WHATSAPP_HREF } from "@/lib/nav";
import { SERVICES_BY_CATEGORY } from "@/lib/services-data";
import {
  User,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Send,
  CheckCircle,
  type LucideIcon,
} from "lucide-react";

const SALUTATIONS = ["Mr.", "Mrs.", "Ms.", "Company"];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
};

const fieldVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

const inputBase =
  "w-full bg-white border-2 border-gray-200 rounded-[8px] px-3.5 py-2.5 text-[14px] text-navy placeholder:text-gray-300 outline-none transition-all duration-200 " +
  "hover:border-primary/30 focus:border-primary focus:ring-4 focus:ring-primary/10";

const labelBase = "block text-[12px] font-bold text-navy mb-1.5";

function Field({
  label,
  icon: Icon,
  children,
  className = "",
}: {
  label: ReactNode;
  icon: LucideIcon;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className={labelBase}>{label}</label>
      <div className="relative group">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within:text-primary transition-colors duration-200" />
        {children}
        <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-primary scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
      </div>
    </div>
  );
}

export function LeadForm() {
  const [salutation, setSalutation] = useState(SALUTATIONS[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [lookingFor, setLookingFor] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !mobile.trim() || !email.trim() || !city.trim() || !lookingFor) {
      setError("Please fill all the required fields.");
      return;
    }
    if (!/^[0-9+\-\s]{10,15}$/.test(mobile.trim())) {
      setError("Please enter a valid mobile number.");
      return;
    }
    setError("");
    setSending(true);

    const msg = [
      "*New Quote Enquiry - Chartered Solution*",
      "",
      `*Salutation:* ${salutation}`,
      `*Name:* ${name.trim()}`,
      `*Email:* ${email.trim()}`,
      `*Mobile:* ${mobile.trim()}`,
      `*City:* ${city.trim()}`,
      `*Looking For:* ${lookingFor}`,
      "",
      "Sent via charteredsolution.com",
    ].join("\n");

    setTimeout(() => {
      setSending(false);
      setSent(true);
      window.open(`${WHATSAPP_HREF}?text=${encodeURIComponent(msg)}`, "_blank");
    }, 900);
  };

  return (
    <div className="relative w-full bg-white rounded-[14px] shadow-2xl shadow-navy/20 ring-1 ring-navy/10 p-8">
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-1.5 rounded-full bg-[#FFB000]" />
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            className="py-12 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.15 }}
              className="w-16 h-16 rounded-full bg-warm/10 flex items-center justify-center mx-auto"
            >
              <CheckCircle className="w-8 h-8 text-warm" />
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-[20px] font-bold text-navy mt-5"
            >
              Thank you, {name.trim().split(" ")[0]}!
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[14px] text-steel mt-2 leading-relaxed max-w-[340px] mx-auto"
            >
              Your quote request is ready on WhatsApp. We&rsquo;ll respond within minutes during
              business hours.
            </motion.p>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              href={`${WHATSAPP_HREF}?text=${encodeURIComponent(
                "Hi Chartered Solution, I just submitted the quote form.",
              )}`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-[#25D366] text-white font-bold text-[14px] rounded-[2px] px-6 py-3 hover:bg-[#1fb959] active:scale-[0.97] transition-all"
            >
              Open WhatsApp <Send className="w-4 h-4" />
            </motion.a>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            aria-label="Get quote instantly"
          >
            <motion.div
              variants={fieldVariants}
              className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-7"
            >
              <div>
                <p className="text-[20px] font-black text-navy leading-tight">
                  Get Quote Instantly
                  <br />
                  <span className="text-primary">in a Minute</span>
                </p>
                <p className="text-[13px] text-steel mt-1.5 leading-relaxed">
                  Fill in your details and we&rsquo;ll reach out on WhatsApp.
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="w-10 h-[3px] rounded-full bg-warm" />
                <span className="text-[10px] font-semibold text-warm uppercase tracking-widest">
                  Quick Enquiry
                </span>
              </div>
            </motion.div>

            <motion.div variants={fieldVariants} className="mb-6">
              <span className={labelBase}>Salutation</span>
              <div className="flex flex-wrap gap-1.5">
                {SALUTATIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSalutation(s)}
                    className="relative rounded-full px-4 py-1.5 text-[12.5px] font-bold transition-colors"
                  >
                    {salutation === s && (
                      <motion.span
                        layoutId="salutation-pill"
                        transition={{ type: "spring", stiffness: 380, damping: 28 }}
                        className="absolute inset-0 rounded-full bg-primary shadow-md shadow-primary/30"
                      />
                    )}
                    <span
                      className={`relative z-10 ${
                        salutation === s ? "text-white" : "text-navy/70 hover:text-primary"
                      }`}
                    >
                      {s}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-x-4 gap-y-5">
              <motion.div variants={fieldVariants}>
                <Field
                  label={
                    <span>
                      Full Name <span className="text-error">*</span>
                    </span>
                  }
                  icon={User}
                >
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`${inputBase} pl-9`}
                    placeholder="Your name"
                  />
                </Field>
              </motion.div>
              <motion.div variants={fieldVariants}>
                <Field
                  label={
                    <span>
                      Email <span className="text-error">*</span>
                    </span>
                  }
                  icon={Mail}
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`${inputBase} pl-9`}
                    placeholder="your@email.com"
                  />
                </Field>
              </motion.div>
              <motion.div variants={fieldVariants}>
                <Field
                  label={
                    <span>
                      Mobile <span className="text-error">*</span>
                    </span>
                  }
                  icon={Phone}
                >
                  <input
                    type="tel"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className={`${inputBase} pl-9`}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </Field>
              </motion.div>
              <motion.div variants={fieldVariants}>
                <Field
                  label={
                    <span>
                      City <span className="text-error">*</span>
                    </span>
                  }
                  icon={MapPin}
                >
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className={`${inputBase} pl-9`}
                    placeholder="Your city"
                  />
                </Field>
              </motion.div>
              <motion.div variants={fieldVariants} className="sm:col-span-2">
                <Field
                  label={
                    <span>
                      Looking For <span className="text-error">*</span>
                    </span>
                  }
                  icon={ChevronDown}
                >
                  <select
                    value={lookingFor}
                    onChange={(e) => setLookingFor(e.target.value)}
                    className={`${inputBase} appearance-none cursor-pointer pl-9 pr-9 ${lookingFor ? "" : "text-gray-300"}`}
                  >
                    <option value="" disabled>
                      Select a service...
                    </option>
                    {SERVICES_BY_CATEGORY.map(({ category, services }) => (
                      <optgroup key={category.id} label={category.name}>
                        {services.map((s) => (
                          <option key={s.slug} value={s.title} className="text-navy">
                            {s.title}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </Field>
              </motion.div>
            </div>

            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-[12px] font-bold text-error bg-error/5 border border-error/20 rounded-[8px] px-3 py-2 mt-4"
                >
                  {error}
                </motion.p>
              )}
            </AnimatePresence>

            <motion.div variants={fieldVariants} className="mt-7">
              <button
                type="submit"
                disabled={sending}
                className="w-full rounded-[8px] bg-[#FFB000] text-navy font-bold text-[14px] px-6 py-3.5 flex items-center justify-center gap-2.5 hover:bg-[#e6a000] active:scale-[0.98] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-[#FFB000]/25"
              >
                {sending ? (
                  <>
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
                    Sending...
                  </>
                ) : (
                  <>
                    Get Quote Now <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </motion.div>

            <motion.p
              variants={fieldVariants}
              className="text-[11px] text-steel/60 mt-4 text-center"
            >
              Your info stays confidential. No spam.
            </motion.p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
