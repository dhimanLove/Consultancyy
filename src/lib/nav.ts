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

export const NAV_GROUPS: NavGroup[] = [
  {
    id: "start",
    label: "Start Business",
    tagline: "Register & launch your venture",
    links: [
      { label: "MSME / Udyam Registration", slug: "msme-registration" },
      { label: "FSSAI Registration", slug: "fssai-registration" },
      { label: "Startup India Registration", slug: "startup-india-registration" },
      { label: "Import Export Code (IEC)", slug: "import-export-code" },
      { label: "Shop & Establishment Registration", slug: "shop-establishment-registration" },
      { label: "Professional Tax Registration", slug: "professional-tax-registration" },
      { label: "PAN Application", slug: "pan-application" },
      { label: "TAN Application", slug: "tan-application" },
      { label: "Business Setup Consultancy", slug: "business-setup-consultancy" },
    ],
  },
  {
    id: "protect",
    label: "Protect Business",
    tagline: "Certificates & documentation",
    links: [
      { label: "Net Worth Certificate", slug: "net-worth-certificate" },
      { label: "Turnover Certificate", slug: "turnover-certificate" },
      { label: "CA Certified Financial Statements", slug: "ca-certified-financial-statements" },
      { label: "Fund Utilization Certificate", slug: "fund-utilization-certificate" },
      { label: "Income Certificate", slug: "income-certificate" },
      { label: "Projected Financial Statements", slug: "projected-financial-statements" },
      { label: "Bank Certificate", slug: "bank-certificate" },
      { label: "Certificates for Government Tenders", slug: "government-tender-certificate" },
    ],
  },
  {
    id: "manage",
    label: "Manage Business",
    tagline: "Accounting, tax & compliance",
    links: [
      { label: "GST Registration", slug: "gst-registration" },
      { label: "GST Return Filing", slug: "gst-return-filing" },
      { label: "Income Tax Return (ITR) Filing", slug: "itr-filing" },
      { label: "TDS Return Filing", slug: "tds-return-filing" },
      { label: "Bookkeeping & Accounting", slug: "bookkeeping" },
      { label: "Payroll Accounting", slug: "payroll-accounting" },
      { label: "Statutory Audit", slug: "statutory-audit" },
      { label: "Tax Audit", slug: "tax-audit" },
      { label: "ROC Compliance Support", slug: "roc-compliance-support" },
    ],
  },
  {
    id: "grow",
    label: "Grow Business",
    tagline: "Advisory & growth planning",
    links: [
      { label: "Virtual CFO Services", slug: "virtual-cfo-services" },
      { label: "Business Valuation", slug: "business-valuation" },
      { label: "Project Report Preparation", slug: "project-report-preparation" },
      { label: "CMA Report", slug: "cma-report" },
      { label: "Loan Documentation", slug: "loan-documentation" },
      { label: "Business Restructuring", slug: "business-restructuring" },
      { label: "M&A Advisory", slug: "merger-acquisition-advisory" },
      { label: "NRI Taxation", slug: "nri-taxation" },
      { label: "International Taxation", slug: "international-taxation" },
    ],
  },
];

export const PHONE = "+91 88155 53899";
export const PHONE_HREF = "tel:+918815553899";
export const WHATSAPP_HREF = "https://wa.me/918815553899";
export const EMAIL = "charteredgesolution@gmail.com";
