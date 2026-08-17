import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRight, Wrench, Calculator, ListChecks, Newspaper, CalendarDays } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const TOOLS = [
  {
    icon: Calculator,
    name: "GST vs Non-GST Calculator",
    desc: "Estimate whether GST registration makes sense for your turnover and business type.",
  },
  {
    icon: ListChecks,
    name: "Composition vs Regular GST",
    desc: "Compare composition scheme and regular GST to pick the right scheme.",
  },
  {
    icon: Newspaper,
    name: "Company vs LLP vs OPC Selector",
    desc: "A short quiz to find the right business structure for your goals.",
  },
  {
    icon: CalendarDays,
    name: "Service Finder",
    desc: "Select your need and stage to see which of our services you should start with.",
  },
];

export const Route = createFileRoute("/resources/free-tools")({
  head: () => ({
    meta: [
      { title: "Free Tools & Calculators | Chartered Solution" },
      {
        name: "description",
        content:
          "Free business tools and calculators from Chartered Solution — GST selector, business structure quiz, service finder and more. Coming soon.",
      },
      {
        name: "keywords",
        content:
          "free business tools, GST calculator, business structure selector, compliance checklist, Chartered Solution tools",
      },
      { property: "og:title", content: "Free Tools & Calculators | Chartered Solution" },
      {
        property: "og:description",
        content:
          "Free business tools and calculators — GST selector, structure quiz, service finder and more.",
      },
      { property: "og:url", content: "https://www.charteredsolution.com/resources/free-tools" },
      { property: "og:image", content: "https://www.charteredsolution.com/Charted.jpeg" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:site_name", content: "Chartered Solution" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Free Tools & Calculators | Chartered Solution" },
      {
        name: "twitter:description",
        content:
          "Free business tools and calculators — GST selector, structure quiz, service finder and more.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.charteredsolution.com/resources/free-tools" }],
  }),
  component: FreeToolsPage,
});

function FreeToolsPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <PageHeader
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Resources", to: "/resources" },
          { label: "Free Tools" },
        ]}
        title="Free business tools & calculators."
        subtext="Practical tools to help you pick the right registrations, structures and services. Tools are currently being finalised — coming soon."
      />

      <section className="bg-white py-20">
        <div className="container-page">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {TOOLS.map((t) => (
              <motion.div
                key={t.name}
                variants={itemVariants}
                className="border border-[#E5E5E5] rounded-[10px] bg-[#F4F4F4] p-7"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[8px] bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <t.icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-[16px] font-bold text-navy">{t.name}</h2>
                </div>
                <p className="text-[13px] text-steel leading-relaxed mt-3">{t.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-warm-dark">
                  <span className="w-2 h-2 rounded-full bg-[#FFB000] animate-pulse" /> Coming soon
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-fog py-20">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <SectionHeading
            eyebrow="Need it now?"
            heading="Just ask us directly."
            subtext="Even before the tools go live, our team can answer your questions and recommend the right registrations and services instantly."
          />
          <div className="text-left">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 bg-navy text-white font-bold text-[14px] rounded-[8px] px-7 py-3.5 hover:bg-primary transition-colors"
            >
              Ask a question <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
