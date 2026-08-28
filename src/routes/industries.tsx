import { createFileRoute, Link, useLocation } from "@tanstack/react-router";
import { m, type Variants } from "framer-motion";
import { useEffect } from "react";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { EmberButton } from "@/components/EmberButton";
import { INDUSTRIES, INDUSTRY_ITEM_DESCRIPTIONS } from "@/lib/nav";
import { getService } from "@/lib/services-data";
import { ArrowRight, ArrowUpRight, Building2, Check } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const INDUSTRY_LINKS: Record<string, string[]> = {
  "startups-founders": [
    "private-limited-company-registration",
    "startup-india-registration",
    "startup-funding-services",
    "gst-registration",
  ],
  "msmes-smes": [
    "msme-registration",
    "gst-registration",
    "gst-return-filing",
    "itr-filing",
    "bookkeeping",
  ],
  manufacturers: [
    "iso-certification",
    "iso-9001",
    "gst-registration",
    "gst-return-filing",
    "tax-audit-44ab",
  ],
  "solar-renewable": [
    "solar-consultancy",
    "solar-vendor-registration",
    "pm-surya-ghar",
    "net-metering",
  ],
  "medical-device-companies": [
    "medical-device-regulatory",
    "iso-13485",
    "icmed-13485",
    "import-export-compliance",
  ],
  "cosmetic-brands": ["cosmetics-regulatory", "gst-registration", "fssai-registration"],
  "food-businesses": [
    "food-fssai-services",
    "fssai-registration",
    "food-license-renewal",
    "food-labelling-compliance",
  ],
  "ecommerce-d2c": [
    "ecommerce-services",
    "product-listing",
    "catalogue-design",
    "brand-barcode",
    "ecommerce-marketing",
  ],
  "importers-exporters": [
    "import-export-code",
    "import-export-compliance",
    "export-import-documentation",
    "gst-registration",
  ],
  "b2b-companies": [
    "lead-generation",
    "digital-marketing-services",
    "gst-registration",
    "company-changes-closure",
  ],
  "corporates-institutions": [
    "tax-audit-44ab",
    "certified-financial-statements",
    "director-kyc",
    "aoc-4-filing",
  ],
};

const industryStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ItemList",
      name: "Industries Served by Chartered Solution",
      description: "Industry-specific business, regulatory, compliance and growth services.",
      itemListElement: INDUSTRIES.map((i, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: i.label,
        url: `https://www.charteredsolution.com/industries#${i.slug}`,
      })),
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
          name: "Industries We Serve",
          item: "https://www.charteredsolution.com/industries",
        },
      ],
    },
  ],
};

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      {
        title:
          "Industries We Serve | Startups, Solar, Medical Devices, Cosmetics & More | Chartered Solution",
      },
      {
        name: "description",
        content:
          "Chartered Solution serves startups, MSMEs, manufacturers, solar & renewable energy companies, medical device firms, cosmetic brands, food businesses, e-commerce D2C brands, importers & exporters, B2B companies, and corporates across India.",
      },
      {
        name: "keywords",
        content:
          "industries served Indore, startup consultants, solar vendor registration, medical device compliance, cosmetics regulatory India, food FSSAI consultants, e-commerce enablement, import export consultants, business compliance",
      },
      { property: "og:title", content: "Industries We Serve | Chartered Solution" },
      {
        property: "og:description",
        content:
          "Industry-specific business setup, regulatory, compliance and digital growth solutions across India.",
      },
      { property: "og:url", content: "https://www.charteredsolution.com/industries" },
      { property: "og:image", content: "https://www.charteredsolution.com/Charted.jpeg" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:site_name", content: "Chartered Solution" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Industries We Serve | Chartered Solution" },
      {
        name: "twitter:description",
        content:
          "Industry-specific business setup, regulatory, compliance and digital growth solutions across India.",
      },
      { name: "twitter:image", content: "https://www.charteredsolution.com/Charted.jpeg" },
      { "script:ld+json": industryStructuredData },
    ],
    links: [{ rel: "canonical", href: "https://www.charteredsolution.com/industries" }],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  const { hash } = useLocation();

  // Scroll to the target industry when arriving with a hash (e.g. /industries#solar).
  useEffect(() => {
    if (!hash) return;
    const id = window.decodeURIComponent(hash);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash]);

  return (
    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <PageHeader
        crumbs={[{ label: "Home", to: "/" }, { label: "Industries" }]}
        title="Solutions for every industry."
        subtext="From first-time founders to solar companies, medical device firms and D2C brands - we tailor business setup, regulatory, compliance and growth solutions to your industry."
      />

      <section className="bg-white py-20">
        <div className="container-page">
          <m.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="space-y-8"
          >
            {INDUSTRIES.map((ind, idx) => {
              const links = INDUSTRY_LINKS[ind.slug] ?? [];
              const desc = INDUSTRY_ITEM_DESCRIPTIONS[ind.slug] ?? "";
              return (
                <m.div
                  key={ind.slug}
                  id={ind.slug}
                  variants={itemVariants}
                  className="border border-[#E5E5E5] rounded-[10px] p-7 md:p-9 scroll-mt-28"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-[10px] bg-warm/10 text-warm-dark flex items-center justify-center shrink-0">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-warm-dark">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <h2 className="text-[20px] font-bold text-navy">{ind.label}</h2>
                      </div>
                    </div>
                    <Link
                      to="/contact-us"
                      className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-primary hover:underline shrink-0"
                    >
                      Talk to an expert <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                  <p className="text-[14px] text-steel leading-relaxed mt-4 max-w-3xl">{desc}</p>
                  {links.length > 0 && (
                    <div className="flex flex-wrap gap-2.5 mt-5">
                      {links.map((slug) => {
                        const s = getService(slug);
                        if (!s) return null;
                        return (
                          <Link
                            key={slug}
                            to="/services/$slug"
                            params={{ slug }}
                            className="inline-flex items-center gap-1.5 bg-[#F4F4F4] border border-[#E5E5E5] rounded-full px-4 py-1.5 text-[12.5px] font-medium text-navy hover:border-warm/50 hover:text-warm-dark hover:bg-warm/10 transition-colors"
                          >
                            {s.title} <ArrowRight className="w-3 h-3" />
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </m.div>
              );
            })}
          </m.div>
        </div>
      </section>

      <section className="bg-fog py-20 cv-auto">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <SectionHeading
            eyebrow="Not sure where to start?"
            heading="Tell us about your business."
            subtext="We'll recommend the registrations, compliances and growth services that fit your industry and stage."
          />
          <div className="space-y-3">
            {[
              "Free initial consultation - no obligation",
              "A tailored checklist for your industry",
              "Transparent, all-inclusive professional fees",
              "End-to-end documentation, filing and follow-up",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" strokeWidth={3} />
                </span>
                <span className="text-[15px] text-navy/85">{point}</span>
              </div>
            ))}
            <div className="pt-4">
              <EmberButton to="/contact-us">
                Get a Free Consultation <ArrowUpRight className="w-4 h-4" />
              </EmberButton>
            </div>
          </div>
        </div>
      </section>
    </m.div>
  );
}
