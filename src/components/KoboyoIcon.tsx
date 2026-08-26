/**
 * KoboyoIcon — renders hand-drawn SVG icons from koboyo.com
 * Each icon is a 24x24 viewBox SVG that inherits currentColor.
 */

const ICON_PATHS: Record<string, string> = {
  accountant: "M5 3h14v18H5V3zm2 2v14h10V5H7zm3 3h4v2h-4V8zm0 4h4v2h-4v-2zm-2 2h8v2H8v-2z",
  calculator:
    "M6 2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm1 4v2h2V6H7zm4 0v2h2V6h-2zm4 0v2h2V6h-2zM7 10v2h2v-2H7zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zM7 14v2h2v-2H7zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zM9 18h6v2H9v-2z",
  document: "M6 2h8l6 6v14H6V2zm7 1v5h5M8 13h8M8 17h5",
  building: "M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6M9 9h.01M15 9h.01M9 13h.01M15 13h.01",
  stamp: "M12 2L4 7v4c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V7l-8-5z",
  certificate: "M14 2H6a2 2 0 00-2 2v16l8-3 8 3V4a2 2 0 00-2-2z",
  magnifyingGlass: "M11 3a8 8 0 100 16 8 8 0 000-16zm0 0l4 4",
  lightbulb: "M9 21h6M12 3a6 6 0 014 10.5V17H8v-3.5A6 6 0 0112 3z",
  handshake: "M7 11l-4 4 3 3 4-4M17 11l4 4-3 3-4-4M12 6l-1 5h2l-1 5",
  money: "M2 6h20M2 10h20M6 2v4M18 2v4M6 18v4M18 18v4M6 14h12a2 2 0 000-4H6v4z",
  shield: "M12 2l8 4v6c0 5.5-3.8 10.7-8 12-4.2-1.3-8-6.5-8-12V6l8-4z",
  checkmark: "M5 13l4 4L19 7",
  chart: "M3 20h18M6 16V8m4 8V4m4 12V10m4 6V6",
  people:
    "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zm14 10v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75",
  globe:
    "M12 2a10 10 0 100 20 10 10 0 000-20zm0 0a15 15 0 014 10 15 15 0 01-4 10 15 15 0 01-4-10A15 15 0 0112 2zM2 12h20",
  lock: "M7 11V7a5 5 0 0110 0v4M5 11h14a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2zm5 7h4",
  key: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.78 7.78 5.5 5.5 0 017.78-7.78zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4",
  clipboard: "M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2m2-2h4v4h-4V2z",
  briefcase: "M2 7h20v13H2V7zm3-3h14v4H5V4zm4 9h6",
  star: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z",
  phone:
    "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z",
  mail: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 0l8 6 8-6",
  arrowRight: "M5 12h14M12 5l7 7-7 7",
  chevronDown: "M6 9l6 6 6-6",
  menu: "M3 6h18M3 12h18M3 18h18",
  close: "M18 6L6 18M6 6l12 12",
  externalLink: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h5v5m-5-5l7 7",
  clock: "M12 2a10 10 0 100 20 10 10 0 000-20zm0 0v10l4 4",
  calendar: "M3 4h18v18H3V4zm0 0v4h18M8 2v4M16 2v4M3 10h18",
  fileText: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM14 2v6h6M8 13h8M8 17h5",
  rocket: "M12 2C8 6 6 10 6 14a6 6 0 0012 0c0-4-2-8-6-12zm0 0l-2 4m2-4l2 4",
  sun: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
  zap: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  heartHandshake:
    "M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z",
  users:
    "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zm14 10v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75",
  scale: "M12 3v18M3 7l3-4 6 4 6-4 3 4M3 7v6a3 3 0 003 3m12-9v6a3 3 0 01-3 3",
  warehouse: "M3 21V8l9-5 9 5v13M9 21v-6h6v6M3 11h18",
  factory: "M2 20h20M5 20V8l5-4v16M10 20V4l5 4v12M15 20V10l5 4v6",
  truck:
    "M1 3h15v13H1V3zm15 5h4l3 3v5h-7V8zM6 21a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4z",
  shieldCheck: "M12 2l8 4v6c0 5.5-3.8 10.7-8 12-4.2-1.3-8-6.5-8-12V6l8-4zm-2 12l3 3 5-5",
  shieldPlus: "M12 2l8 4v6c0 5.5-3.8 10.7-8 12-4.2-1.3-8-6.5-8-12V6l8-4zm-2 7v4m-2-2h4",
  idCard: "M2 5h20v14H2V5zm5 3h.01M17 8h.01M8 13h8M8 17h5",
  gavel: "M14.5 2l6 6-8 8-6-6 8-8zm-6 14l-4 4M2 22l4-4",
  walletCards: "M2 6h20v14H2V6zm2 3h4m-2-2v4M14 13h4M14 17h4M6 13h2",
  receipt: "M4 2v20l3-2 3 2 3-2 3 2 3-2 3 2V2l-3 2-3-2-3 2-3-2-3 2L4 2zm4 6h8M4 12h16M4 16h8",
  landMark: "M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11M8 14v3m4-3v3m4-3v3",
  award: "M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6L12 2z",
  tag: "M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82zM7 7h.01",
  plane: "M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z",
  search: "M11 3a8 8 0 100 16 8 8 0 000-16zm0 0l4 4",
  trendingUp: "M23 6l-9.5 9.5-5-5L1 18",
  barChart: "M3 20h18M6 16V8m4 8V4m4 12V10m4 6V6",
  settings:
    "M12 15a3 3 0 100-6 3 3 0 000 6zm9 0l-2.3 1.8a9 9 0 01-13.4 0L3 15M12 3v2m0 14v2M3 12H1m20 0h-2",
  flask: "M9 3h6M10 3v7.4L4 18a2 2 0 001.7 3h12.6A2 2 0 0020 18l-6-7.6V3",
  leaf: "M17 8C8 10 5.9 16.17 3.82 21.34L2 21l.64-2.73C4.56 13.13 8.59 10.88 17 8zm0 0c-2.5 2.5-7 4-10.5 5",
  megaphone:
    "M3 11l18-5v12L3 13v-2zm-1 2.5v5a1 1 0 001 1h1a1 1 0 001-1v-5a1 1 0 00-1-1H3a1 1 0 00-1 1z",
  sparkles: "M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z",
  target:
    "M12 2a10 10 0 100 20 10 10 0 000-20zm0 0a6 6 0 100 12 6 6 0 000-12zm0 0a2 2 0 100 4 2 2 0 000-4z",
  refresh: "M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15",
  flag: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7",
  share2: "M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8m-4-6l-4-4-4 4m4-4v13",
  globe2:
    "M12 2a10 10 0 100 20 10 10 0 000-20zm0 0a15 15 0 014 10 15 15 0 01-4 10 15 15 0 01-4-10A15 15 0 0112 2zM2 12h20",
  filter: "M22 3H2l8 9.46V19l4 2v-8.54L22 3z",
  dollarSign: "M12 2v20m5-17a5 5 0 010 7m-5-7a5 5 0 000 7",
  shoppingBag: "M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0",
  barcode: "M3 5v14M7 5v14M11 5v14M15 5v14M19 5v14M23 5v14M1 5v14",
  flaskConical: "M9 3h6M10 3v7.4L4 18a2 2 0 001.7 3h12.6A2 2 0 0020 18l-6-7.6V3",
  heartPulse:
    "M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78zM12 8v4m0 0v2m0-2h-2m2 0h2",
  stethoscope:
    "M4.8 2.65V6a2 2 0 002 2h1.2a1 1 0 011 1v3a4 4 0 008 0V9a1 1 0 011-1H18a2 2 0 002-2V2.65",
  testTubes: "M9 3h6M10 3v6l-5 8a2 2 0 001.7 3h12.6a2 2 0 001.7-3l-5-8V3",
  keyRound: "M2 12a10 10 0 1120 0 10 10 0 01-20 0zm10 0v4m-2-2h4",
  scrollText:
    "M8 21h12a2 2 0 002-2v-2H10v2a2 2 0 11-4 0V5a2 2 0 114 0v1h8V5a2 2 0 00-2-2H6a2 2 0 00-2 2v14a2 2 0 002 2h2M8 7h8M8 11h5",
  badgeCheck:
    "M3.85 8.62a4 4 0 014.78-4.77 4 4 0 016.74 0 4 4 0 014.78 4.77 4 4 0 010 6.76 4 4 0 01-4.78 4.77 4 4 0 01-6.74 0 4 4 0 01-4.78-4.77 4 4 0 010-6.76zm4.15 3.23l2 2 4-4",
  fileCheck: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-4 14l3-3 3 3M8 17h5",
  fileWarning: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM12 9v4m0 4h.01",
  fileSearch:
    "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-2 8a3 3 0 100 6 3 3 0 000-6zm4 1l3 3",
  fileSignature:
    "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM8 13s1.5 2 4 2 4-2 4-2M8 17s1.5 2 4 2 4-2 4-2",
  clipboardCheck:
    "M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2m2-2h4v4h-4V2zm-4 14l3 3 5-5",
  clipboardList:
    "M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2m2-2h4v4h-4V2zM8 11h8M8 15h5",
  fileSpreadsheet:
    "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM8 11h8M8 15h8M8 19h8M8 7h2",
  lineChart: "M3 20h18M5 16l4-4 3 3 6-6",
  userRound: "M12 11a4 4 0 100-8 4 4 0 000 8zm0 2c-4.42 0-8 1.79-8 4v1h16v-1c0-2.21-3.58-4-8-4z",
  store: "M3 9l1.5-5.5h15L21 9M3 9h18v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9zm5 0v8m4-8v8m4-8v8",
  hardHat: "M2 18h20M4 18v-4a8 8 0 0116 0v4M12 6V2",
  instagram:
    "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2zm4.2 5a5 5 0 100 10 5 5 0 000-10zm5.5-.5a1 1 0 100-2 1 1 0 000 2z",
  gauge: "M12 2a10 10 0 100 20 10 10 0 000-20zm0 0v10l6 3",
  shuffle: "M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5",
};

interface KoboyoIconProps {
  name: string;
  className?: string;
  size?: number;
  color?: string;
  fill?: string;
}

export function KoboyoIcon({
  name,
  className = "",
  size = 24,
  color = "currentColor",
  fill = "none",
}: KoboyoIconProps) {
  const d = ICON_PATHS[name];
  if (!d) return null;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

/**
 * Maps service slugs to koboyo icon names.
 * Falls back to null if no koboyo icon is mapped (use Lucide).
 */
export const SERVICE_KOBOYO_ICONS: Record<string, string> = {
  // Business Registration
  "private-limited-company-registration": "building",
  "llp-registration": "handshake",
  "one-person-company-registration": "userRound",
  "partnership-firm-registration": "users",
  "proprietorship-registration": "store",
  "section-8-company-registration": "heartHandshake",
  "ngo-registration": "heartPulse",
  "startup-india-registration": "rocket",

  // Registrations
  "gst-registration": "clipboardCheck",
  "msme-registration": "badgeCheck",
  "pan-application": "idCard",
  "tan-application": "idCard",
  "dsc-registration": "keyRound",
  "import-export-code": "globe",
  "professional-tax-registration": "fileText",
  "epfo-registration": "walletCards",
  "esic-registration": "shieldPlus",
  "fssai-registration": "utensilsCrossed",

  // Tax & GST
  "gst-return-filing": "clipboardList",
  "gst-audit-reconciliation": "fileSearch",
  "gst-refund": "dollarSign",
  "gst-lut-application": "fileSignature",
  "gst-notice-reply": "mail",
  "gst-assessment-litigation": "gavel",
  "itr-filing": "fileText",
  "tax-planning": "trendingUp",
  "tax-audit": "search",
  "tax-audit-44ab": "search",
  "income-tax-assessment": "scale",
  "notice-reply-representation": "fileWarning",
  "tds-return-filing": "receipt",
  "tds-compliance": "shieldCheck",
  "advance-tax-computation": "calculator",
  "einvoicing-compliance": "barcode",
  "ewaybill-compliance": "truck",

  // Accounting & Payroll
  bookkeeping: "accountant",
  "accounting-system-setup": "settings",
  "tally-accounting": "calculator",
  "zoho-books-accounting": "calculator",
  "xero-accounting": "calculator",
  "mis-reports": "barChart",
  "financial-statement-preparation": "fileSpreadsheet",
  "bank-reconciliation": "landMark",
  "payroll-accounting": "users",
  "payroll-processing": "users",
  "virtual-cfo-services": "briefcase",
  "gratuity-compliance": "shieldCheck",

  // Audit
  "statutory-audit": "search",
  "internal-audit": "search",
  "stock-audit": "package",
  "concurrent-audit": "refresh",
  "management-audit": "lineChart",
  "due-diligence-audit": "search",
  "bank-audit": "landMark",

  // Corporate
  "roc-compliance-support": "fileCheck",
  "aoc-4-filing": "fileSpreadsheet",
  "mgt-7-filing": "clipboardList",
  "director-kyc": "idCard",
  "dpt-3-filing": "fileText",
  "adt-1-appointment": "clipboardCheck",
  "company-changes-closure": "shuffle",

  // Advisory
  "project-report-preparation": "fileText",
  "cma-report": "barChart",
  "loan-documentation": "fileSignature",
  "bank-finance-consultancy": "handshake",
  "working-capital-assessment": "dollarSign",
  "financial-planning": "target",
  "budgeting-forecasting": "trendingUp",
  "business-valuation": "dollarSign",
  "business-plan-preparation": "fileText",

  // Certification
  "net-worth-certificate": "award",
  "turnover-certificate": "badgeCheck",
  "certified-financial-statements": "fileCheck",
  "fund-utilization-certificate": "receipt",
  "income-certificate": "scrollText",
  "projected-financial-statements": "fileSpreadsheet",
  "bank-certificate": "stamp",
  "government-tender-certificate": "badgeCheck",

  // ISO
  "iso-consultancy": "badgeCheck",
  "iso-14001-certification": "leaf",
  "iso-45001-certification": "shield",
  "iso-13485-certification": "award",
  "iso-9001-certification": "award",
  "sa-8000-certification": "heartHandshake",

  // Regulatory
  "medical-device-regulatory": "stethoscope",
  "cosmetics-regulatory": "sparkles",
  "food-fssai-services": "utensilsCrossed",
  "solar-consultancy": "sun",
  "solar-vendor-registration": "sun",
  "ecommerce-services": "shoppingBag",
  "import-export-compliance": "globe",
  "digital-marketing-services": "megaphone",
  "startup-funding-services": "rocket",
};
