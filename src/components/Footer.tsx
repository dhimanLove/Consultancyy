import { useState, type ComponentProps, type ComponentType, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowUp, Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import { EmberButton } from "./EmberButton";
import { WhatsAppIcon } from "./WhatsAppIcon";
import {
  PHONE,
  PHONE_HREF,
  EMAIL,
  ADDRESS,
  WHATSAPP_HREF,
  WHATSAPP_DISPLAY,
  SERVICES_GROUPS,
  REGULATORY_SERVICES,
  RESOURCES,
} from "@/lib/nav";

export function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const { scrollY } = useScroll();

  // Highly optimized scroll listener (prevents unnecessary re-renders)
  useMotionValueEvent(scrollY, "change", (y) => setShowTopBtn(y > 500));

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-16 pb-6 border-t border-white/10 relative">
      <div className="container-page px-4 lg:px-8 mx-auto">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12 mb-16">
          {/* Brand & CTA - Spans 4 cols */}
          <div className="lg:col-span-4 pr-4">
            <h3 className="text-[22px] font-bold leading-tight mb-4">
              Ready to Simplify Your <br className="hidden lg:block" />
              <span className="text-[#FFB000]">Business & Compliance?</span>
            </h3>
            <p className="text-[13px] text-white/60 mb-8 leading-relaxed max-w-sm">
              Talk to our consultants and let us handle everything from company registration and
              compliance to digital growth.
            </p>
            <div className="flex flex-wrap gap-3">
              <EmberButton to="/contact-us">Get Started</EmberButton>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-[13px] font-bold text-white bg-white/5 border border-white/10 hover:bg-[#25D366]/10 hover:border-[#25D366]/30 hover:text-[#25D366] rounded-full h-10 px-5 transition-all active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <FooterHeading>Company</FooterHeading>
            <ul className="space-y-3">
              <FooterLink to="/about-us">About Us</FooterLink>
              <FooterLink to="/services">All Services</FooterLink>
              <FooterLink to="/industries">Industries We Serve</FooterLink>
              <FooterLink to="/insights">Insights</FooterLink>
              <FooterLink to="/contact-us">Contact Us</FooterLink>
            </ul>
          </div>

          {/* Business Services */}
          <div className="lg:col-span-2">
            <FooterHeading>Business Services</FooterHeading>
            <ul className="space-y-4">
              {SERVICES_GROUPS.map((group) => (
                <li key={group.id} className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/40">
                    {group.label}
                  </span>
                  <FooterLink to="/services/$slug" params={{ slug: group.links[0].slug }}>
                    {group.links[0].label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Regulatory Services */}
          <div className="lg:col-span-2">
            <FooterHeading>Regulatory</FooterHeading>
            <ul className="space-y-3">
              {REGULATORY_SERVICES.map((l) => (
                <FooterLink key={l.slug} to="/services/$slug" params={{ slug: l.slug }}>
                  {l.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Resources & Connect Stack */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div>
              <FooterHeading>Resources</FooterHeading>
              <ul className="space-y-3">
                {RESOURCES.map((l) => (
                  <FooterLink key={l.label} to={l.to}>
                    {l.label}
                  </FooterLink>
                ))}
              </ul>
            </div>

            <div>
              <FooterHeading>Connect</FooterHeading>
              <ul className="space-y-3">
                <ContactItem icon={Phone} href={PHONE_HREF} text={PHONE} />
                <ContactItem icon={Mail} href={`mailto:${EMAIL}`} text={EMAIL} />
                <ContactItem icon={MapPin} text={ADDRESS} />
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-white/40">
          <p>© {year} Chartered Solution Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="/privacy-policy" className="hover:text-[#FFB000] transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-[#FFB000] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Animated Scroll to Top */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-50 w-11 h-11 bg-[#FFB000] text-navy rounded-full shadow-lg shadow-[#FFB000]/20 flex items-center justify-center hover:bg-[#FFC133] active:scale-90 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 stroke-[2.5]" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}

// --- DRY Sub-Components ---

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="text-[13px] font-bold uppercase tracking-wider text-white mb-6 flex flex-col gap-2.5">
      {children}
      <span className="w-6 h-[2px] bg-[#FFB000] rounded-full" />
    </h4>
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
        params={params as { slug: string }}
        className="group flex items-center text-[13px] text-white/60 hover:text-[#FFB000] transition-colors"
      >
        <ChevronRight className="w-3.5 h-3.5 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 mr-1 transition-all text-[#FFB000]" />
        <span className="group-hover:translate-x-0.5 transition-transform">{children}</span>
      </Link>
    </li>
  );
}

function ContactItem({
  icon: Icon,
  href,
  text,
}: {
  icon: ComponentType<{ className?: string }>;
  href?: string;
  text: string;
}) {
  const content = (
    <>
      <Icon className="w-4 h-4 text-[#FFB000] shrink-0 mt-0.5" />
      <span className="text-[13px] leading-relaxed">{text}</span>
    </>
  );

  return (
    <li>
      {href ? (
        <a
          href={href}
          className="flex items-start gap-3 text-white/60 hover:text-[#FFB000] transition-colors group"
        >
          {content}
        </a>
      ) : (
        <div className="flex items-start gap-3 text-white/60">{content}</div>
      )}
    </li>
  );
}
