import { Link } from "@tanstack/react-router";
import { SERVICE_CATEGORIES } from "@/lib/services-data";
import { ArrowUpRight } from "lucide-react";
import logoImg from "../../assets/Charted.jpeg";

export function Footer() {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src={logoImg}
                alt="Chartered Solution"
                className="w-28 h-25 rounded-xl object-cover ring-1 ring-white/10"
              />
              <span className="text-base font-bold text-white tracking-tight">
                Chartered Solution
              </span>
            </div>
            <p className="text-sm text-white/50 mt-4 max-w-[250px] leading-relaxed">
              End-to-end business registration, licensing, and compliance services for startups,
              SMEs, and entrepreneurs across India.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-warm">
              Quick Links
            </h3>
            <nav className="space-y-3 text-sm text-white/60">
              <Link to="/" className="block hover:text-warm transition-colors">
                Home
              </Link>
              <Link to="/services" className="block hover:text-warm transition-colors">
                Services
              </Link>
              <Link to="/about-us" className="block hover:text-warm transition-colors">
                About Us
              </Link>
              <Link to="/contact-us" className="block hover:text-warm transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-warm">
              Service Categories
            </h3>
            <nav className="space-y-2.5 text-sm text-white/60">
              {SERVICE_CATEGORIES.map((cat) => (
                <Link
                  key={cat.id}
                  to="/services"
                  className="block hover:text-warm transition-colors"
                >
                  {cat.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-warm">
              Contact
            </h3>
            <address className="space-y-3 text-sm text-white/60 not-italic">
              <p className="leading-relaxed">
                152, Sanchar Nagar Ext., Goyal Nagar,
                <br />
                Kanadia Road, Indore,
                <br />
                Madhya Pradesh 452016
              </p>
              <a href="tel:+918815553899" className="block hover:text-warm transition-colors">
                +91 88155 53899
              </a>
              <a
                href="mailto:charteredgesolution@gmail.com"
                className="block hover:text-warm transition-colors"
              >
                charteredgesolution@gmail.com
              </a>
              <a
                href="https://www.charteredsolution.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:text-warm transition-colors"
              >
                www.charteredsolution.com <ArrowUpRight className="w-3 h-3" />
              </a>
            </address>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} Chartered Solution Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-warm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-warm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
