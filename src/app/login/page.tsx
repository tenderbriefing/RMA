"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getFirebaseAuth } from "@/lib/firebaseClient";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<
    | { state: "idle" }
    | { state: "loading" }
    | { state: "error"; message: string }
  >({ state: "idle" });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus({ state: "loading" });
    try {
      const cred = await signInWithEmailAndPassword(
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
          err instanceof Error ? err.message : "Login failed. Please try again.",
      });
    } finally {
      setStatus((s) => (s.state === "loading" ? { state: "idle" } : s));
    }
  }

  return (
    <main className="rma-container py-14 sm:py-18">
      <div className="mx-auto max-w-md">
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--rma-ink)]">
          SME Login
        </h1>
        <p className="mt-2 text-sm text-black/60">
          Sign in to complete your KYC and view your dashboard.
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
              autoComplete="current-password"
              required
            />
          </label>

          <button
            className="rma-btn rma-btn-primary mt-2"
            type="submit"
            disabled={status.state === "loading"}
          >
            {status.state === "loading" ? "Signing in..." : "Sign in"}
          </button>

          {status.state === "error" ? (
            <div className="rounded-2xl border border-red-600/20 bg-red-50 px-4 py-3 text-sm text-red-900">
              {status.message}
            </div>
          ) : null}

          <p className="text-xs text-black/60">
            Don’t have an account?{" "}
            <Link href="/register" className="font-medium text-black underline">
              Create one
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}

