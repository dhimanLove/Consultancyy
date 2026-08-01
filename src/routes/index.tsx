import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence, useScroll, useTransform, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { EmberButton } from "@/components/EmberButton";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { ServiceIcon } from "@/components/ServiceIcon";
import { LeadForm } from "@/components/LeadForm";
import { SectionHeading } from "@/components/SectionHeading";
import { StatCounter } from "@/components/StatCounter";
import {
  SERVICES_BY_CATEGORY,
  SERVICE_CATEGORIES,
  SERVICES,
  type Service,
} from "@/lib/services-data";
import { PHONE, PHONE_HREF, WHATSAPP_HREF, EMAIL } from "@/lib/nav";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Star,
  Phone,
  Mail,
  ShieldCheck,
  FileCheck,
  Users,
  Zap,
  Clock,
  BadgeCheck,
  Award,
  Landmark,
  Building2,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.charteredsolution.com/#organization",
      name: "Chartered Solution",
      url: "https://www.charteredsolution.com",
      logo: "https://www.charteredsolution.com/Charted.jpeg",
      sameAs: ["https://wa.me/918815553899"],
      description:
        "Chartered Solution is a CA firm in Indore offering business registration, GST, FSSAI, MSME, IEC, certification, audit, and compliance services across India.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "152, Sanchar Nagar Ext., Goyal Nagar, Kanadia Road",
        addressLocality: "Indore",
        addressRegion: "Madhya Pradesh",
        postalCode: "452016",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-88155-53899",
        contactType: "customer service",
        email: "charteredgesolution@gmail.com",
        availableLanguage: ["Hindi", "English"],
      },
      founder: { "@type": "Person", name: "Jitendra Malviya", jobTitle: "Founder & CEO" },
      foundingDate: "2023",
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.charteredsolution.com/#localbusiness",
      parentOrganization: { "@id": "https://www.charteredsolution.com/#organization" },
      name: "Chartered Solution",
      url: "https://www.charteredsolution.com",
      telephone: "+91-88155-53899",
      email: "charteredgesolution@gmail.com",
      priceRange: "\u20b9",
      address: {
        "@type": "PostalAddress",
        streetAddress: "152, Sanchar Nagar Ext., Goyal Nagar, Kanadia Road",
        addressLocality: "Indore",
        addressRegion: "Madhya Pradesh",
        postalCode: "452016",
        addressCountry: "IN",
      },
      geo: { "@type": "GeoCoordinates", latitude: 22.7262239, longitude: 75.919035 },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:30",
          closes: "18:30",
        },
      ],
      areaServed: ["Indore", "Madhya Pradesh", "India"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Business Registration & Compliance Services",
        itemListElement: SERVICE_CATEGORIES.map((cat) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: cat.name,
            url: "https://www.charteredsolution.com/services",
          },
        })),
      },
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
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does company registration cost in Indore?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Company registration cost in Indore varies by structure \u2014 Private Limited, OPC, or LLP. Contact Chartered Solution at +91 88155 53899 for an exact quote; we offer transparent, all-inclusive pricing.",
          },
        },
        {
          "@type": "Question",
          name: "How long does GST registration take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GST registration is usually completed within 3\u20137 working days once all required documents are submitted to our Indore CA team.",
          },
        },
        {
          "@type": "Question",
          name: "What documents are needed for MSME / Udyam registration?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Only your Aadhaar, PAN, and basic business details are needed. Our team completes MSME/Udyam registration within 24\u201348 hours.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer services outside Indore?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Chartered Solution serves clients across Madhya Pradesh and all of India remotely, including GST, income tax, ROC compliance, and certification services.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between MSME and FSSAI registration?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MSME/Udyam is for classifying small businesses for government benefits, while FSSAI is the mandatory food safety license for food businesses. We handle both in Indore.",
          },
        },
      ],
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Chartered Solution | CA Firm in Indore \u2014 Business Registration, GST, FSSAI, MSME, IEC, Audit & Compliance",
      },
      {
        name: "description",
        content:
          "Chartered Solution is a trusted CA firm in Indore, MP. Business registration, company incorporation, GST registration & filing, FSSAI license, MSME/Udyam, IEC, certificates, audit, and compliance across India. Call +91 88155 53899.",
      },
      {
        name: "keywords",
        content:
          "CA firm Indore, business registration Indore, company incorporation Indore, GST registration Indore, GST filing Indore, FSSAI license Indore, MSME registration Indore, Udyam registration Indore, IEC code Indore, net worth certificate Indore, tax audit Indore, compliance services Indore, Chartered Solution, Jitendra Malviya",
      },
      {
        property: "og:title",
        content: "Chartered Solution | CA Firm in Indore \u2014 Business Registration & Compliance",
      },
      {
        property: "og:description",
        content:
          "Business registration, GST, FSSAI, MSME, IEC, certificates, audit and compliance services in Indore, MP. Call +91 88155 53899.",
      },
      { property: "og:url", content: "https://www.charteredsolution.com" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:site_name", content: "Chartered Solution" },
      { property: "og:image", content: "https://www.charteredsolution.com/Charted.jpeg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "geo.position", content: "22.7262239;75.919035" },
      { name: "geo.placename", content: "Indore, Madhya Pradesh" },
      { name: "geo.region", content: "IN-MP" },
    ],
    links: [{ rel: "canonical", href: "https://www.charteredsolution.com" }],
    scripts: [{ type: "application/ld+json", innerHTML: JSON.stringify(structuredData) }],
  }),
  component: Index,
});

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const HERO_CHECKLIST = [
  "Business Setup & Company Incorporation",
  "GST Registration & Filing",
  "MSME / Udyam Registration",
  "Startup India Registration",
  "Import Export Code (IEC)",
  "FSSAI License",
  "Accounting & Tax (ITR / TDS / Audit)",
  "CA Certificates (Net Worth, Turnover, etc.)",
];

const STATS = [
  { value: 74, suffix: "+", label: "Services" },
  { value: 10, suffix: "+", label: "Categories" },
  { value: 2023, suffix: "", label: "Founded in Indore" },
  { value: 500, suffix: "+", label: "Businesses Assisted" },
  { value: 48, suffix: " hrs", label: "Avg. Turnaround" },
];

const TESTIMONIALS = [
  {
    name: "Rajesh Sharma",
    city: "Indore",
    rating: 5,
    text: "Chartered Solution handled my private limited company registration and GST in a week. Very professional team and completely transparent pricing.",
  },
  {
    name: "Priya Verma",
    city: "Indore",
    rating: 5,
    text: "Got my FSSAI license and MSME registration done within 48 hours. The team guided me through every document. Highly recommended for food businesses.",
  },
  {
    name: "Amit Agrawal",
    city: "Bhopal",
    rating: 5,
    text: "Their CA team manages my monthly GST filing, TDS, and bookkeeping. Accurate, on time, and always reachable on WhatsApp.",
  },
];

const WHY_US = [
  {
    icon: Award,
    big: "CA-led",
    title: "Qualified Team",
    body: "Every file is handled by a qualified CA and dedicated compliance staff.",
  },
  {
    icon: Users,
    big: "500+",
    title: "Businesses Assisted",
    body: "Trusted by startups, SMEs, and corporates across India.",
  },
  {
    icon: FileCheck,
    big: "74+",
    title: "Services",
    body: "From registration to audit \u2014 everything under one roof.",
  },
  {
    icon: ShieldCheck,
    big: "10+",
    title: "Categories",
    body: "Registration, tax, GST, audit, certification, and advisory.",
  },
  {
    icon: Zap,
    big: "24-48",
    title: "Hour Turnaround",
    body: "Fast execution for MSME, FSSAI, GST, and certificates.",
  },
  {
    icon: Landmark,
    big: "Fixed",
    title: "Transparent Pricing",
    body: "No hidden charges. Exact quote before you start.",
  },
  {
    icon: BadgeCheck,
    big: "Verified",
    title: "Registered Firm",
    body: "GST certified with an active CIN registration.",
  },
  {
    icon: Clock,
    big: "PAN-India",
    title: "Service",
    body: "Serving all of India remotely from our Indore office.",
  },
];

const CLIENT_SEGMENTS = [
  {
    icon: Building2,
    title: "Startups & Founders",
    desc: "Incorporation, Startup India, funding readiness, and early-stage compliance.",
    points: [
      "Company & LLP registration",
      "Startup India registration",
      "Legal agreements & ROC filings",
    ],
  },
  {
    icon: GraduationCap,
    title: "SMEs & MSMEs",
    desc: "Udyam, licenses, GST, accounting, and audit for growing businesses.",
    points: [
      "MSME/Udyam registration",
      "GST registration & filing",
      "FSSAI, IEC, and certification",
    ],
  },
  {
    icon: Landmark,
    title: "Corporates & Institutions",
    desc: "Statutory audit, certificates, CFO services, and restructuring support.",
    points: [
      "Statutory & tax audit",
      "Net worth / turnover certificates",
      "Virtual CFO & M&A advisory",
    ],
  },
];

const FAQS = [
  {
    q: "How much does company registration cost in Indore?",
    a: "Company registration cost in Indore varies by structure \u2014 Private Limited, OPC, or LLP. Contact us at +91 88155 53899 for an exact quote; we offer transparent, all-inclusive pricing.",
  },
  {
    q: "How long does GST registration take?",
    a: "GST registration is usually completed within 3\u20137 working days once all required documents are submitted to our Indore CA team.",
  },
  {
    q: "What documents are needed for MSME / Udyam registration?",
    a: "Only your Aadhaar, PAN, and basic business details are needed. Our team completes MSME/Udyam registration within 24\u201348 hours.",
  },
  {
    q: "Do you offer services outside Indore?",
    a: "Yes. Chartered Solution serves clients across Madhya Pradesh and all of India remotely, including GST, income tax, ROC compliance, and certification services.",
  },
  {
    q: "What is the difference between MSME and FSSAI registration?",
    a: "MSME/Udyam classifies small businesses for government benefits, while FSSAI is the mandatory food safety license for food businesses. We handle both in Indore.",
  },
  {
    q: "How do I get started with Chartered Solution?",
    a: "Call +91 88155 53899, WhatsApp us, or fill the quote form. We respond within minutes during business hours and assign a dedicated expert to your case.",
  },
];

function ServiceCarousel({ services }: { services: Service[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [progress, setProgress] = useState(0);

  const updateState = () => {
    const el = trackRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < maxScroll - 4);
    setProgress(maxScroll > 0 ? el.scrollLeft / maxScroll : 0);
  };

  const scrollByCard = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 16 : 300;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  useEffect(() => {
    updateState();
    const el = trackRef.current;
    el?.addEventListener("scroll", updateState, { passive: true });
    window.addEventListener("resize", updateState);
    return () => {
      el?.removeEventListener("scroll", updateState);
      window.removeEventListener("resize", updateState);
    };
  }, []);

  const arrowCls =
    "flex items-center justify-center w-10 h-10 rounded-full transition-all disabled:opacity-30 disabled:cursor-not-allowed " +
    "bg-white text-navy border border-[#E5E5E5] shadow-sm hover:bg-navy hover:text-white hover:border-navy hover:shadow-lg";

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {services.map((s) => (
          <Link
            key={s.slug}
            data-card
            to="/services/$slug"
            params={{ slug: s.slug }}
            className="group snap-start shrink-0 w-[250px] bg-white border border-[#E5E5E5] rounded-[10px] p-5 flex flex-col hover:shadow-xl hover:shadow-navy/10 hover:border-primary/40 hover:-translate-y-1 transition-all duration-200"
          >
            <div className="w-12 h-12 rounded-[10px] bg-primary/10 text-primary flex items-center justify-center transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
              <ServiceIcon slug={s.slug} className="w-6 h-6" />
            </div>
            <h3 className="mt-4 text-[14px] font-bold text-navy group-hover:text-primary transition-colors leading-snug">
              {s.title}
            </h3>
            <p className="mt-2 text-[12px] text-steel leading-relaxed flex-1">{s.descriptor}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-[11.5px] font-bold text-primary uppercase tracking-[0.08em]">
              Get Started
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent" />

      <div className="mt-5 flex items-center justify-between gap-4">
        <div className="flex gap-2.5">
          <button
            onClick={() => scrollByCard(-1)}
            disabled={!canPrev}
            aria-label="Scroll services left"
            className={arrowCls}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollByCard(1)}
            disabled={!canNext}
            aria-label="Scroll services right"
            className={arrowCls}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        <div className="h-1 flex-1 max-w-[220px] bg-[#E5E5E5] rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-[width] duration-150"
            style={{ width: `${Math.max(8, progress * 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
}

function ParallaxBanner({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { y: 30 },
        {
          y: -30,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }, ref);
    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, []);
  return <div ref={ref}>{children}</div>;
}

function Index() {
  const [activeCat, setActiveCat] = useState(SERVICE_CATEGORIES[0].id);
  const [openFaq, setOpenFaq] = useState(0);
  const active = SERVICES_BY_CATEGORY.find((c) => c.category.id === activeCat);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const heroFormY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      {/* ===== HERO ===== */}
      <section ref={heroRef} className="bg-white text-navy relative overflow-hidden">
        <div className="container-page relative z-10 grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] gap-12 items-center py-16 md:py-24">
          <motion.div
            style={{ y: heroY }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={itemVariants}
              className="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.22em] uppercase text-warm-dark"
            >
              <span className="w-8 h-[2px] bg-[#FFB000]" />
              Chartered Solution &middot; CA Firm in Indore
            </motion.span>
            <motion.h1
              variants={itemVariants}
              className="mt-5 font-display text-[36px] md:text-[52px] font-black leading-[1.08] tracking-tight text-navy"
            >
              Business Compliance, <br />
              <span className="text-primary">Handled with Precision.</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-6 text-[15px] md:text-[17px] text-steel leading-relaxed max-w-[520px]"
            >
              Company registration, GST, FSSAI, MSME, certificates, audit &amp; tax &mdash;
              delivered end-to-end by Chartered Solution from Indore, serving clients across India.
            </motion.p>
            <motion.ul
              variants={containerVariants}
              className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3"
            >
              {HERO_CHECKLIST.map((item) => (
                <motion.li
                  key={item}
                  variants={itemVariants}
                  className="flex items-start gap-2.5 text-[13.5px] font-medium text-navy/80"
                >
                  <span className="mt-0.5 w-4 h-4 rounded-full bg-[#FFB000] text-navy flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <motion.div variants={itemVariants} className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 bg-[#FFB000] text-navy font-bold text-[14px] rounded-[2px] px-7 py-3.5 shadow-lg shadow-[#FFB000]/25 hover:bg-[#e6a000] active:scale-[0.98] transition-all"
              >
                <Phone className="w-4 h-4" /> {PHONE}
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary font-bold text-[14px] rounded-[2px] px-7 py-3.5 border-2 border-primary hover:bg-primary hover:text-white transition-colors"
              >
                <WhatsAppIcon /> WhatsApp Us
              </a>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-steel/70"
            >
              <span className="inline-flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 text-[#FFB000] fill-current" /> CA-led team in Indore
              </span>
              <span className="inline-flex items-center gap-1.5">
                <BadgeCheck className="w-3.5 h-3.5 text-primary" /> PAN-India service
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" /> Fixed-fee quotes
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: heroFormY }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <LeadForm />
          </motion.div>
        </div>
      </section>

      {/* ===== STATS STRIP ===== */}
      <section className="bg-navy text-white">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="container-page grid grid-cols-2 md:grid-cols-5 gap-y-8 py-10"
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              variants={itemVariants}
              className={`text-center ${i !== 0 ? "md:border-l md:border-white/10" : ""}`}
            >
              <div className="text-[30px] md:text-[34px] font-black text-[#FFB000] leading-none">
                <StatCounter target={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1.5 text-[11px] uppercase tracking-[0.14em] text-white/70">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===== ALL SERVICES (TABS) ===== */}
      <section className="bg-white py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Services"
            heading="All Services under One Roof"
            subtext="74+ business registration, licensing, certification, tax, and compliance services across 10 categories."
            center
          />
          <div className="mt-10 flex justify-center whitespace-nowrap overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCat(cat.id)}
                className={`px-4 md:px-5 py-3 text-[13px] font-bold transition-colors ${
                  activeCat === cat.id ? "bg-primary text-white" : "text-navy/70 hover:text-primary"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
          <motion.div
            key={activeCat}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mt-10"
          >
            {active && (
              <>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-[18px] font-bold text-navy">{active.category.name}</h3>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1 text-[13px] font-bold text-primary hover:underline"
                  >
                    View all <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <ServiceCarousel services={active.services} />
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="bg-[#F4F4F4] py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Testimonials"
            heading="What business owners say about us"
            subtext="Reviews from founders, SMEs, and professionals we work with across India."
            center
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            {TESTIMONIALS.map((t) => (
              <motion.div
                key={t.name}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="bg-white border border-[#E5E5E5] rounded-[5px] p-7 flex flex-col hover:shadow-lg hover:border-primary/20 transition-shadow"
              >
                <div className="flex gap-1 text-[#FDA700]">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-[14px] text-steel leading-relaxed flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-[14px] font-bold">
                    {t.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-navy">{t.name}</div>
                    <div className="text-[12px] text-steel">{t.city}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== WHY CHARTERED SOLUTION ===== */}
      <section className="bg-white py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why Chartered Solution"
            heading="A firm built on speed, transparency, and trust"
            subtext="A registered CA firm in Indore, delivering every engagement on a committed timeline."
            center
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {WHY_US.map((w) => (
              <motion.div
                key={w.title}
                variants={itemVariants}
                className="bg-[#F4F4F4] border border-[#E5E5E5] rounded-[5px] p-6 text-center hover:border-primary/30 hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <w.icon className="w-7 h-7 text-primary mx-auto" />
                <div className="mt-3 text-[24px] font-black text-navy leading-none">{w.big}</div>
                <h3 className="mt-2 text-[13.5px] font-bold text-navy uppercase tracking-wide">
                  {w.title}
                </h3>
                <p className="mt-2 text-[12.5px] text-steel leading-relaxed">{w.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== OUR CLIENTS ===== */}
      <section className="bg-[#F4F4F4] py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Who We Serve"
            heading="Every stage of business"
            subtext="From first-time founders to established corporates, we cover the full compliance lifecycle."
            center
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            {CLIENT_SEGMENTS.map((c) => (
              <motion.div
                key={c.title}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="bg-white border border-[#E5E5E5] rounded-[5px] overflow-hidden hover:shadow-lg hover:border-primary/20 transition-shadow"
              >
                <div className="bg-primary px-6 py-5 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center">
                    <c.icon className="w-5 h-5 text-[#FFB000]" />
                  </div>
                  <h3 className="text-[16px] font-bold text-white">{c.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-[13px] text-steel leading-relaxed">{c.desc}</p>
                  <ul className="mt-4 space-y-2">
                    {c.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-[13px] text-navy/80">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#FFB000] shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-white py-20">
        <div className="container-page max-w-[820px]">
          <SectionHeading
            eyebrow="FAQ"
            heading="Frequently Asked Questions"
            subtext="Quick answers about registration, licenses, and compliance in Indore."
            center
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-12 space-y-3"
          >
            {FAQS.map((f, i) => {
              const open = openFaq === i;
              return (
                <motion.div
                  key={f.q}
                  variants={itemVariants}
                  className="border border-[#E5E5E5] rounded-[5px] overflow-hidden bg-[#F4F4F4]"
                >
                  <button
                    onClick={() => setOpenFaq(open ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                    aria-expanded={open}
                  >
                    <span className="text-[14.5px] font-bold text-navy">{f.q}</span>
                    <span
                      className={`shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center transition-transform ${open ? "rotate-45" : ""}`}
                    >
                      <span className="text-[16px] font-bold leading-none">+</span>
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-[13.5px] text-steel leading-relaxed">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#F4F4F4] py-20">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-[30px] md:text-[38px] font-black text-navy leading-[1.1] tracking-tight"
            >
              Registrations and filings, <span className="text-primary">delivered on time.</span>
            </motion.h2>
            <motion.ul variants={itemVariants} className="mt-7 space-y-4">
              {[
                "Initial consultation with an experienced CA professional",
                "Transparent, all-inclusive pricing \u2014 no hidden charges",
                "A dedicated expert on your file from start to finish",
                "PAN-India service \u2014 100% online, doorstep delivery",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-[15px] text-steel">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-[#FFB000] text-navy flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </span>
                  {point}
                </li>
              ))}
            </motion.ul>
            <motion.div variants={itemVariants} className="mt-9 flex flex-wrap gap-4">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 bg-primary text-white font-bold text-[14px] rounded-[2px] px-7 py-3.5 hover:bg-primary-70 transition-colors"
              >
                <Phone className="w-4 h-4" /> Call {PHONE}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 bg-navy text-white font-bold text-[14px] rounded-[2px] px-7 py-3.5 hover:bg-navy-light transition-colors"
              >
                <Mail className="w-4 h-4" /> Email Us
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="bg-primary rounded-[5px] p-8 md:p-10 text-white relative overflow-hidden shadow-2xl shadow-primary/30"
          >
            <motion.div
              initial={{ scale: 0, rotate: -30 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.15 }}
            >
              <BadgeCheck className="w-12 h-12 text-[#FFB000]" />
            </motion.div>
            <h3 className="mt-5 text-[22px] font-black leading-snug">
              How we work with every client
            </h3>
            <p className="mt-3 text-[14px] text-white/80 leading-relaxed">
              Each engagement starts with a fixed quote and a committed timeline. Your dedicated
              expert keeps you updated at every step \u2014 by phone and WhatsApp \u2014 until your
              work is done.
            </p>
            <ul className="mt-6 space-y-3">
              {["Verified on IndiaMART", "GST certified firm", "Active CIN registration"].map(
                (line) => (
                  <li key={line} className="flex items-center gap-2.5 text-[13.5px] font-medium">
                    <span className="w-4 h-4 rounded-full bg-[#FFB000] text-navy flex items-center justify-center">
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </span>
                    {line}
                  </li>
                ),
              )}
            </ul>
            <div className="mt-8">
              <EmberButton
                to="/contact-us"
                className="!bg-[#FDA700] !text-[#222] hover:!bg-[#e69900]"
              >
                Get Started Now <ArrowRight className="w-4 h-4" />
              </EmberButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== TRUST BANNER ===== */}
      <ParallaxBanner>
        <section className="bg-primary text-white">
          <div className="container-page py-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            >
              <motion.div variants={itemVariants}>
                <div className="flex items-center justify-center gap-1 text-[#FFB000] mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0, rotate: -40 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 260, damping: 16, delay: i * 0.08 }}
                    >
                      <Star className="w-5 h-5 fill-current" />
                    </motion.span>
                  ))}
                </div>
                <div className="text-[20px] font-black">Client-rated quality</div>
                <div className="text-[12.5px] text-white/70 mt-1">
                  Strong ratings across IndiaMART
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="md:border-l md:border-r md:border-white/15"
              >
                <div className="text-[28px] font-black text-[#FFB000] leading-none mt-1">74+</div>
                <div className="text-[20px] font-black mt-2">Services Offered</div>
                <div className="text-[12.5px] text-white/70 mt-1">Across 10 service categories</div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <div className="flex items-center justify-center gap-1 text-[#FFB000] mb-2">
                  <BadgeCheck className="w-7 h-7" />
                </div>
                <div className="text-[20px] font-black">Verified on IndiaMART</div>
                <div className="text-[12.5px] text-white/70 mt-1">GST certified · Active CIN</div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </ParallaxBanner>
    </motion.div>
  );
}
