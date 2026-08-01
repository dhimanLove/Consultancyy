export interface Service {
  slug: string;
  title: string;
  descriptor: string;
  summary: string;
  scope: string[];
  category: string;
  order: number;
}

export interface ServiceCategory {
  id: string;
  name: string;
  icon: string;
  services: Service[];
}

const _SERVICES: Service[] = [
  // 📊 Accounting & Bookkeeping
  {
    slug: "bookkeeping",
    title: "Bookkeeping",
    descriptor: "Daily financial record maintenance and accurate bookkeeping for your business.",
    summary:
      "We maintain accurate and up-to-date financial records for your business, ensuring every transaction is properly recorded and categorized for seamless reporting.",
    scope: [
      "Day-to-day transaction recording",
      "Ledger maintenance",
      "Accounts payable/receivable management",
      "Bank reconciliation",
      "Financial data organization",
    ],
    category: "accounting",
    order: 1,
  },
  {
    slug: "accounting-system-setup",
    title: "Accounting System Setup",
    descriptor: "Setting up robust accounting systems tailored to your business needs.",
    summary:
      "We help you choose and configure the right accounting software and processes, from Tally to cloud-based solutions, ensuring your financial infrastructure is solid from day one.",
    scope: [
      "Software selection & setup",
      "Chart of accounts design",
      "Process documentation",
      "Team training",
      "Migration from legacy systems",
    ],
    category: "accounting",
    order: 2,
  },
  {
    slug: "mis-reports",
    title: "MIS Reports",
    descriptor: "Data-driven management information reports for informed decision-making.",
    summary:
      "Customized MIS reports that give you real-time visibility into your business performance, helping you make data-driven decisions with confidence.",
    scope: [
      "Monthly/quarterly performance reports",
      "Budget vs actual analysis",
      "Cash flow statements",
      "Profitability analysis",
      "Custom dashboard creation",
    ],
    category: "accounting",
    order: 3,
  },
  {
    slug: "financial-statement-preparation",
    title: "Financial Statement Preparation",
    descriptor: "Professional preparation of financial statements as per accounting standards.",
    summary:
      "Preparation of balance sheets, profit & loss accounts, and cash flow statements in compliance with applicable accounting standards and regulatory requirements.",
    scope: [
      "Balance sheet preparation",
      "Profit & loss account",
      "Cash flow statement",
      "Notes to accounts",
      "Schedule preparation",
    ],
    category: "accounting",
    order: 4,
  },
  {
    slug: "bank-reconciliation",
    title: "Bank Reconciliation",
    descriptor: "Thorough reconciliation of bank statements with your books of accounts.",
    summary:
      "Regular bank reconciliation to ensure your books match bank records, identifying discrepancies and ensuring financial accuracy.",
    scope: [
      "Monthly bank reconciliation",
      "Cheque bounce tracking",
      "Unidentified entry resolution",
      "Balance confirmation",
      "Discrepancy reporting",
    ],
    category: "accounting",
    order: 5,
  },
  {
    slug: "payroll-accounting",
    title: "Payroll Accounting",
    descriptor: "End-to-end payroll processing and compliance management.",
    summary:
      "Complete payroll accounting services including salary processing, statutory deductions, and compliance with labour laws.",
    scope: [
      "Salary computation & processing",
      "PT/ESI/PF deduction & deposit",
      "Payroll register maintenance",
      "Form 16 preparation",
      "Full & final settlement",
    ],
    category: "accounting",
    order: 6,
  },
  {
    slug: "virtual-cfo-services",
    title: "Virtual CFO Services",
    descriptor: "Strategic financial leadership on a flexible, part-time basis.",
    summary:
      "Access high-level financial expertise without a full-time hire. Our virtual CFO services provide strategic guidance on cash flow, fundraising, and financial planning.",
    scope: [
      "Financial strategy & planning",
      "Cash flow management",
      "Fundraising support",
      "Board reporting",
      "Financial health assessment",
    ],
    category: "accounting",
    order: 7,
  },

  // 💼 Income Tax
  {
    slug: "itr-filing",
    title: "Income Tax Return (ITR) Filing",
    descriptor: "Hassle-free income tax return filing for individuals and businesses.",
    summary:
      "Accurate and timely filing of income tax returns for individuals, HUFs, partnerships, companies, and other assessees, ensuring maximum legitimate savings.",
    scope: [
      "ITR-1 to ITR-7 filing",
      "Capital gains computation",
      "Foreign asset disclosure",
      "Loss return filing",
      "Revised & belated returns",
    ],
    category: "income-tax",
    order: 8,
  },
  {
    slug: "tax-planning",
    title: "Tax Planning",
    descriptor: "Strategic tax planning to minimize your tax liability legally.",
    summary:
      "Proactive tax planning strategies tailored to your financial situation, helping you save taxes while staying fully compliant with tax laws.",
    scope: [
      "Investment planning under 80C to 80G",
      "Salary restructuring",
      "Business tax optimization",
      "Retirement planning",
      "Tax-efficient investment advisory",
    ],
    category: "income-tax",
    order: 9,
  },
  {
    slug: "tax-audit",
    title: "Tax Audit (44AB)",
    descriptor: "Comprehensive tax audit as required under Section 44AB of Income Tax Act.",
    summary:
      "Thorough tax audit services covering all required areas under Section 44AB, with detailed reporting and compliance assurance.",
    scope: [
      "Audit of books of account",
      "Compliance verification",
      "Tax audit report (Form 3CA/3CB/3CD)",
      "Due date compliance",
      "Discussion with tax authorities",
    ],
    category: "income-tax",
    order: 10,
  },
  {
    slug: "income-tax-assessment",
    title: "Income Tax Assessment",
    descriptor: "Representation and support during income tax assessment proceedings.",
    summary:
      "Complete support during scrutiny assessments, best judgment assessments, and other assessment proceedings before the Income Tax Department.",
    scope: [
      "Scrutiny assessment representation",
      "Notice response & documentation",
      "Submission of evidence",
      "Hearing coordination",
      "Assessment order review",
    ],
    category: "income-tax",
    order: 11,
  },
  {
    slug: "notice-reply-representation",
    title: "Notice Reply & Representation",
    descriptor: "Professional response to income tax notices and departmental representation.",
    summary:
      "Expert handling of all types of income tax notices, from intimation under Section 143(1) to scrutiny notices, with professional representation before authorities.",
    scope: [
      "Notice analysis & response drafting",
      "Document compilation",
      "Online/offline submission",
      "Representation before AO/CIT(A)",
      "Regular follow-up",
    ],
    category: "income-tax",
    order: 12,
  },
  {
    slug: "tds-return-filing",
    title: "TDS Return Filing",
    descriptor: "Accurate and timely TDS return filing services.",
    summary:
      "Preparation and filing of TDS returns (Form 24Q, 26Q, 27Q, etc.) with accuracy, ensuring compliance with due dates and avoiding penalties.",
    scope: [
      "Form 24Q (salaries)",
      "Form 26Q (non-salaries)",
      "Form 27Q (non-resident)",
      "Form 27EQ (TCS)",
      "Correction statements",
    ],
    category: "income-tax",
    order: 13,
  },
  {
    slug: "tds-compliance",
    title: "TDS Compliance",
    descriptor: "Complete TDS compliance from deduction to certificate issuance.",
    summary:
      "End-to-end TDS compliance services including deduction computation, deposit, return filing, and certificate issuance to deductees.",
    scope: [
      "TDS deduction computation",
      "Online TDS deposit",
      "Form 16/16A issuance",
      "TDS reconciliation",
      "TDS default rectification",
    ],
    category: "income-tax",
    order: 14,
  },
  {
    slug: "advance-tax-computation",
    title: "Advance Tax Computation",
    descriptor: "Accurate advance tax computation to avoid interest under Sections 234B/234C.",
    summary:
      "Computation and planning of advance tax liabilities to ensure timely payment in installments and minimize interest liability.",
    scope: [
      "Advance tax estimation",
      "Installment computation",
      "Quarterly payment scheduling",
      "Interest calculation (234B/234C)",
      "Payment facilitation",
    ],
    category: "income-tax",
    order: 15,
  },

  // 🧾 GST Services
  {
    slug: "gst-registration",
    title: "GST Registration",
    descriptor: "Quick and hassle-free GST registration for your business.",
    summary:
      "Complete GST registration services including document preparation, application filing, and follow-up until registration certificate is obtained.",
    scope: [
      "Document checklist & preparation",
      "Online application filing",
      "ARN tracking & follow-up",
      "GST certificate download",
      "Amendment support",
    ],
    category: "gst",
    order: 16,
  },
  {
    slug: "gst-return-filing",
    title: "GST Return Filing (GSTR-1, 3B, 9 & 9C)",
    descriptor: "Timely and accurate filing of all GST returns.",
    summary:
      "Preparation and filing of all GST returns including GSTR-1, GSTR-3B, GSTR-9, and GSTR-9C with reconciliation and compliance assurance.",
    scope: [
      "GSTR-1 (outward supply)",
      "GSTR-3B (monthly/quarterly)",
      "GSTR-9 (annual)",
      "GSTR-9C (reconciliation)",
      "Nil return filing",
    ],
    category: "gst",
    order: 17,
  },
  {
    slug: "gst-audit-reconciliation",
    title: "GST Audit & Reconciliation",
    descriptor: "Detailed GST audit and input tax credit reconciliation.",
    summary:
      "Comprehensive GST audit and reconciliation services to ensure input tax credit matches, identify mismatches, and rectify discrepancies.",
    scope: [
      "ITC reconciliation (2A vs books)",
      "Output tax reconciliation",
      "GST audit report preparation",
      "Mismatch identification",
      "Corrective action advisory",
    ],
    category: "gst",
    order: 18,
  },
  {
    slug: "gst-refund",
    title: "GST Refund",
    descriptor: "Expert assistance in claiming GST refunds for exporters and businesses.",
    summary:
      "Complete support in claiming GST refunds including RFD-01 filing, documentation, and follow-up with tax authorities for timely disbursement.",
    scope: [
      "Refund eligibility assessment",
      "RFD-01 application filing",
      "Document compilation",
      "Scrutiny response",
      "Refund tracking",
    ],
    category: "gst",
    order: 19,
  },
  {
    slug: "gst-lut-application",
    title: "GST LUT Application",
    descriptor: "Letter of Undertaking (LUT) filing for export without payment of IGST.",
    summary:
      "Preparation and filing of LUT (Letter of Undertaking) under GST to enable zero-rated export supplies without payment of IGST.",
    scope: [
      "LUT form preparation",
      "Online filing on GST portal",
      "Annual renewal",
      "Bond vs LUT advisory",
      "Compliance tracking",
    ],
    category: "gst",
    order: 20,
  },
  {
    slug: "gst-notice-reply",
    title: "GST Notice Reply",
    descriptor: "Professional response to notices from GST department.",
    summary:
      "Expert handling of all types of GST notices including show cause, demand, and assessment notices with proper legal representation.",
    scope: [
      "Notice analysis & legal review",
      "Reply drafting",
      "Document evidence compilation",
      "Online submission",
      "Personal hearing coordination",
    ],
    category: "gst",
    order: 21,
  },
  {
    slug: "gst-assessment-litigation",
    title: "GST Assessment & Litigation",
    descriptor: "Representation in GST assessment and appellate proceedings.",
    summary:
      "Complete support in GST assessment proceedings and litigation before appellate authorities, including drafting appeals and case representation.",
    scope: [
      "Assessment representation",
      "Appeal drafting (Appeals Commissioner)",
      "Tribunal representation",
      "Case law research",
      "Status monitoring",
    ],
    category: "gst",
    order: 22,
  },
  {
    slug: "einvoicing-compliance",
    title: "E-Invoicing Compliance",
    descriptor: "End-to-end e-invoicing compliance as per GST rules.",
    summary:
      "Complete e-invoicing compliance services including IRN generation, QR code integration, and invoice reporting on the GST portal.",
    scope: [
      "IRN generation setup",
      "QR code integration",
      "Invoice reference number tracking",
      "E-invoice cancellation",
      "Monthly compliance reporting",
    ],
    category: "gst",
    order: 23,
  },
  {
    slug: "ewaybill-compliance",
    title: "E-Way Bill Compliance",
    descriptor: "Hassle-free e-way bill generation and compliance management.",
    summary:
      "Complete e-way bill management including generation, extension, and cancellation for movement of goods across state and within state.",
    scope: [
      "E-way bill generation (Part A & B)",
      "E-way bill extension",
      "Consolidated e-way bills",
      "E-way bill cancellation",
      "Compliance tracking & reports",
    ],
    category: "gst",
    order: 24,
  },

  // 📑 Audit & Assurance
  {
    slug: "statutory-audit",
    title: "Statutory Audit",
    descriptor: "Independent audit of financial statements as required by statute.",
    summary:
      "Thorough statutory audit services under Companies Act, ensuring your financial statements present a true and fair view of your business.",
    scope: [
      "Financial statement audit",
      "Internal controls evaluation",
      "Compliance verification",
      "Audit report issuance",
      "Board report presentation",
    ],
    category: "audit",
    order: 25,
  },
  {
    slug: "tax-audit-44ab",
    title: "Tax Audit",
    descriptor: "Audit of books of accounts under Section 44AB of Income Tax Act.",
    summary:
      "Comprehensive tax audit services under Section 44AB, covering verification of books, compliance, and accurate audit reporting.",
    scope: [
      "Books of account verification",
      "Tax compliance review",
      "Form 3CA/3CB/3CD report",
      "Due date compliance",
      "Tax authority liaison",
    ],
    category: "audit",
    order: 26,
  },
  {
    slug: "internal-audit",
    title: "Internal Audit",
    descriptor: "Systematic internal audit to strengthen business processes.",
    summary:
      "Independent internal audit services to evaluate and improve the effectiveness of risk management, control, and governance processes.",
    scope: [
      "Process audit",
      "Operational efficiency review",
      "Internal control testing",
      "Risk assessment",
      "Recommendation report",
    ],
    category: "audit",
    order: 27,
  },
  {
    slug: "stock-audit",
    title: "Stock Audit",
    descriptor: "Physical verification and audit of inventory.",
    summary:
      "Physical verification of inventory, valuation audit, and reporting on stock position as per regulatory and management requirements.",
    scope: [
      "Physical stock verification",
      "Inventory valuation audit",
      "Slow-moving/obsolete analysis",
      "Stock reconciliation",
      "Stock audit report",
    ],
    category: "audit",
    order: 28,
  },
  {
    slug: "concurrent-audit",
    title: "Concurrent Audit",
    descriptor: "Ongoing concurrent audit for banks and financial institutions.",
    summary:
      "Continuous concurrent audit services for banks and financial institutions, ensuring real-time compliance and early detection of irregularities.",
    scope: [
      "Daily transaction audit",
      "Settlement verification",
      "KYC/AML compliance",
      "Fraud detection",
      "Monthly concurrence report",
    ],
    category: "audit",
    order: 29,
  },
  {
    slug: "management-audit",
    title: "Management Audit",
    descriptor: "Evaluation of management performance and operational effectiveness.",
    summary:
      "Assessment of management processes, decision-making frameworks, and operational effectiveness to identify areas for improvement.",
    scope: [
      "Management process review",
      "Decision-making assessment",
      "Operational efficiency analysis",
      "Policy compliance check",
      "Improvement recommendations",
    ],
    category: "audit",
    order: 30,
  },
  {
    slug: "due-diligence-audit",
    title: "Due Diligence Audit",
    descriptor: "Comprehensive due diligence for investments, mergers, and acquisitions.",
    summary:
      "Thorough financial, tax, and compliance due diligence for potential investments, mergers, acquisitions, or other business transactions.",
    scope: [
      "Financial due diligence",
      "Tax due diligence",
      "Legal compliance review",
      "Risk identification",
      "Due diligence report",
    ],
    category: "audit",
    order: 31,
  },
  {
    slug: "bank-audit",
    title: "Bank Audit",
    descriptor: "Statutory and concurrent audit services for banks.",
    summary:
      "Specialized audit services for banking institutions covering statutory audit, concurrent audit, and RBI compliance audit.",
    scope: [
      "Statutory bank audit",
      "Concurrent bank audit",
      "RBI compliance audit",
      "Priority sector lending audit",
      "Fraud monitoring",
    ],
    category: "audit",
    order: 32,
  },

  // 🏢 Business Registration & Compliance
  {
    slug: "pan-application",
    title: "PAN Application",
    descriptor: "Quick PAN card application and tracking.",
    summary:
      "Hassle-free PAN application services for individuals, companies, LLPs, and other entities with complete documentation and tracking.",
    scope: [
      "PAN application (Form 49A/49AA)",
      "Document verification",
      "Application tracking",
      "PAN correction/duplicate",
      "E-PAN download",
    ],
    category: "registration",
    order: 33,
  },
  {
    slug: "tan-application",
    title: "TAN Application",
    descriptor: "Tax Deduction Account Number (TAN) application and tracking.",
    summary:
      "Complete TAN application services for entities required to deduct tax at source, including form submission and follow-up.",
    scope: [
      "Form 49B submission",
      "Document preparation",
      "Application tracking",
      "TAN correction services",
      "Duplicate TAN request",
    ],
    category: "registration",
    order: 34,
  },
  {
    slug: "msme-registration",
    title: "MSME Registration",
    descriptor: "MSME/Udyam registration for small and medium businesses.",
    summary:
      "Quick MSME registration (Udyam) to help your business avail benefits of subsidies, priority lending, and government schemes.",
    scope: [
      "Udyam registration online",
      "Document preparation",
      "Registration certificate",
      "MSME benefits advisory",
      "Registration renewal",
    ],
    category: "registration",
    order: 35,
  },
  {
    slug: "startup-india-registration",
    title: "Startup India Registration",
    descriptor: "Startup India recognition for tax benefits and funding.",
    summary:
      "Startup India registration services to get DPIIT recognition, enabling tax exemptions, funding opportunities, and government benefits.",
    scope: [
      "DPIIT recognition application",
      "Eligibility assessment",
      "Documentation support",
      "Tax exemption (80-IAC) advisory",
      "Startup India benefits guide",
    ],
    category: "registration",
    order: 36,
  },
  {
    slug: "import-export-code",
    title: "Import Export Code (IEC)",
    descriptor: "IEC application for businesses engaged in international trade.",
    summary:
      "Complete Import Export Code application services for businesses looking to start or expand their international trade operations.",
    scope: [
      "IEC application filing",
      "Document compilation",
      "DGFT liaison",
      "IEC modification",
      "Digital signature support",
    ],
    category: "registration",
    order: 37,
  },
  {
    slug: "fssai-registration",
    title: "FSSAI Registration",
    descriptor: "Food license registration under FSSAI for food businesses.",
    summary:
      "FSSAI registration and licensing services for food businesses, from basic registration to central license, ensuring food safety compliance.",
    scope: [
      "FSSAI basic registration",
      "State/central license",
      "Document preparation",
      "License renewal",
      "FSSAI compliance advisory",
    ],
    category: "registration",
    order: 38,
  },
  {
    slug: "professional-tax-registration",
    title: "Professional Tax Registration",
    descriptor: "Professional tax registration and compliance services.",
    summary:
      "Complete professional tax registration and compliance services for employers and professionals across applicable states.",
    scope: [
      "PT registration filing",
      "Certificate procurement",
      "Monthly/challan deposit",
      "Return filing",
      "PT cancellation",
    ],
    category: "registration",
    order: 39,
  },
  {
    slug: "shop-establishment-registration",
    title: "Shop & Establishment Registration",
    descriptor: "Registration under Shop & Establishment Act for business premises.",
    summary:
      "Registration and compliance services under the Shop & Establishment Act, ensuring your business premises are legally compliant.",
    scope: [
      "Registration application",
      "Document preparation",
      "Certificate procurement",
      "Renewal services",
      "Amendment support",
    ],
    category: "registration",
    order: 40,
  },

  // 💰 Financial Advisory
  {
    slug: "project-report-preparation",
    title: "Project Report Preparation",
    descriptor: "Detailed project reports for loans and business proposals.",
    summary:
      "Professional project report preparation for bank loans, investor presentations, and business planning with detailed financial projections.",
    scope: [
      "Project feasibility analysis",
      "Financial projections",
      "Cost & revenue estimates",
      "Market analysis",
      "Bank-ready report formatting",
    ],
    category: "advisory",
    order: 41,
  },
  {
    slug: "cma-report",
    title: "CMA Report",
    descriptor: "Credit Monitoring Arrangement (CMA) report for bank finance.",
    summary:
      "Preparation of CMA data and reports required for working capital finance from banks, including operating statements and ratio analysis.",
    scope: [
      "CMA data preparation",
      "Operating statement analysis",
      "Ratio analysis",
      "Fund flow statement",
      "Projected balance sheet",
    ],
    category: "advisory",
    order: 42,
  },
  {
    slug: "loan-documentation",
    title: "Loan Documentation",
    descriptor: "Complete loan documentation support for various financing needs.",
    summary:
      "End-to-end loan documentation services including application preparation, document compilation, and liaison with financial institutions.",
    scope: [
      "Document checklist & preparation",
      "Application form filling",
      "Lender liaison",
      "Sanction follow-up",
      "Disbursement coordination",
    ],
    category: "advisory",
    order: 43,
  },
  {
    slug: "bank-finance-consultancy",
    title: "Bank Finance Consultancy",
    descriptor: "Strategic advisory for bank financing and credit facilities.",
    summary:
      "Expert guidance on choosing the right financing options, preparing for credit assessments, and negotiating favorable terms with banks.",
    scope: [
      "Financing option evaluation",
      "Credit assessment preparation",
      "Negotiation support",
      "Working capital assessment",
      "Term loan advisory",
    ],
    category: "advisory",
    order: 44,
  },
  {
    slug: "working-capital-assessment",
    title: "Working Capital Assessment",
    descriptor: "Assessment and optimization of working capital requirements.",
    summary:
      "Detailed working capital assessment to determine optimal current asset levels and ensure smooth business operations without liquidity stress.",
    scope: [
      "Current asset analysis",
      "Working capital gap assessment",
      "MPBF computation",
      "Inventory & receivables analysis",
      "Working capital optimization",
    ],
    category: "advisory",
    order: 45,
  },
  {
    slug: "financial-planning",
    title: "Financial Planning",
    descriptor: "Comprehensive financial planning for individuals and businesses.",
    summary:
      "Strategic financial planning services covering budgeting, forecasting, investment planning, and long-term financial goal setting.",
    scope: [
      "Personal financial planning",
      "Business financial planning",
      "Retirement planning",
      "Investment strategy",
      "Tax-efficient planning",
    ],
    category: "advisory",
    order: 46,
  },
  {
    slug: "budgeting-forecasting",
    title: "Budgeting & Forecasting",
    descriptor: "Detailed budgeting and financial forecasting for business growth.",
    summary:
      "Preparation of annual budgets and financial forecasts to help businesses plan effectively, track performance, and make informed decisions.",
    scope: [
      "Annual budget preparation",
      "Revenue forecasting",
      "Expense budgeting",
      "Cash flow forecasting",
      "Budget variance analysis",
    ],
    category: "advisory",
    order: 47,
  },
  {
    slug: "business-valuation",
    title: "Business Valuation",
    descriptor: "Professional business valuation for various purposes.",
    summary:
      "Comprehensive business valuation services using DCF, market comparable, and asset-based approaches for M&A, fundraising, or dispute resolution.",
    scope: [
      "DCF valuation",
      "Market comparable analysis",
      "Asset-based valuation",
      "Valuation report",
      "Transaction advisory",
    ],
    category: "advisory",
    order: 48,
  },

  // 🏛️ Corporate Advisory
  {
    slug: "company-compliance-advisory",
    title: "Company Compliance Advisory",
    descriptor: "Complete compliance advisory for private and public companies.",
    summary:
      "Ongoing compliance advisory services for companies under the Companies Act, ensuring all statutory requirements are met on time.",
    scope: [
      "Annual compliance calendar",
      "Board meeting compliance",
      "Annual return filing",
      "Financial statement filing",
      "ROC correspondence",
    ],
    category: "corporate",
    order: 49,
  },
  {
    slug: "llp-compliance-advisory",
    title: "LLP Compliance Advisory",
    descriptor: "Compliance management for Limited Liability Partnerships.",
    summary:
      "Complete compliance services for LLPs including annual return filing, Form 8 & 11, and ongoing advisory to avoid penalties.",
    scope: [
      "LLP annual compliance",
      "Form 8 & 11 filing",
      "Partner change filing",
      "LLP agreement amendment",
      "ROC return management",
    ],
    category: "corporate",
    order: 50,
  },
  {
    slug: "roc-compliance-support",
    title: "ROC Compliance Support",
    descriptor: "Full-spectrum ROC compliance and filing support.",
    summary:
      "Expert support for all Registrar of Companies (ROC) compliance requirements including annual filings, event-based filings, and document management.",
    scope: [
      "Annual ROC filing (AOC-4, MGT-7)",
      "Director DIN KYC filing",
      "Event-based ROC filing",
      "Document digitalization",
      "ROC query handling",
    ],
    category: "corporate",
    order: 51,
  },
  {
    slug: "financial-due-diligence",
    title: "Financial Due Diligence",
    descriptor: "In-depth financial due diligence for strategic decisions.",
    summary:
      "Comprehensive financial due diligence services to uncover risks, validate assumptions, and support informed decision-making for transactions.",
    scope: [
      "Historical financial analysis",
      "Quality of earnings review",
      "Debt/working capital analysis",
      "Risk identification",
      "Detailed due diligence report",
    ],
    category: "corporate",
    order: 52,
  },
  {
    slug: "business-restructuring",
    title: "Business Restructuring",
    descriptor: "Strategic restructuring advisory for business transformation.",
    summary:
      "Strategic advisory on business restructuring including demergers, slump sales, hive-offs, and organizational restructuring for efficiency.",
    scope: [
      "Restructuring feasibility study",
      "Entity conversion advisory",
      "Tax-efficient structuring",
      "Implementation support",
      "Compliance & documentation",
    ],
    category: "corporate",
    order: 53,
  },
  {
    slug: "merger-acquisition-advisory",
    title: "Merger & Acquisition Advisory",
    descriptor: "End-to-end M&A advisory and transaction support.",
    summary:
      "Comprehensive M&A advisory services from target identification and valuation to negotiation support and post-merger integration.",
    scope: [
      "Target identification & screening",
      "Valuation & deal structuring",
      "Due diligence coordination",
      "Documentation & negotiation",
      "Integration planning",
    ],
    category: "corporate",
    order: 54,
  },

  // 🌍 International Tax & FEMA
  {
    slug: "fema-consultancy",
    title: "FEMA Consultancy",
    descriptor: "Expert advisory on Foreign Exchange Management Act compliance.",
    summary:
      "Complete FEMA consultancy services for cross-border transactions, foreign investments, and overseas business operations.",
    scope: [
      "FEMA compliance advisory",
      "Overseas investment (ODI) filing",
      "Foreign direct investment (FDI) compliance",
      "External commercial borrowings (ECB)",
      "FEMA reporting to RBI",
    ],
    category: "international",
    order: 55,
  },
  {
    slug: "transfer-pricing",
    title: "Transfer Pricing",
    descriptor: "Transfer pricing documentation and compliance services.",
    summary:
      "Expert transfer pricing services including documentation, benchmarking, and compliance with Indian transfer pricing regulations.",
    scope: [
      "Transfer pricing study",
      "Documentation report (Form 3CEB)",
      "Benchmarking analysis",
      "Transfer pricing audit defense",
      "Advance pricing agreement support",
    ],
    category: "international",
    order: 56,
  },
  {
    slug: "international-taxation",
    title: "International Taxation",
    descriptor: "Cross-border tax advisory and compliance services.",
    summary:
      "Comprehensive international tax services covering double taxation avoidance, foreign tax credit, and cross-border transaction structuring.",
    scope: [
      "DTAA benefit analysis",
      "Foreign tax credit computation",
      "Cross-border transaction advisory",
      "Withholding tax compliance",
      "Treaty shopping prevention",
    ],
    category: "international",
    order: 57,
  },
  {
    slug: "nri-taxation",
    title: "NRI Taxation",
    descriptor: "Specialized tax advisory and compliance for Non-Resident Indians.",
    summary:
      "Complete NRI taxation services including tax return filing, foreign asset disclosure, repatriation planning, and DTAA benefit optimization.",
    scope: [
      "NRI tax return filing",
      "Foreign asset & income disclosure",
      "Repatriation planning",
      "DTAA benefit claims",
      "NRI investment advisory",
    ],
    category: "international",
    order: 58,
  },
  {
    slug: "foreign-remittance-compliance",
    title: "Foreign Remittance Compliance",
    descriptor: "Compliance services for foreign remittances under FEMA and tax laws.",
    summary:
      "Complete compliance support for foreign remittances including Form 15CA/15CB certification, TDS compliance, and FEMA reporting.",
    scope: [
      "Form 15CA/15CB certification",
      "TDS on foreign remittance",
      "FEMA remittance classification",
      "RBI reporting",
      "Documentation support",
    ],
    category: "international",
    order: 59,
  },

  // 📜 Certification Services
  {
    slug: "net-worth-certificate",
    title: "Net Worth Certificate",
    descriptor: "Certified net worth certificate for various purposes.",
    summary:
      "Issuance of net worth certificates certified by a practicing CA for business proposals, loan applications, tenders, and visa purposes.",
    scope: [
      "Net worth computation",
      "Asset & liability verification",
      "Certificate issuance",
      "Bank/Lender submission",
      "Periodic updates",
    ],
    category: "certification",
    order: 60,
  },
  {
    slug: "turnover-certificate",
    title: "Turnover Certificate",
    descriptor: "Certified turnover certificate for tenders and submissions.",
    summary:
      "Issuance of CA-certified turnover certificates based on audited financial statements for tender participation and regulatory submissions.",
    scope: [
      "Turnover computation from audited books",
      "Revenue verification",
      "Certificate drafting",
      "Tender documentation support",
      "Multi-year certification",
    ],
    category: "certification",
    order: 61,
  },
  {
    slug: "ca-certified-financial-statements",
    title: "CA Certified Financial Statements",
    descriptor: "CA-certified financial statements for regulatory and business needs.",
    summary:
      "Certification of financial statements by a practicing Chartered Accountant for banks, investors, regulators, and other authorities.",
    scope: [
      "Financial statement certification",
      "Audit verification",
      "Certificate issuance",
      "Bank/investor submission",
      "Regulatory filing support",
    ],
    category: "certification",
    order: 62,
  },
  {
    slug: "fund-utilization-certificate",
    title: "Fund Utilization Certificate",
    descriptor: "Certification of fund utilization for grants and loans.",
    summary:
      "Issuance of fund utilization certificates for grant recipients, loan borrowers, and project funding, certified by a practicing CA.",
    scope: [
      "Fund utilization verification",
      "Expenditure statement preparation",
      "Certificate issuance",
      "Grant compliance support",
      "Periodic reporting",
    ],
    category: "certification",
    order: 63,
  },
  {
    slug: "income-certificate",
    title: "Income Certificate",
    descriptor: "Certified income certificate for various official purposes.",
    summary:
      "Issuance of CA-certified income certificates based on verified financial records for visa applications, scholarships, and government submissions.",
    scope: [
      "Income computation & verification",
      "Document review",
      "Certificate issuance",
      "Visa/scholarship support",
      "Government submission",
    ],
    category: "certification",
    order: 64,
  },
  {
    slug: "projected-financial-statements",
    title: "Projected Financial Statements",
    descriptor: "Certified projected financial statements for future planning.",
    summary:
      "Preparation and certification of projected financial statements including projected balance sheets, profit & loss, and cash flows for banks and investors.",
    scope: [
      "Financial projections preparation",
      "Assumption documentation",
      "CA certification",
      "Loan/investor submission",
      "Sensitivity analysis",
    ],
    category: "certification",
    order: 65,
  },
  {
    slug: "bank-certificate",
    title: "Bank Certificate",
    descriptor: "Various CA-certified certificates for banking purposes.",
    summary:
      "Issuance of various bank-related certificates including credit limit confirmation, stock statement certification, and financial standing certificates.",
    scope: [
      "Credit limit confirmation",
      "Stock/hypothecation certificate",
      "Financial standing certificate",
      "Bank audit compliance",
      "Lender documentation",
    ],
    category: "certification",
    order: 66,
  },
  {
    slug: "government-tender-certificate",
    title: "Certificate for Government Tenders",
    descriptor: "CA-certified documents for government tender submissions.",
    summary:
      "Preparation and certification of financial documents required for government tender submissions including turnover, net worth, and experience certificates.",
    scope: [
      "Tender document financials",
      "Turnover & net worth certification",
      "Experience certificate",
      "Self-attested document certification",
      "Tender compliance support",
    ],
    category: "certification",
    order: 67,
  },

  // 📈 Business Consultancy
  {
    slug: "business-setup-consultancy",
    title: "Business Setup Consultancy",
    descriptor: "End-to-end business setup advisory and implementation.",
    summary:
      "Complete business setup consultancy from entity selection and registration to compliance setup and operational launch support.",
    scope: [
      "Entity type advisory (Pvt Ltd/LLP/OPC)",
      "Registration & compliance setup",
      "Business plan development",
      "Operational process setup",
      "Launch support",
    ],
    category: "consultancy",
    order: 68,
  },
  {
    slug: "financial-health-check",
    title: "Financial Health Check",
    descriptor: "Comprehensive financial health assessment of your business.",
    summary:
      "Detailed financial health check covering liquidity, solvency, profitability, and efficiency metrics to identify strengths and areas for improvement.",
    scope: [
      "Financial ratio analysis",
      "Liquidity & solvency assessment",
      "Profitability analysis",
      "Efficiency benchmarking",
      "Health report & recommendations",
    ],
    category: "consultancy",
    order: 69,
  },
  {
    slug: "cost-reduction-advisory",
    title: "Cost Reduction Advisory",
    descriptor: "Strategic cost reduction without compromising quality or growth.",
    summary:
      "Systematic cost analysis and reduction advisory to identify savings opportunities while maintaining operational efficiency and quality standards.",
    scope: [
      "Cost structure analysis",
      "Cost driver identification",
      "Saving opportunity assessment",
      "Process optimization",
      "Implementation monitoring",
    ],
    category: "consultancy",
    order: 70,
  },
  {
    slug: "profitability-analysis",
    title: "Profitability Analysis",
    descriptor: "In-depth profitability analysis across products, customers, and channels.",
    summary:
      "Detailed profitability analysis to identify the most and least profitable aspects of your business, enabling data-driven strategic decisions.",
    scope: [
      "Product profitability analysis",
      "Customer segment analysis",
      "Channel profitability",
      "Contribution margin analysis",
      "Actionable recommendations",
    ],
    category: "consultancy",
    order: 71,
  },
  {
    slug: "investment-advisory",
    title: "Investment Advisory (where permitted)",
    descriptor: "Strategic investment advisory within permitted regulatory framework.",
    summary:
      "Investment advisory services within the permitted scope of a CA practice, focusing on tax-efficient investment strategies and financial planning.",
    scope: [
      "Investment strategy advisory",
      "Portfolio review & analysis",
      "Tax-efficient investing",
      "Risk assessment",
      "Financial goal planning",
    ],
    category: "consultancy",
    order: 72,
  },
  {
    slug: "risk-management-advisory",
    title: "Risk Management Advisory",
    descriptor: "Identification and mitigation of business risks.",
    summary:
      "Comprehensive risk management advisory covering financial, operational, compliance, and strategic risks to safeguard your business.",
    scope: [
      "Risk identification & assessment",
      "Internal control evaluation",
      "Risk mitigation strategy",
      "Business continuity planning",
      "Risk monitoring framework",
    ],
    category: "consultancy",
    order: 73,
  },
  {
    slug: "compliance-managing",
    title: "Compliance Managing",
    descriptor: "Centralized management of all statutory compliances.",
    summary:
      "Centralized compliance management services covering all statutory requirements including tax, company law, labour law, and industry-specific regulations.",
    scope: [
      "Compliance calendar management",
      "Statutory register maintenance",
      "Due date tracking & reminders",
      "Filing & return management",
      "Compliance audit & reporting",
    ],
    category: "consultancy",
    order: 74,
  },
];

export const SERVICE_CATEGORIES: { id: string; name: string; icon: string }[] = [
  { id: "accounting", name: "Accounting & Bookkeeping", icon: "book-open" },
  { id: "income-tax", name: "Income Tax", icon: "landmark" },
  { id: "gst", name: "GST Services", icon: "receipt" },
  { id: "audit", name: "Audit & Assurance", icon: "search-check" },
  { id: "registration", name: "Business Registration & Compliance", icon: "file-text" },
  { id: "advisory", name: "Financial Advisory", icon: "bar-chart" },
  { id: "corporate", name: "Corporate Advisory", icon: "building" },
  { id: "international", name: "International Tax & FEMA", icon: "globe" },
  { id: "certification", name: "Certification Services", icon: "badge-check" },
  { id: "consultancy", name: "Business Consultancy", icon: "briefcase" },
];

export const SERVICES: Service[] = _SERVICES;

export const SERVICES_BY_CATEGORY: {
  category: (typeof SERVICE_CATEGORIES)[number];
  services: Service[];
}[] = SERVICE_CATEGORIES.map((cat) => ({
  category: cat,
  services: _SERVICES.filter((s) => s.category === cat.id).sort((a, b) => a.order - b.order),
}));

export const getService = (slug: string): Service | undefined =>
  SERVICES.find((s) => s.slug === slug);

export const getCategoryForService = (
  slug: string,
): (typeof SERVICE_CATEGORIES)[number] | undefined => {
  const service = getService(slug);
  if (!service) return undefined;
  return SERVICE_CATEGORIES.find((c) => c.id === service.category);
};

const CATEGORY_IMAGE_POOL: Record<string, string[]> = {
  accounting: [
    "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=280&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=280&fit=crop",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=280&fit=crop",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=280&fit=crop",
  ],
  "income-tax": [
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=280&fit=crop",
    "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=400&h=280&fit=crop",
    "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&h=280&fit=crop",
  ],
  gst: [
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=280&fit=crop",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=280&fit=crop",
    "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=280&fit=crop",
  ],
  audit: [
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=280&fit=crop",
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=280&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=280&fit=crop",
  ],
  registration: [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=280&fit=crop",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=280&fit=crop",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=280&fit=crop",
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=280&fit=crop",
  ],
  advisory: [
    "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?w=400&h=280&fit=crop",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=280&fit=crop",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=280&fit=crop",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=280&fit=crop",
  ],
  corporate: [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=280&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=280&fit=crop",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=280&fit=crop",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=280&fit=crop",
  ],
  international: [
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=280&fit=crop",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=280&fit=crop",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=280&fit=crop",
  ],
  certification: [
    "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&h=280&fit=crop",
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=280&fit=crop",
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=280&fit=crop",
  ],
  consultancy: [
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=280&fit=crop",
    "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?w=400&h=280&fit=crop",
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=280&fit=crop",
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=280&fit=crop",
  ],
};

export const getServiceImage = (slug: string): string => {
  const cat = getCategoryForService(slug);
  if (!cat) return CATEGORY_IMAGE_POOL.consultancy[0];
  const pool = CATEGORY_IMAGE_POOL[cat.id] ?? CATEGORY_IMAGE_POOL.consultancy;
  const idx = _SERVICES.findIndex((s) => s.slug === slug);
  return pool[idx % pool.length];
};

export const SERVICE_ICONS: Record<string, string> = {
  "bookkeeping-accounting": "BookOpen",
  "accounting-system-setup": "Settings2",
  "mis-reports": "BarChart3",
  "financial-statement-preparation": "FileSpreadsheet",
  "bank-reconciliation": "Landmark",
  "payroll-accounting": "Users",
  "virtual-cfo-services": "Briefcase",
  "itr-filing": "FileText",
  "tax-planning": "TrendingUp",
  "tax-audit": "SearchCheck",
  "tax-audit-44ab": "SearchCheck",
  "income-tax-assessment": "Scale",
  "notice-reply-representation": "FileWarning",
  "tds-return-filing": "Receipt",
  "tds-compliance": "ShieldCheck",
  "advance-tax-computation": "Calculator",
  "gst-registration": "ClipboardCheck",
  "gst-return-filing": "ClipboardList",
  "gst-audit-reconciliation": "FileSearch",
  "gst-refund": "DollarSign",
  "gst-lut-application": "FileSignature",
  "gst-notice-reply": "MessageSquare",
  "gst-assessment-litigation": "Gavel",
  "einvoicing-compliance": "QrCode",
  "ewaybill-compliance": "Truck",
  "statutory-audit": "SearchCheck",
  "internal-audit": "Search",
  "stock-audit": "Package",
  "concurrent-audit": "RefreshCw",
  "management-audit": "LineChart",
  "due-diligence-audit": "Search",
  "bank-audit": "Landmark",
  "pan-application": "IdCard",
  "tan-application": "IdCard",
  "msme-registration": "BadgePercent",
  "startup-india-registration": "Zap",
  "import-export-code": "Globe",
  "fssai-registration": "UtensilsCrossed",
  "professional-tax-registration": "FileText",
  "shop-establishment-registration": "Store",
  "project-report-preparation": "FileText",
  "cma-report": "BarChart3",
  "loan-documentation": "FileSignature",
  "bank-finance-consultancy": "Handshake",
  "working-capital-assessment": "DollarSign",
  "financial-planning": "Target",
  "budgeting-forecasting": "TrendingUp",
  "business-valuation": "DollarSign",
  "company-compliance-advisory": "Building",
  "llp-compliance-advisory": "Building2",
  "roc-compliance-support": "FileCheck",
  "financial-due-diligence": "Search",
  "business-restructuring": "Shuffle",
  "merger-acquisition-advisory": "ArrowLeftRight",
  "fema-consultancy": "Globe2",
  "transfer-pricing": "ArrowUpDown",
  "international-taxation": "Globe",
  "nri-taxation": "Plane",
  "foreign-remittance-compliance": "ArrowRightLeft",
  "net-worth-certificate": "Award",
  "turnover-certificate": "BadgeCheck",
  "ca-certified-financial-statements": "FileCheck",
  "fund-utilization-certificate": "Receipt",
  "income-certificate": "ScrollText",
  "projected-financial-statements": "FileSpreadsheet",
  "bank-certificate": "Stamp",
  "government-tender-certificate": "FileBadge",
  "business-setup-consultancy": "Lightbulb",
  "financial-health-check": "HeartPulse",
  "cost-reduction-advisory": "TrendingDown",
  "profitability-analysis": "LineChart",
  "investment-advisory": "CandlestickChart",
  "risk-management-advisory": "Shield",
  "compliance-managing": "ClipboardCheck",
};
