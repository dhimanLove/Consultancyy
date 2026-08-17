export interface NavLink {
  label: string;
  slug: string;
}

export interface NavGroup {
  id: string;
  label: string;
  tagline: string;
  links: NavLink[];
}

export interface ResourceLink {
  label: string;
  to: string;
  description: string;
}

export const PHONE = "+91 88155 53899";
export const PHONE_HREF = "tel:+918815553899";
export const WHATSAPP_HREF = "https://wa.me/918815553899";
export const WHATSAPP_DISPLAY = "+91 88155 53899";
export const EMAIL = "charteredgesolution@gmail.com";
export const ADDRESS =
  "152, Sanchar Nagar Extension, Goyal Nagar, Kanadia Road, Indore, Madhya Pradesh 452016, India";

/**
 * SERVICES — Business & Compliance Services dropdown (Section 5)
 */
export const SERVICES_GROUPS: NavGroup[] = [
  {
    id: "business-registration",
    label: "Business Registration",
    tagline: "Register & incorporate your business",
    links: [
      { label: "Private Limited Company", slug: "private-limited-company-registration" },
      { label: "LLP Registration", slug: "llp-registration" },
      { label: "One Person Company (OPC)", slug: "one-person-company-registration" },
      { label: "Partnership Firm", slug: "partnership-firm-registration" },
      { label: "Proprietorship", slug: "proprietorship-registration" },
      { label: "Section 8 Company", slug: "section-8-company-registration" },
      { label: "NGO / Trust / Society", slug: "ngo-registration" },
      { label: "Startup India Registration", slug: "startup-india-registration" },
    ],
  },
  {
    id: "registrations",
    label: "Registrations",
    tagline: "Licences, identities & statutory registrations",
    links: [
      { label: "GST Registration", slug: "gst-registration" },
      { label: "MSME / Udyam Registration", slug: "msme-registration" },
      { label: "PAN Application", slug: "pan-application" },
      { label: "TAN Application", slug: "tan-application" },
      { label: "Digital Signature Certificate", slug: "dsc-registration" },
      { label: "Import Export Code (IEC)", slug: "import-export-code" },
      { label: "PTEC / PTRC", slug: "professional-tax-registration" },
      { label: "EPFO Registration", slug: "epfo-registration" },
      { label: "ESIC Registration", slug: "esic-registration" },
      { label: "FSSAI Registration", slug: "fssai-registration" },
    ],
  },
  {
    id: "accounting-tax-gst",
    label: "Accounting, Tax & GST",
    tagline: "Books, returns & filings",
    links: [
      { label: "Accounting & Bookkeeping", slug: "bookkeeping" },
      { label: "GST Return Filing", slug: "gst-return-filing" },
      { label: "Income Tax Return (ITR)", slug: "itr-filing" },
      { label: "TDS Return Filing", slug: "tds-return-filing" },
      { label: "Payroll Accounting", slug: "payroll-accounting" },
      { label: "Tax Audit (44AB)", slug: "tax-audit-44ab" },
      { label: "MIS Reports", slug: "mis-reports" },
      { label: "Financial Statements", slug: "financial-statement-preparation" },
    ],
  },
  {
    id: "corporate-compliance",
    label: "Corporate Compliance",
    tagline: "ROC filings & company law compliance",
    links: [
      { label: "ROC Compliance Support", slug: "roc-compliance-support" },
      { label: "AOC-4 Annual Filing", slug: "aoc-4-filing" },
      { label: "MGT-7 Annual Return", slug: "mgt-7-filing" },
      { label: "Director KYC (DIR-3)", slug: "director-kyc" },
      { label: "DPT-3 Filing", slug: "dpt-3-filing" },
      { label: "ADT-1 Auditor Appointment", slug: "adt-1-appointment" },
      { label: "Company Changes & Closure", slug: "company-changes-closure" },
    ],
  },
  {
    id: "financial-advisory",
    label: "Financial & Business Advisory",
    tagline: "Reports, plans & funding readiness",
    links: [
      { label: "Project Reports", slug: "project-report-preparation" },
      { label: "CMA Reports", slug: "cma-report" },
      { label: "Loan Documentation", slug: "loan-documentation" },
      { label: "Business Plans", slug: "business-plan-preparation" },
      { label: "Financial Planning", slug: "financial-planning" },
      { label: "Business Valuation", slug: "business-valuation" },
      { label: "Funding Readiness", slug: "funding-readiness" },
    ],
  },
];

/**
 * REGULATORY & COMPLIANCE SERVICES — mega-menu (Section 4)
 */
export const REGULATORY_SERVICES: NavLink[] = [
  { label: "ISO Consultancy & Regulatory Services", slug: "iso-consultancy" },
  { label: "Cosmetics Regulatory & Compliance Services", slug: "cosmetics-regulatory" },
  { label: "Medical Device Regulatory & Compliance Services", slug: "medical-device-regulatory" },
  { label: "Solar Consultancy & Regulatory Services", slug: "solar-consultancy" },
  { label: "E-Commerce & Marketplace Services", slug: "ecommerce-services" },
  { label: "Startup India, Funding & Compliance Services", slug: "startup-funding-services" },
  { label: "Import, Export & Product Compliance Services", slug: "import-export-compliance" },
  { label: "Food & FSSAI Regulatory Services", slug: "food-fssai-services" },
  { label: "Digital Marketing & Growth Services", slug: "digital-marketing-services" },
];

/**
 * INDUSTRIES — dropdown (Section 11)
 */
export const INDUSTRIES: { label: string; slug: string }[] = [
  { label: "Startups & Founders", slug: "startups-founders" },
  { label: "MSMEs & SMEs", slug: "msmes-smes" },
  { label: "Manufacturers", slug: "manufacturers" },
  { label: "Solar & Renewable Energy Companies", slug: "solar-renewable" },
  { label: "Medical Device Companies", slug: "medical-device-companies" },
  { label: "Cosmetic & Personal Care Brands", slug: "cosmetic-brands" },
  { label: "Food Businesses", slug: "food-businesses" },
  { label: "E-Commerce & D2C Brands", slug: "ecommerce-d2c" },
  { label: "Importers & Exporters", slug: "importers-exporters" },
  { label: "B2B Companies", slug: "b2b-companies" },
  { label: "Corporates & Institutions", slug: "corporates-institutions" },
];

/**
 * RESOURCES — dropdown (Section 13)
 */
export const RESOURCES: ResourceLink[] = [
  { label: "Blogs", to: "/insights", description: "Articles and insights from our team." },
  {
    label: "Business Guides",
    to: "/resources#business-guides",
    description: "Step-by-step guides for registrations and compliance.",
  },
  {
    label: "Regulatory Updates",
    to: "/resources#regulatory-updates",
    description: "Latest changes in tax, GST and regulatory rules.",
  },
  {
    label: "Government Portal Guides",
    to: "/resources#government-portal-guides",
    description: "How to use MCA, GST, FoSCoS and Income Tax portals.",
  },
  {
    label: "Document Checklists",
    to: "/resources#document-checklists",
    description: "Ready-to-use checklists for every service.",
  },
  {
    label: "FAQs",
    to: "/resources#faqs",
    description: "Answers to the questions clients ask us most.",
  },
  {
    label: "Compliance Calendar",
    to: "/resources/compliance-calendar",
    description: "GST, TDS, Income Tax, ROC, PF/ESIC deadlines.",
  },
  {
    label: "Free Tools",
    to: "/resources/free-tools",
    description: "Calculators and selectors (coming soon).",
  },
];

export const INDUSTRY_ITEM_DESCRIPTIONS: Record<string, string> = {
  "startups-founders":
    "Incorporation, Startup India recognition, funding readiness, and early-stage compliance for founders building their first venture.",
  "msmes-smes":
    "Udyam registration, GST, accounting, tax filings, and licensing that keep growing small and medium businesses compliant.",
  manufacturers:
    "Licensing, GST, ISO and product compliance, and financial reporting for manufacturers scaling production and distribution.",
  "solar-renewable":
    "Solar vendor & DISCOM registration, PM Surya Ghar support, net metering, and business setup for solar companies.",
  "medical-device-companies":
    "CDSCO licences, US FDA and EU MDR compliance, and ISO 13485 certification for medical device businesses.",
  "cosmetic-brands":
    "Cosmetic manufacturing licences, CDSCO import registration, labelling, and product compliance for beauty brands.",
  "food-businesses":
    "FSSAI registration and licences, labelling, testing, and FSMS certification for every kind of food business.",
  "ecommerce-d2c":
    "Marketplace onboarding, catalogues and listings, brand & barcode registration, and e-commerce marketing for D2C brands.",
  "importers-exporters":
    "IEC, DGFT licensing, certificates of origin, and product compliance for cross-border trade.",
  "b2b-companies":
    "Business registration, GST, ROC compliance, and lead generation that help B2B companies win and serve clients.",
  "corporates-institutions":
    "Audit, certificates, filings, and advisory for corporates, institutions, and established organisations.",
};

export const CONTACT_SERVICE_OPTIONS = [
  "Business Registration",
  "GST/Tax",
  "Accounting",
  "ISO",
  "Medical Devices",
  "Cosmetics",
  "Solar",
  "Food/FSSAI",
  "Import/Export",
  "E-Commerce",
  "Startup/Funding",
  "Digital Marketing",
];

export const BUSINESS_TYPES = [
  "Startup",
  "MSME / SME",
  "Manufacturer",
  "Solar / Renewable Energy Company",
  "Medical Device Company",
  "Cosmetic & Personal Care Brand",
  "Food Business",
  "E-Commerce / D2C Brand",
  "Importer / Exporter",
  "B2B Company",
  "Corporation / Institution",
  "Individual",
  "Other",
];
