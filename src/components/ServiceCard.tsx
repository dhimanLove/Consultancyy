import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardAction,
} from "@/components/ui/card";
import type { Service } from "@/lib/services-data";
import { getCategoryForService, getServiceImage } from "@/lib/services-data";
import { QuickEnquiry } from "./QuickEnquiry";

export function ServiceCard({ service }: { service: Service }) {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [imgOk, setImgOk] = useState(true);
  const cat = getCategoryForService(service.slug);
  const imgSrc = getServiceImage(service.slug);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Card
          onClick={() => setShowEnquiry(true)}
          className="relative mx-auto w-full max-w-sm pt-0 cursor-pointer group
                     transition-all duration-200 ease-out
                     hover:-translate-y-0.5 hover:shadow-lg
                     active:scale-[0.98]"
        >
          <div className="relative h-[140px] w-full overflow-hidden rounded-t-xl bg-gray-100">
            {imgOk ? (
              <img
                src={imgSrc}
                alt={service.title}
                loading="lazy"
                onError={() => setImgOk(false)}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-[#F9F5EF]">
                <span className="text-[28px] font-bold text-warm/40">
                  {service.title.charAt(0)}
                </span>
              </div>
            )}
          </div>
          <CardHeader className="p-4 pb-2">
            {cat && (
              <CardAction>
                <Badge
                  variant="secondary"
                  className="bg-warm/10 text-warm hover:bg-warm/15 border-0 text-[10px] font-medium px-2 py-0.5"
                >
                  {cat.name}
                </Badge>
              </CardAction>
            )}
            <CardTitle className="text-[15px] font-bold text-navy leading-snug group-hover:text-warm transition-colors duration-200">
              {service.title}
            </CardTitle>
            <CardDescription className="text-[12px] leading-relaxed mt-1" style={{ color: "#555" }}>
              {service.descriptor}
            </CardDescription>
          </CardHeader>
          <CardFooter className="p-4 pt-0">
            <Button className="w-full rounded-lg text-[12px] font-semibold bg-navy text-white hover:bg-navy/90 active:scale-[0.97] transition-all h-9">
              Tap to enquire
            </Button>
          </CardFooter>
        </Card>
      </motion.div>

      <QuickEnquiry
        open={showEnquiry}
        onClose={() => setShowEnquiry(false)}
        preselected={service.slug}
      />
    </>
  );
}
