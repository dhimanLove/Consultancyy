import { memo, useState, type ComponentProps, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, m, useScroll, useMotionValueEvent } from "framer-motion";
import { KoboyoIcon } from "./KoboyoIcon";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { GoogleReviewsFooter } from "./GoogleReviews";
import { PHONE, PHONE_HREF, EMAIL, ADDRESS, WHATSAPP_HREF } from "@/lib/nav";

const POPULAR_SERVICES = [
  { label: "Private Limited Company", slug: "private-limited-company-registration" },
  { label: "LLP Registration", slug: "llp-registration" },
  { label: "GST Registration", slug: "gst-registration" },
  { label: "Income Tax Return", slug: "itr-filing" },
  { label: "MSME / Udyam", slug: "msme-registration" },
  { label: "Import Export Code", slug: "import-export-code" },
];

const COMPLIANCE_SERVICES = [
  { label: "ISO Certification", slug: "iso-consultancy" },
  { label: "Food & FSSAI", slug: "food-fssai-services" },
  { label: "Medical Device", slug: "medical-device-regulatory" },
  { label: "Cosmetics", slug: "cosmetics-regulatory" },
  { label: "Solar Consultancy", slug: "solar-consultancy" },
  { label: "E-Commerce Services", slug: "ecommerce-services" },
];

export const Footer = memo(function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const { scrollY } = useScroll();

  // Highly optimized scroll listener (prevents unnecessary re-renders)
  useMotionValueEvent(scrollY, "change", (y) => setShowTopBtn(y > 500));

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-14 pb-6">
      <div className="container-page px-4 lg:px-8 mx-auto">
        {/* Brand + Contact */}
        <div className="flex flex-col gap-8 pb-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <div className="text-[20px] font-extrabold tracking-tight">Chartered Solution</div>
            <div className="mt-1 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-warm">
              Business · Regulatory · Growth
            </div>
            <p className="mt-4 text-[13px] leading-relaxed text-white/50">
              One partner for business setup, licensing, compliance and growth — serving clients
              across India.
            </p>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2 sm:gap-x-10 lg:max-w-md">
            <ContactItem koboyo="phone" href={PHONE_HREF} text={PHONE} />
            <ContactItem koboyo="mail" href={`mailto:${EMAIL}`} text={EMAIL} />
            <li>
              <a
                href={WHATSAPP_HREF}
                className="group flex items-start gap-3 text-white/60 transition-colors hover:text-white"
              >
                <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#25D366]" />
                <span className="text-[13px] leading-relaxed">WhatsApp {PHONE}</span>
              </a>
            </li>
            <ContactItem koboyo="landMark" text="Madhya Pradesh" />
            <li className="pt-1">
              <GoogleReviewsFooter />
            </li>
          </ul>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 border-t border-white/[0.08] pt-10 md:grid-cols-4">
          <FooterColumn title="Company">
            <FooterLink to="/about-us">About Us</FooterLink>
            <FooterLink to="/services">All Services</FooterLink>
            <FooterLink to="/industries">Industries We Serve</FooterLink>
            <FooterLink to="/insights">Insights</FooterLink>
            <FooterLink to="/contact-us">Contact Us</FooterLink>
          </FooterColumn>

          <FooterColumn title="Popular Services">
            {POPULAR_SERVICES.map((l) => (
              <FooterLink key={l.slug} to="/services/$slug" params={{ slug: l.slug }}>
                {l.label}
              </FooterLink>
            ))}
            <FooterLink to="/services">View all services</FooterLink>
          </FooterColumn>

          <FooterColumn title="Compliance & Regulatory">
            {COMPLIANCE_SERVICES.map((l) => (
              <FooterLink key={l.slug} to="/services/$slug" params={{ slug: l.slug }}>
                {l.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Resources">
            <FooterLink to="/resources#business-guides">Business Guides</FooterLink>
            <FooterLink to="/resources#regulatory-updates">Regulatory Updates</FooterLink>
            <FooterLink to="/resources#document-checklists">Document Checklists</FooterLink>
            <FooterLink to="/resources/compliance-calendar">Compliance Calendar</FooterLink>
            <FooterLink to="/resources/free-tools">Free Tools</FooterLink>
          </FooterColumn>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/[0.08] pt-6 text-[12px] text-white/35 md:flex-row">
          <p>© {year} Chartered Solution. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="/privacy-policy" className="transition-colors hover:text-white/70">
              Privacy Policy
            </a>
            <a href="/terms" className="transition-colors hover:text-white/70">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Animated Scroll to Top */}
      <AnimatePresence>
        {showTopBtn && (
          <m.button
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-warm text-navy-dark shadow-lg shadow-warm/30 transition-colors hover:bg-warm-dark active:scale-90"
            aria-label="Scroll to top"
          >
            <KoboyoIcon name="rocket" className="h-5 w-5" />
          </m.button>
        )}
      </AnimatePresence>
    </footer>
  );
});

// --- Sub-components ---

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h4 className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/40">
              <span className="mr-2 inline-block h-3 w-1 rounded-full bg-warm align-middle" />
              {title}
            </h4>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({
  to,
  params,
  children,
}: {
  to: ComponentProps<typeof Link>["to"];
  params?: Record<string, string>;
  children: ReactNode;
}) {
  return (
    <li>
      <Link
        to={to}
        params={params as never}
        className="text-[13px] text-white/55 transition-colors hover:text-warm"
      >
        {children}
      </Link>
    </li>
  );
}

function ContactItem({ koboyo, href, text }: { koboyo: string; href?: string; text: string }) {
  const content = (
    <>
      <KoboyoIcon name={koboyo} className="mt-0.5 h-4 w-4 shrink-0 text-warm" />
      <span className="text-[13px] leading-relaxed">{text}</span>
    </>
  );

  return (
    <li>
      {href ? (
        <a
          href={href}
          className="group flex items-start gap-3 text-white/60 transition-colors hover:text-white"
        >
          {content}
        </a>
      ) : (
        <div className="flex items-start gap-3 text-white/60">{content}</div>
      )}
    </li>
  );
}
