import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { SERVICES } from "@/lib/services-data";
import { Phone, Mail, Clock, MapPin, Send, CheckCircle, User, ChevronDown } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const fieldVariants: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

const contactStructured = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      name: "Contact Chartered Solution Indore",
      description:
        "Get in touch with Chartered Solution for business registration, GST, FSSAI, MSME, ITR, audit, and compliance services in Indore.",
      url: "https://www.charteredsolution.com/contact-us",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.charteredsolution.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Contact Us",
          item: "https://www.charteredsolution.com/contact-us",
        },
      ],
    },
  ],
};

export const Route = createFileRoute("/contact-us")({
  head: () => ({
    meta: [
      { title: "Contact Us | Chartered Solution \u2014 Indore, Kanadia Road" },
      {
        name: "description",
        content:
          "Contact Chartered Solution at 152, Sanchar Nagar Ext., Goyal Nagar, Kanadia Road, Indore, MP. Call +91 88155 53899 or email charteredgesolution@gmail.com. Mon\u2013Sat 9:30 AM\u20136:30 PM.",
      },
      {
        name: "keywords",
        content:
          "contact Chartered Solution Indore, business registration Indore, GST help Indore, Kanadia Road Indore consultancy",
      },
      { property: "og:title", content: "Contact Us | Chartered Solution \u2014 Indore Office" },
      {
        property: "og:description",
        content:
          "Visit us at 152, Sanchar Nagar Ext., Goyal Nagar, Kanadia Road, Indore, MP 452016. Call +91 88155 53899.",
      },
      { property: "og:url", content: "https://www.charteredsolution.com/contact-us" },
      { property: "og:image", content: "https://www.charteredsolution.com/Charted.jpeg" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:site_name", content: "Chartered Solution" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Contact Us | Chartered Solution \u2014 Indore Office",
      },
      {
        name: "twitter:description",
        content:
          "Visit us at 152, Sanchar Nagar Ext., Goyal Nagar, Kanadia Road, Indore, MP 452016. Call +91 88155 53899.",
      },
      {
        name: "twitter:image",
        content: "https://www.charteredsolution.com/Charted.jpeg",
      },
      { name: "geo.position", content: "22.7262239;75.919035" },
      { name: "geo.placename", content: "Indore, Madhya Pradesh" },
      { name: "geo.region", content: "IN-MP" },
    ],
    links: [{ rel: "canonical", href: "https://www.charteredsolution.com/contact-us" }],
    scripts: [{ type: "application/ld+json", innerHTML: JSON.stringify(contactStructured) }],
  }),
  component: ContactUsPage,
});

const inputBase =
  "w-full bg-white border-2 border-gray-200 rounded-[2px] px-4 py-3 text-[15px] text-navy placeholder:text-gray-300 outline-none transition-all duration-200 " +
  "hover:border-primary/30 focus:border-primary focus:ring-4 focus:ring-primary/10 focus:shadow-lg focus:shadow-primary/5";

const labelBase = "block text-[13px] font-bold text-navy mb-1.5";

function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const update =
    (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setValues((v) => ({ ...v, [field]: e.target.value }));

  const PHONE = "918815553899";

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSending(true);

    const msg = [
      "*New Enquiry - Chartered Solution (Contact Page)*",
      "",
      `*Name:* ${values.name}`,
      `*Phone:* ${values.phone}`,
      `*Email:* ${values.email || "Not provided"}`,
      `*Service:* ${values.service || "Not specified"}`,
      `*Message:* ${values.message || "Not provided"}`,
      "",
      "Sent via Contact Us form",
    ].join("\n");

    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;

    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      window.open(url, "_blank");
    }, 800);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <PageHeader
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact Us" }]}
        title="Let's talk about your business needs."
        subtext="Reach out to Chartered Solution in Indore for business registration, compliance, and all your service needs."
      />

      <section className="bg-white py-20">
        <div className="container-page grid lg:grid-cols-[1fr_420px] gap-16 max-w-6xl mx-auto">
          <div>
            <SectionHeading eyebrow="Enquire Now" heading="Drop us a message." />
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  className="mt-8 p-10 bg-warm-light/40 border-2 border-warm/20 rounded-[14px] text-center"
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
                    Thank you!
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-[14px] text-steel mt-2 leading-relaxed"
                  >
                    We've received your enquiry and will get back to you within 24 hours.
                  </motion.p>
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.55 }}
                    onClick={() => {
                      setSubmitted(false);
                      setValues({ name: "", phone: "", email: "", service: "", message: "" });
                    }}
                    className="mt-6 text-[13px] font-medium text-warm hover:text-warm-dark underline underline-offset-2 transition-colors"
                  >
                    Send another enquiry
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="mt-8 max-w-xl space-y-5"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <motion.div custom={0} variants={fieldVariants}>
                      <label className={labelBase}>
                        Full Name <span className="text-error">*</span>
                      </label>
                      <div className="relative group">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within:text-primary transition-colors duration-200" />
                        <input
                          type="text"
                          required
                          value={values.name}
                          onChange={update("name")}
                          className={`${inputBase} pl-10`}
                          placeholder="Your name"
                        />
                        <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                      </div>
                    </motion.div>
                    <motion.div custom={1} variants={fieldVariants}>
                      <label className={labelBase}>
                        Phone <span className="text-error">*</span>
                      </label>
                      <div className="relative group">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within:text-primary transition-colors duration-200" />
                        <input
                          type="tel"
                          required
                          value={values.phone}
                          onChange={update("phone")}
                          className={`${inputBase} pl-10`}
                          placeholder="+91 XXXXX XXXXX"
                        />
                        <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                      </div>
                    </motion.div>
                  </div>
                  <motion.div custom={2} variants={fieldVariants}>
                    <label className={labelBase}>
                      Email <span className="text-error">*</span>
                    </label>
                    <div className="relative group">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within:text-primary transition-colors duration-200" />
                      <input
                        type="email"
                        required
                        value={values.email}
                        onChange={update("email")}
                        className={`${inputBase} pl-10`}
                        placeholder="your@email.com"
                      />
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                    </div>
                  </motion.div>
                  <motion.div custom={3} variants={fieldVariants}>
                    <label className={labelBase}>
                      Service Needed <span className="text-error">*</span>
                    </label>
                    <div className="relative group">
                      <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 pointer-events-none group-focus-within:text-warm transition-colors duration-200" />
                      <select
                        required
                        value={values.service}
                        onChange={update("service")}
                        className={`${inputBase} appearance-none cursor-pointer pr-10`}
                      >
                        <option value="">Select a service...</option>
                        {SERVICES.map((s) => (
                          <option key={s.slug} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                    </div>
                  </motion.div>
                  <motion.div custom={4} variants={fieldVariants}>
                    <label className={labelBase}>Message</label>
                    <div className="relative group">
                      <textarea
                        rows={3}
                        value={values.message}
                        onChange={update("message")}
                        className={`${inputBase} resize-none`}
                        placeholder="How can we help you?"
                      />
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                    </div>
                  </motion.div>
                  <motion.div custom={5} variants={fieldVariants}>
                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full rounded-[2px] bg-primary text-white font-bold text-[14px] px-6 py-3.5 flex items-center justify-center gap-2.5 hover:bg-primary-70 active:scale-[0.98] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-primary/10"
                    >
                      <AnimatePresence mode="wait">
                        {sending ? (
                          <motion.span
                            key="sending"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-2.5"
                          >
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
                          </motion.span>
                        ) : (
                          <motion.span
                            key="idle"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-2.5"
                          >
                            Send enquiry <Send className="w-4 h-4" />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </button>
                  </motion.div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          <div className="space-y-6">
            <div className="bg-fog border border-border rounded-[14px] p-8 shadow-sm">
              <h3 className="text-[16px] font-bold text-navy mb-6 flex items-center gap-2">
                <span className="w-1 h-5 rounded-full bg-warm" />
                Our Office
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-5"
              >
                <motion.div
                  variants={itemVariants}
                  className="flex items-start gap-4 group cursor-default"
                >
                  <div className="w-10 h-10 rounded-full bg-warm/10 flex items-center justify-center shrink-0 group-hover:bg-warm/20 transition-colors duration-200">
                    <MapPin className="w-5 h-5 text-warm" />
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-navy">Address</p>
                    <p className="text-[13px] text-steel leading-relaxed mt-0.5">
                      152, Sanchar Nagar Ext., Goyal Nagar, Kanadia Road, Indore, Madhya Pradesh
                      452016
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className="flex items-start gap-4 group cursor-default"
                >
                  <div className="w-10 h-10 rounded-full bg-warm/10 flex items-center justify-center shrink-0 group-hover:bg-warm/20 transition-colors duration-200">
                    <Phone className="w-5 h-5 text-warm" />
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-navy">Phone / WhatsApp</p>
                    <a
                      href="tel:+918815553899"
                      className="text-[13px] text-steel hover:text-primary transition-colors mt-0.5 block"
                    >
                      +91 88155 53899
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className="flex items-start gap-4 group cursor-default"
                >
                  <div className="w-10 h-10 rounded-full bg-warm/10 flex items-center justify-center shrink-0 group-hover:bg-warm/20 transition-colors duration-200">
                    <Mail className="w-5 h-5 text-warm" />
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-navy">Email</p>
                    <a
                      href="mailto:charteredgesolution@gmail.com"
                      className="text-[13px] text-steel hover:text-primary transition-colors mt-0.5 block"
                    >
                      charteredgesolution@gmail.com
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className="flex items-start gap-4 group cursor-default"
                >
                  <div className="w-10 h-10 rounded-full bg-warm/10 flex items-center justify-center shrink-0 group-hover:bg-warm/20 transition-colors duration-200">
                    <Clock className="w-5 h-5 text-warm" />
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-navy">Working Hours</p>
                    <p className="text-[13px] text-steel mt-0.5">
                      Monday – Saturday: 9:30 AM – 6:30 PM
                    </p>
                    <p className="text-[13px] text-steel">Sunday: Closed</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <div className="overflow-hidden rounded-[14px] border border-border shadow-sm group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.6802054222304!2d75.905432475098!3d22.737381828772134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd8a1b2b4b1b%3A0x9b8a5e5b7b2b4b1b!2sKanadia%20Rd%2C%20Indore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="220"
                style={{ border: 0, borderRadius: 14 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Chartered Solution Office Map"
                className="group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
