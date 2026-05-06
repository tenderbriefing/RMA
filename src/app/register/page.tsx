"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getFirebaseAuth } from "@/lib/firebaseClient";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [status, setStatus] = useState<
    | { state: "idle" }
    | { state: "loading" }
    | { state: "error"; message: string }
  >({ state: "idle" });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password !== confirm) {
      setStatus({ state: "error", message: "Passwords do not match." });
      return;
    }
    if (password.length < 8) {
      setStatus({ state: "error", message: "Use at least 8 characters." });
      return;
    }

    setStatus({ state: "loading" });
    try {
      const cred = await createUserWithEmailAndPassword(
        getFirebaseAuth(),
        email.trim(),
        password,
      );
      const idToken = await cred.user.getIdToken();

      const res = await fetch("/api/auth/session", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ idToken }),
      });
      if (!res.ok) throw new Error("Failed to start session.");

      router.replace("/dashboard");
    } catch (err) {
      setStatus({
        state: "error",
        message:
          err instanceof Error
            ? err.message
            : "Registration failed. Please try again.",
      });
    } finally {
      setStatus((s) => (s.state === "loading" ? { state: "idle" } : s));
    }
  }

  return (
    <main className="rma-container py-14 sm:py-18">
      <div className="mx-auto max-w-md">
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--rma-ink)]">
          Create SME account
        </h1>
        <p className="mt-2 text-sm text-black/60">
          Create your login to submit KYC and track verification status.
        </p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4 rma-card p-6">
          <label className="block">
            <span className="text-sm font-medium text-black/80">Email</span>
            <input
              className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--rma-blue)]/30"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              inputMode="email"
              autoComplete="email"
              required
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-black/80">Password</span>
            <input
              type="password"
              className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--rma-blue)]/30"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              required
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-black/80">
              Confirm password
            </span>
            <input
              type="password"
              className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--rma-blue)]/30"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              autoComplete="new-password"
              required
            />
          </label>

          <button
            className="rma-btn rma-btn-primary mt-2"
            type="submit"
            disabled={status.state === "loading"}
          >
            {status.state === "loading" ? "Creating..." : "Create account"}
          </button>

          {status.state === "error" ? (
            <div className="rounded-2xl border border-red-600/20 bg-red-50 px-4 py-3 text-sm text-red-900">
              {status.message}
            </div>
          ) : null}

          <p className="text-xs text-black/60">
            Already have an account? Use the Login page to sign in.
          </p>
        </form>
      </div>
    </main>
  );
}

