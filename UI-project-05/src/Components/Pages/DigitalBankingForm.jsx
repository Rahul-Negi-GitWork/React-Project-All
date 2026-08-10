import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Phone } from "lucide-react";

const SEGMENTS = [
  { value: "satisfied", label: "Satisfied", desc: "Happy with current banking" },
  { value: "underserved", label: "Underserved", desc: "Gaps in access or service" },
  { value: "underbanked", label: "Underbanked", desc: "Limited formal banking" },
];

export default function DigitalBankingForm({ onBack }) {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    company: "",
    phone: "",
    segment: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 md:px-12 py-5 border-b border-neutral-200">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white text-xs font-semibold uppercase tracking-widest px-5 py-2.5 hover:bg-neutral-700 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to overview
        </button>
        <span className="inline-flex items-center gap-2 rounded-full bg-neutral-100 text-neutral-600 text-xs font-semibold uppercase tracking-widest px-5 py-2.5">
          <Phone className="w-3.5 h-3.5" />
          Digital Banking Platform
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-14 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-14">
        {/* Left: pitch */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4">
            Request access
          </p>
          <h1 className="font-bold text-4xl md:text-5xl leading-[1.05] tracking-tight">
            Let&apos;s build your
            <br />
            <span className="text-neutral-400">banking segment.</span>
          </h1>
          <p className="mt-6 max-w-sm text-neutral-500 text-[15px] leading-relaxed">
            Tell us about your customers and where they sit today &mdash;
            satisfied, underserved, or underbanked &mdash; and we&apos;ll show
            you how the platform fits.
          </p>

          <div className="flex gap-8 mt-11 flex-wrap">
            <div>
              <span className="block font-bold text-2xl">3</span>
              <span className="text-xs text-neutral-500">Customer segments</span>
            </div>
            <div>
              <span className="block font-bold text-2xl">24/7</span>
              <span className="text-xs text-neutral-500">Digital access</span>
            </div>
            <div>
              <span className="block font-bold text-2xl">&lt;48h</span>
              <span className="text-xs text-neutral-500">Response time</span>
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
            <p className="text-xs text-neutral-600 leading-relaxed">
              This form mirrors the segmentation on the overview page &mdash;
              pick the profile closest to your audience so our team can prep
              the right walkthrough before we talk.
            </p>
          </div>

          <div className="mt-14 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center shrink-0">
              <ArrowUpRight className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs text-neutral-500">
              Fill in your details &mdash; we&apos;ll follow up by email.
            </span>
          </div>
        </div>

        {/* Right: form card */}
        <div className="rounded-3xl border border-neutral-200 shadow-xl shadow-neutral-200/50 p-6 md:p-10">
          <h2 className="text-xl font-bold">Get started</h2>
          <p className="text-sm text-neutral-500 mt-1 mb-8">
            No commitment &mdash; just a conversation about your platform
            needs.
          </p>

          {submitted ? (
            <div className="flex items-center gap-3 rounded-xl bg-neutral-100 border border-neutral-200 px-4 py-4 text-sm font-medium text-neutral-700">
              <span className="w-6 h-6 rounded-full bg-neutral-900 text-white flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5" />
              </span>
              Thanks &mdash; your request has been noted. We&apos;ll be in
              touch shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Full name">
                  <input
                    type="text"
                    required
                    placeholder="Jordan Lee"
                    value={form.fullname}
                    onChange={update("fullname")}
                    className={inputClasses}
                  />
                </Field>
                <Field label="Work email">
                  <input
                    type="email"
                    required
                    placeholder="jordan@company.com"
                    value={form.email}
                    onChange={update("email")}
                    className={inputClasses}
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Company">
                  <input
                    type="text"
                    placeholder="Company name"
                    value={form.company}
                    onChange={update("company")}
                    className={inputClasses}
                  />
                </Field>
                <Field label="Phone">
                  <input
                    type="tel"
                    placeholder="+91 00000 00000"
                    value={form.phone}
                    onChange={update("phone")}
                    className={inputClasses}
                  />
                </Field>
              </div>

              <Field label="Which best describes your customers?">
                <div className="flex flex-wrap gap-3">
                  {SEGMENTS.map((seg) => {
                    const active = form.segment === seg.value;
                    return (
                      <button
                        type="button"
                        key={seg.value}
                        onClick={() =>
                          setForm((prev) => ({ ...prev, segment: seg.value }))
                        }
                        className={`flex-1 min-w-[130px] text-left rounded-xl border px-4 py-3 transition-colors ${
                          active
                            ? "border-neutral-900 bg-neutral-900 text-white"
                            : "border-neutral-200 bg-neutral-50 text-neutral-800 hover:border-neutral-400"
                        }`}
                      >
                        <span className="flex items-center gap-2 text-sm font-semibold">
                          <span
                            className={`w-2 h-2 rounded-full ${
                              active ? "bg-white" : "bg-neutral-400"
                            }`}
                          />
                          {seg.label}
                        </span>
                        <span
                          className={`block text-xs mt-1 ml-4 ${
                            active ? "text-neutral-300" : "text-neutral-500"
                          }`}
                        >
                          {seg.desc}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </Field>

              <Field label="What are you hoping to solve?">
                <textarea
                  rows={4}
                  placeholder="A short note helps us prep the right demo."
                  value={form.message}
                  onChange={update("message")}
                  className={inputClasses}
                />
              </Field>

              <div className="flex items-center gap-4 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white font-semibold text-sm px-6 py-3.5 hover:bg-neutral-700 transition-colors"
                >
                  Request access
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-xs text-neutral-500">
                  We reply within 48 hours.
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <label className="block text-[11px] font-semibold uppercase tracking-wide text-neutral-600 mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}

const inputClasses =
  "w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:bg-white transition-colors";
