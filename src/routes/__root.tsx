import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-semibold text-navy" style={{ letterSpacing: "-0.03em" }}>
          404
        </h1>
        <h2 className="mt-4 text-xl font-semibold text-navy">Page not found</h2>
        <p className="mt-2 text-sm text-steel">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-[6px] bg-warm px-4 py-2 text-sm font-semibold text-navy-dark"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-navy">This page didn't load</h1>
        <p className="mt-2 text-sm text-steel">
          Something went wrong on our end. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-[6px] bg-warm px-4 py-2 text-sm font-semibold text-navy-dark"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-[6px] border border-border bg-white px-4 py-2 text-sm font-medium text-navy"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title:
          "Chartered Solution | Business Registration, GST, FSSAI, MSME & Compliance Services in Indore",
      },
      {
        name: "description",
        content:
          "Chartered Solution is a leading CA firm in Indore, offering expert business registration, GST services, FSSAI licenses, MSME/Udyam registration, Import Export Code (IEC), ITR filing, audit, CA certificates, and comprehensive business compliance solutions. Trusted professional services in Indore, Madhya Pradesh.",
      },
      {
        name: "keywords",
        content:
          "Chartered Solution, business registration Indore, GST registration Indore, FSSAI license Indore, MSME registration Indore, IEC code Indore, ITR filing Indore, audit services Indore, net worth certificate Indore, CA services Indore, Jitendra Malviya, compliance services, Sanchar Nagar Indore",
      },
      {
        property: "og:title",
        content: "Chartered Solution | Business Registration & Compliance Services Indore",
      },
      {
        property: "og:description",
        content:
          "Expert business registration, GST, FSSAI, MSME, ITR, audit, and compliance services in Indore, Madhya Pradesh. Call +91 88155 53899.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:site_name", content: "Chartered Solution" },
      { property: "og:url", content: "https://www.charteredsolution.com" },
      { property: "og:image", content: "https://www.charteredsolution.com/Charted.jpeg" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Chartered Solution | Business Registration & Compliance Services Indore",
      },
      {
        name: "twitter:description",
        content:
          "Business registration, GST, FSSAI, MSME, ITR, audit & compliance in Indore, MP. Call +91 88155 53899.",
      },
      {
        name: "twitter:image",
        content: "https://www.charteredsolution.com/Charted.jpeg",
      },
      { name: "geo.position", content: "22.7262239;75.919035" },
      { name: "geo.placename", content: "Indore, Madhya Pradesh" },
      { name: "geo.region", content: "IN-MP" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;600;700;800&display=swap",
      },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "canonical", href: "https://www.charteredsolution.com" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              name: "Chartered Solution",
              url: "https://www.charteredsolution.com",
              inLanguage: "en-IN",
              publisher: {
                "@type": "Organization",
                name: "Chartered Solution",
                url: "https://www.charteredsolution.com",
              },
            },
            {
              "@type": "ProfessionalService",
              name: "Chartered Solution",
              url: "https://www.charteredsolution.com",
              image: "https://www.charteredsolution.com/Charted.jpeg",
              logo: "https://www.charteredsolution.com/Charted.jpeg",
              telephone: "+91-88155-53899",
              email: "charteredgesolution@gmail.com",
              priceRange: "₹₹",
              sameAs: ["https://wa.me/918815553899", "https://www.charteredsolution.com"],
              address: {
                "@type": "PostalAddress",
                streetAddress: "152, Sanchar Nagar Ext., Goyal Nagar, Kanadia Road",
                addressLocality: "Indore",
                addressRegion: "Madhya Pradesh",
                postalCode: "452016",
                addressCountry: "IN",
              },
              geo: { "@type": "GeoCoordinates", latitude: 22.7262239, longitude: 75.919035 },
              openingHours: "Mo-Sa 09:30-18:30",
              founder: { "@type": "Person", name: "Jitendra Malviya", jobTitle: "Founder & CEO" },
              areaServed: [
                { "@type": "City", name: "Indore" },
                { "@type": "State", name: "Madhya Pradesh" },
                { "@type": "Country", name: "India" },
              ],
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFAB />
    </QueryClientProvider>
  );
}
