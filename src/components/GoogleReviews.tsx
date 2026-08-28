import { useEffect, useState } from "react";
import { Star, ExternalLink } from "lucide-react";

interface GoogleReviewData {
  rating: number;
  totalReviews: number;
  mapsUrl: string;
}

const FALLBACK_DATA: GoogleReviewData = {
  rating: 5.0,
  totalReviews: 0,
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Chartered+Solution+Pvt+Ltd+Indore",
};

function buildMapsUrl(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Chartered Solution Pvt Ltd Indore, Madhya Pradesh")}`;
}

function buildSearchUrl(): string {
  return `https://www.google.com/search?q=${encodeURIComponent("Chartered Solution Pvt Ltd reviews Indore")}`;
}

export function GoogleReviewsBadge({ className = "" }: { className?: string }) {
  const [data] = useState<GoogleReviewData>(() => ({
    ...FALLBACK_DATA,
    mapsUrl: buildMapsUrl(),
  }));

  useEffect(() => {
    // Google Places API integration point.
    // To enable live data:
    // 1. Set VITE_GOOGLE_PLACES_API_KEY in .env
    // 2. Set VITE_GOOGLE_PLACE_ID in .env (from your Google Business Profile)
    //
    // fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=rating,user_ratings_total&key=${API_KEY}`)
    //   .then(r => r.json())
    //   .then(d => {
    //     if (d.result) {
    //       setData(prev => ({
    //         ...prev,
    //         rating: d.result.rating ?? prev.rating,
    //         totalReviews: d.result.user_ratings_total ?? prev.totalReviews,
    //       }));
    //     }
    //   })
    //   .catch(() => {});
  }, []);

  return (
    <a
      href={buildSearchUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white/90 backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/25 active:scale-[0.97] ${className}`}
    >
      <span className="font-bold text-[10px] tracking-wide uppercase text-white/80">Google</span>
      <span className="flex items-center gap-px">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-2.5 h-2.5 text-[#FBBC05] fill-current" />
        ))}
      </span>
      <span className="font-bold text-white">{data.rating}</span>
      {data.totalReviews > 0 && <span className="text-white/60 text-[10px]">({data.totalReviews})</span>}
    </a>
  );
}

export function GoogleReviewsFooter({ className = "" }: { className?: string }) {
  return (
    <a
      href={buildSearchUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 text-[13px] font-semibold text-navy hover:text-navy-light transition-colors ${className}`}
    >
      <span className="text-[11px] font-bold text-[#4285F4]">Google</span>
      <span className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-3 h-3 text-[#FBBC05] fill-current" />
        ))}
      </span>
      <span className="font-bold">5.0</span>
      <ExternalLink className="w-3 h-3 text-steel" />
    </a>
  );
}
