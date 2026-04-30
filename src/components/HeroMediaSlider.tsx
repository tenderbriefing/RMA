"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Slide = {
  key: string;
  imageSrc: string;
  alt: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  fallbackGradient: string;
};

const SLIDE_INTERVAL_MS = 5000;

const slides: Slide[] = [
  {
    key: "mining-site",
    imageSrc: "/media/hero/mining-site-01.jpg",
    alt: "Wide mining site landscape showing haul roads and mining infrastructure.",
    eyebrow: "Mining Local Content Implementation",
    title: "Mining Local Content. Supplier Development. Finance-Ready SMEs.",
    subtitle:
      "RMA helps Zambia’s mining sector build verified, contract-ready SME supplier pipelines aligned to local-content implementation, procurement transformation, finance-readiness, and inclusive growth.",
    fallbackGradient:
      "radial-gradient(900px circle at 10% 10%, rgba(31,106,58,0.20), transparent 45%), radial-gradient(900px circle at 80% 15%, rgba(37,58,135,0.20), transparent 45%), linear-gradient(135deg, rgba(10,18,35,0.9), rgba(10,18,35,0.6))",
  },
  {
    key: "entrepreneurs",
    imageSrc: "/media/hero/black-entrepreneurs-01.jpg",
    alt: "Professional Black entrepreneurs and SME owners in a workshop or industrial environment.",
    eyebrow: "SMEs Ready for Opportunity",
    title: "SMEs Ready for Opportunity",
    subtitle:
      "Helping Zambian suppliers become visible, verified, finance-ready, and contract-ready.",
    fallbackGradient:
      "radial-gradient(900px circle at 15% 25%, rgba(240,116,43,0.18), transparent 45%), radial-gradient(900px circle at 85% 20%, rgba(37,58,135,0.18), transparent 45%), linear-gradient(135deg, rgba(10,18,35,0.9), rgba(10,18,35,0.6))",
  },
  {
    key: "workshop",
    imageSrc: "/media/hero/workshop-training-01.jpg",
    alt: "Business training workshop session with participants learning and being mentored.",
    eyebrow: "Supplier Development & Training",
    title: "Supplier Development & Training",
    subtitle:
      "Equipping SMEs with procurement, compliance, finance-readiness, and delivery capability.",
    fallbackGradient:
      "radial-gradient(900px circle at 20% 25%, rgba(31,106,58,0.18), transparent 45%), radial-gradient(900px circle at 80% 35%, rgba(240,116,43,0.16), transparent 45%), linear-gradient(135deg, rgba(10,18,35,0.9), rgba(10,18,35,0.6))",
  },
  {
    key: "equipment-on-site",
    imageSrc: "/media/hero/mining-equipment-01.jpg",
    alt: "Mining equipment operating on site, such as trucks and excavators in active operations.",
    eyebrow: "From Readiness to Delivery",
    title: "From Readiness to Delivery",
    subtitle:
      "Supporting SMEs to execute mining-sector opportunities with stronger delivery discipline.",
    fallbackGradient:
      "radial-gradient(900px circle at 20% 15%, rgba(37,58,135,0.20), transparent 45%), radial-gradient(900px circle at 80% 60%, rgba(31,106,58,0.18), transparent 45%), linear-gradient(135deg, rgba(10,18,35,0.9), rgba(10,18,35,0.6))",
  },
  {
    key: "finance-support",
    imageSrc: "/media/hero/mining-equipment-02.jpg",
    alt: "Mining operations close-up with industrial equipment and safety gear in use.",
    eyebrow: "Contract Finance Support",
    title: "Contract Finance Support",
    subtitle:
      "Preparing SMEs for purchase order finance, invoice finance, working capital, and contract execution support.",
    fallbackGradient:
      "radial-gradient(900px circle at 15% 20%, rgba(240,116,43,0.18), transparent 45%), radial-gradient(900px circle at 85% 25%, rgba(31,106,58,0.16), transparent 45%), linear-gradient(135deg, rgba(10,18,35,0.9), rgba(10,18,35,0.6))",
  },
  {
    key: "outcomes",
    imageSrc: "/media/hero/mining-equipment-03.jpg",
    alt: "Industrial mining site operations and logistics showing infrastructure and equipment.",
    eyebrow: "Measurable Local-Content Outcomes",
    title: "Measurable Local-Content Outcomes",
    subtitle:
      "Helping mining companies track supplier development, readiness, finance support, and impact reporting.",
    fallbackGradient:
      "radial-gradient(900px circle at 15% 25%, rgba(37,58,135,0.20), transparent 45%), radial-gradient(900px circle at 85% 35%, rgba(240,116,43,0.14), transparent 45%), linear-gradient(135deg, rgba(10,18,35,0.9), rgba(10,18,35,0.6))",
  },
];

function useReducedMotion() {
  return useMemo(() => {
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false
    );
  }, []);
}

export function HeroMediaSlider() {
  const reducedMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [missing, setMissing] = useState<Record<string, boolean>>({});
  const [progressKey, setProgressKey] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    const t = window.setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
      setProgressKey((k) => k + 1);
    }, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(t);
  }, [reducedMotion]);

  const current = slides[active]!;

  return (
    <section
      aria-label="RMA hero slideshow"
      className="relative overflow-hidden"
    >
      <div className="relative h-[520px] sm:h-[560px] lg:h-[680px]">
        <div className="pointer-events-none absolute inset-0">
          {!missing[current.key] ? (
            <div className="absolute inset-0">
              <div className="absolute inset-0 motion-safe:animate-[heroKenBurns_12s_ease-in-out_infinite_alternate]" />
              <Image
                src={current.imageSrc}
                alt={current.alt}
                fill
                priority={active === 0}
                sizes="100vw"
                className="object-cover"
                onError={() =>
                  setMissing((m) => ({ ...m, [current.key]: true }))
                }
              />
            </div>
          ) : (
            <div
              className="absolute inset-0"
              style={{ backgroundImage: current.fallbackGradient }}
              aria-hidden="true"
            />
          )}

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,18,35,0.88),rgba(10,18,35,0.55)_55%,rgba(10,18,35,0.25))]" />
          <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_30%,rgba(31,106,58,0.18),transparent_50%)]" />
        </div>

        <div className="rma-container-wide relative h-full">
          <div className="flex h-full items-center">
            <div className="w-full max-w-2xl text-white">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur">
                {current.eyebrow}
              </p>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
                {current.title}
              </h1>

              <p className="mt-6 text-base leading-7 text-white/85 sm:text-lg">
                {current.subtitle}
              </p>

              <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row">
                <Link href="/register" className="rma-btn rma-btn-primary">
                  Register Your SME
                </Link>
                <Link href="/contact" className="rma-btn rma-btn-secondary">
                  Partner With RMA
                </Link>
              </div>

              <div className="mt-10 h-1.5 w-full overflow-hidden rounded-full bg-white/15">
                <div
                  key={progressKey}
                  className={[
                    "h-full w-full origin-left bg-white/75",
                    reducedMotion
                      ? "scale-x-100"
                      : "motion-safe:animate-[heroProgress_5s_linear_forwards]",
                  ].join(" ")}
                />
              </div>

              <div className="mt-5 flex items-center gap-2">
                {slides.map((s, i) => (
                  <button
                    key={s.key}
                    type="button"
                    aria-label={`Go to slide ${i + 1}`}
                    aria-current={i === active}
                    onClick={() => {
                      setActive(i);
                      setProgressKey((k) => k + 1);
                    }}
                    className={[
                      "h-2.5 w-2.5 rounded-full transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60",
                      i === active ? "bg-white" : "bg-white/35 hover:bg-white/55",
                    ].join(" ")}
                  />
                ))}
              </div>
            </div>

            <div className="ml-auto hidden items-center gap-2 lg:flex">
              <button
                type="button"
                aria-label="Previous slide"
                onClick={() => {
                  setActive((i) => (i - 1 + slides.length) % slides.length);
                  setProgressKey((k) => k + 1);
                }}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                <span aria-hidden="true">‹</span>
              </button>
              <button
                type="button"
                aria-label="Next slide"
                onClick={() => {
                  setActive((i) => (i + 1) % slides.length);
                  setProgressKey((k) => k + 1);
                }}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                <span aria-hidden="true">›</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes heroProgress {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        @keyframes heroKenBurns {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.06);
          }
        }
      `}</style>
    </section>
  );
}

