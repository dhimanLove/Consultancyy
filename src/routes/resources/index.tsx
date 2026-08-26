import { createFileRoute } from "@tanstack/react-router";
import { m, type Variants } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { EmberButton } from "@/components/EmberButton";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Wrench,
  FileText,
  BookOpen,
  Clock,
} from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export const Route = createFileRoute("/resources/")({
  head: () => ({
    meta: [
      {
        title: "Resources | Blogs, Guides, Checklists & Tools | Chartered Solution",
      },
      {
        name: "description",
        content:
          "Business guides, regulatory updates, government portal guides, document checklists, FAQs, compliance calendar and free tools from Chartered Solution for business owners in India.",
      },
      {
        name: "keywords",
        content:
          "business guides, compliance calendar, GST filing checklist, MSME registration guide, document checklists, free business tools, regulatory updates India, Chartered Solution resources",
      },
      { property: "og:title", content: "Resources | Chartered Solution" },
      {
        property: "og:description",
        content:
          "Guides, checklists, regulatory updates and free tools to run your business compliantly.",
      },
      { property: "og:url", content: "https://www.charteredsolution.com/resources" },
      { property: "og:image", content: "https://www.charteredsolution.com/Charted.jpeg" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:site_name", content: "Chartered Solution" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Resources | Chartered Solution" },
      {
        name: "twitter:description",
        content:
          "Guides, checklists, regulatory updates and free tools to run your business compliantly.",
      },
      { name: "twitter:image", content: "https://www.charteredsolution.com/Charted.jpeg" },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              name: "Resources | Chartered Solution",
              url: "https://www.charteredsolution.com/resources",
              description:
                "Business guides, regulatory updates, government portal guides, document checklists, FAQs, compliance calendar and free tools.",
              isPartOf: {
                "@type": "WebSite",
                name: "Chartered Solution",
                url: "https://www.charteredsolution.com",
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
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Resources",
                  item: "https://www.charteredsolution.com/resources",
                },
              ],
            },
          ],
        },
      },
    ],
    links: [{ rel: "canonical", href: "https://www.charteredsolution.com/resources" }],
  }),
  component: ResourcesPage,
});

const RESOURCE_SECTIONS = [
  {
    id: "business-guides",
    icon: BookOpen,
    title: "Business Guides",
    desc: "Step-by-step guides for registrations, filings and compliances.",
    items: [
      "How to register a Private Limited Company in India",
      "GST registration explained in simple steps",
      "Startup India (DPIIT) recognition - what founders must know",
      "FSSAI license vs registration - which do you need?",
      "Solar vendor & DISCOM registration guide (state-wise)",
    ],
  },
  {
    id: "regulatory-updates",
    icon: Clock,
    title: "Regulatory Updates",
    desc: "Latest changes in tax, GST and regulatory rules.",
    items: [
      "GST return and invoice changes - what's new",
      "MCA compliance updates for companies & LLPs",
      "Medical device & cosmetics regulatory changes",
      "FSSAI labelling and packaging updates",
    ],
  },
  {
    id: "government-portal-guides",
    icon: FileText,
    title: "Government Portal Guides",
    desc: "How to use MCA, GST, FoSCoS, DGFT and Income Tax portals.",
    items: [
      "A step-by-step walkthrough of the MCA portal",
      "Filing GST returns on the GST portal",
      "Applying for FSSAI on the FoSCoS portal",
      "IEC application on the DGFT portal",
      "Filing income tax returns on the e-filing portal",
    ],
  },
  {
    id: "document-checklists",
    icon: FileText,
    title: "Document Checklists",
    desc: "Ready-to-use checklists for every service.",
    items: [
      "Company incorporation document checklist",
      "GST registration document checklist",
      "ISO certification document checklist",
      "Solar vendor registration document checklist",
      "Loan / project report document checklist",
    ],
  },
  {
    id: "faqs",
    icon: BookOpen,
    title: "FAQs",
    desc: "Answers to the questions clients ask us most.",
    items: [
      "What is the difference between OPC and LLP?",
      "Do I need GST if my turnover is below the limit?",
      "How long does ISO certification take?",
      "What is the PM Surya Ghar scheme?",
      "Can I start an import-export business part-time?",
    ],
  },
];

function ResourcesPage() {
  return (
    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <PageHeader
        crumbs={[{ label: "Home", to: "/" }, { label: "Resources" }]}
        title="Guides, checklists & tools for your business."
        subtext="Practical resources to help you register, comply and grow - built by our team in Indore for businesses across India."
      />

      <section className="bg-white py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Resources" heading="Everything you need to stay compliant." />
          <m.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="mt-12 grid md:grid-cols-2 gap-6"
          >
            {RESOURCE_SECTIONS.map((sec) => (
              <m.div
                key={sec.id}
                id={sec.id}
                variants={itemVariants}
                className="border border-[#E5E5E5] rounded-[10px] bg-[#F4F4F4] p-7 flex flex-col scroll-mt-28"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[8px] bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <sec.icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-[17px] font-bold text-navy">{sec.title}</h2>
                </div>
                <p className="text-[13px] text-steel leading-relaxed mt-3">{sec.desc}</p>
                <ul className="mt-5 space-y-2.5 flex-1">
                  {sec.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-[13.5px] text-navy/85">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      <section className="bg-fog py-20">
        <div className="container-page grid lg:grid-cols-2 gap-8">
          <m.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="bg-white border border-[#E5E5E5] rounded-[10px] p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-[8px] bg-warm/10 text-warm flex items-center justify-center shrink-0">
                <CalendarDays className="w-5 h-5" />
              </div>
              <h2 className="text-[18px] font-bold text-navy">Compliance Calendar</h2>
            </div>
            <p className="text-[13.5px] text-steel leading-relaxed">
              Never miss a deadline. A month-by-month calendar of GST, TDS, Income Tax, ROC, PF and
              ESIC due dates.
            </p>
            <div className="mt-6">
              <EmberButton to="/resources/compliance-calendar">
                View the calendar <ArrowRight className="w-4 h-4" />
              </EmberButton>
            </div>
          </m.div>
          <m.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="bg-white border border-[#E5E5E5] rounded-[10px] p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-[8px] bg-warm/10 text-warm flex items-center justify-center shrink-0">
                <Wrench className="w-5 h-5" />
              </div>
              <h2 className="text-[18px] font-bold text-navy">Free Tools</h2>
            </div>
            <p className="text-[13.5px] text-steel leading-relaxed">
              Calculators and selectors - GST composition vs regular, service-finder, and more.
              Coming soon.
            </p>
            <div className="mt-6">
              <EmberButton to="/resources/free-tools">
                Browse the tools <ArrowRight className="w-4 h-4" />
              </EmberButton>
            </div>
          </m.div>
        </div>
      </section>

      <section className="bg-navy py-16 md:py-20 relative overflow-hidden">
        <div className="container-page text-center relative z-10">
          <SectionHeading eyebrow="Need a hand?" heading="Tell us what you're working on." center />
          <m.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[15px] text-white/60 mt-3 max-w-[480px] mx-auto"
          >
            Our team can help you apply these guides to your business.
          </m.p>
          <m.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8"
          >
            <EmberButton to="/contact-us">
              Contact us today <ArrowUpRight className="w-4 h-4" />
            </EmberButton>
          </m.div>
        </div>
      </section>
    </m.div>
  );
}
