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
 * SERVICES - Business & Compliance Services dropdown (Section 5)
 * Restructured: removed old "Accounting, Tax & GST" and "Corporate Compliance" columns,
 * replaced with "Tax & GST" and "Accounting & Payroll" columns.
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

/** Tax & GST dropdown - 2 sub-groups: GST Services & Income Tax (aligned with Patron Accounting) */
export const TAX_GST_GROUPS: NavGroup[] = [
  {
    id: "gst-services",
    label: "GST Services",
    tagline: "Registration, returns, refunds & litigation",
    links: [
      { label: "GST Registration", slug: "gst-registration" },
      { label: "GST Return Filing", slug: "gst-return-filing" },
      { label: "GST Audit & Reconciliation", slug: "gst-audit-reconciliation" },
      { label: "GST Refund", slug: "gst-refund" },
      { label: "GST LUT Application", slug: "gst-lut-application" },
      { label: "GST Notice Reply", slug: "gst-notice-reply" },
      { label: "GST Assessment & Litigation", slug: "gst-assessment-litigation" },
      { label: "E-Invoicing Compliance", slug: "einvoicing-compliance" },
      { label: "E-Way Bill Compliance", slug: "ewaybill-compliance" },
    ],
  },
  {
    id: "income-tax",
    label: "Income Tax",
    tagline: "Returns, TDS, audits & planning",
    links: [
      { label: "Income Tax Return (ITR)", slug: "itr-filing" },
      { label: "Tax Planning", slug: "tax-planning" },
      { label: "TDS Return Filing", slug: "tds-return-filing" },
      { label: "TDS Compliance", slug: "tds-compliance" },
      { label: "Tax Audit (44AB)", slug: "tax-audit-44ab" },
      { label: "Income Tax Assessment & Notice", slug: "income-tax-assessment" },
      { label: "Notice Reply & Representation", slug: "notice-reply-representation" },
      { label: "Advance Tax Computation", slug: "advance-tax-computation" },
    ],
  },
];

/** Accounting & Payroll dropdown (aligned with Patron Accounting - 2 columns: Accounting & Payroll) */
export const ACCOUNTING_PAYROLL_GROUPS: NavGroup[] = [
  {
    id: "accounting",
    label: "Accounting",
    tagline: "Bookkeeping, statements & reconciliations",
    links: [
      { label: "Accounting & Bookkeeping Services", slug: "bookkeeping" },
      { label: "Backlog Bookkeeping Catch-Up", slug: "backlog-bookkeeping-catch-up" },
      { label: "Financial Statement Preparation", slug: "financial-statement-preparation" },
      { label: "Year-End Closing & Finalisation", slug: "year-end-closing-finalisation" },
      { label: "MIS Reporting", slug: "mis-reports" },
      { label: "Accounts Payable Outsourcing", slug: "accounts-payable-outsourcing" },
      { label: "Accounts Receivable Outsourcing", slug: "accounts-receivable-outsourcing" },
      { label: "Bank & Credit Card Reconciliation", slug: "bank-credit-card-reconciliation" },
    ],
  },
  {
    id: "payroll",
    label: "Payroll",
    tagline: "Processing, registrations & statutory returns",
    links: [
      { label: "Payroll Processing & Management", slug: "payroll-processing" },
      { label: "PF Registration", slug: "epfo-registration" },
      { label: "ESIC Registration", slug: "esic-registration" },
      { label: "PF Return", slug: "pf-return" },
      { label: "ESIC Return", slug: "esic-return" },
      { label: "Professional Tax Returns", slug: "professional-tax-registration" },
      { label: "Gratuity Compliance", slug: "gratuity-compliance" },
      { label: "EOR India (Employer of Record)", slug: "eor-india" },
    ],
  },
];

/** Corporate & ROC / MCA compliance links (moved out of the Accounting & Payroll dropdown - kept not deleted) */
export const CORPORATE_COMPLIANCE: NavLink[] = [
  { label: "AOC-4 Annual Filing", slug: "aoc-4-filing" },
  { label: "MGT-7 Annual Return Filing", slug: "mgt-7-filing" },
  { label: "Director KYC (DIR-3 KYC)", slug: "director-kyc" },
  { label: "Company Changes & Closure", slug: "company-changes-closure" },
  { label: "DPT-3 Return Filing", slug: "dpt-3-filing" },
  { label: "ADT-1 Auditor Appointment", slug: "adt-1-appointment" },
  { label: "Company Compliance Advisory", slug: "company-compliance-advisory" },
  { label: "LLP Compliance Advisory", slug: "llp-compliance-advisory" },
  { label: "ROC Compliance Support", slug: "roc-compliance-support" },
];

/**
 * REGULATORY & COMPLIANCE SERVICES - mega-menu (Section 4)
 * Merged from original Regulatory + Industries into a single dropdown.
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
  { label: "Digital Marketing", slug: "digital-marketing" },
];

/**
 * RESOURCES - dropdown (Section 13)
 * About is now the first item (moved from standalone nav link).
 */
export const RESOURCES: ResourceLink[] = [
  { label: "About", to: "/about-us", description: "Learn about Chartered Solution and our team." },
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
  "digital-marketing":
    "SEO, SEM, social media marketing, content strategy, and performance marketing for businesses looking to grow online.",
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
