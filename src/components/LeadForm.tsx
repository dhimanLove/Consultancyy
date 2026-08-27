import { useState, type FormEvent } from "react";
import { Send, CheckCircle } from "lucide-react";
import { WHATSAPP_HREF } from "@/lib/nav";
import { SERVICES_BY_CATEGORY } from "@/lib/services-data";

const SALUTATIONS = ["Mr.", "Mrs.", "Ms.", "Company"] as const;

const inputCls =
  "w-full rounded-[8px] border border-[#E5E5E5] bg-white px-3.5 py-2.5 text-[14px] text-navy " +
  "placeholder:text-steel/40 outline-none transition-colors duration-150 " +
  "hover:border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/10";

const labelCls = "mb-1 block text-[12px] font-semibold text-navy";

const initial = {
  salutation: SALUTATIONS[0] as string,
  name: "",
  email: "",
  mobile: "",
  city: "",
  lookingFor: "",
};

export function LeadForm() {
  const [values, setValues] = useState(initial);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const set =
    (key: keyof typeof initial) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setValues((v) => ({ ...v, [key]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { salutation, name, email, mobile, city, lookingFor } = values;
    if (!name.trim() || !mobile.trim() || !email.trim() || !city.trim() || !lookingFor) {
      setError("Please fill all the required fields.");
      return;
    }
    if (!/^[0-9+\-\s]{10,15}$/.test(mobile.trim())) {
      setError("Please enter a valid mobile number.");
      return;
    }
    setError("");
    setSending(true);

    const msg = [
      "*New Quote Enquiry - Chartered Solution*",
      "",
      `*Salutation:* ${salutation}`,
      `*Name:* ${name.trim()}`,
      `*Email:* ${email.trim()}`,
      `*Mobile:* ${mobile.trim()}`,
      `*City:* ${city.trim()}`,
      `*Looking For:* ${lookingFor}`,
      "",
      "Sent via charteredsolution.com",
    ].join("\n");

    setTimeout(() => {
      setSending(false);
      setSent(true);
      window.open(`${WHATSAPP_HREF}?text=${encodeURIComponent(msg)}`, "_blank");
    }, 600);
  };

  if (sent) {
    return (
      <div className="w-full rounded-[12px] border border-navy/10 bg-white p-6 shadow-xl shadow-navy/[0.08] sm:p-7">
        <div className="py-8 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-warm/10">
            <CheckCircle className="h-7 w-7 text-warm-dark" />
          </div>
          <h3 className="mt-4 text-[18px] font-bold text-navy">
            Thank you, {values.name.trim().split(" ")[0]}!
          </h3>
          <p className="mx-auto mt-1.5 max-w-[340px] text-[13px] leading-relaxed text-steel">
            Your quote request is ready on WhatsApp. We&rsquo;ll respond within minutes during
            business hours.
          </p>
          <a
            href={`${WHATSAPP_HREF}?text=${encodeURIComponent(
              "Hi Chartered Solution, I just submitted the quote form.",
            )}`}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-[8px] bg-[#25D366] px-5 py-2.5 text-[13px] font-bold text-white transition-colors hover:bg-[#1fb959]"
          >
            Open WhatsApp <Send className="h-4 w-4" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full rounded-[12px] border border-navy/10 bg-white p-6 shadow-xl shadow-navy/[0.08] sm:p-7">
      <form onSubmit={handleSubmit} aria-label="Get quote instantly">
        {/* Header */}
        <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-warm-dark">
          Quick Enquiry
        </p>
        <h3 className="mt-1.5 text-[20px] font-extrabold leading-tight text-navy">
          Get Quote Instantly <span className="text-warm-dark">in a Minute</span>
        </h3>
        <p className="mt-1 text-[13px] text-steel">
          Fill in your details and we&rsquo;ll reach out on WhatsApp.
        </p>

        {/* Salutation */}
        <div className="mt-5">
          <span className={labelCls}>Salutation</span>
          <div className="flex flex-wrap gap-1.5">
            {SALUTATIONS.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setValues((v) => ({ ...v, salutation: s }))}
                className={`rounded-full border px-4 py-1.5 text-[12.5px] font-semibold transition-colors duration-150 ${
                  values.salutation === s
                    ? "border-warm bg-warm/10 text-warm-dark"
                    : "border-[#E5E5E5] text-navy/70 hover:border-warm/40 hover:text-warm-dark"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Fields */}
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="lf-name" className={labelCls}>
              Full Name <span className="text-error">*</span>
            </label>
            <input
              id="lf-name"
              type="text"
              autoComplete="name"
              value={values.name}
              onChange={set("name")}
              className={inputCls}
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="lf-email" className={labelCls}>
              Email <span className="text-error">*</span>
            </label>
            <input
              id="lf-email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={set("email")}
              className={inputCls}
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="lf-mobile" className={labelCls}>
              Mobile <span className="text-error">*</span>
            </label>
            <input
              id="lf-mobile"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={values.mobile}
              onChange={set("mobile")}
              className={inputCls}
              placeholder="+91 XXXXX XXXXX"
            />
          </div>
          <div>
            <label htmlFor="lf-city" className={labelCls}>
              City <span className="text-error">*</span>
            </label>
            <input
              id="lf-city"
              type="text"
              autoComplete="address-level2"
              value={values.city}
              onChange={set("city")}
              className={inputCls}
              placeholder="Your city"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="lf-looking" className={labelCls}>
              Looking For <span className="text-error">*</span>
            </label>
            <select
              id="lf-looking"
              value={values.lookingFor}
              onChange={set("lookingFor")}
              className={`${inputCls} cursor-pointer ${values.lookingFor ? "" : "text-steel/40"}`}
            >
              <option value="" disabled>
                Select a service...
              </option>
              {SERVICES_BY_CATEGORY.map(({ category, services }) => (
                <optgroup key={category.id} label={category.name}>
                  {services.map((s) => (
                    <option key={s.slug} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
        </div>

        {error && (
          <p
            role="alert"
            className="mt-4 rounded-[8px] border border-error/20 bg-error/5 px-3 py-2 text-[12px] font-semibold text-error"
          >
            {error}
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={sending}
          className="mt-6 flex w-full items-center justify-center gap-2.5 rounded-[8px] bg-warm px-6 py-3 text-[14px] font-bold text-navy-dark shadow-lg shadow-warm/25 transition-all duration-150 hover:bg-warm-dark active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {sending ? (
            <>
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" aria-hidden>
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Sending...
            </>
          ) : (
            <>
              Get Quote Now <Send className="h-4 w-4" />
            </>
          )}
        </button>

        <p className="mt-3 text-center text-[11px] text-steel/60">
          Your info stays confidential. No spam.
        </p>
      </form>
    </div>
  );
}
