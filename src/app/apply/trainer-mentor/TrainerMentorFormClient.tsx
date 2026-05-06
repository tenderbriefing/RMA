"use client";

import { useMemo, useState } from "react";

const expertiseOptions = [
  "Supplier readiness",
  "SME governance & compliance",
  "Procurement & tendering",
  "Finance-readiness & bankability",
  "HSE / site readiness",
  "Contract execution & delivery discipline",
  "Market access & B2B linkages",
  "ESG / sustainability",
] as const;

export function TrainerMentorFormClient() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [location, setLocation] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [expertise, setExpertise] = useState<string[]>([]);
  const [experience, setExperience] = useState("");
  const [availability, setAvailability] = useState("");
  const [notes, setNotes] = useState("");

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [error, setError] = useState<string>("");

  const validationError = useMemo(() => {
    if (!fullName.trim()) return "Full name is required.";
    if (!email.trim()) return "Email is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      return "Please enter a valid email address.";
    if (expertise.length === 0) return "Please select at least one area of expertise.";
    if (experience.trim().length < 20) return "Please add a short experience summary (20+ characters).";
    return "";
  }, [email, expertise.length, experience, fullName]);

  function toggleExpertise(value: string) {
    setExpertise((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const v = validationError;
    if (v) {
      setStatus("error");
      setError(v);
      return;
    }

    setStatus("submitting");
    setError("");

    const message = [
      "Trainer/Mentor application",
      "",
      `Full name: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${phone || "-"}`,
      `Organisation: ${organisation || "-"}`,
      `Location: ${location || "-"}`,
      `LinkedIn: ${linkedinUrl || "-"}`,
      "",
      `Expertise: ${expertise.join(", ")}`,
      `Availability: ${availability || "-"}`,
      "",
      "Experience summary:",
      experience.trim(),
      "",
      "Additional notes:",
      notes.trim() || "-",
    ].join("\n");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          organisation,
          email,
          phone,
          enquiryType: "Trainer/mentor application",
          message,
        }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as
          | { message?: string; error?: string }
          | null;
        throw new Error(
          data?.message ||
            "We could not send your application. Please try again later.",
        );
      }

      setStatus("success");
      setFullName("");
      setEmail("");
      setPhone("");
      setOrganisation("");
      setLocation("");
      setLinkedinUrl("");
      setExpertise([]);
      setExperience("");
      setAvailability("");
      setNotes("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Submission failed.");
    }
  }

  const inputClass =
    "mt-2 h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm text-[var(--rma-ink)] outline-none shadow-sm transition placeholder:text-black/35 focus:border-[color:var(--rma-blue)]/40 focus:ring-4 focus:ring-[color:var(--rma-blue)]/15";

  return (
    <form onSubmit={onSubmit} className="rma-card p-6 sm:p-8">
      <div className="mb-6">
        <p className="text-base font-semibold text-[var(--rma-ink)]">
          Trainer/Mentor application
        </p>
        <p className="mt-2 text-sm leading-6 rma-muted">
          Share your background and areas of expertise. Our team will review your application and respond by email.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold text-[var(--rma-ink)]">
          Full name <span className="text-[color:var(--rma-orange)]">*</span>
          <input className={inputClass} value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        </label>

        <label className="text-sm font-semibold text-[var(--rma-ink)]">
          Email <span className="text-[color:var(--rma-orange)]">*</span>
          <input className={inputClass} value={email} onChange={(e) => setEmail(e.target.value)} inputMode="email" required />
        </label>

        <label className="text-sm font-semibold text-[var(--rma-ink)]">
          Phone
          <input className={inputClass} value={phone} onChange={(e) => setPhone(e.target.value)} inputMode="tel" />
        </label>

        <label className="text-sm font-semibold text-[var(--rma-ink)]">
          Organisation
          <input className={inputClass} value={organisation} onChange={(e) => setOrganisation(e.target.value)} />
        </label>

        <label className="text-sm font-semibold text-[var(--rma-ink)]">
          Location
          <input className={inputClass} value={location} onChange={(e) => setLocation(e.target.value)} placeholder="e.g. Lusaka, Copperbelt, Zambia" />
        </label>

        <label className="text-sm font-semibold text-[var(--rma-ink)]">
          LinkedIn (optional)
          <input className={inputClass} value={linkedinUrl} onChange={(e) => setLinkedinUrl(e.target.value)} placeholder="https://linkedin.com/in/…" />
        </label>
      </div>

      <div className="mt-6">
        <p className="text-sm font-semibold text-[var(--rma-ink)]">
          Areas of expertise <span className="text-[color:var(--rma-orange)]">*</span>
        </p>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {expertiseOptions.map((x) => {
            const checked = expertise.includes(x);
            return (
              <label
                key={x}
                className={[
                  "flex cursor-pointer items-start gap-3 rounded-2xl border px-4 py-3 text-sm transition",
                  checked ? "border-[color:var(--rma-green)]/30 bg-[color:var(--rma-green)]/6" : "border-black/10 bg-white hover:bg-black/[.02]",
                ].join(" ")}
              >
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-black/20"
                  checked={checked}
                  onChange={() => toggleExpertise(x)}
                />
                <span className="leading-6 text-black/75">{x}</span>
              </label>
            );
          })}
        </div>
      </div>

      <div className="mt-6 grid gap-4">
        <label className="text-sm font-semibold text-[var(--rma-ink)]">
          Experience summary <span className="text-[color:var(--rma-orange)]">*</span>
          <textarea
            className="mt-2 min-h-[160px] w-full resize-y rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-[var(--rma-ink)] outline-none shadow-sm transition focus:border-[color:var(--rma-blue)]/40 focus:ring-4 focus:ring-[color:var(--rma-blue)]/15"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            placeholder="Briefly describe your training/mentoring experience, sectors, and the type of SME support you’ve delivered."
            required
          />
        </label>

        <label className="text-sm font-semibold text-[var(--rma-ink)]">
          Availability
          <input
            className={inputClass}
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            placeholder="e.g. Part-time, weekends, project-based, remote/in-person"
          />
        </label>

        <label className="text-sm font-semibold text-[var(--rma-ink)]">
          Additional notes
          <textarea
            className="mt-2 min-h-[120px] w-full resize-y rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-[var(--rma-ink)] outline-none shadow-sm transition focus:border-[color:var(--rma-blue)]/40 focus:ring-4 focus:ring-[color:var(--rma-blue)]/15"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Optional: links to work, portfolio, certifications, references, etc."
          />
        </label>
      </div>

      {status === "success" ? (
        <div className="mt-5 rounded-2xl border border-black/10 bg-[color:var(--rma-green)]/10 px-4 py-3 text-sm text-black/80">
          Thank you. Your application has been received. RMA will respond via email.
        </div>
      ) : null}

      {status === "error" ? (
        <div className="mt-5 rounded-2xl border border-black/10 bg-[color:var(--rma-orange)]/10 px-4 py-3 text-sm text-black/80">
          {error || "We could not send your application. Please try again later."}
        </div>
      ) : null}

      <div className="mt-6">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rma-btn rma-btn-primary w-full disabled:opacity-70 sm:w-auto"
        >
          {status === "submitting" ? "Submitting…" : "Submit application"}
        </button>
      </div>
    </form>
  );
}

