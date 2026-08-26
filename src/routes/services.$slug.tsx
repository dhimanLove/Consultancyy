import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useState } from "react";
import { m, AnimatePresence, type Variants } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";
import { EmberButton } from "@/components/EmberButton";
import { ServiceCard } from "@/components/ServiceCard";
import { QuickEnquiry } from "@/components/QuickEnquiry";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { getService, getCategoryForService } from "@/lib/services-data";
import { getServiceDetails, getRelatedServices } from "@/lib/service-details";
import {
  CheckCircle,
  Phone,
  Mail,
  ArrowUpRight,
  Users,
  FileCheck,
  ListChecks,
  Wallet,
  Clock,
  ShieldCheck,
  FileText,
  IndianRupee,
  Plus,
} from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const itemVariants: Variants = {
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
    const details = getServiceDetails(loaderData);
    const categoryLabel = cat?.name
      ? cat.name.endsWith("Services")
        ? cat.name
        : `${cat.name} Services`
      : "Compliance Services";
    return {
      meta: [
        {
          title: `${loaderData.title} in Indore | Chartered Solution \u2014 ${categoryLabel}`,
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
        {
          property: "og:image",
          content: "https://www.charteredsolution.com/Charted.jpeg",
        },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "en_IN" },
        { property: "og:site_name", content: "Chartered Solution" },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: `${loaderData.title} | Chartered Solution \u2014 Indore`,
        },
        { name: "twitter:description", content: loaderData.summary },
        {
          name: "twitter:image",
          content: "https://www.charteredsolution.com/Charted.jpeg",
        },
        { name: "geo.position", content: "22.7262239;75.919035" },
        { name: "geo.placename", content: "Indore, Madhya Pradesh" },
        { name: "geo.region", content: "IN-MP" },
        {
          "script:ld+json": {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                name: loaderData.title,
                description: loaderData.summary,
                url: `https://www.charteredsolution.com/services/${loaderData.slug}`,
                image: "https://www.charteredsolution.com/Charted.jpeg",
                serviceType: loaderData.title,
                provider: {
                  "@type": "Organization",
                  name: "Chartered Solution",
                  url: "https://www.charteredsolution.com",
                  image: "https://www.charteredsolution.com/Charted.jpeg",
                  telephone: "+91-88155-53899",
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
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: loaderData.title,
                    item: `https://www.charteredsolution.com/services/${loaderData.slug}`,
                  },
                ],
              },
              ...(details.faqs.length > 0
                ? [
                    {
                      "@type": "FAQPage",
                      mainEntity: details.faqs.map((f) => ({
                        "@type": "Question",
                        name: f.q,
                        acceptedAnswer: { "@type": "Answer", text: f.a },
                      })),
                    },
                  ]
                : []),
            ],
          },
        },
      ],
      links: [
        { rel: "canonical", href: `https://www.charteredsolution.com/services/${loaderData.slug}` },
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

function Block({
  title,
  icon: Icon,
  children,
  items,
}: {
  title: string;
  icon: React.ElementType;
  children?: React.ReactNode;
  items?: string[];
}) {
  return (
    <m.div
      variants={itemVariants}
      className="border border-[#E5E5E5] rounded-[10px] bg-[#F4F4F4] p-7"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-[8px] bg-primary/10 text-primary flex items-center justify-center shrink-0">
          <Icon className="w-4.5 h-4.5" />
        </div>
        <h3 className="text-[17px] font-bold text-navy">{title}</h3>
      </div>
      {children}
      {items && (
        <ul className="space-y-2.5">
          {items.map((it) => (
            <li key={it} className="flex items-start gap-3">
              <CheckCircle className="w-4.5 h-4.5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-[14.5px] text-navy/85 leading-relaxed">{it}</span>
            </li>
          ))}
        </ul>
      )}
    </m.div>
  );
}

function ServiceDetailPage() {
  const service = Route.useLoaderData();
  const category = getCategoryForService(service.slug);
  const details = getServiceDetails(service);
  const related = getRelatedServices(service, 4);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const sidebarVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };
  const sidebarItem: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  };

  const whatsappText = encodeURIComponent(
    `Hi Chartered Solution, I need help with ${service.title}. Please share details.`,
  );

  return (
    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
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
        <div className="container-page grid gap-12 items-start lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)]">
          <div className="min-w-0">
            {category && (
              <div className="inline-flex items-center gap-2 text-[11px] font-semibold text-warm uppercase tracking-[0.15em] mb-3">
                <span className="w-4 h-[2px] rounded-full bg-warm/50" />
                {category.name}
              </div>
            )}
            <h2 className="text-[26px] md:text-[30px] font-bold text-navy tracking-tight">
              {service.title} - Overview
            </h2>
            <p className="text-[15px] text-steel mt-3 leading-relaxed">{service.summary}</p>

            <m.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-10 space-y-6"
            >
              <Block title="What We Provide" icon={FileCheck} items={service.scope} />

              {details.whoNeeds.length > 0 && (
                <Block title="Who Needs This Service?" icon={Users} items={details.whoNeeds} />
              )}

              {details.eligibility.length > 0 && (
                <Block title="Eligibility" icon={ShieldCheck} items={details.eligibility} />
              )}

              {details.documents.length > 0 && (
                <Block title="Documents Required" icon={ListChecks} items={details.documents} />
              )}

              {details.process.length > 0 && (
                <Block title="Our Process" icon={FileText}>
                  <ol className="space-y-0">
                    {details.process.map((step, i) => (
                      <li
                        key={step.title}
                        className="flex items-start gap-4 py-3 border-b border-[#E5E5E5] last:border-0"
                      >
                        <span className="w-7 h-7 rounded-full bg-primary text-white text-[12.5px] font-bold flex items-center justify-center shrink-0">
                          {i + 1}
                        </span>
                        <div>
                          <div className="text-[14.5px] font-bold text-navy">{step.title}</div>
                          <div className="text-[13.5px] text-steel mt-0.5 leading-relaxed">
                            {step.detail}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </Block>
              )}

              <m.div
                variants={itemVariants}
                className="border border-[#E5E5E5] rounded-[10px] bg-white overflow-hidden"
              >
                <div className="px-7 pt-7 pb-2">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-[8px] bg-warm/15 text-warm flex items-center justify-center shrink-0">
                      <IndianRupee className="w-4.5 h-4.5" />
                    </div>
                    <h3 className="text-[17px] font-bold text-navy">Pricing & Timeline</h3>
                  </div>
                </div>
                <div className="px-7 pb-7 space-y-0">
                  <div className="flex items-start gap-4 py-4 border-b border-[#E5E5E5]">
                    <IndianRupee className="w-4 h-4 text-warm mt-0.5 shrink-0" />
                    <div className="min-w-0">
                      <span className="text-[11px] font-semibold text-warm uppercase tracking-wider">
                        Government / Authority Fees
                      </span>
                      <p className="text-[14px] text-navy/85 leading-relaxed mt-1">
                        {details.govFee}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4 border-b border-[#E5E5E5]">
                    <Wallet className="w-4 h-4 text-warm mt-0.5 shrink-0" />
                    <div className="min-w-0">
                      <span className="text-[11px] font-semibold text-warm uppercase tracking-wider">
                        Professional Fees
                      </span>
                      <p className="text-[14px] text-navy/85 leading-relaxed mt-1">
                        {details.professionalFee}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 py-4">
                    <Clock className="w-4 h-4 text-warm mt-0.5 shrink-0" />
                    <div className="min-w-0">
                      <span className="text-[11px] font-semibold text-warm uppercase tracking-wider">
                        Estimated Timeline
                      </span>
                      <p className="text-[14px] text-navy/85 leading-relaxed mt-1">
                        {details.timeline}
                      </p>
                    </div>
                  </div>
                </div>
              </m.div>

              <Block title="Why Choose Chartered Solution?" icon={ShieldCheck}>
                <ul className="space-y-2.5">
                  {[
                    "Dedicated expert assigned to every engagement",
                    "Transparent, all-inclusive professional fees - no hidden charges",
                    "End-to-end documentation, filing and follow-up support",
                    "PAN-India service, delivered 100% online where possible",
                  ].map((it) => (
                    <li key={it} className="flex items-start gap-3">
                      <CheckCircle className="w-4.5 h-4.5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-[14.5px] text-navy/85 leading-relaxed">{it}</span>
                    </li>
                  ))}
                </ul>
              </Block>

              {details.faqs.length > 0 && (
                <m.div
                  variants={itemVariants}
                  className="border border-[#E5E5E5] rounded-[10px] bg-white overflow-hidden"
                >
                  <div className="px-7 pt-7 pb-4">
                    <h3 className="text-[19px] font-bold text-navy">Frequently Asked Questions</h3>
                  </div>
                  <div className="px-4 pb-4 space-y-2">
                    {details.faqs.map((f, i) => {
                      const open = openFaq === i;
                      return (
                        <div
                          key={f.q}
                          className="border border-[#E5E5E5] rounded-[8px] overflow-hidden bg-[#F4F4F4]"
                        >
                          <button
                            onClick={() => setOpenFaq(open ? null : i)}
                            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                            aria-expanded={open}
                          >
                            <span className="text-[14.5px] font-bold text-navy">{f.q}</span>
                            <span
                              className={`shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center transition-transform ${open ? "rotate-45" : ""}`}
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </span>
                          </button>
                          <div
                            className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                              open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                            }`}
                          >
                            <div className="overflow-hidden">
                              <p className="px-5 pb-5 text-[13.5px] text-steel leading-relaxed">
                                {f.a}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </m.div>
              )}

              <m.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
                <EmberButton to="/contact-us">
                  Get Started <ArrowUpRight className="w-4 h-4" />
                </EmberButton>
                <button
                  onClick={() => setShowEnquiry(true)}
                  className="inline-flex items-center gap-2 bg-warm text-navy-dark rounded-[8px] px-5 py-2.5 text-[14px] font-bold hover:bg-warm-dark active:scale-[0.97] transition-all"
                >
                  Request a Quote <ArrowUpRight className="w-4 h-4" />
                </button>
              </m.div>
            </m.div>
          </div>

          <m.div
            variants={sidebarVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="bg-fog border border-border rounded-[5px] p-8 min-w-0 overflow-hidden lg:sticky lg:top-28"
          >
            <m.h3 variants={sidebarItem} className="text-[16px] font-bold text-navy">
              Need {service.title}?
            </m.h3>
            <m.p variants={sidebarItem} className="text-[14px] text-steel mt-3 leading-relaxed">
              Our team at Chartered Solution, Indore is here to help. Get in touch for a
              personalised consultation.
            </m.p>
            <m.div variants={sidebarItem} className="mt-6 space-y-4 border-t border-border/50 pt-6">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-warm mt-0.5" />
                <div className="flex-1">
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
              <a
                href={`https://wa.me/918815553899?text=${whatsappText}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] text-white rounded-[8px] px-5 py-2.5 text-[14px] font-bold hover:bg-[#1fb959] active:scale-[0.97] transition-all"
              >
                <WhatsAppIcon /> WhatsApp Us
              </a>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-warm mt-0.5" />
                <div>
                  <span className="text-[11px] font-semibold text-warm uppercase tracking-wider">
                    Email
                  </span>
                  <a
                    href="mailto:charteredgesolution@gmail.com"
                    className="block text-[15px] text-navy font-medium mt-0.5 hover:text-warm transition-colors break-all"
                  >
                    charteredgesolution@gmail.com
                  </a>
                </div>
              </div>
            </m.div>
            <m.div variants={sidebarItem} className="pt-6 mt-4 border-t border-border/50">
              <EmberButton to="/contact-us" fullWidth>
                Get a Free Consultation <ArrowUpRight className="w-4 h-4" />
              </EmberButton>
            </m.div>
          </m.div>
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
                More {category?.name ?? "related"} services
              </span>
            </div>
            <m.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {related.map((r) => (
                <m.div key={r.slug} variants={itemVariants} className="h-full">
                  <ServiceCard service={r} />
                </m.div>
              ))}
            </m.div>
          </div>
        </section>
      )}
    </m.div>
  );
}
