import { createFileRoute, Link } from "@tanstack/react-router";
import { m, useScroll, useTransform, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { loadGsap, type GsapContext } from "@/lib/gsap";
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
import {
  PHONE,
  PHONE_HREF,
  WHATSAPP_HREF,
  EMAIL,
  REGULATORY_SERVICES,
  INDUSTRIES as NAV_INDUSTRIES,
} from "@/lib/nav";
import {
  Check,
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
  Rocket,
  TrendingUp,
  Sun,
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
        "Chartered Solution Pvt. Ltd. is a business, regulatory and digital growth consultancy offering business registration, GST, FSSAI, MSME, IEC, ISO, medical device, cosmetics, solar and compliance services across India.",
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
            text: "GST registration is usually completed within 3\u20137 working days once all required documents are submitted to our Indore team.",
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
        title: "Chartered Solution | Business, Regulatory & Digital Growth Consultancy in Indore",
      },
      {
        name: "description",
        content:
          "One partner for business setup, compliance, regulatory and digital growth. Business registration, GST, FSSAI, MSME, IEC, ISO, medical device, cosmetics, solar and e-commerce solutions across India. Call +91 88155 53899.",
      },
      {
        name: "keywords",
        content:
          "business consultancy Indore, business registration Indore, company incorporation Indore, GST registration Indore, GST filing Indore, FSSAI license Indore, MSME registration Indore, Udyam registration Indore, IEC code Indore, ISO certification Indore, medical device registration Indore, cosmetics registration Indore, solar vendor registration, compliance services Indore, Chartered Solution, Jitendra Malviya",
      },
      {
        property: "og:title",
        content: "Chartered Solution | Business, Regulatory & Digital Growth Consultancy in Indore",
      },
      {
        property: "og:description",
        content:
          "Business setup, compliance, regulatory and digital growth solutions for startups, SMEs, manufacturers and growing businesses across India. Call +91 88155 53899.",
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
      { "script:ld+json": structuredData },
    ],
    links: [{ rel: "canonical", href: "https://www.charteredsolution.com" }],
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
  "GST, MSME / Udyam & Startup India",
  "ISO, Food & Import / Export Compliance",
  "Medical Device & Cosmetics Regulatory",
  "Solar Consultancy & Vendor Registration",
  "E-Commerce & Marketplace Enablement",
  "Accounting, Tax, ITR & TDS (GST filing)",
  "Compliance Certificates & Documentation",
];

const STATS = [
  { value: SERVICES.length, suffix: "+", label: "Services" },
  { value: SERVICE_CATEGORIES.length, suffix: "", label: "Categories" },
  { value: 2023, suffix: "", label: "Founded in Indore" },
  { value: REGULATORY_SERVICES.length, suffix: "", label: "Regulatory Verticals" },
  { value: 48, suffix: " hrs", label: "Response Time" },
];

const WHY_US = [
  {
    icon: Award,
    big: "One",
    title: "Partner. Many Needs.",
    body: "Business, regulatory, compliance and digital growth solutions under one roof.",
  },
  {
    icon: Users,
    big: "PAN-India",
    title: "Consultancy",
    body: "Serving startups, SMEs, manufacturers and growing businesses across India.",
  },
  {
    icon: FileCheck,
    big: `${SERVICES.length}+`,
    title: "Services",
    body: "From business setup to regulatory compliance \u2014 everything in one place.",
  },
  {
    icon: ShieldCheck,
    big: `${SERVICE_CATEGORIES.length}`,
    title: "Categories",
    body: "Registration, tax, GST, ISO, medical, cosmetics, solar, e-commerce, and more.",
  },
  {
    icon: Zap,
    big: "End-to-End",
    title: "Documentation",
    body: "Complete assistance with applications, documents, filings and follow-up.",
  },
  {
    icon: Landmark,
    big: "Transparent",
    title: "Professional Fees",
    body: "No hidden charges. A clear quote before you start.",
  },
  {
    icon: BadgeCheck,
    big: "Industry-Specific",
    title: "Solutions",
    body: "Tailored compliance for your industry and business type.",
  },
  {
    icon: Clock,
    big: "Dedicated",
    title: "Client Support",
    body: "A single point of contact on every engagement.",
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
    title: "MSMEs & SMEs",
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

const BUSINESS_JOURNEY = [
  {
    phase: "Start",
    icon: Rocket,
    title: "Start & Register",
    desc: "Set up your business entity and get the registrations you need to start.",
    items: ["Company / LLP / OPC", "GST, MSME & Startup India", "IEC & required licences"],
    to: "/services/private-limited-company-registration",
    cta: "Explore Registration",
  },
  {
    phase: "Comply",
    icon: ShieldCheck,
    title: "Compile & Comply",
    desc: "Stay on time with your tax, GST, ROC and regulatory obligations.",
    items: [
      "ITR, TDS & GST returns",
      "ROC compliances & filings",
      "Audits, certificates & advisory",
    ],
    to: "/services/gst-return-filing",
    cta: "Explore Compliance",
  },
  {
    phase: "Protect",
    icon: FileCheck,
    title: "Protect & Certify",
    desc: "Protect your products and brand with the right certifications and approvals.",
    items: ["ISO, QMS & FSMS", "Medical device & cosmetics", "Food, import/export compliance"],
    to: "/services/iso-consultancy",
    cta: "Explore Certifications",
  },
  {
    phase: "Grow",
    icon: TrendingUp,
    title: "Grow & Digitalise",
    desc: "Take your business online and grow with solar, e-commerce and marketing.",
    items: ["Solar vendor & DISCOM", "E-commerce & marketplaces", "SEO, ads & lead generation"],
    to: "/services/solar-consultancy",
    cta: "Explore Growth",
  },
];

const FAQS = [
  {
    q: "How much does company registration cost in Indore?",
    a: "Company registration cost in Indore varies by structure \u2014 Private Limited, OPC, or LLP. Contact us at +91 88155 53899 for an exact quote; we offer transparent, all-inclusive pricing.",
  },
  {
    q: "How long does GST registration take?",
    a: "GST registration is usually completed within 3\u20137 working days once all required documents are submitted to our Indore team.",
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

const HEAD_CATEGORIES = [
  { id: "business-registration", label: "Business Registration" },
  { id: "gst", label: "GST Services" },
  { id: "income-tax", label: "Income Tax" },
  { id: "food", label: "Food & FSSAI" },
  { id: "iso", label: "ISO Certification" },
  { id: "startup", label: "Startup India" },
];

function MiniServiceCard({ service, className = "" }: { service: Service; className?: string }) {
  return (
    <Link
      to="/services/$slug"
      params={{ slug: service.slug }}
      className={`group flex h-full flex-col rounded-[10px] border border-[#E5E5E5] bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-navy/[0.06] ${className}`}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-primary/[0.07] text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
          <ServiceIcon slug={service.slug} className="h-5 w-5" />
        </div>
        <h3 className="text-[14px] font-bold leading-snug text-navy transition-colors duration-200 group-hover:text-primary">
          {service.title}
        </h3>
      </div>
      <p className="mt-3 line-clamp-2 text-[12.5px] leading-relaxed text-steel">
        {service.descriptor}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-[11.5px] font-bold uppercase tracking-[0.08em] text-primary">
        View details
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : false,
  );
  useEffect(() => {
    const mq = window.matchMedia(query);
    const handler = () => setMatches(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [query]);
  return matches;
}

function useScrollParallax({
  target,
  range,
}: {
  target: React.RefObject<HTMLElement | null>;
  range: [number, number];
}) {
  const desktop = useMediaQuery("(pointer: fine) and (min-width: 1024px)");
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start start", "end start"],
  });
  return useTransform(scrollYProgress, [0, 1], desktop ? range : [0, 0]);
}

function ParallaxBanner({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: fine) and (min-width: 1024px)").matches === false) return;
    let ctx: GsapContext | undefined;
    let cancelled = false;
    loadGsap().then(({ gsap }) => {
      if (cancelled) return;
      ctx = gsap.context(() => {
        gsap.fromTo(
          el,
          { y: 30 },
          {
            y: -30,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      }, el);
    });
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);
  return <div ref={ref}>{children}</div>;
}

function Index() {
  const [activeCat, setActiveCat] = useState(SERVICE_CATEGORIES[0].id);
  const [openFaq, setOpenFaq] = useState(0);
  const active = SERVICES_BY_CATEGORY.find((c) => c.category.id === activeCat);

  const heroRef = useRef<HTMLDivElement>(null);
  const heroY = useScrollParallax({ target: heroRef, range: [0, 90] });
  const heroFormY = useScrollParallax({ target: heroRef, range: [0, 40] });

  return (
    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      {/* ===== HERO ===== */}
      <section ref={heroRef} className="bg-white text-navy relative overflow-hidden">
        <div className="container-page relative z-10 grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-16 lg:gap-24 items-center py-20 md:py-28">
          <m.div
            style={{ y: heroY }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <m.span
              variants={itemVariants}
              className="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.22em] uppercase text-warm-dark"
            >
              <span className="w-8 h-[2px] bg-[#FFB000]" />
              Chartered Solution &middot; Business, Regulatory &amp; Digital Growth
            </m.span>
            <m.h1
              variants={itemVariants}
              className="mt-6 font-display text-[36px] md:text-[52px] font-black leading-[1.1] tracking-tight text-navy"
            >
              Business. Regulatory. <br />
              <span className="text-primary">Digital Growth.</span>
            </m.h1>
            <m.p
              variants={itemVariants}
              className="mt-7 text-[15px] md:text-[17px] text-steel leading-[1.75] max-w-[500px]"
            >
              One Partner for Business Setup, Compliance, Regulatory &amp; Digital Growth Solutions.
              Integrated solutions for startups, SMEs, manufacturers, exporters, e-commerce brands
              and growing businesses across India.
            </m.p>
            <m.ul
              variants={containerVariants}
              className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-3.5"
            >
              {HERO_CHECKLIST.map((item) => (
                <m.li
                  key={item}
                  variants={itemVariants}
                  className="flex items-start gap-3 text-[13.5px] font-medium text-navy/80"
                >
                  <span className="mt-0.5 w-4 h-4 rounded-full bg-[#FFB000] text-navy flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </span>
                  {item}
                </m.li>
              ))}
            </m.ul>
            <m.div variants={itemVariants} className="mt-11 flex flex-wrap items-center gap-4">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 bg-[#FFB000] text-navy font-bold text-[14px] rounded-[8px] px-7 py-3.5 shadow-lg shadow-[#FFB000]/25 hover:bg-[#e6a000] hover:shadow-[#FFB000]/35 active:scale-[0.98] transition-all"
              >
                <Phone className="w-4 h-4" /> Get Started
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary font-bold text-[14px] rounded-[8px] px-7 py-3.5 border-2 border-primary hover:bg-primary hover:text-white transition-colors"
              >
                <WhatsAppIcon /> Talk to an Expert
              </a>
            </m.div>
            <m.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-2.5 text-[12px] text-steel/70"
            >
              <span className="inline-flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 text-[#FFB000] fill-current" /> Consultancy in Indore
              </span>
              <span className="inline-flex items-center gap-1.5">
                <BadgeCheck className="w-3.5 h-3.5 text-primary" /> PAN-India service
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" /> Transparent professional fees
              </span>
            </m.div>
          </m.div>

          <m.div
            style={{ y: heroFormY }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-[440px] lg:justify-self-start lg:ml-auto"
          >
            <LeadForm />
          </m.div>
        </div>
      </section>

      {/* ===== STATS STRIP ===== */}
      <section className="bg-navy text-white">
        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="container-page grid grid-cols-2 md:grid-cols-5 gap-y-8 py-10"
        >
          {STATS.map((s, i) => (
            <m.div
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
            </m.div>
          ))}
        </m.div>
      </section>

      {/* ===== ALL SERVICES ===== */}
      <section className="bg-white py-20 cv-auto">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Services"
            heading="All Services under One Roof"
            subtext={`Registration, licensing, tax and compliance — ${SERVICES.length}+ services across ${SERVICE_CATEGORIES.length} categories.`}
            center
          />

          {/* Head categories */}
          <div className="mt-8 flex justify-start gap-2 overflow-x-auto px-4 py-1 [scrollbar-width:none] sm:justify-center sm:px-0 [&::-webkit-scrollbar]:hidden md:flex-wrap md:justify-center">
            {HEAD_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCat(cat.id)}
                className={`shrink-0 rounded-full border px-4 py-2 text-[12.5px] font-semibold transition-colors duration-150 ${
                  activeCat === cat.id
                    ? "border-primary bg-primary/[0.06] text-primary"
                    : "border-[#E5E5E5] bg-white text-navy/70 hover:border-primary/40 hover:text-primary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Drag-scrollable cards */}
          <m.div
            key={activeCat}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {(active?.services ?? []).slice(0, 8).map((s) => (
                <MiniServiceCard key={s.slug} service={s} />
              ))}
            </div>

            <div className="mt-9 text-center">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-navy/15 px-7 py-3 text-[13px] font-bold text-navy transition-all duration-200 hover:border-navy hover:bg-navy hover:text-white"
              >
                Explore all {SERVICES.length}+ services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </m.div>
        </div>
      </section>

      {/* ===== BUSINESS JOURNEY ===== */}
      <section className="bg-[#F4F4F4] py-20 cv-auto" id="business-journey">
        <div className="container-page">
          <SectionHeading
            eyebrow="How We Help"
            heading="Your Business Journey"
            subtext="From the day you start to the day you scale \u2014 one partner for every stage."
            center
          />
          <m.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {BUSINESS_JOURNEY.map((j, i) => (
              <m.div
                key={j.phase}
                variants={itemVariants}
                className="group bg-white border border-[#E5E5E5] rounded-[10px] p-6 flex flex-col hover:shadow-xl hover:shadow-navy/10 hover:-translate-y-1 transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-[10px] bg-primary/10 text-primary flex items-center justify-center transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                    <j.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-warm-dark">
                    {j.phase}
                  </span>
                </div>
                <h3 className="mt-4 text-[16px] font-bold text-navy">{j.title}</h3>
                <p className="mt-2 text-[12.5px] text-steel leading-relaxed">{j.desc}</p>
                <ul className="mt-4 space-y-2 flex-1">
                  {j.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-[12.5px] text-navy/80">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#FFB000] shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
                {i === 0 ? (
                  <Link
                    to="/services/$slug"
                    params={{ slug: "private-limited-company-registration" }}
                    className="mt-5 inline-flex items-center gap-1.5 text-[12.5px] font-bold text-primary hover:underline"
                  >
                    {j.cta} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <Link
                    to={j.to}
                    className="mt-5 inline-flex items-center gap-1.5 text-[12.5px] font-bold text-primary hover:underline"
                  >
                    {j.cta} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* ===== REGULATORY & COMPLIANCE SERVICES ===== */}
      <section className="bg-white py-20 cv-auto" id="regulatory-services">
        <div className="container-page">
          <SectionHeading
            eyebrow="Regulatory Services"
            heading="Regulatory & Compliance Services"
            subtext="Specialised, category-specific regulatory solutions for growing businesses."
            center
          />
          <m.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {REGULATORY_SERVICES.map((r) => {
              const meta = SERVICES.find((s) => s.slug === r.slug);
              return (
                <m.div key={r.slug} variants={itemVariants}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: r.slug }}
                    className="group flex items-start gap-4 h-full bg-[#F4F4F4] border border-[#E5E5E5] rounded-[8px] p-5 hover:border-primary/40 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <div className="shrink-0 w-11 h-11 rounded-[8px] bg-primary/10 text-primary flex items-center justify-center transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                      <ServiceIcon slug={r.slug} className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <h3 className="text-[14px] font-bold text-navy group-hover:text-primary transition-colors leading-snug">
                        {r.label}
                      </h3>
                      <p className="mt-1.5 text-[12px] text-steel leading-relaxed line-clamp-2">
                        {meta?.descriptor}
                      </p>
                    </div>
                  </Link>
                </m.div>
              );
            })}
          </m.div>
          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-navy text-white font-bold text-[14px] rounded-[8px] px-7 py-3.5 hover:bg-primary transition-colors"
            >
              Explore Regulatory Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SOLAR ===== */}
      <section className="bg-primary text-white py-20 cv-auto" id="solar">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <m.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <m.span
              variants={itemVariants}
              className="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.22em] uppercase text-[#FFB000]"
            >
              <span className="w-8 h-[2px] bg-[#FFB000]" />
              Solar &amp; Renewable Energy
            </m.span>
            <m.h2
              variants={itemVariants}
              className="mt-5 font-display text-[30px] md:text-[36px] font-black leading-[1.15] tracking-tight"
            >
              Solar Consultancy &amp; Regulatory Services
            </m.h2>
            <m.p
              variants={itemVariants}
              className="mt-5 text-[14.5px] text-white/85 leading-relaxed max-w-[480px]"
            >
              End-to-end support for solar companies and vendors \u2014 from vendor and DISCOM
              registration to PM Surya Ghar and net metering, across India.
            </m.p>
            <m.ul variants={itemVariants} className="mt-7 grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {[
                "Solar Vendor Registration",
                "DISCOM Registration",
                "PM Surya Ghar Support",
                "Net Metering",
                "Solar Business Support",
                "State-wise PAN-India service",
              ].map((it) => (
                <li
                  key={it}
                  className="flex items-start gap-2.5 text-[13px] font-medium text-white/90"
                >
                  <Check className="w-4 h-4 text-[#FFB000] shrink-0 mt-0.5" strokeWidth={3} />
                  {it}
                </li>
              ))}
            </m.ul>
            <m.div variants={itemVariants} className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/services/$slug"
                params={{ slug: "solar-vendor-registration" }}
                className="inline-flex items-center gap-2 bg-[#FFB000] text-navy font-bold text-[14px] rounded-[8px] px-7 py-3.5 shadow-lg shadow-black/20 hover:bg-[#e6a000] transition-colors"
              >
                <Sun className="w-4 h-4" /> Solar Vendor Registration
              </Link>
            </m.div>
          </m.div>
          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-navy rounded-[10px] p-8 md:p-10"
          >
            <Sun className="w-10 h-10 text-[#FFB000]" />
            <h3 className="mt-4 text-[20px] font-black leading-snug">
              Solar business, simplified.
            </h3>
            <p className="mt-3 text-[13.5px] text-white/80 leading-relaxed">
              We help solar vendors, EPC companies and installers get registered and stay compliant
              with state energy agencies across India \u2014 so you can focus on installing and
              scaling.
            </p>
            <Link
              to="/services/$slug"
              params={{ slug: "solar-consultancy" }}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 bg-white text-navy font-bold text-[14px] rounded-[8px] px-6 py-3.5 hover:bg-[#FFB000] transition-colors"
            >
              Explore Solar Services <ArrowRight className="w-4 h-4" />
            </Link>
          </m.div>
        </div>
      </section>

      {/* ===== WHY CHARTERED SOLUTION ===== */}
      <section className="bg-white py-20 cv-auto">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why Chartered Solution"
            heading="One Partner. Multiple Business Needs."
            subtext="Professional business, compliance, regulatory and digital solutions for startups, SMEs, manufacturers and growing businesses."
            center
          />
          <m.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {WHY_US.map((w) => (
              <m.div
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
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* ===== OUR CLIENTS ===== */}
      <section className="bg-[#F4F4F4] py-20 cv-auto">
        <div className="container-page">
          <SectionHeading
            eyebrow="Who We Serve"
            heading="Every stage of business"
            subtext="From first-time founders to established corporates, we cover the full compliance lifecycle."
            center
          />
          <m.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            {CLIENT_SEGMENTS.map((c) => (
              <m.div
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
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="bg-white py-20 cv-auto" id="industries">
        <div className="container-page">
          <SectionHeading
            eyebrow="Industries"
            heading="Who Do We Work With?"
            subtext="11 industry verticals \u2014 from startups to solar to medical devices."
            center
          />
          <m.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {NAV_INDUSTRIES.map((ind) => (
              <m.div key={ind.slug} variants={itemVariants}>
                <Link
                  to="/industries"
                  hash={ind.slug}
                  className="group flex items-start gap-3 h-full bg-[#F4F4F4] border border-[#E5E5E5] rounded-[8px] p-4 hover:border-primary/40 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  <ArrowRight className="w-4 h-4 text-warm-dark mt-0.5 shrink-0 transition-transform group-hover:translate-x-0.5" />
                  <span className="text-[13px] font-bold text-navy group-hover:text-primary transition-colors leading-snug">
                    {ind.label}
                  </span>
                </Link>
              </m.div>
            ))}
          </m.div>
          <div className="mt-10 text-center">
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 bg-navy text-white font-bold text-[14px] rounded-[8px] px-7 py-3.5 hover:bg-primary transition-colors"
            >
              View All Industries <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-white py-20 cv-auto">
        <div className="container-page max-w-[820px]">
          <SectionHeading
            eyebrow="FAQ"
            heading="Frequently Asked Questions"
            subtext="Quick answers about registration, licenses, and compliance in Indore."
            center
          />
          <m.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-12 space-y-3"
          >
            {FAQS.map((f, i) => {
              const open = openFaq === i;
              return (
                <m.div
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
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-[13.5px] text-steel leading-relaxed">{f.a}</p>
                    </div>
                  </div>
                </m.div>
              );
            })}
          </m.div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#F4F4F4] py-20 cv-auto">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <m.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <m.h2
              variants={itemVariants}
              className="text-[30px] md:text-[38px] font-black text-navy leading-[1.1] tracking-tight"
            >
              Registrations, compliance and{" "}
              <span className="text-primary">regulatory clarity.</span>
            </m.h2>
            <m.ul variants={itemVariants} className="mt-7 space-y-4">
              {[
                "Initial consultation with an experienced consultant",
                "Transparent, all-inclusive professional fees \u2014 no hidden charges",
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
            </m.ul>
            <m.div variants={itemVariants} className="mt-9 flex flex-wrap gap-4">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 bg-primary text-white font-bold text-[14px] rounded-[8px] px-7 py-3.5 hover:bg-primary-70 transition-colors"
              >
                <Phone className="w-4 h-4" /> Call {PHONE}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 bg-navy text-white font-bold text-[14px] rounded-[8px] px-7 py-3.5 hover:bg-navy-light transition-colors"
              >
                <Mail className="w-4 h-4" /> Email Us
              </a>
            </m.div>
          </m.div>
          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="bg-primary rounded-[5px] p-8 md:p-10 text-white relative overflow-hidden shadow-2xl shadow-primary/30"
          >
            <m.div
              initial={{ scale: 0, rotate: -30 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.15 }}
            >
              <BadgeCheck className="w-12 h-12 text-[#FFB000]" />
            </m.div>
            <h3 className="mt-5 text-[22px] font-black leading-snug">
              How we work with every client
            </h3>
            <p className="mt-3 text-[14px] text-white/80 leading-relaxed">
              Each engagement starts with a clear scope and a transparent professional fee. Your
              dedicated expert keeps you updated at every step \u2014 by phone and WhatsApp \u2014
              until your work is done.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Dedicated expert for every engagement",
                "Transparent professional fees",
                "End-to-end documentation assistance",
              ].map((line) => (
                <li key={line} className="flex items-center gap-2.5 text-[13.5px] font-medium">
                  <span className="w-4 h-4 rounded-full bg-[#FFB000] text-navy flex items-center justify-center">
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </span>
                  {line}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <EmberButton
                to="/contact-us"
                className="!bg-[#FDA700] !text-[#222] hover:!bg-[#e69900]"
              >
                Get Started Now <ArrowRight className="w-4 h-4" />
              </EmberButton>
            </div>
          </m.div>
        </div>
      </section>

      {/* ===== TRUST BANNER ===== */}
      <ParallaxBanner>
        <section className="bg-primary text-white cv-auto">
          <div className="container-page py-10">
            <m.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            >
              <m.div variants={itemVariants}>
                <div className="flex items-center justify-center gap-1 text-[#FFB000] mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <m.span
                      key={i}
                      initial={{ opacity: 0, scale: 0, rotate: -40 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 260, damping: 16, delay: i * 0.08 }}
                    >
                      <Star className="w-5 h-5 fill-current" />
                    </m.span>
                  ))}
                </div>
                <div className="text-[20px] font-black">Client-focused service</div>
                <div className="text-[12.5px] text-white/70 mt-1">
                  One partner for every business need
                </div>
              </m.div>
              <m.div variants={itemVariants} className="md:border-l md:border-r md:border-white/15">
                <div className="text-[28px] font-black text-[#FFB000] leading-none mt-1">
                  {SERVICES.length}+
                </div>
                <div className="text-[20px] font-black mt-2">Services Offered</div>
                <div className="text-[12.5px] text-white/70 mt-1">
                  Across {SERVICE_CATEGORIES.length} service categories
                </div>
              </m.div>
              <m.div variants={itemVariants}>
                <div className="flex items-center justify-center gap-1 text-[#FFB000] mb-2">
                  <BadgeCheck className="w-7 h-7" />
                </div>
                <div className="text-[20px] font-black">PAN-India Service</div>
                <div className="text-[12.5px] text-white/70 mt-1">Industry-specific solutions</div>
              </m.div>
            </m.div>
          </div>
        </section>
      </ParallaxBanner>
    </m.div>
  );
}
