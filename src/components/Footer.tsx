import { Link } from "@tanstack/react-router";
import { NAV_GROUPS, PHONE, PHONE_HREF, EMAIL, WHATSAPP_HREF } from "@/lib/nav";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import logoImg from "../../assets/Charted.jpeg";

export function Footer() {
  return (
    <footer className="bg-[#3C3C3C] text-white">
      <div className="container-page pt-16 pb-10">
        <div className="grid gap-10 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src={logoImg}
                alt="Chartered Solution"
                className="w-24 h-22 rounded-[5px] object-cover ring-1 ring-white/20"
              />
              <div>
                <span className="text-[17px] font-bold text-white tracking-tight block">
                  Chartered Solution
                </span>
                <span className="text-[10px] text-white/50 uppercase tracking-[0.18em]">
                  CA · GST · Audit · Indore
                </span>
              </div>
            </div>
            <p className="text-[13px] text-white/55 mt-4 leading-relaxed max-w-[300px]">
              End-to-end business registration, licensing, certification, and compliance services
              for startups, SMEs, and entrepreneurs across Indore, Madhya Pradesh, and India.
            </p>
            <div className="mt-5 space-y-2.5 text-[13px] text-white/65">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FFB000] shrink-0 mt-0.5" />
                152, Sanchar Nagar Ext., Goyal Nagar, Kanadia Road, Indore, Madhya Pradesh 452016
              </p>
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FFB000] shrink-0" /> {PHONE}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#FFB000] shrink-0" /> {EMAIL}
              </a>
            </div>
          </div>

          {NAV_GROUPS.map((group) => (
            <div key={group.id}>
              <h3 className="mb-4 text-[12px] font-bold uppercase tracking-[0.14em] text-[#FFB000]">
                {group.label}
              </h3>
              <nav className="space-y-2 text-[13px] text-white/55">
                {group.links.slice(0, 7).map((l) => (
                  <Link
                    key={l.slug}
                    to="/services/$slug"
                    params={{ slug: l.slug }}
                    className="block hover:text-[#FFB000] transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
                <Link
                  to="/services"
                  className="block text-[#FFB000] font-bold hover:underline transition-colors"
                >
                  View all services
                </Link>
              </nav>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#262626]">
        <div className="container-page py-5 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-white/45">
          <p>
            &copy; {new Date().getFullYear()} Chartered Solution. All rights reserved. ·
            <span className="hidden md:inline"> Chartered Accountant services in Indore, MP.</span>
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            <Link to="/about-us" className="hover:text-white transition-colors">
              About Us
            </Link>
            <Link to="/contact-us" className="hover:text-white transition-colors">
              Contact
            </Link>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <WhatsAppIcon className="w-3 h-3" /> WhatsApp
            </a>
            <a
              href="https://www.charteredsolution.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              www.charteredsolution.com <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
