"use client";

import { useMemo, useState } from "react";

const enquiryTypes = [
  "Mining company partnership",
  "SME registration support",
  "Finance partner enquiry",
  "Supplier development programme",
  "General enquiry",
] as const;

type EnquiryType = (typeof enquiryTypes)[number];

export function ContactFormClient() {
  const [fullName, setFullName] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [enquiryType, setEnquiryType] = useState<EnquiryType | "">("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const validationError = useMemo(() => {
    if (!fullName.trim()) return "Full name is required.";
    if (!email.trim()) return "Email is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      return "Please enter a valid email address.";
    if (!enquiryType) return "Please select an enquiry type.";
    if (!message.trim()) return "Message is required.";
    return "";
  }, [email, enquiryType, fullName, message]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validationError) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          organisation,
          email,
          phone,
          enquiryType,
          message,
        }),
      });

      if (!res.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      setFullName("");
      setOrganisation("");
      setEmail("");
      setPhone("");
      setEnquiryType("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="rma-card p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label className="text-sm font-semibold text-[var(--rma-ink)]">
            Full name <span className="text-[color:var(--rma-orange)]">*</span>
            <input
              className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--rma-blue)]/25"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              autoComplete="name"
              required
            />
          </label>
        </div>

        <div className="sm:col-span-1">
          <label className="text-sm font-semibold text-[var(--rma-ink)]">
            Organisation
            <input
              className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--rma-blue)]/25"
              value={organisation}
              onChange={(e) => setOrganisation(e.target.value)}
              autoComplete="organization"
            />
          </label>
        </div>

        <div className="sm:col-span-1">
          <label className="text-sm font-semibold text-[var(--rma-ink)]">
            Email <span className="text-[color:var(--rma-orange)]">*</span>
            <input
              className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--rma-blue)]/25"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
          </label>
        </div>

        <div className="sm:col-span-1">
          <label className="text-sm font-semibold text-[var(--rma-ink)]">
            Phone
            <input
              className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--rma-blue)]/25"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              autoComplete="tel"
            />
          </label>
        </div>

        <div className="sm:col-span-2">
          <label className="text-sm font-semibold text-[var(--rma-ink)]">
            Enquiry type <span className="text-[color:var(--rma-orange)]">*</span>
            <select
              className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--rma-blue)]/25"
              value={enquiryType}
              onChange={(e) =>
                setEnquiryType((e.target.value as EnquiryType) || "")
              }
              required
            >
              <option value="">Select an option</option>
              {enquiryTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="sm:col-span-2">
          <label className="text-sm font-semibold text-[var(--rma-ink)]">
            Message <span className="text-[color:var(--rma-orange)]">*</span>
            <textarea
              className="mt-2 min-h-[140px] w-full resize-y rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--rma-blue)]/25"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </label>
        </div>
      </div>

      <p className="mt-4 text-xs leading-5 rma-muted">
        By submitting this form, you consent to RMA using your contact details to respond to your
        enquiry. Do not submit confidential documents through this form.
      </p>

      {status === "success" ? (
        <div className="mt-4 rounded-2xl border border-black/10 bg-[color:var(--rma-green)]/10 px-4 py-3 text-sm text-black/80">
          Thank you. Your enquiry has been received and RMA will respond via info@rma.africa.
        </div>
      ) : null}

      {status === "error" ? (
        <div className="mt-4 rounded-2xl border border-black/10 bg-[color:var(--rma-orange)]/10 px-4 py-3 text-sm text-black/80">
          {validationError ||
            "We could not send your enquiry. Please try again or email info@rma.africa directly."}
        </div>
      ) : null}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <a
          href="mailto:info@rma.africa"
          className="text-sm font-semibold text-[color:var(--rma-blue)] hover:underline"
        >
          Or email info@rma.africa →
        </a>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rma-btn rma-btn-primary disabled:opacity-70"
        >
          {status === "submitting" ? "Sending…" : "Send Enquiry"}
        </button>
      </div>
    </form>
  );
}

