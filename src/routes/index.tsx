import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HeroHeadline } from "@/components/HeroHeadline";
import { EmberButton } from "@/components/EmberButton";
import { StatCounter } from "@/components/StatCounter";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { SERVICES, SERVICE_CATEGORIES } from "@/lib/services-data";
import { ChevronRight, ArrowUpRight, ShieldCheck, Zap, Users, FileCheck } from "lucide-react";

const featuredServices = [
  SERVICES.find((s) => s.slug === "gst-registration"),
  SERVICES.find((s) => s.slug === "itr-filing"),
  SERVICES.find((s) => s.slug === "msme-registration"),
  SERVICES.find((s) => s.slug === "fssai-registration"),
  SERVICES.find((s) => s.slug === "startup-india-registration"),
  SERVICES.find((s) => s.slug === "import-export-code"),
].filter(Boolean);

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.charteredsolution.com/#organization",
      name: "Chartered Solution",
      url: "https://www.charteredsolution.com",
      description:
        "Business registration, GST, FSSAI, ISO certification, and compliance services in Indore, Madhya Pradesh.",
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
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        bestRating: "5",
        ratingCount: "3",
      },
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Chartered Solution | Business Registration & Compliance Services in Indore | GST, FSSAI, ISO, MSME",
      },
      {
        name: "description",
        content:
          "Chartered Solution in Indore, Madhya Pradesh \u2014 expert business registration, GST filing, FSSAI license, ISO certification, MSME/Udyam, IEC, trademark, company incorporation, and compliance services. 5.0 rated. Call +91 88155 53899.",
      },
      {
        name: "keywords",
        content:
          "business registration Indore, GST registration Indore, FSSAI license Indore, ISO certification Indore, MSME registration Indore, company incorporation Indore, trademark registration Indore, CA services Indore, compliance services Indore, Chartered Solution, Jitendra Malviya",
      },
      {
        property: "og:title",
        content: "Chartered Solution | Business Registration & Compliance Services Indore",
      },
      {
        property: "og:description",
        content:
          "Expert business registration, GST, FSSAI, ISO, MSME, IEC, and compliance services in Indore, Madhya Pradesh. 5.0 rated. Call +91 88155 53899.",
      },
      { property: "og:url", content: "https://www.charteredsolution.com" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:site_name", content: "Chartered Solution" },
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const PILLARS = [
  {
    icon: ShieldCheck,
    number: "01",
    title: "End-to-End Compliance",
    body: "From company incorporation in Indore to GST filing, FSSAI license, and ISO certification \u2014 we handle every step across India.",
  },
  {
    icon: FileCheck,
    number: "02",
    title: "Verified & Trusted",
    body: "Government-registered firm with GST certification, IndiaMART verification, and an active CIN (U70200MP2026PTC082497).",
  },
  {
    icon: Users,
    number: "03",
    title: "Personalized Guidance",
    body: "Every client receives dedicated support from our team of upto 10 professionals based in Indore.",
  },
  {
    icon: Zap,
    number: "04",
    title: "500+ Happy Clients",
    body: "Trusted by over 500 clients across India for business registration, compliance, and certification services.",
  },
];

function Index() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      {/* Hero */}
      <section ref={heroRef} className="bg-white pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden">
        <motion.div style={{ y: heroY }} className="container-page max-w-[920px] text-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block text-[11px] font-semibold text-warm bg-warm-light/60 rounded-[4px] px-3 py-1 tracking-wider uppercase"
          >
            Business Registration &amp; Compliance &middot; Indore
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-[800px] mx-auto"
          >
            <HeroHeadline />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-[17px] md:text-[19px] text-steel mt-6 max-w-[640px] mx-auto leading-relaxed"
          >
            <strong>Chartered Solution</strong> in <strong>Indore</strong> provides end-to-end
            business registration, GST filing, FSSAI license, ISO certification, MSME/Udyam, Import
            Export Code (IEC), trademark, and company incorporation services across{" "}
            <strong>Madhya Pradesh</strong> and India.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <EmberButton to="/contact-us">
              Get started <ArrowUpRight className="w-4 h-4" />
            </EmberButton>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-[14px] font-medium text-navy bg-fog rounded-[8px] px-5 py-2.5 hover:bg-warm-light/50 hover:text-warm-dark transition-all"
            >
              Explore all services <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-16 border-t border-border/60 pt-10 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="text-[32px] font-bold tracking-tight text-navy">
                <StatCounter target={500} suffix="+" />
              </div>
              <div className="text-[11px] font-medium mt-1 uppercase tracking-wider text-steel">
                Happy Clients
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="text-[32px] font-bold tracking-tight text-navy">
                <StatCounter target={74} suffix="+" />
              </div>
              <div className="text-[11px] font-medium mt-1 uppercase tracking-wider text-steel">
                Services
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <div className="text-[32px] font-bold tracking-tight text-navy">
                <StatCounter target={3} suffix="+" />
              </div>
              <div className="text-[11px] font-medium mt-1 uppercase tracking-wider text-steel">
                Years Experience
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <div className="text-[32px] font-bold tracking-tight text-warm">
                <span className="text-[28px] align-top">&#9733;</span>
                <StatCounter target={5} suffix=".0" />
              </div>
              <div className="text-[11px] font-medium mt-1 uppercase tracking-wider text-warm">
                Rating
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Popular Services */}
      <section className="bg-fog py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Popular Services in Indore"
            heading="Most trusted compliance services"
            subtext="From GST registration to company incorporation \u2014 the services our Indore clients trust the most."
            center
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-[960px] mx-auto"
          >
            {featuredServices.map(
              (s) =>
                s && (
                  <motion.div key={s.slug} variants={itemVariants}>
                    <ServiceCard service={s} />
                  </motion.div>
                ),
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-10"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-navy bg-white border border-border rounded-[8px] px-6 py-3 hover:border-warm/40 hover:shadow-md transition-all"
            >
              View all {SERVICE_CATEGORIES.length} categories &amp; {SERVICES.length} services
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-white py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why Choose Us?"
            heading="Your trusted compliance partner in Indore"
            center
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid md:grid-cols-2 gap-5 mt-12"
          >
            {PILLARS.map((p) => (
              <motion.div
                key={p.number}
                variants={itemVariants}
                className="relative bg-fog border border-border rounded-[10px] p-8 group hover:border-warm/20 hover:shadow-lg hover:shadow-warm/5 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-warm/[0.03] rounded-bl-[100%] pointer-events-none" />
                <p.icon className="w-6 h-6 text-warm/60 mb-4" />
                <div className="text-[40px] font-bold text-warm/50 leading-none -mt-2 mb-2 select-none">
                  {p.number}
                </div>
                <h3 className="text-[20px] font-semibold text-navy">{p.title}</h3>
                <p className="text-[15px] text-steel mt-3 leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="bg-fog py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Service Categories"
            heading="Everything under one roof"
            subtext="From Indore to across India \u2014 we cover all compliance and registration needs."
            center
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-3"
          >
            {SERVICE_CATEGORIES.map((cat) => (
              <motion.div key={cat.id} variants={itemVariants}>
                <Link
                  to="/services"
                  className="block bg-white border border-border rounded-[10px] p-5 hover:border-warm/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-center group"
                >
                  <h3 className="text-[13px] font-semibold text-navy group-hover:text-warm transition-colors">
                    {cat.name}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-warm/5 rounded-bl-[100%] pointer-events-none" />
        <div className="container-page text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[30px] md:text-[38px] font-bold text-white leading-[1.15] tracking-tight"
          >
            Ready to register your business or get compliant?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[15px] text-white/60 mt-4 max-w-[480px] mx-auto"
          >
            Based in Indore, serving all of India. Get in touch \u2014 we respond within one
            business day.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8"
          >
            <EmberButton to="/contact-us">
              Book a consultation <ArrowUpRight className="w-4 h-4" />
            </EmberButton>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
