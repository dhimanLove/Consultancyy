import { Link } from "@tanstack/react-router";
import { BadgeCheck } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="bg-navy text-white text-[11px] font-medium py-[7px] text-center flex items-center justify-center gap-1.5">
      <BadgeCheck className="w-3 h-3 text-warm" />
      Business registration, GST, FSSAI, MSME &amp; compliance services &mdash;
      <Link
        to="/services"
        className="text-warm hover:underline underline-offset-2 ml-0.5 font-semibold"
      >
        Explore all &rarr;
      </Link>
    </div>
  );
}
