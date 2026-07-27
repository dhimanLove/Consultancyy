import { Link } from "@tanstack/react-router";
import type { ComponentProps } from "react";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  to?: string;
}

interface Props {
  crumbs: Crumb[];
  title: string;
  subtext?: string;
}

export function PageHeader({ crumbs, title, subtext }: Props) {
  return (
    <section className="bg-fog py-16 md:py-20">
      <div className="container-page">
        <div className="flex items-center gap-1.5 text-[12px] text-steel">
          {crumbs.map((c, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {c.to ? (
                <Link
                  to={c.to as ComponentProps<typeof Link>["to"]}
                  className="hover:text-navy transition-colors"
                >
                  {c.label}
                </Link>
              ) : (
                <span className="text-navy font-medium">{c.label}</span>
              )}
              {i < crumbs.length - 1 && <ChevronRight className="w-3 h-3 text-mist" />}
            </span>
          ))}
        </div>
        <h1 className="text-[34px] md:text-[46px] font-bold text-navy leading-[1.12] mt-4 tracking-tight">
          {title}
        </h1>
        {subtext && (
          <p className="text-[15px] text-steel mt-3 max-w-[600px] leading-relaxed">{subtext}</p>
        )}
      </div>
    </section>
  );
}
