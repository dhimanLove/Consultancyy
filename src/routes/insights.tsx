import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { EmberButton } from "@/components/EmberButton";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights & Articles | Chartered Solution \u2014 Indore" },
      {
        name: "description",
        content:
          "Expert insights, guides, and articles on business registration, GST, FSSAI, MSME, compliance, and tax topics from Chartered Solution in Indore.",
      },
      {
        name: "keywords",
        content:
          "business insights Indore, GST guide, compliance articles, Chartered Solution blog, startup tips Indore",
      },
      { property: "og:title", content: "Insights | Chartered Solution \u2014 Indore" },
      {
        property: "og:description",
        content:
          "Expert articles and guides on business registration, compliance, GST, and tax topics from Chartered Solution Indore.",
      },
      { property: "og:url", content: "https://www.charteredsolution.com/insights" },
      { property: "og:image", content: "https://www.charteredsolution.com/Charted.jpeg" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:site_name", content: "Chartered Solution" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Insights | Chartered Solution \u2014 Indore",
      },
      {
        name: "twitter:description",
        content:
          "Expert articles and guides on business registration, compliance, GST, and tax topics from Chartered Solution Indore.",
      },
      {
        name: "twitter:image",
        content: "https://www.charteredsolution.com/Charted.jpeg",
      },
      { name: "geo.position", content: "22.7262239;75.919035" },
      { name: "geo.placename", content: "Indore, Madhya Pradesh" },
      { name: "geo.region", content: "IN-MP" },
    ],
    links: [{ rel: "canonical", href: "https://www.charteredsolution.com/insights" }],
    scripts: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
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
              name: "Insights",
              item: "https://www.charteredsolution.com/insights",
            },
          ],
        }),
      },
    ],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <PageHeader
        crumbs={[{ label: "Home", to: "/" }, { label: "Insights" }]}
        title="Insights & articles."
        subtext="Guides, updates, and expert perspectives on business registration, compliance, GST, taxation, and more from our team in Indore."
      />

      <section className="bg-white py-20">
        <div className="container-page text-center">
          <div className="max-w-[480px] mx-auto">
            <SectionHeading
              eyebrow="Coming Soon"
              heading="We're writing something valuable."
              center
            />
            <p className="text-[15px] text-steel mt-4 leading-relaxed">
              Our team at Chartered Solution in Indore is preparing in-depth guides, compliance
              checklists, tax updates, and startup tips. Subscribe to be notified when we publish.
            </p>
            <div className="mt-10">
              <EmberButton to="/contact-us">
                Get notified <ArrowUpRight className="w-4 h-4" />
              </EmberButton>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
