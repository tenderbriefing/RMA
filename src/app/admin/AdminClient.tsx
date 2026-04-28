"use client";

import { useEffect, useMemo, useState } from "react";

type Row = Record<string, unknown> & { id: string };

const statuses = ["pending", "verified", "rejected", "needs_review"] as const;

function Input({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-black/50">
        {label}
      </span>
      <input
        className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[color:var(--rma-blue)]/30"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}

export function AdminClient() {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [roleUserId, setRoleUserId] = useState("");
  const [role, setRole] = useState<"admin" | "user">("admin");

  const [q, setQ] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [sector, setSector] = useState("");
  const [status, setStatus] = useState("");

  const queryString = useMemo(() => {
    const p = new URLSearchParams();
    if (q) p.set("q", q);
    if (province) p.set("province", province);
    if (district) p.set("district", district);
    if (sector) p.set("sector", sector);
    if (status) p.set("status", status);
    return p.toString();
  }, [q, province, district, sector, status]);

  async function refresh() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/admin/smes?${queryString}`, { method: "GET" });
      if (!res.ok) throw new Error("Failed to load SME records.");
      const data = (await res.json()) as { ok: boolean; smes: Row[] };
      setRows(data.smes);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryString]);

  async function setRowStatus(userId: string, newStatus: string) {
    try {
      const res = await fetch("/api/admin/smes/status", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ userId, status: newStatus }),
      });
      if (!res.ok) throw new Error("Failed to update status.");
      await refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to update.");
    }
  }

  return (
    <div className="grid gap-4">
      <div className="rma-card p-6">
        <p className="text-sm font-semibold text-[var(--rma-ink)]">Admin access</p>
        <p className="mt-2 text-sm leading-6 text-black/60">
          Set a user’s role in Firestore `users/{`{uid}`}`. Only admins can do this.
        </p>

        <div className="mt-5 grid gap-4 sm:grid-cols-3 sm:items-end">
          <Input label="User UID" value={roleUserId} onChange={setRoleUserId} />
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-wider text-black/50">
              Role
            </span>
            <select
              className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[color:var(--rma-blue)]/30"
              value={role}
              onChange={(e) => setRole(e.target.value as "admin" | "user")}
            >
              <option value="admin">admin</option>
              <option value="user">user</option>
            </select>
          </label>

          <button
            className="rma-btn rma-btn-primary w-full"
            disabled={!roleUserId}
            type="button"
            onClick={async () => {
              setError(null);
              try {
                const res = await fetch("/api/admin/users/role", {
                  method: "POST",
                  headers: { "content-type": "application/json" },
                  body: JSON.stringify({ userId: roleUserId.trim(), role }),
                });
                if (!res.ok) throw new Error("Failed to set role.");
              } catch (e) {
                setError(e instanceof Error ? e.message : "Failed to set role.");
              }
            }}
          >
            Save role
          </button>
        </div>
      </div>

      <div className="rma-card p-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold text-[var(--rma-ink)]">Filters</p>
            <p className="text-sm text-black/60">
              Search and filter SME records. CSV export uses the same filters.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <Input label="Company name" value={q} onChange={setQ} />
            <Input label="Province" value={province} onChange={setProvince} />
            <Input label="District" value={district} onChange={setDistrict} />
            <Input label="Sector" value={sector} onChange={setSector} />

            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-wider text-black/50">
                Status
              </span>
              <select
                className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[color:var(--rma-blue)]/30"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="">All</option>
                {statuses.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-black/60">
              {loading ? "Loading..." : `${rows.length} record(s)`}
            </div>
            <div className="flex gap-2">
              <a
                className="rma-btn rma-btn-secondary"
                href={`/api/admin/smes/export?${queryString}`}
              >
                Download filtered CSV
              </a>
              <a className="rma-btn rma-btn-secondary" href="/api/admin/smes/export">
                Download full CSV
              </a>
            </div>
          </div>

          {error ? (
            <div className="rounded-2xl border border-red-600/20 bg-red-50 px-4 py-3 text-sm text-red-900">
              {error}
            </div>
          ) : null}
        </div>
      </div>

      <div className="rma-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-[900px] w-full text-left text-sm">
            <thead className="bg-black/[.03] text-black/70">
              <tr>
                <th className="px-4 py-3 font-semibold">Company</th>
                <th className="px-4 py-3 font-semibold">Province</th>
                <th className="px-4 py-3 font-semibold">District</th>
                <th className="px-4 py-3 font-semibold">Sector</th>
                <th className="px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3 font-semibold">Updated</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id} className="border-t border-black/10">
                  <td className="px-4 py-3">
                    <div className="font-medium text-[var(--rma-ink)]">
                      {String(r.companyName ?? "") || "—"}
                    </div>
                    <div className="text-xs text-black/50">
                      UID: {String(r.userId ?? r.id)}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-black/70">{String(r.province ?? "—")}</td>
                  <td className="px-4 py-3 text-black/70">{String(r.district ?? "—")}</td>
                  <td className="px-4 py-3 text-black/70">{String(r.sector ?? "—")}</td>
                  <td className="px-4 py-3">
                    <select
                      className="w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[color:var(--rma-blue)]/30"
                      value={String(r.status ?? "pending")}
                      onChange={(e) => setRowStatus(String(r.userId ?? r.id), e.target.value)}
                    >
                      {statuses.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-4 py-3 text-black/70">
                    {String(r.updatedAt ?? "—")}
                  </td>
                </tr>
              ))}

              {!rows.length && !loading ? (
                <tr>
                  <td className="px-4 py-8 text-black/60" colSpan={6}>
                    No records match your filters.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

