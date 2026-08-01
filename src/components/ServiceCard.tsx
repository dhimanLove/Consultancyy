import { useState } from "react";
import { motion } from "framer-motion";
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
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="h-full"
      >
        <div
          className="relative flex h-full flex-col rounded-[10px] border border-[#E5E5E5] bg-white p-5 transition-all duration-200 ease-out
                     hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-navy/10
                     active:scale-[0.99]"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-primary/10 text-primary transition-colors duration-200">
              <ServiceIcon slug={service.slug} className="h-6 w-6" />
            </div>
            {cat && (
              <span className="inline-flex items-center gap-1 rounded-full bg-fog px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-steel">
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
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-[2px] bg-primary px-4 py-2.5 text-[12.5px] font-bold text-white transition-all duration-200 hover:bg-primary-70 active:scale-[0.97]"
            >
              <WhatsAppIcon className="h-4 w-4" /> Get Quote
            </button>
            <Link
              to="/services/$slug"
              params={{ slug: service.slug }}
              aria-label={`View details for ${service.title}`}
              className="inline-flex h-[38px] w-[38px] items-center justify-center rounded-[2px] border border-[#E5E5E5] text-primary transition-all duration-200 hover:border-primary hover:bg-primary hover:text-white active:scale-[0.95]"
            >
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </motion.div>

      <QuickEnquiry
        open={showEnquiry}
        onClose={() => setShowEnquiry(false)}
        preselected={service.slug}
      />
    </>
  );
}
