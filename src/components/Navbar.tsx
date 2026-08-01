import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { EmberButton } from "./EmberButton";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { NAV_GROUPS, PHONE, PHONE_HREF, EMAIL, WHATSAPP_HREF } from "@/lib/nav";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Phone,
  Mail,
  ArrowRight,
  MessageSquareText,
} from "lucide-react";
import logoImg from "../../assets/Charted.jpeg";

const dropdownEase = [0.22, 1, 0.36, 1] as const;

export function Navbar() {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  return (
    <nav className="sticky top-0 z-40">
      <div className="bg-navy hidden md:block">
        <div className="container-page flex items-center justify-between h-9 text-[12px]">
          <div className="flex items-center gap-5 text-white/80">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" /> {PHONE}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5" /> {EMAIL}
            </a>
          </div>
          <div className="flex items-center gap-5 text-white/80">
            <Link to="/about-us" className="hover:text-white transition-colors">
              About Us
            </Link>
            <Link to="/contact-us" className="hover:text-white transition-colors">
              Contact
            </Link>
            <span className="text-[#FFB000] font-bold">
              &#9733;&#9733;&#9733;&#9733;&#9733; Client-Rated
            </span>
          </div>
        </div>
      </div>

      <div
        className={`bg-[#F4F4F4] border-b border-[#E5E5E5] transition-all duration-300 ${
          scrolled ? "shadow-lg shadow-navy/10" : ""
        }`}
      >
        <div className="container-page flex items-center justify-between h-[68px]">
          <Link to="/" className="flex items-center gap-2.5 group shrink-0">
            <img
              src={logoImg}
              alt="Chartered Solution"
              className="w-10 h-10 rounded-[5px] object-cover"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-[16px] font-bold text-navy tracking-tight">
                Chartered Solution
              </span>
              <span className="text-[9px] font-medium text-steel tracking-[0.18em] uppercase">
                CA · GST · Audit · Indore
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center h-full">
            {NAV_GROUPS.map((group) => (
              <div
                key={group.id}
                className="relative h-full flex items-center"
                onMouseEnter={() => setOpenGroup(group.id)}
                onMouseLeave={() => setOpenGroup(null)}
              >
                <button
                  className={`flex items-center gap-1 px-3.5 text-[13px] font-bold transition-colors h-full ${
                    openGroup === group.id ? "text-primary" : "text-navy/80 hover:text-primary"
                  }`}
                >
                  {group.label}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      openGroup === group.id ? "rotate-180 text-primary" : "text-steel"
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openGroup === group.id && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.18, ease: dropdownEase }}
                      className="absolute left-1/2 -translate-x-1/2 top-full pt-2"
                    >
                      <div className="bg-white border border-[#E5E5E5] shadow-xl shadow-navy/10 w-[420px]">
                        <div className="bg-primary px-5 py-3 flex items-center justify-between">
                          <div>
                            <div className="text-[13px] font-bold text-white">{group.label}</div>
                            <div className="text-[11px] text-white/70">{group.tagline}</div>
                          </div>
                          <Link
                            to="/services"
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-[#FFB000] hover:underline"
                          >
                            View all <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                        <div className="p-4 grid grid-cols-1 gap-0.5">
                          {group.links.map((l) => (
                            <Link
                              key={l.slug}
                              to="/services/$slug"
                              params={{ slug: l.slug }}
                              className="flex items-center gap-2 text-[13px] text-navy/75 hover:text-primary hover:bg-[#F4F4F4] rounded-[2px] px-3 py-1.5 transition-colors"
                            >
                              <ChevronRight className="w-3 h-3 text-primary/50 shrink-0" />
                              {l.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-bold text-navy hover:text-primary transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" /> {PHONE}
            </a>
            <EmberButton to="/contact-us">
              <MessageSquareText className="w-4 h-4" /> Get Quote
            </EmberButton>
          </div>

          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-[4px] hover:bg-black/5 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5 text-navy" />
            ) : (
              <Menu className="w-5 h-5 text-navy" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: dropdownEase }}
            className="lg:hidden border-b border-[#E5E5E5] bg-white overflow-hidden shadow-lg"
          >
            <div className="container-page py-4 space-y-1 max-h-[80vh] overflow-y-auto">
              {NAV_GROUPS.map((group) => {
                const isOpen = mobileGroup === group.id;
                return (
                  <div key={group.id}>
                    <button
                      onClick={() => setMobileGroup(isOpen ? null : group.id)}
                      className="flex items-center justify-between w-full text-[15px] font-bold text-navy py-2.5 px-3 rounded-[4px] hover:bg-[#F4F4F4] transition-colors"
                    >
                      {group.label}
                      <ChevronDown
                        className={`w-4 h-4 text-steel transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-3 pb-2 space-y-0.5">
                            {group.links.map((l) => (
                              <Link
                                key={l.slug}
                                to="/services/$slug"
                                params={{ slug: l.slug }}
                                onClick={() => setMobileOpen(false)}
                                className="block text-[14px] text-navy/70 hover:text-primary py-1.5 px-3 rounded-[4px] hover:bg-[#F4F4F4] transition-colors"
                              >
                                {l.label}
                              </Link>
                            ))}
                            <Link
                              to="/services"
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center gap-1 text-[13px] font-bold text-primary px-3 py-1.5"
                            >
                              View all services <ChevronRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
              <Link
                to="/about-us"
                onClick={() => setMobileOpen(false)}
                className="block text-[15px] font-bold text-navy py-2.5 px-3 rounded-[4px] hover:bg-[#F4F4F4] transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/contact-us"
                onClick={() => setMobileOpen(false)}
                className="block text-[15px] font-bold text-navy py-2.5 px-3 rounded-[4px] hover:bg-[#F4F4F4] transition-colors"
              >
                Contact
              </Link>
              <div className="pt-3">
                <EmberButton to="/contact-us" fullWidth>
                  <MessageSquareText className="w-4 h-4" /> Get Quote
                </EmberButton>
              </div>
              <div className="pt-2 pb-1 text-center text-[12px] text-steel">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-1.5 font-bold text-navy"
                >
                  <Phone className="w-3.5 h-3.5 text-primary" /> {PHONE}
                </a>{" "}
                ·{" "}
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-primary font-bold"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
