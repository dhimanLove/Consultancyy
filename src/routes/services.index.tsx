import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { PageHeader } from "@/components/PageHeader";
import { EmberButton } from "@/components/EmberButton";
import { ServiceCard } from "@/components/ServiceCard";
import { SERVICES_BY_CATEGORY, SERVICES } from "@/lib/services-data";
import { ChevronRight, ArrowUpRight } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const serviceStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ItemList",
      name: "All Services at Chartered Solution, Indore",
      description:
        "74 business registration, compliance, and financial services across 10 categories.",
      itemListElement: SERVICES.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.title,
        description: s.descriptor,
        url: `https://www.charteredsolution.com/services/${s.slug}`,
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
          name: "Services",
          item: "https://www.charteredsolution.com/services",
        },
      ],
    },
  ],
};

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      {
        title:
          "All 74 Services | Business Registration, GST, FSSAI, MSME | Chartered Solution Indore",
      },
      {
        name: "description",
        content:
          "Full list of 74 services by Chartered Solution in Indore: GST registration & filing, ITR filing, FSSAI license, MSME/Udyam, IEC, startup India registration, audit & assurance, CA certificates, ROC compliance, tax planning, and more across 10 categories.",
      },
      {
        name: "keywords",
        content:
          "GST registration Indore, ITR filing Indore, FSSAI license Indore, MSME registration Indore, IEC code Indore, net worth certificate Indore, tax audit Indore, ROC compliance Indore, business registration Indore",
      },
      {
        property: "og:title",
        content: "74 Business & Compliance Services | Chartered Solution Indore",
      },
      {
        property: "og:description",
        content:
          "Complete list of 74 services including GST, ITR, FSSAI, MSME, IEC, certificates, audit, ROC compliance, and more in Indore.",
      },
      { property: "og:url", content: "https://www.charteredsolution.com/services" },
      { property: "og:image", content: "https://www.charteredsolution.com/Charted.jpeg" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:site_name", content: "Chartered Solution" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "74 Business & Compliance Services | Chartered Solution Indore",
      },
      {
        name: "twitter:description",
        content:
          "Complete list of 74 services including GST, ITR, FSSAI, MSME, IEC, certificates, audit, ROC compliance, and more in Indore.",
      },
      {
        name: "twitter:image",
        content: "https://www.charteredsolution.com/Charted.jpeg",
      },
      { name: "geo.position", content: "22.7262239;75.919035" },
      { name: "geo.placename", content: "Indore, Madhya Pradesh" },
      { name: "geo.region", content: "IN-MP" },
    ],
    links: [{ rel: "canonical", href: "https://www.charteredsolution.com/services" }],
    scripts: [{ type: "application/ld+json", innerHTML: JSON.stringify(serviceStructuredData) }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      categoryRefs.current.forEach((el) => {
        if (!el) return;
        const line = el.querySelector(".cat-line") as HTMLElement | null;
        const heading = el.querySelector(".cat-heading") as HTMLElement | null;
        const badge = el.querySelector(".cat-badge") as HTMLElement | null;
        const targets = [line, heading, badge].filter(Boolean);
        if (targets.length === 0) return;
        gsap.from(targets, {
          opacity: 0,
          y: 20,
          stagger: 0.08,
          duration: 0.6,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <PageHeader
        crumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
        title="74 compliance and registration services for your business."
        subtext="Chartered Solution in Indore offers end-to-end business registration, licensing, tax filing, and compliance services across 10 categories. From GST registration to company incorporation — we handle it all."
      />

      <section className="bg-white py-20">
        <div className="container-page space-y-16">
          {SERVICES_BY_CATEGORY.map(({ category, services }, idx) => (
            <div
              key={category.id}
              ref={(el) => {
                categoryRefs.current[idx] = el;
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="cat-line w-6 h-[2px] rounded-full bg-warm" />
                <h2 className="cat-heading text-[20px] font-bold text-navy tracking-tight">
                  {category.name}
                </h2>
                <span className="cat-badge text-[12px] text-steel bg-fog rounded-[4px] px-2 py-0.5">
                  {services.length} services
                </span>
              </div>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              >
                {services.map((s) => (
                  <motion.div key={s.slug} variants={itemVariants} className="h-full">
                    <ServiceCard service={s} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy py-20 relative overflow-hidden">
        <div className="container-page text-center relative z-10">
          <h2 className="text-[28px] md:text-[34px] font-bold text-white leading-tight tracking-tight">
            Need help choosing the right service?
          </h2>
          <p className="text-[15px] text-white/60 mt-3 max-w-[480px] mx-auto">
            Our team in Indore will guide you through the process. Call us at +91 88155 53899.
          </p>
          <div className="mt-8">
            <EmberButton to="/contact-us">
              Book a consultation <ArrowUpRight className="w-4 h-4" />
            </EmberButton>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
