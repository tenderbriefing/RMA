"use client";

import { useEffect, useMemo, useState } from "react";

type Slide = {
  title: string;
  subtitle: string;
  accent: "green" | "orange" | "blue";
  bullets: string[];
};

const slides: Slide[] = [
  {
    title: "Mining supply chains",
    subtitle: "Local content direction + supplier development + reporting outcomes",
    accent: "blue",
    bullets: ["Mining supplier development", "Verification + KYC pipeline", "Reporting & monitoring outputs"],
  },
  {
    title: "Local procurement outcomes",
    subtitle: "Aligned to Zambia’s mining local-content direction",
    accent: "green",
    bullets: ["Procurement-ready SMEs", "Contract execution readiness", "Skills & delivery mentoring"],
  },
  {
    title: "Access to finance readiness",
    subtitle: "Bank/DFI preparation for mining-sector SMEs",
    accent: "orange",
    bullets: ["Documentation readiness", "Governance & financial signals", "Contract-ready pipeline"],
  },
];

function accentClasses(accent: Slide["accent"]) {
  switch (accent) {
    case "green":
      return {
        ring: "ring-[color:var(--rma-green)]/18",
        badge: "bg-[color:var(--rma-green)]/10 text-[color:var(--rma-green)]",
        dot: "bg-[color:var(--rma-green)]",
        glow: "bg-[color:var(--rma-green)]/18",
      };
    case "orange":
      return {
        ring: "ring-[color:var(--rma-orange)]/18",
        badge: "bg-[color:var(--rma-orange)]/10 text-[color:var(--rma-orange)]",
        dot: "bg-[color:var(--rma-orange)]",
        glow: "bg-[color:var(--rma-orange)]/18",
      };
    case "blue":
      return {
        ring: "ring-[color:var(--rma-blue)]/18",
        badge: "bg-[color:var(--rma-blue)]/10 text-[color:var(--rma-blue)]",
        dot: "bg-[color:var(--rma-blue)]",
        glow: "bg-[color:var(--rma-blue)]/18",
      };
  }
}

function Icon({ accent }: { accent: Slide["accent"] }) {
  const stroke =
    accent === "orange"
      ? "var(--rma-orange)"
      : accent === "green"
        ? "var(--rma-green)"
        : "var(--rma-blue)";

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 64"
      className="h-9 w-9"
      fill="none"
    >
      <path
        d="M14 44c7-8 11-12 18-12s11 4 18 12"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M18 22c4 0 6-3 6-7 0-4-2-7-6-7s-6 3-6 7c0 4 2 7 6 7Z"
        stroke={stroke}
        strokeWidth="3"
      />
      <path
        d="M46 22c4 0 6-3 6-7 0-4-2-7-6-7s-6 3-6 7c0 4 2 7 6 7Z"
        stroke={stroke}
        strokeWidth="3"
      />
      <path
        d="M31.8 29.5c4.8 0 8.2-3.5 8.2-8.5S36.6 12.5 31.8 12.5 23.6 16 23.6 21s3.4 8.5 8.2 8.5Z"
        stroke={stroke}
        strokeWidth="3"
      />
      <path
        d="M10 54c3-10 9-15 18-15"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M54 54c-3-10-9-15-18-15"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M24 39c2-2 5-3 7.8-3S37.6 37 39.8 39"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HeroESDVisual() {
  const [index, setIndex] = useState(0);
  const [animateKey, setAnimateKey] = useState(0);

  const reducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const t = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
      setAnimateKey((k) => k + 1);
    }, 4200);
    return () => window.clearInterval(t);
  }, [reducedMotion]);

  const accent = slides[index]!.accent;
  const acc = accentClasses(accent);

  return (
    <div className="relative">
      <div className="absolute -inset-10 -z-10 opacity-80">
        <div className="absolute -top-10 left-6 h-56 w-56 rounded-full bg-[color:var(--rma-green)]/12 blur-3xl" />
        <div className="absolute top-14 right-2 h-56 w-56 rounded-full bg-[color:var(--rma-blue)]/12 blur-3xl" />
        <div className="absolute -bottom-14 left-14 h-56 w-56 rounded-full bg-[color:var(--rma-orange)]/12 blur-3xl" />
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/85 p-6 shadow-[0_18px_55px_rgba(10,18,35,0.10)] backdrop-blur sm:p-7">
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_15%_10%,rgba(31,106,58,0.12),transparent_45%),radial-gradient(800px_circle_at_85%_20%,rgba(37,58,135,0.12),transparent_45%),radial-gradient(900px_circle_at_45%_95%,rgba(240,116,43,0.10),transparent_45%)]" />
        <div className={["absolute -inset-24 blur-3xl opacity-70", acc.glow].join(" ")} />

        <div className="relative">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div
                className={[
                  "inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/90 ring-1 shadow-sm",
                  acc.ring,
                ].join(" ")}
              >
                <Icon accent={slides[index]!.accent} />
              </div>
              <div>
                <p className="text-sm font-semibold tracking-tight text-[var(--rma-ink)]">
                  {slides[index]!.title}
                </p>
                <p className="text-sm text-black/70">{slides[index]!.subtitle}</p>
              </div>
            </div>

            <span
              className={[
                "hidden sm:inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold",
                acc.badge,
              ].join(" ")}
            >
              <span className={["h-1.5 w-1.5 rounded-full", acc.dot].join(" ")} />
              ESD in motion
            </span>
          </div>

          <div
            key={animateKey}
            className="mt-6 grid gap-3 motion-safe:animate-[fadeUp_.45s_ease-out]"
          >
            {slides[index]!.bullets.map((b, i) => (
              <div
                key={b}
                className="flex items-center justify-between rounded-2xl border border-black/10 bg-white/90 px-4 py-3 shadow-sm backdrop-blur"
                style={
                  reducedMotion
                    ? undefined
                    : { transitionDelay: `${i * 55}ms`, transitionProperty: "transform, opacity" }
                }
              >
                <div className="flex items-center gap-3">
                  <span className={["h-2.5 w-2.5 rounded-full", acc.dot].join(" ")} />
                  <span className="text-sm font-medium text-[var(--rma-ink)]">
                    {b}
                  </span>
                </div>
                <div className="flex -space-x-2">
                  <span className="h-7 w-7 rounded-full border-2 border-white bg-[color:var(--rma-blue)]/12" />
                  <span className="h-7 w-7 rounded-full border-2 border-white bg-[color:var(--rma-green)]/12" />
                  <span className="h-7 w-7 rounded-full border-2 border-white bg-[color:var(--rma-orange)]/12" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Show slide ${i + 1}`}
                  onClick={() => {
                    setIndex(i);
                    setAnimateKey((k) => k + 1);
                  }}
                  className={[
                    "h-2.5 w-2.5 rounded-full transition",
                    i === index
                      ? "bg-[color:var(--rma-ink)]"
                      : "bg-black/20 hover:bg-black/35",
                  ].join(" ")}
                />
              ))}
            </div>
            <p className="text-xs text-black/60">
              Training • Mentorship • Compliance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

