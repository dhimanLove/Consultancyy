import { useState } from "react";
import { m } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { ServiceIcon } from "./ServiceIcon";
import { WhatsAppIcon } from "./WhatsAppIcon";
import type { Service } from "@/lib/services-data";
import { getCategoryForService } from "@/lib/services-data";
import { QuickEnquiry } from "./QuickEnquiry";

export function ServiceCard({ service }: { service: Service }) {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const cat = getCategoryForService(service.slug);

  return (
    <>
      <m.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="h-full"
      >
        <div
          className="group relative flex h-full flex-col rounded-[10px] border border-[#E5E5E5] bg-white p-5 transition-all duration-200 ease-out
                     hover:-translate-y-1 hover:border-warm/50 hover:shadow-xl hover:shadow-warm/10
                     active:scale-[0.99]"
        >
          <span
            aria-hidden
            className="absolute inset-x-5 top-0 h-[3px] rounded-b-md bg-gradient-to-r from-warm to-warm/40 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          />
          <div className="flex items-start justify-between gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-warm/10 text-warm-dark transition-colors duration-200 group-hover:bg-warm group-hover:text-navy-dark">
              <ServiceIcon slug={service.slug} className="h-6 w-6" />
            </div>
            {cat && (
              <span className="inline-flex items-center gap-1 rounded-full bg-warm/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-warm-dark">
                {cat.name}
              </span>
            )}
          </div>

          <h3 className="mt-4 text-[15px] font-bold leading-snug text-navy">
            <Link
              to="/services/$slug"
              params={{ slug: service.slug }}
              className="transition-colors duration-200 hover:text-primary"
            >
              {service.title}
            </Link>
          </h3>

          <p className="mt-2 flex-1 text-[12.5px] leading-relaxed text-steel">
            {service.descriptor}
          </p>

          <div className="mt-5 flex items-center gap-2 border-t border-[#F0F0F0] pt-4">
            <button
              onClick={() => setShowEnquiry(true)}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-[8px] bg-warm px-4 py-2.5 text-[12.5px] font-bold text-navy-dark transition-all duration-200 hover:bg-warm-dark active:scale-[0.97]"
            >
              <WhatsAppIcon className="h-4 w-4" /> Get Quote
            </button>
            <Link
              to="/services/$slug"
              params={{ slug: service.slug }}
              aria-label={`View details for ${service.title}`}
              className="inline-flex h-[38px] w-[38px] items-center justify-center rounded-[8px] border border-[#E5E5E5] text-primary transition-all duration-200 hover:border-warm hover:bg-warm hover:text-navy-dark active:scale-[0.95]"
            >
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </m.div>

      <QuickEnquiry
        open={showEnquiry}
        onClose={() => setShowEnquiry(false)}
        preselected={service.slug}
      />
    </>
  );
}
