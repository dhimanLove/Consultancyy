import { useState, useRef, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { EmberButton } from "./EmberButton";
import { SERVICES_BY_CATEGORY } from "@/lib/services-data";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import logoImg from "../../assets/Charted.jpeg";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services", dropdown: true },
  { label: "About Us", to: "/about-us" },
  { label: "Contact", to: "/contact-us" },
];

const dropdownEase = [0.22, 1, 0.36, 1] as const;

export function Navbar() {
  const [openDrop, setOpenDrop] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!openDrop) return;
    const handle = (e: MouseEvent) => {
      if (
        dropRef.current &&
        !dropRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setOpenDrop(false);
      }
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [openDrop]);

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container-page flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2.5 group shrink-0">
          <img src={logoImg} alt="Chartered Solution" className="w-9 h-9 rounded-lg object-cover" />
          <div className="flex flex-col leading-tight">
            <span className="text-base font-bold text-navy tracking-tight">Chartered Solution</span>
            <span className="text-[9px] font-medium text-steel tracking-wider uppercase">
              Indore
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {NAV.map((item) =>
            item.dropdown ? (
              <div key={item.to} className="relative" ref={triggerRef}>
                <button
                  onClick={() => setOpenDrop((v) => !v)}
                  onMouseEnter={() => setOpenDrop(true)}
                  className="flex items-center gap-1 px-4 py-2 text-[13px] font-medium text-navy/80 hover:text-warm transition-colors rounded-[8px] hover:bg-fog"
                >
                  {item.label}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${openDrop ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {openDrop && (
                    <motion.div
                      ref={dropRef}
                      initial={{ opacity: 0, y: -4, scaleY: 0.96 }}
                      animate={{ opacity: 1, y: 0, scaleY: 1 }}
                      exit={{ opacity: 0, y: -4, scaleY: 0.96 }}
                      transition={{ duration: 0.18, ease: dropdownEase }}
                      style={{ transformOrigin: "top center" }}
                      className="absolute left-1/2 -translate-x-1/2 top-full pt-2"
                    >
                      <div className="bg-white border border-border rounded-[12px] shadow-xl shadow-navy/8 w-[700px] max-h-[72vh] overflow-y-auto">
                        <div className="p-3 grid grid-cols-2 gap-1">
                          {SERVICES_BY_CATEGORY.map(({ category, services }) => (
                            <div
                              key={category.id}
                              className="rounded-[8px] p-2.5 hover:bg-fog/80 transition-colors group/cat"
                            >
                              <Link
                                to="/services"
                                className="text-[10px] font-bold text-warm uppercase tracking-[0.12em] block mb-1.5 hover:text-warm-dark transition-colors"
                              >
                                {category.name}
                              </Link>
                              <div className="space-y-0.5">
                                {services.slice(0, 4).map((s) => (
                                  <Link
                                    key={s.slug}
                                    to="/services/$slug"
                                    params={{ slug: s.slug }}
                                    className="block text-[13px] text-navy/70 hover:text-navy hover:bg-white rounded-[6px] px-2 py-1 transition-colors truncate"
                                  >
                                    {s.title}
                                  </Link>
                                ))}
                              </div>
                              <Link
                                to="/services"
                                className="inline-flex items-center gap-0.5 text-[11px] text-warm font-medium mt-1 px-2 py-0.5 hover:text-warm-dark transition-colors"
                              >
                                View all {services.length} <ChevronRight className="w-3 h-3" />
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className="px-4 py-2 text-[13px] font-medium text-navy/80 hover:text-warm transition-colors rounded-[8px] hover:bg-fog"
                activeProps={{ className: "text-warm font-semibold" }}
              >
                {item.label}
              </Link>
            ),
          )}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <EmberButton to="/contact-us" variant="navy">
            Book a consultation
          </EmberButton>
        </div>

        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-fog transition-colors"
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

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: dropdownEase }}
            className="lg:hidden border-t border-border overflow-hidden shadow-lg"
          >
            <div className="container-page py-4 space-y-1">
              {NAV.map((n) =>
                n.dropdown ? (
                  <div key={n.to}>
                    <button
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      className="flex items-center justify-between w-full text-[15px] font-medium text-navy py-2 px-3 rounded-[8px] hover:bg-fog transition-colors"
                    >
                      {n.label}
                      <ChevronDown
                        className={`w-4 h-4 text-steel transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-3 pt-1 pb-2 space-y-2">
                            {SERVICES_BY_CATEGORY.map(({ category, services }) => (
                              <div
                                key={category.id}
                                className="border-l-2 border-warm/20 pl-3 py-1"
                              >
                                <Link
                                  to="/services"
                                  onClick={() => setMobileOpen(false)}
                                  className="text-[12px] font-bold text-warm uppercase tracking-wider block mb-1"
                                >
                                  {category.name}
                                </Link>
                                <div className="space-y-0.5">
                                  {services.slice(0, 4).map((s) => (
                                    <Link
                                      key={s.slug}
                                      to="/services/$slug"
                                      params={{ slug: s.slug }}
                                      onClick={() => setMobileOpen(false)}
                                      className="block text-[14px] text-navy/70 hover:text-navy py-1 transition-colors"
                                    >
                                      {s.title}
                                    </Link>
                                  ))}
                                  {services.length > 4 && (
                                    <Link
                                      to="/services"
                                      onClick={() => setMobileOpen(false)}
                                      className="block text-[12px] text-warm font-medium py-0.5"
                                    >
                                      View all {services.length} &rarr;
                                    </Link>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={n.to}
                    to={n.to}
                    onClick={() => setMobileOpen(false)}
                    className="block text-[15px] font-medium text-navy py-2 px-3 rounded-[8px] hover:bg-fog transition-colors"
                  >
                    {n.label}
                  </Link>
                ),
              )}
              <div className="pt-3">
                <EmberButton to="/contact-us" variant="navy" fullWidth>
                  Book a consultation
                </EmberButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
