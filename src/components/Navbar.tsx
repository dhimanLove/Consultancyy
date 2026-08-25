import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { AnimatePresence, m, useScroll, useMotionValueEvent, type Variants } from "framer-motion";
import {
  PHONE,
  PHONE_HREF,
  EMAIL,
  SERVICES_GROUPS,
  REGULATORY_SERVICES,
  INDUSTRIES,
  RESOURCES,
} from "@/lib/nav";
import { Menu, X, ChevronDown, ChevronRight, Phone, Mail, ArrowRight, Star } from "lucide-react";
import logoImg from "../../assets/logo-96.webp";

// --- Optimized Animation Variants ---
const dropVars: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.18, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, y: 8, scale: 0.99, transition: { duration: 0.12, ease: "easeOut" } },
};

const accordionVars: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
};

const linkCls =
  "group flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] font-medium text-navy/80 hover:text-primary hover:bg-slate-50 transition-all";

export function Navbar() {
  const { pathname } = useLocation();
  const { scrollY } = useScroll();

  const [openId, setOpenId] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 20));

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMenu = () => {
    setMobileOpen(false);
    setOpenId(null);
  };

  return (
    <nav className="sticky top-0 z-50 w-full">
      {/* Top Utility Bar */}
      <div className="hidden md:flex bg-navy border-b border-white/10 items-center justify-between h-9 px-4 lg:px-8 text-[12px] text-white/70">
        <div className="flex gap-6 font-medium">
          <a href={PHONE_HREF} className="flex items-center gap-1.5 hover:text-white">
            <Phone className="w-3.5 h-3.5 text-primary-light" /> {PHONE}
          </a>
          <a href={`mailto:${EMAIL}`} className="flex items-center gap-1.5 hover:text-white">
            <Mail className="w-3.5 h-3.5 text-primary-light" /> {EMAIL}
          </a>
        </div>
        <div className="flex items-center gap-1.5 bg-white/10 px-3 py-0.5 rounded-full text-[#FFB000] font-bold">
          <Star className="w-3 h-3 fill-current" /> 5.0 Client-Rated Excellence
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`transition-all duration-300 border-b ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-slate-200" : "bg-white border-transparent"}`}
      >
        <div className="container-page !max-w-[1320px] flex items-center justify-between h-16 md:h-[72px] px-4 lg:px-8">
          {/* Logo */}
          <Link to="/" onClick={closeMenu} className="flex items-center gap-3 group shrink-0">
            <img
              src={logoImg}
              alt="Logo"
              width={40}
              height={40}
              decoding="async"
              className="w-10 h-10 rounded-xl ring-1 ring-black/5 object-cover transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-[17px] font-extrabold text-navy leading-tight">
                Charted Solutions Pvt. Ltd
              </span>
              <span className="text-[9.5px] font-semibold text-slate-500 tracking-[0.12em] uppercase">
                Business · Regulatory · Growth
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center h-full gap-3">
            <NavLink to="/" active={pathname === "/"}>
              Home
            </NavLink>

            <Dropdown
              id="services"
              title="Business Services"
              align="left"
              desc="Registration, tax & advisory"
              active={pathname.includes("/services")}
              openId={openId}
              setOpenId={setOpenId}
              width="w-[780px]"
              action={{ to: "/services", label: "View All" }}
            >
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                {SERVICES_GROUPS.map((g) => (
                  <div key={g.id} className={g.id === "financial-advisory" ? "col-span-2" : ""}>
                    <div className="text-[11px] font-bold uppercase text-primary mb-2 px-3">
                      {g.label}
                    </div>
                    {g.links.map((l) => (
                      <DropdownLink
                        key={l.slug}
                        to={`/services/${l.slug}`}
                        onClick={() => setOpenId(null)}
                      >
                        {l.label}
                      </DropdownLink>
                    ))}
                  </div>
                ))}
              </div>
            </Dropdown>

            <Dropdown
              id="reg"
              title="Regulatory"
              align="center"
              desc="Governance & compliance"
              active={REGULATORY_SERVICES.some((r) => pathname === `/services/${r.slug}`)}
              openId={openId}
              setOpenId={setOpenId}
              width="w-[500px]"
            >
              <div className="grid grid-cols-2 gap-1">
                {REGULATORY_SERVICES.map((l) => (
                  <DropdownLink
                    key={l.slug}
                    to={`/services/${l.slug}`}
                    onClick={() => setOpenId(null)}
                  >
                    {l.label}
                  </DropdownLink>
                ))}
              </div>
            </Dropdown>

            <Dropdown
              id="ind"
              title="Industries"
              align="center"
              desc="Tailored key vertical solutions"
              active={pathname.includes("/industries")}
              openId={openId}
              setOpenId={setOpenId}
              width="w-[300px]"
            >
              {INDUSTRIES.map((i) => (
                <DropdownLink
                  key={i.slug}
                  to="/industries"
                  hash={i.slug}
                  onClick={() => setOpenId(null)}
                >
                  {i.label}
                </DropdownLink>
              ))}
            </Dropdown>

            <Dropdown
              id="res"
              title="Resources"
              align="right"
              desc="Guides, calculators & calendars"
              active={pathname.includes("/resources")}
              openId={openId}
              setOpenId={setOpenId}
              width="w-[300px]"
            >
              {RESOURCES.map((r) => (
                <DropdownLink key={r.label} to={r.to} onClick={() => setOpenId(null)}>
                  {r.label}
                </DropdownLink>
              ))}
            </Dropdown>

            <NavLink to="/about-us" active={pathname === "/about-us"}>
              About
            </NavLink>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <CTAButton />
            </div>
            <button
              className="xl:hidden p-2 rounded-full border border-slate-200 bg-slate-50 text-navy hover:bg-slate-100 active:scale-95 transition-all"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <m.div
            variants={accordionVars}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="xl:hidden border-b border-slate-200 bg-white shadow-xl overflow-hidden origin-top"
          >
            <div className="max-h-[calc(100vh-80px)] overflow-y-auto p-4 space-y-1">
              <MobileLink to="/" onClick={closeMenu}>
                Home
              </MobileLink>
              <MobileLink to="/services" onClick={closeMenu}>
                Business Services
              </MobileLink>
              <MobileLink to="/services" onClick={closeMenu}>
                Regulatory
              </MobileLink>
              <MobileLink to="/industries" onClick={closeMenu}>
                Industries
              </MobileLink>
              <MobileLink to="/resources" onClick={closeMenu}>
                Resources
              </MobileLink>
              <MobileLink to="/about-us" onClick={closeMenu}>
                About
              </MobileLink>
              <MobileLink to="/contact-us" onClick={closeMenu}>
                Contact
              </MobileLink>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// --- Layout & Nav Components ---

function NavLink({
  to,
  active,
  children,
}: {
  to: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className={`relative flex items-center px-5 text-[13px] font-bold tracking-wide h-full transition-colors ${
        active ? "text-primary" : "text-navy hover:text-primary"
      }`}
    >
      {active && (
        <m.div
          layoutId="nav-active-pill"
          className="absolute inset-y-2 left-1 right-1 rounded-full bg-primary/[0.08]"
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </Link>
  );
}

function Dropdown({
  id,
  title,
  align = "center",
  desc,
  active,
  openId,
  setOpenId,
  width,
  action,
  children,
}: {
  id: string;
  title: string;
  align?: "left" | "center" | "right";
  desc: string;
  active: boolean;
  openId: string | null;
  setOpenId: (id: string | null) => void;
  width: string;
  action?: { to: string; label: string };
  children: React.ReactNode;
}) {
  const isOpen = openId === id;
  const aligns = { left: "left-0", center: "left-1/2 -translate-x-1/2", right: "right-0" };

  return (
    <div
      className="relative h-full flex items-center"
      onMouseEnter={() => setOpenId(id)}
      onMouseLeave={() => setOpenId(null)}
    >
      <button
        className={`relative flex items-center gap-1 px-5 text-[13px] font-bold tracking-wide h-full transition-colors ${
          isOpen || active ? "text-primary" : "text-navy hover:text-primary"
        }`}
      >
        {(isOpen || active) && (
          <m.div
            layoutId="nav-active-pill"
            className="absolute inset-y-2 left-1 right-1 rounded-full bg-primary/[0.08]"
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
        <span className="relative z-10 flex items-center gap-1">
          {title}{" "}
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <m.div
            variants={dropVars}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`absolute ${aligns[align]} top-[calc(100%+4px)] z-50 ${width}`}
          >
            <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[75vh]">
              <div className="relative bg-gradient-to-br from-primary via-primary-70 to-navy px-6 py-4 flex justify-between items-center shrink-0 overflow-hidden">
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10 blur-xl pointer-events-none" />
                <div className="relative">
                  <div className="text-[14px] font-extrabold text-white">{title}</div>
                  <div className="text-[12px] text-white/70 font-medium mt-0.5">{desc}</div>
                </div>
                {action && (
                  <Link
                    to={action.to}
                    onClick={() => setOpenId(null)}
                    className="relative px-4 py-1.5 rounded-full bg-white text-primary hover:bg-warm hover:text-navy text-[12px] font-bold transition-all shadow-sm"
                  >
                    {action.label}
                  </Link>
                )}
              </div>
              <div className="p-4 overflow-y-auto">{children}</div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DropdownLink({
  to,
  hash,
  onClick,
  children,
}: {
  to: string;
  hash?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link to={to} hash={hash} onClick={onClick} className={linkCls}>
      <div className="w-6 h-6 rounded-md bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
        <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-primary transition-colors" />
      </div>
      {children}
    </Link>
  );
}

// --- Mobile Components ---

function MobileLink({
  to,
  hash,
  onClick,
  sub,
  children,
}: {
  to: string;
  hash?: string;
  onClick?: () => void;
  sub?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      hash={hash}
      onClick={onClick}
      className={`block text-navy hover:text-primary hover:bg-slate-100 rounded-lg transition-colors ${
        sub ? "text-[13px] font-medium py-2 px-4" : "text-[14px] font-bold py-3.5 px-3.5"
      }`}
    >
      {children}
    </Link>
  );
}

// --- Sleek Animated Pill CTA ---

function CTAButton() {
  return (
    <Link
      to="/contact-us"
      className="relative group overflow-hidden flex items-center justify-center h-10 px-6 rounded-full bg-navy border border-navy shadow-sm transition-all active:scale-95"
    >
      <span className="absolute inset-0 w-full h-full bg-primary scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center rounded-full" />
      <span className="relative z-10 flex items-center gap-2 text-[13px] font-bold text-white transition-colors duration-300">
        Contact Us
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
      </span>
    </Link>
  );
}
