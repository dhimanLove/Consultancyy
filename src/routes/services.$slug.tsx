import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";
import { EmberButton } from "@/components/EmberButton";
import { ServiceCard } from "@/components/ServiceCard";
import { QuickEnquiry } from "@/components/QuickEnquiry";
import {
  SERVICES,
  getService,
  getCategoryForService,
  SERVICES_BY_CATEGORY,
} from "@/lib/services-data";
import { CheckCircle, Phone, Mail, ArrowUpRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const s = getService(params.slug);
    if (!s) throw notFound();
    return s;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const cat = getCategoryForService(loaderData.slug);
    return {
      meta: [
        {
          title: `${loaderData.title} in Indore | Chartered Solution \u2014 ${cat?.name ?? "Compliance"} Services`,
        },
        {
          name: "description",
          content: `${loaderData.title} by Chartered Solution in Indore, Madhya Pradesh. ${loaderData.summary} Call +91 88155 53899 for expert assistance.`,
        },
        {
          name: "keywords",
          content: `${loaderData.title.toLowerCase()} Indore, ${loaderData.title.toLowerCase()} Madhya Pradesh, Chartered Solution, business compliance Indore`,
        },
        { property: "og:title", content: `${loaderData.title} | Chartered Solution \u2014 Indore` },
        { property: "og:description", content: loaderData.summary },
        {
          property: "og:url",
          content: `https://www.charteredsolution.com/services/${loaderData.slug}`,
        },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [
        { rel: "canonical", href: `https://www.charteredsolution.com/services/${loaderData.slug}` },
      ],
      scripts: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                name: loaderData.title,
                description: loaderData.summary,
                provider: {
                  "@type": "Organization",
                  name: "Chartered Solution",
                  url: "https://www.charteredsolution.com",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "152, Sanchar Nagar Ext., Goyal Nagar, Kanadia Road",
                    addressLocality: "Indore",
                    addressRegion: "Madhya Pradesh",
                    postalCode: "452016",
                    addressCountry: "IN",
                  },
                },
                areaServed: [
                  { "@type": "City", name: "Indore" },
                  { "@type": "State", name: "Madhya Pradesh" },
                  { "@type": "Country", name: "India" },
                ],
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
                  { "@type": "ListItem", position: 3, name: loaderData.title },
                ],
              },
            ],
          }),
        },
      ],
    };
  },
  component: ServiceDetailPage,
  notFoundComponent: () => (
    <div className="py-32 text-center">
      <p className="text-steel">Service not found.</p>
      <Link to="/services" className="text-warm text-sm mt-4 inline-block hover:underline">
        &larr; Back to services
      </Link>
    </div>
  ),
});

function ServiceDetailPage() {
  const service = Route.useLoaderData();
  const category = getCategoryForService(service.slug);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const related =
    SERVICES_BY_CATEGORY.find((c) => c.category.id === service.category)
      ?.services.filter((s) => s.slug !== service.slug)
      .slice(0, 4) ?? [];

  const sidebarVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };
  const sidebarItem = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <PageHeader
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: service.title },
        ]}
        title={service.title}
        subtext={`${service.summary} \u2014 Chartered Solution, Indore.`}
      />

      <section className="bg-white py-20">
        <div className="container-page grid lg:grid-cols-[60%_40%] gap-12 items-start">
          <div>
            {category && (
              <div className="inline-flex items-center gap-2 text-[11px] font-semibold text-warm uppercase tracking-[0.15em] mb-3">
                <span className="w-4 h-[2px] rounded-full bg-warm/50" />
                {category.name}
              </div>
            )}
            <h2 className="text-[26px] md:text-[30px] font-bold text-navy tracking-tight">
              Scope of Work
            </h2>
            <p className="text-[15px] text-steel mt-3 leading-relaxed">{service.summary}</p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8 space-y-3"
            >
              {service.scope.map((item: string) => (
                <motion.div key={item} variants={itemVariants} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-warm flex-shrink-0 mt-0.5" />
                  <span className="text-[15px] text-navy">{item}</span>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-10"
            >
              <button
                onClick={() => setShowEnquiry(true)}
                className="inline-flex items-center gap-2 bg-navy text-white rounded-[8px] px-5 py-2.5 text-[14px] font-semibold hover:bg-navy/90 active:scale-[0.97] transition-all"
              >
                Get expert advice <ArrowUpRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
          <motion.div
            variants={sidebarVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="bg-fog border border-border rounded-[10px] p-8"
          >
            <motion.h3 variants={sidebarItem} className="text-[16px] font-bold text-navy">
              Need {service.title} in Indore?
            </motion.h3>
            <motion.p
              variants={sidebarItem}
              className="text-[14px] text-steel mt-3 leading-relaxed"
            >
              Our team at Chartered Solution in Indore, Madhya Pradesh is here to help. Get in touch
              for a personalized consultation.
            </motion.p>
            <motion.div
              variants={sidebarItem}
              className="mt-6 space-y-4 border-t border-border/50 pt-6"
            >
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-warm mt-0.5" />
                <div>
                  <span className="text-[11px] font-semibold text-warm uppercase tracking-wider">
                    Call / WhatsApp
                  </span>
                  <a
                    href="tel:+918815553899"
                    className="block text-[15px] text-navy font-medium mt-0.5 hover:text-warm transition-colors"
                  >
                    +91 88155 53899
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-warm mt-0.5" />
                <div>
                  <span className="text-[11px] font-semibold text-warm uppercase tracking-wider">
                    Email
                  </span>
                  <a
                    href="mailto:charteredgesolution@gmail.com"
                    className="block text-[15px] text-navy font-medium mt-0.5 hover:text-warm transition-colors"
                  >
                    charteredgesolution@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div variants={sidebarItem} className="pt-2">
              <button
                onClick={() => setShowEnquiry(true)}
                className="w-full inline-flex items-center justify-center gap-2 bg-navy text-white rounded-[8px] px-5 py-2.5 text-[14px] font-semibold hover:bg-navy/90 active:scale-[0.97] transition-all"
              >
                Enquire now <ArrowUpRight className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <QuickEnquiry
        open={showEnquiry}
        onClose={() => setShowEnquiry(false)}
        preselected={service.slug}
      />

      {related.length > 0 && (
        <section className="bg-fog py-20">
          <div className="container-page">
            <div className="flex items-center gap-2 mb-8">
              <span className="w-5 h-[2px] rounded-full bg-warm/50" />
              <span className="text-[11px] font-semibold text-warm uppercase tracking-[0.15em]">
                More {category?.name ?? "related"}
              </span>
            </div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {related.map((r) => (
                <motion.div key={r.slug} variants={itemVariants}>
                  <ServiceCard service={r} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}
    </motion.div>
  );
}
