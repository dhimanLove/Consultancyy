import { createFileRoute } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { PageHeader } from "@/components/PageHeader";
import { TeamCard } from "@/components/TeamCard";
import { SectionHeading } from "@/components/SectionHeading";
import { EmberButton } from "@/components/EmberButton";
import { RevealParagraph } from "@/components/RevealParagraph";
import { TrustPillar } from "@/components/TrustPillar";
import { TestimonialCard } from "@/components/TestimonialCard";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { ArrowUpRight, Phone, Mail } from "lucide-react";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};
const child: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const faqData = [
  {
    question: "What services does Chartered Solution in Indore offer?",
    answer:
      "We offer 74 services across 10 categories including GST registration & filing, ITR filing, FSSAI license, MSME/Udyam registration, IEC code, startup India registration, tax planning, audit & assurance, CA certificates (net worth, turnover, etc.), ROC compliance, and more professional business services in Indore, Madhya Pradesh.",
  },
  {
    question: "Who is the founder of Chartered Solution?",
    answer:
      "Chartered Solution is founded by Jitendra Malviya, based in Indore, Madhya Pradesh. With a dedicated team of professionals, we provide end-to-end business registration and compliance services.",
  },
  {
    question: "Where is Chartered Solution located?",
    answer:
      "We are located at 152, Sanchar Nagar Ext., Goyal Nagar, Kanadia Road, Indore, Madhya Pradesh 452016. Our office hours are Monday to Saturday, 9:30 AM to 6:30 PM.",
  },
  {
    question: "How can I contact Chartered Solution?",
    answer:
      "You can call or WhatsApp us at +91 88155 53899, email us at charteredgesolution@gmail.com, or visit our office at Kanadia Road, Indore. We are available Mon\u2013Sat 9:30 AM to 6:30 PM.",
  },
  {
    question: "Does Chartered Solution offer GST registration in Indore?",
    answer:
      "Yes, we provide complete GST registration services in Indore, Madhya Pradesh, including new registration, GST return filing, amendments, and cancellation. Our expert team handles the entire process from documentation to filing.",
  },
  {
    question: "What is the process for company incorporation in Indore?",
    answer:
      "We offer end-to-end company incorporation services for Private Limited, OPC, LLP, and Partnership firms across Indore. Our process includes DIN/DPT-3, name reservation, MOA/AOA drafting, PAN/TAN, GST registration, and current account opening assistance.",
  },
  {
    question: "Is Chartered Solution a government-registered firm?",
    answer:
      "Yes, Chartered Solution Pvt. Ltd. is a registered professional services firm based in Indore, MP. We are recognized as a reliable service provider for government-related registrations, filings, and compliance work.",
  },
  {
    question: "Do you provide CA certificates like net worth and turnover certificates in Indore?",
    answer:
      "Yes, we issue net worth certificates, turnover certificates, CA certified financial statements, fund utilization certificates, income certificates, bank certificates, and certificate for government tenders across Indore and all of Madhya Pradesh.",
  },
];

const aboutStructured = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Chartered Solution",
      founder: { "@type": "Person", name: "Jitendra Malviya", jobTitle: "Founder & CEO" },
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
        telephone: "+91-8815553899",
        contactType: "customer service",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqData.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
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
          name: "About Us",
          item: "https://www.charteredsolution.com/about-us",
        },
      ],
    },
  ],
};

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      {
        title:
          "About Us | Chartered Solution \u2014 Indore\u2019s Trusted Business Compliance Partner",
      },
      {
        name: "description",
        content:
          "Founded by Jitendra Malviya, Chartered Solution in Indore, MP is a professional firm offering 74+ business registration, licensing, GST, ITR, FSSAI, audit, CA certificate, and compliance services. Call +91 88155 53899.",
      },
      {
        name: "keywords",
        content:
          "Chartered Solution Indore, Jitendra Malviya, business compliance Indore, registration services Indore, CA firm Indore, consultancy Indore",
      },
      {
        property: "og:title",
        content: "About Chartered Solution \u2014 Indore\u2019s Compliance & Registration Experts",
      },
      {
        property: "og:description",
        content:
          "Meet the team behind Chartered Solution. Founded by Jitendra Malviya, we are Indore\u2019s trusted partner for business registration, GST, FSSAI, ITR, audit, and 74+ compliance services.",
      },
      { property: "og:url", content: "https://www.charteredsolution.com/about-us" },
      { property: "og:image", content: "https://www.charteredsolution.com/Charted.jpeg" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:site_name", content: "Chartered Solution" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "About Chartered Solution \u2014 Indore\u2019s Compliance & Registration Experts",
      },
      {
        name: "twitter:description",
        content:
          "Meet the team behind Chartered Solution. Founded by Jitendra Malviya, we are Indore\u2019s trusted partner for business registration, GST, FSSAI, ITR, audit, and 74+ compliance services.",
      },
      {
        name: "twitter:image",
        content: "https://www.charteredsolution.com/Charted.jpeg",
      },
      { name: "geo.position", content: "22.7262239;75.919035" },
      { name: "geo.placename", content: "Indore, Madhya Pradesh" },
      { name: "geo.region", content: "IN-MP" },
    ],
    links: [{ rel: "canonical", href: "https://www.charteredsolution.com/about-us" }],
    scripts: [{ type: "application/ld+json", innerHTML: JSON.stringify(aboutStructured) }],
  }),
  component: AboutUsPage,
});

function AboutUsPage() {
  const founderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!founderRef.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(founderRef.current!.querySelectorAll(".founder-el"), {
        opacity: 0,
        y: 24,
        stagger: 0.08,
        duration: 0.7,
        ease: "expo.out",
        scrollTrigger: { trigger: founderRef.current!, start: "top 82%", once: true },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <PageHeader
        crumbs={[{ label: "Home", to: "/" }, { label: "About Us" }]}
        title="About Chartered Solution."
        subtext="Founded by Jitendra Malviya in Indore, Madhya Pradesh — helping businesses register, comply, and grow since 2023."
      />

      <section className="bg-white py-20">
        <div className="container-page grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              eyebrow="Our Story"
              heading="From Kanadia Road, Indore — building a compliance-first India."
            />
            <RevealParagraph className="text-[15px] text-steel leading-relaxed mt-6">
              Chartered Solution was founded in 2023 by Jitendra Malviya with a clear mission: make
              business registration and compliance simple, transparent, and stress-free for
              entrepreneurs across India. What started as a two-person firm in Indore has grown into
              a team of dedicated professionals serving clients across Madhya Pradesh and beyond.
            </RevealParagraph>
            <RevealParagraph className="text-[15px] text-steel leading-relaxed mt-4">
              Today, we proudly offer 74 services across 10 categories — from GST registration and
              ITR filing to company &amp; business setup, audit &amp; assurance, CA certificates,
              ROC compliance, and more. Every solution is tailored, every process is handled
              end-to-end, and every client gets a single point of contact.
            </RevealParagraph>
            <RevealParagraph className="text-[15px] text-steel leading-relaxed mt-4">
              Whether you are a startup founder, a small business owner, or an established
              enterprise, we are your compliance partner in Indore. 152, Sanchar Nagar Ext., Goyal
              Nagar, Kanadia Road is where we turn paperwork into possibilities.
            </RevealParagraph>
          </div>
          <div
            ref={founderRef}
            className="bg-fog border border-border rounded-[5px] p-8 text-center"
          >
            <div className="founder-el w-[64px] h-[64px] rounded-full bg-warm/10 flex items-center justify-center mx-auto">
              <span className="text-[20px] font-bold text-warm">JM</span>
            </div>
            <h3 className="founder-el text-[20px] font-bold text-navy mt-4">Jitendra Malviya</h3>
            <p className="founder-el text-[12px] font-semibold text-warm uppercase tracking-wider mt-1">
              Founder &amp; CEO
            </p>
            <p className="founder-el text-[14px] text-steel mt-5 leading-relaxed">
              &ldquo;We believe that every business deserves expert compliance guidance. Our mission
              at Chartered Solution is to remove the complexity from registrations, filings, and
              certifications so that entrepreneurs can focus on what they do best — building their
              dreams.&rdquo;
            </p>
            <div className="founder-el mt-6 flex flex-wrap justify-center gap-2.5 text-[12px] text-steel">
              <a
                href="tel:+918815553899"
                className="inline-flex items-center gap-1.5 bg-white border border-border rounded-full px-4 py-1.5 hover:text-primary hover:border-primary/40 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-primary" /> +91 88155 53899
              </a>
              <a
                href="mailto:charteredgesolution@gmail.com"
                className="inline-flex items-center gap-1.5 bg-white border border-border rounded-full px-4 py-1.5 hover:text-primary hover:border-primary/40 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-primary" /> Email
              </a>
              <a
                href="https://wa.me/918815553899"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#25D366] border border-[#25D366] text-white rounded-full px-4 py-1.5 hover:bg-[#1fb959] transition-colors"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-fog py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Trust Pillars" heading="Why businesses in Indore trust us." />
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            <TrustPillar
              number="01"
              title="End-to-end service"
              body="From documentation to filing and follow-up, we manage every step so you don't have to. Single point of contact always."
            />
            <TrustPillar
              number="02"
              title="Transparent pricing"
              body="No hidden charges, no surprises. You know exactly what you pay for each service before we begin."
            />
            <TrustPillar
              number="03"
              title="Fast turnaround"
              body="We respect your time. With streamlined processes and experienced professionals, we deliver results promptly."
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Testimonials" heading="What our clients in Indore say." />
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            <TestimonialCard
              quote="I am satisfied with Chartered Solution. They handled my MSME and GST registrations professionally and quickly."
              author="Capital Crest"
              date="2 years ago"
            />
            <TestimonialCard
              quote="Fully satisfied with the work."
              author="Virendra Malviya"
              date="a year ago"
            />
            <TestimonialCard
              quote="Thank you for my MSME registration."
              author="Anurag Malviya"
              date="2 years ago"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-navy py-16 md:py-20 relative overflow-hidden">
        <div className="container-page text-center relative z-10">
          <SectionHeading
            eyebrow="Get in Touch"
            heading="Ready to start your compliance journey?"
            center
          />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[15px] text-white/60 mt-3 max-w-[480px] mx-auto"
          >
            Call us at +91 88155 53899 or visit our office at Kanadia Road, Indore.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8"
          >
            <EmberButton to="/contact-us">
              Contact us today <ArrowUpRight className="w-4 h-4" />
            </EmberButton>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page max-w-[700px]">
          <SectionHeading
            eyebrow="FAQs"
            heading="Common questions about Chartered Solution."
            center
          />
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 space-y-4"
          >
            {faqData.map((faq, i) => (
              <motion.details
                key={i}
                variants={child}
                className="group border border-border rounded-[5px] overflow-hidden open:border-primary/40 transition-colors"
              >
                <summary className="text-[15px] font-semibold text-navy cursor-pointer px-6 py-4 select-none flex items-center justify-between gap-4 list-none marker:hidden">
                  <span>{faq.question}</span>
                  <span className="text-warm text-lg shrink-0 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-4">
                  <p className="text-[14px] text-steel leading-relaxed">{faq.answer}</p>
                </div>
              </motion.details>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
