import {
  SERVICES,
  getService,
  type Service,
  type ServiceFaq,
  type ServiceProcessStep,
} from "./services-data";

export interface ServiceDetail {
  whoNeeds: string[];
  eligibility: string[];
  documents: string[];
  process: ServiceProcessStep[];
  govFee: string;
  professionalFee: string;
  timeline: string;
  faqs: ServiceFaq[];
}

const COMMON_FAQS: ServiceFaq[] = [
  {
    q: "How much does this service cost?",
    a: "Professional fees depend on the scope, entity type, and documents required. Contact us at +91 88155 53899 for a transparent, all-inclusive quote before you start.",
  },
  {
    q: "How long does it take?",
    a: "Timelines vary by authority and department. We share an expected timeline before starting and keep you updated at every step on WhatsApp.",
  },
  {
    q: "Can I get this done from outside?",
    a: "Yes. Chartered Solution serves clients across India - most registrations and filings are completed 100% online with doorstep delivery of certificates.",
  },
  {
    q: "What documents do I need?",
    a: "A basic document set is listed on this page. Our team sends a complete, service-specific checklist after your enquiry.",
  },
];

const CATEGORY_DEFAULTS: Record<string, Omit<ServiceDetail, "faqs"> & { faqs?: ServiceFaq[] }> = {
  "business-registration": {
    whoNeeds: [
      "Founders and entrepreneurs incorporating a new entity",
      "Startups seeking investor-ready company structures",
      "Sole owners and partners formalising their business",
      "Non-profit organisations and social enterprises",
    ],
    eligibility: [
      "At least one Indian citizen or resident director / partner",
      "Valid identity and address proofs (PAN, Aadhaar, passport, bank statements)",
      "Registered office address in India",
      "No disqualification under the Companies Act for directors",
    ],
    documents: [
      "PAN & Aadhaar of promoters / partners",
      "Address proof (bank statement, utility bill, passport)",
      "Photographs",
      "Digital Signature Certificate (for companies)",
      "Registered office proof (rent agreement / NOC)",
      "Business activity description",
    ],
    process: [
      { title: "Consultation", detail: "Understand your structure and pick the right entity." },
      { title: "Documentation", detail: "Collect and verify all required documents." },
      {
        title: "Filing & follow-up",
        detail: "File applications with MCA / Registrar and track approvals.",
      },
      { title: "Delivery", detail: "Receive incorporation certificate, PAN, TAN and documents." },
    ],
    govFee:
      "Pvt Ltd (SPICe+): ₹2,000–₹34,000 based on authorised capital; Name Reservation (RUN): ₹1,000; Stamp Duty on MoA/AoA: ₹500–₹5,000 (varies by state); DSC per Director: ₹500–₹2,000; PAN+TAN: ~₹143. LLP (FiLLiP): ₹500–₹5,000 based on contribution; RUN-LLP: ₹200. OPC/Section 8: ~₹2,000. Proprietorship/Partnership: ~₹500.",
    professionalFee:
      "Pvt Ltd: Starting from ₹7,499 (excl. GST & govt. fees). LLP: Starting from ₹6,999. All fees quoted transparently before starting.",
    timeline:
      "Proprietorship/partnership: 1–3 working days. Company/LLP/OPC: 7–15 working days depending on approvals.",
  },
  registration: {
    whoNeeds: [
      "New and existing businesses requiring licences and registrations",
      "Employers registering under labour laws (EPFO/ESIC)",
      "Businesses starting e-filings that need a DSC",
    ],
    eligibility: [
      "Registered or proposed business entity",
      "Valid PAN and supporting business documents",
      "Specified minimum employee counts for EPFO/ESIC",
    ],
    documents: [
      "PAN of business",
      "Identity & address proofs of proprietor/partners/directors",
      "Registered office / business address proof",
      "Bank account details",
      "Business activity proof",
    ],
    process: [
      { title: "Eligibility check", detail: "Confirm which registrations apply to your business." },
      { title: "Documentation", detail: "Compile the required KYC and business documents." },
      {
        title: "Application",
        detail: "File the registration on the respective government portal.",
      },
      {
        title: "Follow-up & delivery",
        detail: "Track the application and deliver the certificate.",
      },
    ],
    govFee:
      "FSSAI Basic Registration: ₹100/year (1 yr) or ₹500 (5 yrs); State Licence: ₹2,000–₹5,000/yr; Central Licence: ₹7,500/yr. Late renewal penalty: ₹100/day. GST Registration: Nil. PAN: ₹107. DSC: ₹200–₹500. MSME/Udyam: Free. IEC: Free.",
    professionalFee:
      "FSSAI Registration: Starting from ₹2,999. GST Registration: ₹1,999–₹5,999. All fees transparent, no hidden charges.",
    timeline:
      "FSSAI Basic: 7 days. State/Central Licence: 30–60 days. Most registrations complete in 2–7 working days.",
  },
  accounting: {
    whoNeeds: [
      "Businesses that want accurate, audit-ready books",
      "SMEs and startups that need clean financial reporting",
      "Companies preparing for loans, investors, or audits",
    ],
    eligibility: ["Any registered or unregistered business with financial transactions."],
    documents: [
      "Bank statements & passbooks",
      "Purchase & sales invoices",
      "Expense bills and receipts",
      "Previous year books (if any)",
      "GST returns / tax details",
    ],
    process: [
      { title: "Onboarding", detail: "Set up the chart of accounts and software." },
      { title: "Recording", detail: "Record and categorise transactions regularly." },
      { title: "Reconciliation", detail: "Reconcile bank, receivables and payables." },
      { title: "Reporting", detail: "Deliver MIS and financial reports on schedule." },
    ],
    govFee: "No government fees involved.",
    professionalFee:
      "Monthly Accounting & Bookkeeping: From ₹2,499/month. Tally/Zoho Books: From ₹2,499/month. Xero/Odoo: From ₹4,999/month. Backlog/Catch-Up: From ₹9,999/month. Bank Reconciliation: From ₹2,499/month. Chart of Accounts Setup: From ₹4,999 (one-time). Financial Statements: From ₹9,999/set. MIS Reports: From ₹4,999/month. Year-End Closing: From ₹14,999/year. Software Migration: From ₹9,999 (one-time).",
    timeline:
      "Ongoing service; first reports typically within 15 days of onboarding. Migrations: 2–4 weeks.",
  },
  "income-tax": {
    whoNeeds: [
      "Individuals and businesses required to file income tax returns",
      "Employers and deductors with TDS obligations",
      "Taxpayers under scrutiny or facing notices",
    ],
    eligibility: ["Any assessee with taxable income or statutory filing obligations."],
    documents: [
      "PAN",
      "Form 16 / salary slips",
      "Bank statements",
      "Investment proofs (80C–80G)",
      "Prior-year returns",
      "Income & expense summary (for businesses)",
    ],
    process: [
      { title: "Data collection", detail: "Gather income, deduction and TDS details." },
      { title: "Computation", detail: "Compute taxable income and eligible deductions." },
      { title: "Filing", detail: "File the correct return on the Income Tax portal." },
      { title: "Verification", detail: "Verify the return and share the acknowledgment." },
    ],
    govFee:
      "Income tax payable as per the Income-tax Act; no government fee for e-filing. TDS Late Fee (Section 234E): ₹200/day, capped at total TDS of quarter. TDS Penalty (Section 271H): ₹10,000–₹1,00,000.",
    professionalFee:
      "ITR-1 Salaried: ₹1,499. ITR-2 (Capital Gains): ₹2,999. ITR-4 Freelancer/Professional: ₹2,999. ITR-3 Business/F&O: ₹4,999. ITR-5 Partnership/LLP: ₹7,500. ITR-6 Pvt Ltd: ₹9,999. ITR-7 Trust/Section 8: ₹12,500. NRI Return: ₹5,999.",
    timeline:
      "ITR-1/2: Due 31 Jul. ITR-3/4: Due 31 Aug. Audit cases: 31 Oct. TP: 30 Nov. Most returns filed within 1–3 working days of complete data.",
  },
  gst: {
    whoNeeds: [
      "Businesses crossing the GST registration threshold",
      "Suppliers, manufacturers, and e-commerce sellers",
      "Exporters and importers with GST obligations",
    ],
    eligibility: [
      "Turnover above the applicable threshold (or voluntary registration)",
      "Inter-state suppliers and e-commerce operators",
      "Casual / non-resident taxable persons (as applicable)",
    ],
    documents: [
      "PAN",
      "Identity & address proofs of promoter(s)",
      "Business address proof",
      "Bank account details",
      "Photograph(s)",
      "Authorisation for authorised signatory",
    ],
    process: [
      { title: "Documentation", detail: "Prepare the complete application file." },
      { title: "Application", detail: "File on the GST portal and obtain ARN." },
      { title: "Department follow-up", detail: "Respond to queries / verification if raised." },
      { title: "Certificate", detail: "Download and deliver the GST certificate." },
    ],
    govFee:
      "GST Registration: Nil (free on portal). Late Fee (Section 47): ₹50/day CGST + ₹50/day SGST = ₹100/day total, capped at ₹10,000/return. Interest (Section 50): 18% p.a. on net tax liability.",
    professionalFee:
      "Registration: ₹1,999–₹5,999. Monthly Returns (GSTR-1 + 3B): From ₹1,499/month. Quarterly QRMP: ₹2,999/quarter. Annual GSTR-9: From ₹4,999. GSTR-9C (>₹5 Cr): From ₹9,999. Composition (CMP-08 + GSTR-4): ₹999/quarter.",
    timeline: "GST registration: 3–15 working days. GSTR-1 by 11th, GSTR-3B by 20th monthly.",
  },
  audit: {
    whoNeeds: [
      "Companies and LLPs with statutory audit requirements",
      "Businesses needing tax audit (44AB) reports",
      "Banks and institutions requiring specified audits",
    ],
    eligibility: ["Entities required to get their accounts audited under the applicable law."],
    documents: [
      "Trial balance & books of account",
      "Bank confirmations",
      "Fixed asset register",
      "Debtors/creditors schedules",
      "Minutes, agreements & statutory records",
      "Prior-year reports",
    ],
    process: [
      { title: "Planning", detail: "Understand the entity and plan the audit scope." },
      { title: "Fieldwork", detail: "Verify books, records and compliance." },
      { title: "Reporting", detail: "Draft findings and the audit report." },
      { title: "Finalisation", detail: "Deliver the signed report and filings." },
    ],
    govFee:
      "Government/regulatory filing fees may apply where reports are filed (e.g., ROC fees for AOC-4).",
    professionalFee:
      "Statutory Audit: From ₹15,000/year (small companies) to ₹1,00,000+/year (large). Tax Audit (44AB): From ₹25,000. Internal Audit: From ₹20,000/year. Fees depend on turnover, entities, and scope.",
    timeline: "Typically 2–4 weeks depending on books readiness and entity size.",
  },
  corporate: {
    whoNeeds: [
      "Companies and LLPs meeting annual ROC compliance",
      "Directors completing annual KYC",
      "Businesses undergoing structural changes or closure",
    ],
    eligibility: ["Registered companies and LLPs under the Companies Act."],
    documents: [
      "Company / LLP incorporation documents",
      "DSC of directors / partners",
      "Financial statements (for AOC-4, MGT-7)",
      "Board resolutions",
      "Registers & statutory records",
    ],
    process: [
      { title: "Compliance review", detail: "Identify pending and upcoming filings." },
      { title: "Preparation", detail: "Prepare forms, resolutions and data." },
      { title: "Filing", detail: "File on the MCA portal with DSC." },
      { title: "Follow-up", detail: "Handle queries and confirm compliance." },
    ],
    govFee: "MCA fees apply based on form type and authorised capital.",
    professionalFee: "Fixed annual compliance packages or per-filing fees - quoted upfront.",
    timeline: "Per-filing: 1–3 working days. Annual compliance packages run on a calendar basis.",
  },
  advisory: {
    whoNeeds: [
      "Businesses planning bank loans and working capital finance",
      "Founders preparing business plans and raising funds",
      "SMEs needing financial planning and valuation",
    ],
    eligibility: ["Any business requiring financial structuring, reporting, or advisory."],
    documents: [
      "Historical financial statements (2–3 years)",
      "Bank statements",
      "Business plan / projections inputs",
      "Asset & liability details",
      "Industry and market data",
    ],
    process: [
      { title: "Discovery", detail: "Understand the objective (loan, funding, valuation)." },
      { title: "Analysis", detail: "Build projections, ratios and reports." },
      { title: "Drafting", detail: "Prepare the report / plan in the required format." },
      { title: "Submission", detail: "Deliver bank/investor-ready documents." },
    ],
    govFee:
      "No government fees; bank processing charges (if any) are paid directly to the institution.",
    professionalFee: "Fixed project fees quoted based on scope and turnaround required.",
    timeline:
      "Project reports/CMA: 3–7 working days. Valuations and business plans: 5–15 working days.",
  },
  consultancy: {
    whoNeeds: [
      "Businesses needing setup or restructuring advice",
      "Companies wanting financial health and risk reviews",
      "SMEs seeking cost reduction and profitability insights",
    ],
    eligibility: ["Any business or individual seeking professional business advisory."],
    documents: [
      "Business overview & current structure",
      "Financial statements",
      "Operational process details",
      "Goals and constraints",
    ],
    process: [
      { title: "Assessment", detail: "Evaluate the current state of the business." },
      { title: "Recommendations", detail: "Provide actionable, prioritised recommendations." },
      { title: "Implementation", detail: "Support execution of the agreed plan." },
      { title: "Review", detail: "Track results and adjust course." },
    ],
    govFee: "No government fees involved.",
    professionalFee: "Scope-based project or monthly advisory fees.",
    timeline: "Assessment typically 5–10 working days; implementation varies by scope.",
  },
  certification: {
    whoNeeds: [
      "Businesses applying for loans, tenders, or visas",
      "Entities needing net worth, turnover, or income certificates",
      "Grant recipients and government empanelment applicants",
    ],
    eligibility: ["Applicants who can provide verifiable financial records."],
    documents: [
      "Audited / certified financial statements",
      "Bank statements",
      "Computation of the figure to be certified",
      "Supporting schedules",
    ],
    process: [
      { title: "Computation", detail: "Verify and compute the required figure." },
      { title: "Verification", detail: "Review supporting records." },
      { title: "Issuance", detail: "Prepare and issue the certified document." },
      { title: "Delivery", detail: "Deliver the certificate for submission." },
    ],
    govFee: "No government fees; notarisation/apostille (if required) is at actual cost.",
    professionalFee: "Fixed certificate fees quoted upfront.",
    timeline: "Most certificates issued within 2–5 working days.",
  },
  international: {
    whoNeeds: [
      "Exporters and importers dealing with cross-border transactions",
      "NRIs and foreign investors with Indian tax obligations",
      "Multinationals with transfer pricing and FEMA requirements",
    ],
    eligibility: ["Entities and individuals with cross-border exposure in India."],
    documents: [
      "PAN",
      "Transaction details & agreements",
      "Bank remittance records",
      "Financial statements",
      "Form 15CA/CB details (for remittances)",
    ],
    process: [
      { title: "Analysis", detail: "Understand the cross-border structure." },
      { title: "Advisory", detail: "Advise on the compliant route." },
      { title: "Filing", detail: "Prepare and file required forms." },
      { title: "Support", detail: "Represent and follow up with authorities." },
    ],
    govFee: "Government/regulatory fees may apply for specific filings.",
    professionalFee: "Case-based professional fees quoted after a scoping discussion.",
    timeline: "Varies by engagement - typically 3–10 working days.",
  },
  iso: {
    whoNeeds: [
      "Manufacturers and exporters needing ISO certification",
      "Companies responding to tenders and large clients",
      "Businesses building quality and management systems",
    ],
    eligibility: [
      "Any organisation of any size implementing a management system",
      "Entities with committed management and defined processes",
    ],
    documents: [
      "Organisation chart & process maps",
      "Existing policies and SOPs",
      "Quality / environment / safety records",
      "Internal audit reports (if any)",
    ],
    process: [
      { title: "Gap assessment", detail: "Identify gaps against the ISO standard." },
      { title: "Documentation", detail: "Build the management system documents & SOPs." },
      { title: "Internal audit", detail: "Conduct internal audits and close findings." },
      { title: "Certification audit", detail: "Coordinate with the certification body." },
    ],
    govFee:
      "No government fee; certification body audit fees are paid directly to the certification body.",
    professionalFee: "Consultancy fees depend on standard, scope, and headcount - quoted upfront.",
    timeline: "ISO certification typically 4–12 weeks depending on readiness.",
  },
  "medical-device": {
    whoNeeds: [
      "Medical device manufacturers and importers in India",
      "Companies targeting US FDA and EU markets",
      "Distributors and authorised representatives of devices",
    ],
    eligibility: [
      "Indian entities (or authorised agents) manufacturing / importing notified medical devices",
      "Overseas manufacturers with an Indian authorised agent for import licences",
    ],
    documents: [
      "Company registration & GST",
      "Manufacturing site / premises documents",
      "Technical dossier & device master file",
      "QMS / ISO 13485 documentation",
      "Free Sale Certificate (for import licences)",
      "Power of Attorney (overseas manufacturer)",
    ],
    process: [
      { title: "Classification", detail: "Classify the device under the applicable rules." },
      { title: "Dossier", detail: "Prepare technical and QMS documentation." },
      { title: "Application", detail: "File with CDSCO / State authority." },
      { title: "Audit & approval", detail: "Coordinate audits and approvals." },
    ],
    govFee: "CDSCO / State licensing authority fees apply as per the Medical Devices Rules, 2017.",
    professionalFee:
      "Regulatory consultancy fees depend on licence type and classification - quoted upfront.",
    timeline:
      "Class A/B manufacturing: 4–8 weeks. Import licences: 6–12 weeks. CDSCO timelines may extend.",
  },
  cosmetics: {
    whoNeeds: [
      "Cosmetic manufacturers and contract manufacturers",
      "Importers bringing cosmetics into India",
      "D2C brands and e-commerce sellers of cosmetics",
    ],
    eligibility: [
      "Indian manufacturing premises for manufacturing licences",
      "Indian importers with a foreign manufacturer for import registration",
    ],
    documents: [
      "Company registration & GST",
      "Manufacturing premises & layout documents",
      "Product formula & ingredient details",
      "Labels & packshots",
      "Free Sale Certificate (for import)",
      "Power of Attorney (foreign manufacturer)",
    ],
    process: [
      { title: "Applicability", detail: "Confirm the licence / registration needed." },
      { title: "Documentation", detail: "Prepare product and site documents." },
      { title: "Filing", detail: "Submit to CDSCO / State authority." },
      { title: "Follow-up", detail: "Track approval and deliver certificates." },
    ],
    govFee: "CDSCO / State licensing authority fees apply under the Cosmetics Rules, 2020.",
    professionalFee: "Fixed regulatory consultancy fees quoted upfront.",
    timeline: "Manufacturing licence: 6–10 weeks. Import registration (COS-2): 8–12 weeks.",
  },
  food: {
    whoNeeds: [
      "Food manufacturers, processors, and packers",
      "Restaurants, caterers, and food e-commerce sellers",
      "Food importers and exporters",
    ],
    eligibility: [
      "All food business operators (FBOs) as per FSS Act, 2006",
      "Registration for small operators; licence for larger/turnover-based operations",
    ],
    documents: [
      "Business address & layout proof",
      "Food safety management plan (for licence)",
      "List of products & category",
      "Partnership/deed/incorporation papers",
      "Water testing report (where applicable)",
    ],
    process: [
      { title: "Category", detail: "Determine registration vs licence type." },
      { title: "Documents", detail: "Compile premises, product, and FBO documents." },
      { title: "Application", detail: "File on FoSCoS portal." },
      { title: "Inspection & approval", detail: "Coordinate inspection and issuance." },
    ],
    govFee:
      "FSSAI Basic Registration: ₹100/year (1 yr) or ₹500 (5 yrs); State Licence: ₹2,000–₹5,000/yr; Central Licence: ₹7,500/yr; Late renewal penalty: ₹100/day.",
    professionalFee:
      "FSSAI Registration: Starting from ₹2,999. State Licence: ₹4,999–₹7,999. Central Licence: ₹7,999–₹14,999. Renewal: ₹2,499–₹4,999.",
    timeline: "Registration: 2–7 days. State/Central licence: 2–6 weeks.",
  },
  solar: {
    whoNeeds: [
      "Solar EPC companies and installers",
      "Vendors bidding for rooftop, RESCO, and CPSU schemes",
      "Businesses supporting PM Surya Ghar beneficiaries",
    ],
    eligibility: [
      "Registered business entity (company, LLP, partnership, proprietorship)",
      "Valid GST and PAN",
      "Technical/financial capability as per scheme criteria",
    ],
    documents: [
      "Company / business registration & GST",
      "PAN, address & bank proof",
      "Technical team profiles & certifications",
      "Past project / work orders (for empanelment)",
      "Financial statements (for larger empanelment)",
    ],
    process: [
      { title: "Scheme mapping", detail: "Identify applicable schemes and discoms." },
      { title: "Documentation", detail: "Prepare technical & financial documents." },
      { title: "Registration", detail: "File vendor registration with discom / nodal agency." },
      { title: "Approval", detail: "Track approvals and complete empanelment." },
    ],
    govFee: "DISCOM / nodal agency processing fees may apply as per scheme guidelines.",
    professionalFee: "Fixed vendor registration fees per discom/state - quoted upfront.",
    timeline: "Typically 2–6 weeks depending on the discom and scheme.",
  },
  "import-export": {
    whoNeeds: [
      "New importers and exporters obtaining IEC",
      "E-commerce sellers sourcing / exporting products",
      "Manufacturers needing product compliance for exports",
    ],
    eligibility: ["Indian citizens or registered entities engaged in international trade."],
    documents: [
      "PAN & Aadhaar",
      "Bank account details",
      "Address proof",
      "Business / entity registration proof",
      "Product-specific compliance documents",
    ],
    process: [
      { title: "Assessment", detail: "Confirm the licences and documents needed." },
      { title: "Application", detail: "File with DGFT / concerned authority." },
      { title: "Follow-up", detail: "Track and respond to queries." },
      { title: "Delivery", detail: "Deliver IEC / certificates." },
    ],
    govFee: "IEC fee is nominal; other regulatory fees vary by product/authority.",
    professionalFee: "Fixed professional fees quoted upfront.",
    timeline: "IEC: 2–5 working days. Other licences vary by authority.",
  },
  ecommerce: {
    whoNeeds: [
      "D2C brands and manufacturers selling online",
      "Sellers onboarding to marketplaces (Amazon, Flipkart, Meesho, IndiaMART)",
      "Brands setting up Shopify stores and catalogues",
    ],
    eligibility: ["Any business with a GST registration (or in process of getting one)."],
    documents: [
      "GST registration certificate",
      "Bank account details",
      "Identity & address proofs",
      "Product catalogue / images",
      "Brand registration proof (for brand registry)",
    ],
    process: [
      { title: "Onboarding", detail: "Set up the marketplace / store account." },
      { title: "Listings", detail: "Upload catalogues and listings." },
      { title: "Compliance", detail: "Clear category approvals and documents." },
      { title: "Launch", detail: "Go live with pricing and fulfilment guidance." },
    ],
    govFee: "No government fees; marketplace fees/commissions apply as per platform policy.",
    professionalFee: "Setup and management fees quoted per platform and scope.",
    timeline: "Seller registration: 3–7 working days. Store setup: 1–3 weeks.",
  },
  startup: {
    whoNeeds: [
      "Early-stage startups seeking DPIIT recognition",
      "Founders preparing to raise funding",
      "Startups managing investor and ESOP compliance",
    ],
    eligibility: [
      "Startups as defined under the Startup India policy (entity age, turnover criteria)",
      "DPPIIT recognition is available to eligible incorporated entities",
    ],
    documents: [
      "Incorporation certificate",
      "Pitch deck / business plan",
      "Financial projections",
      "Founder KYC",
      "Product / traction details",
    ],
    process: [
      { title: "Eligibility", detail: "Confirm Startup India eligibility." },
      { title: "Recognition", detail: "File DPIIT recognition application." },
      { title: "Funding readiness", detail: "Prepare investor documentation." },
      { title: "Compliance", detail: "Maintain ongoing startup compliance." },
    ],
    govFee: "DPIIT recognition is free; other government fees apply for specific filings.",
    professionalFee: "Fixed recognition and readiness fees quoted upfront.",
    timeline: "DPIIT recognition: 2–6 weeks. Funding readiness: 1–3 weeks.",
  },
  "digital-marketing": {
    whoNeeds: [
      "Businesses wanting more enquiries and sales online",
      "B2B companies needing lead generation",
      "D2C brands scaling via ads and e-commerce marketing",
    ],
    eligibility: ["Any business with a clear offer and target audience."],
    documents: [
      "Business details & website (if any)",
      "Target audience / ICP",
      "Existing brand assets",
      "Campaign goals & budget",
    ],
    process: [
      { title: "Strategy", detail: "Define goals, audience and channels." },
      { title: "Setup", detail: "Build pages, campaigns and tracking." },
      { title: "Launch", detail: "Run campaigns and content." },
      { title: "Optimise", detail: "Report and scale what works." },
    ],
    govFee: "No government fees; ad spend is paid directly to the platform.",
    professionalFee: "Management fees + ad budget; quoted per scope.",
    timeline: "Campaign setup: 1–2 weeks. Results build over 4–8 weeks.",
  },
};

const SERVICE_DETAILS: Record<
  string,
  Partial<Omit<ServiceDetail, "faqs">> & { faqs?: ServiceFaq[] }
> = {
  "iso-consultancy": {
    whoNeeds: [
      "Manufacturers, exporters and service firms seeking ISO certification",
      "Companies responding to tenders that require ISO 9001",
      "Medical device firms needing ISO 13485",
      "Food businesses implementing ISO 22000 / FSMS",
    ],
    eligibility: [
      "Any organisation of any size",
      "Management commitment to implement a management system",
    ],
    documents: [
      "Organisation chart & process flows",
      "Existing policies / SOPs",
      "Internal & external audit reports (if any)",
      "Customer / tender requirements",
    ],
    process: [
      {
        title: "Gap assessment",
        detail: "Map your current state against the chosen ISO standard.",
      },
      { title: "Roadmap", detail: "Agree a certification roadmap and timeline." },
      { title: "Implementation", detail: "Build documentation, training and internal audits." },
      { title: "Certification", detail: "Coordinate the certification body audit." },
    ],
    govFee:
      "No government fee; certification body audit fees are payable directly to the certifying body.",
    professionalFee:
      "Consultancy fees depend on the standard and organisation size - fixed quote provided.",
    timeline: "4–12 weeks depending on scope, headcount and document readiness.",
  },
  "medical-device-regulatory": {
    whoNeeds: [
      "Medical device manufacturers seeking CDSCO licences",
      "Importers and distributors bringing devices into India",
      "Exporters targeting US FDA and EU MDR markets",
    ],
    eligibility: [
      "Indian entities or authorised agents for CDSCO licences",
      "Overseas manufacturers through an Indian authorised agent",
    ],
    documents: [
      "Company registration & GST",
      "Manufacturing premises documents (for manufacturing)",
      "Technical dossier / Device Master File",
      "ISO 13485 / QMS documentation",
      "Free Sale Certificate (import)",
      "Power of Attorney (overseas manufacturer)",
    ],
    process: [
      { title: "Classification", detail: "Classify the device (A/B/C/D) under MDR 2017." },
      { title: "Dossier & QMS", detail: "Prepare technical and quality documents." },
      { title: "Application", detail: "File with CDSCO / State authority." },
      { title: "Audit & approval", detail: "Coordinate site audits and approvals." },
    ],
    govFee: "CDSCO / State licensing authority fees apply per the Medical Devices Rules, 2017.",
    professionalFee: "Regulatory consultancy fees depend on licence type, device class and scope.",
    timeline: "Varies by licence - manufacturing (Class A/B): 4–8 weeks; import: 6–12 weeks.",
  },
  "cosmetics-regulatory": {
    whoNeeds: [
      "Cosmetic manufacturers and contract manufacturers",
      "Importers of cosmetics into India",
      "D2C and e-commerce cosmetic brands",
    ],
    eligibility: [
      "Manufacturing licence: eligible premises and Indian entity",
      "Import: Indian importer with foreign manufacturer documentation",
    ],
    documents: [
      "Company registration & GST",
      "Manufacturing premises layout (for licence)",
      "Product formula & ingredient details",
      "Labels & packshots",
      "Free Sale Certificate (import)",
      "Power of Attorney (foreign manufacturer)",
    ],
    process: [
      { title: "Assessment", detail: "Confirm the licences and registrations needed." },
      { title: "Documentation", detail: "Prepare product and site documents." },
      { title: "Filing", detail: "File with CDSCO / State authority." },
      { title: "Follow-up", detail: "Track approvals and deliver certificates." },
    ],
    govFee: "CDSCO / State licensing authority fees apply under the Cosmetics Rules, 2020.",
    professionalFee: "Fixed regulatory consultancy fees quoted upfront.",
    timeline: "Manufacturing licence: 6–10 weeks. Import registration: 8–12 weeks.",
  },
  "solar-consultancy": {
    whoNeeds: [
      "Solar EPC companies and vendors seeking empanelment",
      "Installers registering under PM Surya Ghar and DISCOM schemes",
      "Businesses applying for net metering",
    ],
    eligibility: [
      "Registered business entity with GST and PAN",
      "Technical capability per scheme guidelines",
    ],
    documents: [
      "Business registration & GST",
      "PAN, address & bank proof",
      "Technical team profiles",
      "Past project references (for empanelment)",
    ],
    process: [
      { title: "Scheme mapping", detail: "Identify applicable schemes and discoms by state." },
      { title: "Documentation", detail: "Prepare vendor and technical documents." },
      { title: "Registration", detail: "File registration with discom / nodal agency." },
      { title: "Approval", detail: "Track approvals and complete empanelment." },
    ],
    govFee: "DISCOM / nodal agency processing fees may apply per scheme.",
    professionalFee: "Fixed consultancy fees per state/discom - quoted upfront.",
    timeline: "Typically 2–6 weeks per discom depending on approvals.",
  },
  "ecommerce-services": {
    whoNeeds: [
      "D2C brands and manufacturers selling online",
      "Sellers onboarding to Amazon, Flipkart, Meesho, IndiaMART",
      "Brands building Shopify stores and catalogues",
    ],
    eligibility: ["Any business with GST registration (or being registered)."],
    documents: [
      "GST certificate",
      "Bank account details",
      "Identity & address proofs",
      "Product images & catalogue",
    ],
    process: [
      { title: "Onboarding", detail: "Set up marketplace / store accounts." },
      { title: "Listings", detail: "Create catalogues and product listings." },
      { title: "Compliance", detail: "Clear approvals and brand registry." },
      { title: "Launch", detail: "Go live with fulfilment guidance." },
    ],
    govFee: "No government fees; platform commissions apply per policy.",
    professionalFee: "Fixed setup and management fees per platform and scope.",
    timeline: "Seller registration: 3–7 working days. Store setup: 1–3 weeks.",
  },
  "startup-funding-services": {
    whoNeeds: [
      "Early-stage startups seeking Startup India recognition",
      "Founders preparing to raise their first round",
      "Startups managing investor and ESOP compliance",
    ],
    eligibility: [
      "Incorporated entities eligible under the Startup India policy",
      "Founders with a clear business model and growth plan",
    ],
    documents: [
      "Incorporation certificate",
      "Founder KYC",
      "Pitch deck / business plan",
      "Financial projections",
    ],
    process: [
      { title: "Eligibility", detail: "Confirm Startup India / DPIIT eligibility." },
      { title: "Recognition", detail: "File the DPIIT recognition application." },
      { title: "Readiness", detail: "Prepare investor and funding documents." },
      { title: "Compliance", detail: "Maintain ongoing startup compliance." },
    ],
    govFee: "DPIIT recognition is free; other government fees apply for filings.",
    professionalFee: "Fixed recognition and readiness fees quoted upfront.",
    timeline: "DPIIT recognition: 2–6 weeks. Funding readiness: 1–3 weeks.",
  },
  "import-export-compliance": {
    whoNeeds: [
      "Importers and exporters applying for IEC",
      "Sellers sourcing products from overseas",
      "Manufacturers needing product compliance for export",
    ],
    eligibility: ["Indian citizens or registered entities engaged in international trade."],
    documents: [
      "PAN & Aadhaar",
      "Bank account details",
      "Address proof",
      "Entity registration proof",
    ],
    process: [
      { title: "Assessment", detail: "Confirm required licences and product compliance." },
      { title: "Application", detail: "File with DGFT / relevant authority." },
      { title: "Follow-up", detail: "Track and respond to queries." },
      { title: "Delivery", detail: "Deliver IEC and certificates." },
    ],
    govFee: "Nominal IEC fee; other regulatory fees vary by product.",
    professionalFee: "Fixed professional fees quoted upfront.",
    timeline: "IEC: 2–5 working days. Other licences vary.",
  },
  "food-fssai-services": {
    whoNeeds: [
      "Food manufacturers, processors, and packers",
      "Restaurants, caterers, and food e-commerce sellers",
      "Food importers and exporters",
    ],
    eligibility: [
      "All food business operators under the FSS Act, 2006",
      "Registration or licence depending on size and turnover",
    ],
    documents: [
      "Business address & layout",
      "List of products",
      "Food safety management plan (licence)",
      "Incorporation / partnership papers",
    ],
    process: [
      { title: "Category", detail: "Determine registration vs licence type." },
      { title: "Documents", detail: "Compile premises and product documents." },
      { title: "Application", detail: "File on the FoSCoS portal." },
      { title: "Approval", detail: "Coordinate inspection and issuance." },
    ],
    govFee: "FSSAI fees apply per category (registration ~₹100–500; licences higher).",
    professionalFee: "Fixed documentation and filing fees quoted upfront.",
    timeline: "Registration: 2–7 days. Licence: 2–6 weeks.",
  },
  "digital-marketing-services": {
    whoNeeds: [
      "Businesses wanting more enquiries and sales online",
      "B2B companies needing consistent lead generation",
      "D2C brands scaling via ads and e-commerce marketing",
    ],
    eligibility: ["Any business with a clear offer and target audience."],
    documents: [
      "Business details & website (if any)",
      "Target audience / ICP",
      "Brand assets",
      "Campaign goals & budget",
    ],
    process: [
      { title: "Strategy", detail: "Define goals, audience and channels." },
      { title: "Setup", detail: "Build pages, campaigns and tracking." },
      { title: "Launch", detail: "Run campaigns and content." },
      { title: "Optimise", detail: "Report and scale what works." },
    ],
    govFee: "No government fees; ad spend is paid directly to platforms.",
    professionalFee: "Management fees + ad budget; quoted per scope.",
    timeline: "Setup: 1–2 weeks. Results build over 4–8 weeks.",
  },
  "solar-vendor-registration": {
    whoNeeds: [
      "Solar installers and EPC vendors seeking discom empanelment",
      "Businesses applying for rooftop / RESCO / CPSU schemes",
    ],
    eligibility: [
      "Registered business entity with GST and PAN",
      "Technical and financial capability per scheme criteria",
    ],
    documents: [
      "Business registration & GST",
      "PAN, address & bank proof",
      "Technical team profiles",
      "Past project references (where required)",
    ],
    process: [
      { title: "Scheme mapping", detail: "Identify applicable discom schemes." },
      { title: "Documentation", detail: "Prepare technical & financial documents." },
      { title: "Registration", detail: "File vendor registration." },
      { title: "Approval", detail: "Track approvals and empanelment." },
    ],
    govFee: "DISCOM / nodal agency processing fees may apply.",
    professionalFee: "Fixed registration fees per discom/state.",
    timeline: "Typically 2–6 weeks depending on the discom.",
  },
  "tally-accounting": {
    whoNeeds: [
      "Businesses using Tally for day-to-day accounting",
      "SMEs migrating from manual records to Tally",
      "Companies needing Tally-based GST-ready invoicing",
    ],
    eligibility: ["Any business with Tally or planning to use Tally."],
    documents: [
      "Tally license (existing or new)",
      "Bank statements & passbooks",
      "Purchase & sales invoices",
      "GST returns (if applicable)",
    ],
    process: [
      { title: "Setup", detail: "Configure Tally with chart of accounts and GST settings." },
      { title: "Data entry", detail: "Record transactions and categorise entries." },
      { title: "Reconciliation", detail: "Reconcile bank and ledger balances." },
      { title: "Reporting", detail: "Deliver MIS, P&L, and balance sheet reports." },
    ],
    govFee: "No government fees.",
    professionalFee:
      "Tally/Zoho Books Accounting: From ₹2,499/month. Backlog/Catch-Up Bookkeeping: From ₹9,999/month. Chart of Accounts Setup: From ₹4,999 (one-time).",
    timeline: "Ongoing; initial setup typically 3–5 working days.",
  },
  "zoho-books-accounting": {
    whoNeeds: [
      "Businesses wanting cloud-first Zoho Books accounting",
      "Companies migrating from Tally to Zoho Books",
      "Startups needing GST-ready invoicing on Zoho",
    ],
    eligibility: ["Any business entity with GST and PAN."],
    documents: [
      "Zoho Books account access",
      "Bank statements",
      "Purchase & sales invoices",
      "Existing Tally data (for migration)",
    ],
    process: [
      { title: "Migration", detail: "Migrate data from Tally or set up fresh on Zoho Books." },
      {
        title: "Configuration",
        detail: "Set up chart of accounts, bank feeds, and GST invoicing.",
      },
      { title: "Bookkeeping", detail: "Record, categorise, and reconcile transactions monthly." },
      { title: "Reporting", detail: "Deliver real-time financial reports and MIS dashboards." },
    ],
    govFee: "No government fees.",
    professionalFee:
      "Tally/Zoho Books Accounting: From ₹2,499/month. Software Migration (Tally to Zoho): From ₹9,999 (one-time). SOP Drafting: From ₹24,999 (one-time).",
    timeline:
      "Migration: 5–10 working days. Ongoing bookkeeping starts within 3 days of onboarding.",
  },
  "xero-accounting": {
    whoNeeds: [
      "Businesses preferring a modern cloud accounting platform",
      "International businesses with India operations",
      "Companies wanting real-time collaborative accounting",
    ],
    eligibility: ["Any business entity."],
    documents: [
      "Xero account access",
      "Bank statements",
      "Purchase & sales invoices",
      "Existing accounting data (for migration)",
    ],
    process: [
      { title: "Setup", detail: "Configure Xero with chart of accounts and integrations." },
      { title: "Migration", detail: "Migrate data from existing systems." },
      { title: "Bookkeeping", detail: "Ongoing transaction recording and reconciliation." },
      { title: "Reporting", detail: "Financial reports, dashboards, and GST-ready data." },
    ],
    govFee: "No government fees.",
    professionalFee:
      "Xero/Odoo Accounting: From ₹4,999/month. Software Migration: From ₹9,999 (one-time).",
    timeline: "Setup: 3–5 working days. Migration: 5–10 working days.",
  },
  "payroll-processing": {
    whoNeeds: [
      "Businesses with 10+ employees needing monthly payroll",
      "Companies wanting outsourced payroll compliance",
      "Employers needing PF/ESI/TDS compliance on salary",
    ],
    eligibility: ["Any registered business with employees."],
    documents: [
      "Employee details & appointment letters",
      "Salary structure & CTC breakdowns",
      "Attendance & leave records",
      "Bank details for salary transfer",
      "PAN & Aadhaar of employees",
    ],
    process: [
      { title: "Setup", detail: "Configure salary structures and deduction rules." },
      { title: "Computation", detail: "Compute monthly salary, PF, ESI, and TDS." },
      { title: "Disbursement", detail: "Generate payslips and salary transfer statements." },
      { title: "Compliance", detail: "File PF/ESI returns and issue Form 16." },
    ],
    govFee:
      "No government fees for processing. Statutory rates: EPF 12% each (employer+employee). ESI: 0.75% employee + 3.25% employer (gross ≤ ₹21,000). TDS by 7th; EPF/ESI by 15th.",
    professionalFee:
      "Basic Payroll Processing: ₹300–₹500/employee/month. Full Compliance (EPF+ESI+TDS+PT): ₹500–₹800/employee/month. Enterprise/Multi-State: ₹1,500–₹2,500/employee/month. Minimum Monthly (<20 emp): ₹5,000/month. Starting from ₹149/employee/month.",
    timeline: "TDS by 7th; EPF/ESI by 15th; Salary by 7th of each month.",
  },
  "gratuity-compliance": {
    whoNeeds: [
      "Companies with 10+ employees under the Payment of Gratuity Act",
      "Businesses setting up gratuity funds or trusts",
      "Employers managing employee exit settlements",
    ],
    eligibility: ["Establishments with 10+ employees covered under the Gratuity Act."],
    documents: [
      "Employee details & date of joining",
      "Salary structure & CTC breakdowns",
      "Exit details (for settlements)",
      "Gratuity trust deed (if applicable)",
    ],
    process: [
      { title: "Assessment", detail: "Determine eligibility and compute gratuity liability." },
      { title: "Trust setup", detail: "Set up or configure gratuity trust (if required)." },
      { title: "Computation", detail: "Calculate individual gratuity amounts on exit." },
      { title: "Payment", detail: "Process gratuity payments within 30 days of exit." },
    ],
    govFee: "No government fees; gratuity trust registration may involve nominal stamp duty.",
    professionalFee:
      "Fixed compliance fees from ₹5,000/- per year; trust setup from ₹15,000/- onwards.",
    timeline: "Compliance setup: 5–10 working days. Individual computation: 2–3 working days.",
  },
};

export const getServiceDetails = (service: Service): ServiceDetail => {
  const base = CATEGORY_DEFAULTS[service.category] ?? CATEGORY_DEFAULTS.consultancy;
  const override = SERVICE_DETAILS[service.slug] ?? {};
  const faqs = [...(override.faqs ?? []), ...(base.faqs ?? COMMON_FAQS)];
  return {
    whoNeeds: override.whoNeeds ?? base.whoNeeds ?? [],
    eligibility: override.eligibility ?? base.eligibility ?? [],
    documents: override.documents ?? base.documents ?? [],
    process: override.process ?? base.process ?? [],
    govFee:
      override.govFee ??
      base.govFee ??
      "Please confirm current government / authority fees during your consultation.",
    professionalFee:
      override.professionalFee ??
      base.professionalFee ??
      "Professional fees are quoted transparently after a free consultation - no hidden charges.",
    timeline:
      override.timeline ??
      base.timeline ??
      "Timeline depends on the authority and document readiness; we confirm it before starting.",
    faqs,
  };
};

export const getRelatedServices = (service: Service, limit = 8): Service[] => {
  if (service.related && service.related.length > 0) {
    const bySlug = service.related
      .map((s) => getService(s))
      .filter((s): s is Service => Boolean(s));
    if (bySlug.length > 0) return bySlug.slice(0, limit);
  }
  return SERVICES.filter((s) => s.category === service.category && s.slug !== service.slug).slice(
    0,
    limit,
  );
};
