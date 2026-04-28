"use client";

import { useEffect, useState } from "react";

async function download(path: string, filename: string, token: string) {
  const url = new URL(path, window.location.origin);
  url.searchParams.set("token", token);

  const res = await fetch(url.toString(), { method: "GET" });
  if (!res.ok) {
    const data = (await res.json().catch(() => null)) as
      | { error?: string }
      | null;
    throw new Error(data?.error || `Request failed (${res.status}).`);
  }

  const blob = await res.blob();
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(a.href);
}

export function AdminExportClient() {
  const [token, setToken] = useState("");
  const [status, setStatus] = useState<
    | { state: "idle" }
    | { state: "downloading" }
    | { state: "error"; message: string }
  >({ state: "idle" });

  useEffect(() => {
    const existing = window.localStorage.getItem("rma_admin_export_token") || "";
    if (existing) setToken(existing);
  }, []);

  useEffect(() => {
    if (!token) return;
    window.localStorage.setItem("rma_admin_export_token", token);
  }, [token]);

  return (
    <div className="rma-card p-6 sm:p-8">
      <p className="text-sm font-semibold text-[var(--rma-ink)]">Database</p>
      <p className="mt-2 text-sm leading-6 text-black/60">
        Download the latest SME registrations stored in Firestore.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-3 sm:items-end">
        <label className="sm:col-span-2">
          <span className="text-sm font-medium text-black/80">
            Admin token
          </span>
          <input
            className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500/40"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="Paste ADMIN_EXPORT_TOKEN"
            autoComplete="off"
          />
        </label>

        <button
          type="button"
          className="rma-btn rma-btn-primary w-full"
          disabled={!token || status.state === "downloading"}
          onClick={async () => {
            setStatus({ state: "downloading" });
            try {
              await download(
                "/api/admin/registrations?format=csv",
                "rma-sme-registrations.csv",
                token,
              );
              setStatus({ state: "idle" });
            } catch (err) {
              setStatus({
                state: "error",
                message: err instanceof Error ? err.message : "Download failed.",
              });
            }
          }}
        >
          {status.state === "downloading"
            ? "Preparing download..."
            : "Download SME Database as CSV"}
        </button>
      </div>

      {status.state === "error" ? (
        <div className="mt-4 rounded-2xl border border-red-600/20 bg-red-50 px-4 py-3 text-sm text-red-900">
          {status.message}
        </div>
      ) : null}
    </div>
  );
}

