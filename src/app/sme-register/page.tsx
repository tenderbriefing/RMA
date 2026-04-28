"use client";

import { useMemo, useState } from "react";

type FormState = {
  companyName: string;
  pacraRegistrationNumber: string;
  tpin: string;
  businessType: string;
  dateOfRegistration: string;

  contactPersonName: string;
  contactPersonPosition: string;
  phone: string;
  email: string;

  province: string;
  district: string;
  town: string;
  physicalAddress: string;

  sector: string;
  productsOrServices: string;

  ownerFullName: string;
  ownerNationality: string;
  ownerIdOrPassportNumber: string;
  ownershipPercentage: string;

  numberOfEmployees: string;
  bankName: string;

  consentToStoreData: boolean;
};

const initialState: FormState = {
  companyName: "",
  pacraRegistrationNumber: "",
  tpin: "",
  businessType: "",
  dateOfRegistration: "",
  contactPersonName: "",
  contactPersonPosition: "",
  phone: "",
  email: "",
  province: "",
  district: "",
  town: "",
  physicalAddress: "",
  sector: "",
  productsOrServices: "",
  ownerFullName: "",
  ownerNationality: "",
  ownerIdOrPassportNumber: "",
  ownershipPercentage: "",
  numberOfEmployees: "",
  bankName: "",
  consentToStoreData: false,
};

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-black/80">{label}</span>
      {hint ? <span className="ml-2 text-xs text-black/45">{hint}</span> : null}
      <div className="mt-2">{children}</div>
    </label>
  );
}

export default function SmeRegisterPage() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<
    | { state: "idle" }
    | { state: "submitting" }
    | { state: "success" }
    | { state: "error"; message: string }
  >({ state: "idle" });

  const canSubmit = useMemo(() => {
    return (
      form.companyName.trim().length >= 2 &&
      form.pacraRegistrationNumber.trim().length >= 2 &&
      form.tpin.trim().length >= 2 &&
      form.businessType.trim().length >= 2 &&
      form.dateOfRegistration.trim().length >= 4 &&
      form.contactPersonName.trim().length >= 2 &&
      form.contactPersonPosition.trim().length >= 2 &&
      form.phone.trim().length >= 7 &&
      form.email.trim().length >= 5 &&
      form.province.trim().length >= 2 &&
      form.district.trim().length >= 2 &&
      form.town.trim().length >= 2 &&
      form.physicalAddress.trim().length >= 5 &&
      form.sector.trim().length >= 2 &&
      form.productsOrServices.trim().length >= 10 &&
      form.ownerFullName.trim().length >= 2 &&
      form.ownerNationality.trim().length >= 2 &&
      form.ownerIdOrPassportNumber.trim().length >= 2 &&
      form.ownershipPercentage.trim().length >= 1 &&
      form.numberOfEmployees.trim().length >= 1 &&
      form.bankName.trim().length >= 2 &&
      form.consentToStoreData === true
    );
  }, [form]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    setStatus({ state: "submitting" });
    try {
      const res = await fetch("/api/sme-registration", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(data?.error || `Request failed (${res.status}).`);
      }

      setStatus({ state: "success" });
      setForm(initialState);
    } catch (err) {
      setStatus({
        state: "error",
        message: err instanceof Error ? err.message : "Submission failed.",
      });
    }
  }

  return (
    <main className="rma-container py-14 sm:py-18">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-black/70">
            SME database registration
          </p>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--rma-ink)] sm:text-5xl">
            SME Registration
          </h1>
          <p className="mt-4 text-base leading-7 text-black/60">
            Register to be part of RMA’s database of Zambian SMEs seeking
            supplier opportunities with national and multinational companies.
          </p>
        </div>

        <div className="mt-10 rma-card p-6 sm:p-8">
          <form className="grid gap-6" onSubmit={onSubmit}>
            <div className="grid gap-2">
              <p className="text-sm font-semibold text-[var(--rma-ink)]">
                Company details
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Company name">
                  <input
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500/40"
                    value={form.companyName}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, companyName: e.target.value }))
                    }
                    required
                  />
                </Field>
                <Field label="Business type">
                  <input
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500/40"
                    value={form.businessType}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, businessType: e.target.value }))
                    }
                    required
                  />
                </Field>
              </div>

              <div className="grid gap-6 sm:grid-cols-3">
                <Field label="PACRA registration number">
                  <input
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500/40"
                    value={form.pacraRegistrationNumber}
                    onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        pacraRegistrationNumber: e.target.value,
                      }))
                    }
                    required
                  />
                </Field>
                <Field label="TPIN">
                  <input
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500/40"
                    value={form.tpin}
                    onChange={(e) => setForm((f) => ({ ...f, tpin: e.target.value }))}
                    required
                  />
                </Field>
                <Field label="Date of registration" hint="YYYY-MM-DD">
                  <input
                    type="date"
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500/40"
                    value={form.dateOfRegistration}
                    onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        dateOfRegistration: e.target.value,
                      }))
                    }
                    required
                  />
                </Field>
              </div>
            </div>

            <div className="grid gap-2">
              <p className="text-sm font-semibold text-[var(--rma-ink)]">
                Contact details
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Contact person name">
                  <input
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500/40"
                    value={form.contactPersonName}
                    onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        contactPersonName: e.target.value,
                      }))
                    }
                    required
                  />
                </Field>
                <Field label="Contact person position">
                  <input
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500/40"
                    value={form.contactPersonPosition}
                    onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        contactPersonPosition: e.target.value,
                      }))
                    }
                    required
                  />
                </Field>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Email">
                  <input
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500/40"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    inputMode="email"
                    required
                  />
                </Field>
                <Field label="Phone" hint="WhatsApp ok">
                  <input
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500/40"
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    required
                  />
                </Field>
              </div>
            </div>

            <div className="grid gap-2">
              <p className="text-sm font-semibold text-[var(--rma-ink)]">
                Location
              </p>
              <div className="grid gap-6 sm:grid-cols-3">
                <Field label="Province">
                  <input
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500/40"
                    value={form.province}
                    onChange={(e) => setForm((f) => ({ ...f, province: e.target.value }))}
                    required
                  />
                </Field>
                <Field label="District">
                  <input
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500/40"
                    value={form.district}
                    onChange={(e) => setForm((f) => ({ ...f, district: e.target.value }))}
                    required
                  />
                </Field>
                <Field label="Town">
                  <input
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500/40"
                    value={form.town}
                    onChange={(e) => setForm((f) => ({ ...f, town: e.target.value }))}
                    required
                  />
                </Field>
              </div>
              <Field label="Physical address">
                <input
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500/40"
                  value={form.physicalAddress}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, physicalAddress: e.target.value }))
                  }
                  required
                />
              </Field>
            </div>

            <div className="grid gap-2">
              <p className="text-sm font-semibold text-[var(--rma-ink)]">
                Sector & offerings
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Sector">
                  <input
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500/40"
                    value={form.sector}
                    onChange={(e) => setForm((f) => ({ ...f, sector: e.target.value }))}
                    required
                  />
                </Field>
                <Field label="Number of employees">
                  <input
                    type="number"
                    min={0}
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500/40"
                    value={form.numberOfEmployees}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, numberOfEmployees: e.target.value }))
                    }
                    required
                  />
                </Field>
              </div>
              <Field label="Products or services" hint="Brief description">
                <textarea
                  className="min-h-28 w-full resize-y rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500/40"
                  value={form.productsOrServices}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, productsOrServices: e.target.value }))
                  }
                  required
                />
              </Field>
            </div>

            <div className="grid gap-2">
              <p className="text-sm font-semibold text-[var(--rma-ink)]">
                Ownership
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Owner full name">
                  <input
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500/40"
                    value={form.ownerFullName}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, ownerFullName: e.target.value }))
                    }
                    required
                  />
                </Field>
                <Field label="Owner nationality">
                  <input
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500/40"
                    value={form.ownerNationality}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, ownerNationality: e.target.value }))
                    }
                    required
                  />
                </Field>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Owner ID or passport number">
                  <input
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500/40"
                    value={form.ownerIdOrPassportNumber}
                    onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        ownerIdOrPassportNumber: e.target.value,
                      }))
                    }
                    required
                  />
                </Field>
                <Field label="Ownership percentage" hint="0–100">
                  <input
                    type="number"
                    min={0}
                    max={100}
                    step={0.01}
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500/40"
                    value={form.ownershipPercentage}
                    onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        ownershipPercentage: e.target.value,
                      }))
                    }
                    required
                  />
                </Field>
              </div>
            </div>

            <div className="grid gap-2">
              <p className="text-sm font-semibold text-[var(--rma-ink)]">
                Banking
              </p>
              <Field label="Bank name">
                <input
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500/40"
                  value={form.bankName}
                  onChange={(e) => setForm((f) => ({ ...f, bankName: e.target.value }))}
                  required
                />
              </Field>
            </div>

            <label className="flex items-start gap-3 rounded-2xl border border-black/10 bg-black/[.02] p-4">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-black/20"
                checked={form.consentToStoreData}
                onChange={(e) =>
                  setForm((f) => ({ ...f, consentToStoreData: e.target.checked }))
                }
                required
              />
              <span className="text-sm leading-6 text-black/70">
                I consent to RMA storing this information in its SME database for
                supplier development programmes and opportunity matching.
              </span>
            </label>

            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-5 text-black/45">
                By submitting, you confirm the information is accurate and you
                want RMA to contact you about relevant opportunities and
                programmes.
              </p>

              <button
                className="rma-btn rma-btn-primary disabled:opacity-50"
                type="submit"
                disabled={!canSubmit || status.state === "submitting"}
              >
                {status.state === "submitting" ? "Submitting..." : "Submit"}
              </button>
            </div>

            {status.state === "success" ? (
              <div className="rounded-2xl border border-emerald-600/20 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
                Submitted successfully. RMA will be in touch if there’s a match.
              </div>
            ) : null}

            {status.state === "error" ? (
              <div className="rounded-2xl border border-red-600/20 bg-red-50 px-4 py-3 text-sm text-red-900">
                {status.message}
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </main>
  );
}

