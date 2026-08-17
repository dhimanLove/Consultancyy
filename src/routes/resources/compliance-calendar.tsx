import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRight, CalendarDays, FileText, Users, ShieldCheck } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const DEADLINES = [
  {
    label: "GSTR-1 (Monthly)",
    due: "11th of the following month",
    note: "Outward supply details for regular filers.",
  },
  {
    label: "GSTR-3B (Monthly)",
    due: "20th of the following month",
    note: "Monthly GST return for regular filers.",
  },
  {
    label: "GSTR-1 (Quarterly)",
    due: "13th of the month after the quarter",
    note: "For QRMP scheme filers.",
  },
  {
    label: "GSTR-3B (Quarterly)",
    due: "22nd / 24th of the month after the quarter",
    note: "QRMP filers with monthly payment due 25th.",
  },
  { label: "GSTR-4", due: "30th June (annual)", note: "Composition scheme annual return." },
  {
    label: "GSTR-9 (Annual)",
    due: "31st December",
    note: "Annual GST return (varies by notification).",
  },
  {
    label: "TDS Return (Q1–Q4)",
    due: "31st of the month after each quarter",
    note: "Quarterly TDS/TCS statements (24Q, 26Q, 27Q).",
  },
  {
    label: "Income Tax Return",
    due: "31st July (varies)",
    note: "For most individual and business filers.",
  },
  {
    label: "Income Tax Audit (44AB)",
    due: "30th September",
    note: "For businesses crossing the audit threshold.",
  },
  {
    label: "Advance Tax",
    due: "15th Jun / 15th Sep / 15th Dec / 15th Mar",
    note: "Quarterly instalments for eligible taxpayers.",
  },
  {
    label: "PF Return (EPF & EPS)",
    due: "15th of every month",
    note: "Monthly ECR filing by employers.",
  },
  { label: "ESIC Return", due: "15th of every month", note: "Monthly contributions by employers." },
  {
    label: "ROC – AOC-4",
    due: "Within 30 days of AGM",
    note: "Financial statements filing with MCA.",
  },
  { label: "ROC – MGT-7", due: "Within 60 days of AGM", note: "Annual return filing with MCA." },
  {
    label: "Director KYC (DIR-3 KYC)",
    due: "30th September",
    note: "Annual KYC for every director.",
  },
  { label: "DPT-3", due: "30th June", note: "Return of deposits for companies." },
  {
    label: "LLP Annual Filing",
    due: "30th October (varies)",
    note: "Form 8 and Form 11 for LLPs.",
  },
  {
    label: "FSSAI Renewal",
    due: "Before license expiry",
    note: "Typically every 1–5 years depending on category.",
  },
];

export const Route = createFileRoute("/resources/compliance-calendar")({
  head: () => ({
    meta: [
      {
        title: "Compliance Calendar | GST, TDS, ITR, ROC, PF Deadline Tracker | Chartered Solution",
      },
      {
        name: "description",
        content:
          "Track your business compliance deadlines with the Chartered Solution calendar — GST returns, TDS, income tax, PF/ESIC, ROC filings and more. Updated for Indian businesses.",
      },
      {
        name: "keywords",
        content:
          "compliance calendar India, GST due dates, TDS due dates, income tax due dates, ROC filing deadlines, PF due date, ESIC due date, business compliance list",
      },
      { property: "og:title", content: "Compliance Calendar | Chartered Solution" },
      {
        property: "og:description",
        content:
          "A deadline tracker for GST, TDS, Income Tax, ROC, PF and ESIC — built for Indian business owners.",
      },
      {
        property: "og:url",
        content: "https://www.charteredsolution.com/resources/compliance-calendar",
      },
      { property: "og:image", content: "https://www.charteredsolution.com/Charted.jpeg" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:site_name", content: "Chartered Solution" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Compliance Calendar | Chartered Solution" },
      {
        name: "twitter:description",
        content:
          "A deadline tracker for GST, TDS, Income Tax, ROC, PF and ESIC — built for Indian business owners.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.charteredsolution.com/resources/compliance-calendar",
      },
    ],
  }),
  component: ComplianceCalendarPage,
});

function ComplianceCalendarPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <PageHeader
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Resources", to: "/resources" },
          { label: "Compliance Calendar" },
        ]}
        title="Business compliance calendar."
        subtext="A quick reference to the common GST, tax, ROC, PF and ESIC deadlines for Indian businesses. Timelines vary — always confirm the current due dates with the respective authority."
      />

      <section className="bg-white py-20">
        <div className="container-page">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-6 h-[2px] rounded-full bg-warm" />
            <h2 className="text-[20px] font-bold text-navy tracking-tight">
              Key Deadlines at a Glance
            </h2>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {DEADLINES.map((d) => (
              <motion.div
                key={d.label}
                variants={itemVariants}
                className="border border-[#E5E5E5] rounded-[8px] p-5 flex items-start gap-4"
              >
                <div className="w-9 h-9 rounded-[8px] bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <CalendarDays className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[14.5px] font-bold text-navy">{d.label}</div>
                  <div className="text-[13px] text-warm-dark font-medium mt-0.5">{d.due}</div>
                  <div className="text-[12.5px] text-steel mt-1 leading-relaxed">{d.note}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-fog py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="How we help"
            heading="Don't want to track these yourself?"
            subtext="We handle your recurring filings and send reminders before every deadline."
          />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: FileText,
                title: "GST & Tax filings",
                body: "Monthly or quarterly return filing with zero missed deadlines.",
              },
              {
                icon: Users,
                title: "ROC & company compliance",
                body: "Annual filings, director KYC and compliance calenders managed for you.",
              },
              {
                icon: ShieldCheck,
                title: "PF, ESIC & payroll",
                body: "Employer returns filed accurately and on time, every month.",
              },
            ].map((s) => (
              <motion.div
                key={s.title}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="bg-white border border-[#E5E5E5] rounded-[10px] p-7"
              >
                <s.icon className="w-7 h-7 text-primary" />
                <h3 className="mt-4 text-[16px] font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-[13.5px] text-steel leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 bg-navy text-white font-bold text-[14px] rounded-[8px] px-7 py-3.5 hover:bg-primary transition-colors"
            >
              Talk to us about your filings <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
