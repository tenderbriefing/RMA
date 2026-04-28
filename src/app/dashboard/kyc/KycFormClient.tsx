"use client";

import { useMemo, useState } from "react";
import type { KycInput } from "@/lib/kyc";

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

export function KycFormClient({ initial }: { initial: Partial<KycInput> }) {
  const [form, setForm] = useState({
    companyName: initial.companyName ?? "",
    pacraRegistrationNumber: initial.pacraRegistrationNumber ?? "",
    tpin: initial.tpin ?? "",
    businessType: initial.businessType ?? "",
    dateOfRegistration: initial.dateOfRegistration ?? "",
    contactPersonName: initial.contactPersonName ?? "",
    contactPersonPosition: initial.contactPersonPosition ?? "",
    email: initial.email ?? "",
    phone: initial.phone ?? "",
    province: initial.province ?? "",
    district: initial.district ?? "",
    town: initial.town ?? "",
    physicalAddress: initial.physicalAddress ?? "",
    sector: initial.sector ?? "",
    productsOrServices: initial.productsOrServices ?? "",
    ownerFullName: initial.ownerFullName ?? "",
    ownerNationality: initial.ownerNationality ?? "",
    ownerIdOrPassportNumber: initial.ownerIdOrPassportNumber ?? "",
    ownershipPercentage:
      initial.ownershipPercentage !== undefined
        ? String(initial.ownershipPercentage)
        : "",
    numberOfEmployees:
      initial.numberOfEmployees !== undefined ? String(initial.numberOfEmployees) : "",
    bankName: initial.bankName ?? "",
    consentToStoreData: initial.consentToStoreData ?? false,

    fundingNeeded: initial.fundingNeeded ?? false,
    fundingType: initial.fundingType ?? "",
    estimatedFundingAmount: initial.estimatedFundingAmount ?? "",
    hasPurchaseOrderOrContract: initial.hasPurchaseOrderOrContract ?? false,
    fundingPurpose: initial.fundingPurpose ?? "",
  });

  const [status, setStatus] = useState<
    | { state: "idle" }
    | { state: "saving" }
    | { state: "success" }
    | { state: "error"; message: string }
  >({ state: "idle" });

  const canSubmit = useMemo(() => {
    const financeOk =
      !form.fundingNeeded ||
      (form.fundingType.trim().length >= 2 &&
        form.estimatedFundingAmount.trim().length >= 1 &&
        form.fundingPurpose.trim().length >= 5);

    return (
      form.companyName.trim().length >= 2 &&
      form.pacraRegistrationNumber.trim().length >= 2 &&
      form.tpin.trim().length >= 2 &&
      form.businessType.trim().length >= 2 &&
      form.dateOfRegistration.trim().length >= 4 &&
      form.contactPersonName.trim().length >= 2 &&
      form.contactPersonPosition.trim().length >= 2 &&
      form.email.trim().length >= 5 &&
      form.phone.trim().length >= 7 &&
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
      form.consentToStoreData === true &&
      financeOk
    );
  }, [form]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setStatus({ state: "saving" });
    try {
      const payload: KycInput = {
        ...form,
        ownershipPercentage: Number(form.ownershipPercentage),
        numberOfEmployees: Number(form.numberOfEmployees),
        consentToStoreData: true,
        fundingNeeded: Boolean(form.fundingNeeded),
        hasPurchaseOrderOrContract: Boolean(form.hasPurchaseOrderOrContract),
      };

      const res = await fetch("/api/smes/kyc", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(data?.error || `Request failed (${res.status}).`);
      }

      setStatus({ state: "success" });
      window.setTimeout(() => {
        window.location.href = "/dashboard";
      }, 500);
    } catch (err) {
      setStatus({
        state: "error",
        message: err instanceof Error ? err.message : "Save failed.",
      });
    }
  }

  const inputClass =
    "w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--rma-blue)]/30";

  return (
    <form className="grid gap-8" onSubmit={onSubmit}>
      <div className="grid gap-2">
        <p className="text-sm font-semibold text-[var(--rma-ink)]">Company details</p>
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Company name">
            <input
              className={inputClass}
              value={form.companyName}
              onChange={(e) => setForm((f) => ({ ...f, companyName: e.target.value }))}
              required
            />
          </Field>
          <Field label="Business type">
            <input
              className={inputClass}
              value={form.businessType}
              onChange={(e) => setForm((f) => ({ ...f, businessType: e.target.value }))}
              required
            />
          </Field>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <Field label="PACRA registration number">
            <input
              className={inputClass}
              value={form.pacraRegistrationNumber}
              onChange={(e) =>
                setForm((f) => ({ ...f, pacraRegistrationNumber: e.target.value }))
              }
              required
            />
          </Field>
          <Field label="TPIN">
            <input
              className={inputClass}
              value={form.tpin}
              onChange={(e) => setForm((f) => ({ ...f, tpin: e.target.value }))}
              required
            />
          </Field>
          <Field label="Date of registration" hint="YYYY-MM-DD">
            <input
              type="date"
              className={inputClass}
              value={form.dateOfRegistration}
              onChange={(e) =>
                setForm((f) => ({ ...f, dateOfRegistration: e.target.value }))
              }
              required
            />
          </Field>
        </div>
      </div>

      <div className="grid gap-2">
        <p className="text-sm font-semibold text-[var(--rma-ink)]">Contact details</p>
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Contact person name">
            <input
              className={inputClass}
              value={form.contactPersonName}
              onChange={(e) =>
                setForm((f) => ({ ...f, contactPersonName: e.target.value }))
              }
              required
            />
          </Field>
          <Field label="Contact person position">
            <input
              className={inputClass}
              value={form.contactPersonPosition}
              onChange={(e) =>
                setForm((f) => ({ ...f, contactPersonPosition: e.target.value }))
              }
              required
            />
          </Field>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Email">
            <input
              className={inputClass}
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              inputMode="email"
              required
            />
          </Field>
          <Field label="Phone" hint="WhatsApp ok">
            <input
              className={inputClass}
              value={form.phone}
              onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
              required
            />
          </Field>
        </div>
      </div>

      <div className="grid gap-2">
        <p className="text-sm font-semibold text-[var(--rma-ink)]">Location</p>
        <div className="grid gap-6 sm:grid-cols-3">
          <Field label="Province">
            <input
              className={inputClass}
              value={form.province}
              onChange={(e) => setForm((f) => ({ ...f, province: e.target.value }))}
              required
            />
          </Field>
          <Field label="District">
            <input
              className={inputClass}
              value={form.district}
              onChange={(e) => setForm((f) => ({ ...f, district: e.target.value }))}
              required
            />
          </Field>
          <Field label="Town">
            <input
              className={inputClass}
              value={form.town}
              onChange={(e) => setForm((f) => ({ ...f, town: e.target.value }))}
              required
            />
          </Field>
        </div>
        <Field label="Physical address">
          <input
            className={inputClass}
            value={form.physicalAddress}
            onChange={(e) =>
              setForm((f) => ({ ...f, physicalAddress: e.target.value }))
            }
            required
          />
        </Field>
      </div>

      <div className="grid gap-2">
        <p className="text-sm font-semibold text-[var(--rma-ink)]">Sector & offerings</p>
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Mining supplier category" hint="e.g. PPE, transport, fabrication">
            <input
              className={inputClass}
              value={form.sector}
              onChange={(e) => setForm((f) => ({ ...f, sector: e.target.value }))}
              required
            />
          </Field>
          <Field label="Number of employees">
            <input
              type="number"
              min={0}
              className={inputClass}
              value={form.numberOfEmployees}
              onChange={(e) =>
                setForm((f) => ({ ...f, numberOfEmployees: e.target.value }))
              }
              required
            />
          </Field>
        </div>
        <Field
          label="Products or services supplied to the mining value chain"
          hint="Brief description"
        >
          <textarea
            className={`${inputClass} min-h-28 resize-y`}
            value={form.productsOrServices}
            onChange={(e) =>
              setForm((f) => ({ ...f, productsOrServices: e.target.value }))
            }
            required
          />
        </Field>
      </div>

      <div className="grid gap-2">
        <p className="text-sm font-semibold text-[var(--rma-ink)]">Ownership</p>
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Owner full name">
            <input
              className={inputClass}
              value={form.ownerFullName}
              onChange={(e) => setForm((f) => ({ ...f, ownerFullName: e.target.value }))}
              required
            />
          </Field>
          <Field label="Owner nationality">
            <input
              className={inputClass}
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
              className={inputClass}
              value={form.ownerIdOrPassportNumber}
              onChange={(e) =>
                setForm((f) => ({ ...f, ownerIdOrPassportNumber: e.target.value }))
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
              className={inputClass}
              value={form.ownershipPercentage}
              onChange={(e) =>
                setForm((f) => ({ ...f, ownershipPercentage: e.target.value }))
              }
              required
            />
          </Field>
        </div>
      </div>

      <div className="grid gap-2">
        <p className="text-sm font-semibold text-[var(--rma-ink)]">Banking</p>
        <Field label="Bank name">
          <input
            className={inputClass}
            value={form.bankName}
            onChange={(e) => setForm((f) => ({ ...f, bankName: e.target.value }))}
            required
          />
        </Field>
      </div>

      <div className="grid gap-2">
        <p className="text-sm font-semibold text-[var(--rma-ink)]">Finance Readiness</p>
        <p className="text-sm leading-6 rma-muted">
          Complete this section if your SME may need funding to execute mining-sector work. Funding support is not guaranteed and
          remains subject to eligibility, documentation, finance partner assessment, and confirmed commercial opportunity.
        </p>

        <label className="flex items-start gap-3 rounded-2xl border border-black/10 bg-white p-4">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-black/20"
            checked={form.fundingNeeded}
            onChange={(e) => setForm((f) => ({ ...f, fundingNeeded: e.target.checked }))}
          />
          <span className="text-sm leading-6 rma-muted">
            My business may need funding to execute confirmed mining-sector work.
          </span>
        </label>

        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Funding type" hint="Select one (required if funding needed)">
            <select
              className={inputClass}
              value={form.fundingType}
              onChange={(e) => setForm((f) => ({ ...f, fundingType: e.target.value }))}
              disabled={!form.fundingNeeded}
              required={form.fundingNeeded}
            >
              <option value="">Select</option>
              <option>Purchase Order Finance</option>
              <option>Invoice Finance</option>
              <option>Working Capital</option>
              <option>Asset Finance</option>
              <option>Contract Finance</option>
              <option>Trade Finance</option>
              <option>Not sure yet</option>
            </select>
          </Field>

          <Field label="Estimated funding amount" hint="ZMW (required if funding needed)">
            <input
              className={inputClass}
              value={form.estimatedFundingAmount}
              onChange={(e) => setForm((f) => ({ ...f, estimatedFundingAmount: e.target.value }))}
              disabled={!form.fundingNeeded}
              required={form.fundingNeeded}
              placeholder="e.g. 250,000"
            />
          </Field>
        </div>

        <label className="flex items-start gap-3 rounded-2xl border border-black/10 bg-white p-4">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-black/20"
            checked={form.hasPurchaseOrderOrContract}
            onChange={(e) =>
              setForm((f) => ({ ...f, hasPurchaseOrderOrContract: e.target.checked }))
            }
            disabled={!form.fundingNeeded}
          />
          <span className="text-sm leading-6 rma-muted">
            I have a purchase order or contract (or confirmed opportunity) that may support a funding request.
          </span>
        </label>

        <Field label="Funding purpose" hint="Required if funding needed">
          <textarea
            className={`${inputClass} min-h-24 resize-y`}
            value={form.fundingPurpose}
            onChange={(e) => setForm((f) => ({ ...f, fundingPurpose: e.target.value }))}
            disabled={!form.fundingNeeded}
            required={form.fundingNeeded}
            placeholder="What will the funding be used for (procurement, mobilisation, delivery, equipment, etc.)?"
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
          I consent to RMA storing this information in its SME database for supplier
          development programmes and opportunity matching.
        </span>
      </label>

      <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-5 text-black/45">
          After submission, your KYC status will show as <span className="font-medium">pending</span>{" "}
          until RMA verifies your profile.
        </p>
        <button
          className="rma-btn rma-btn-primary disabled:opacity-50"
          type="submit"
          disabled={!canSubmit || status.state === "saving"}
        >
          {status.state === "saving" ? "Saving..." : "Submit KYC"}
        </button>
      </div>

      {status.state === "success" ? (
        <div className="rounded-2xl border border-emerald-600/20 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
          Saved successfully. Redirecting to dashboard...
        </div>
      ) : null}

      {status.state === "error" ? (
        <div className="rounded-2xl border border-red-600/20 bg-red-50 px-4 py-3 text-sm text-red-900">
          {status.message}
        </div>
      ) : null}
    </form>
  );
}

