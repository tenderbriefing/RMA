import Image from "next/image";

export function EcosystemCircle() {
  const items = [
    { t: "Enterprise\nDevelopment", c: "var(--rma-green)" },
    { t: "Supplier\nDevelopment", c: "var(--rma-blue)" },
    { t: "Access to\nFinance", c: "var(--rma-orange)" },
    { t: "Market\nAccess", c: "var(--rma-green)" },
    { t: "Local Content\nAdvisory", c: "var(--rma-blue)" },
    { t: "Digital SME\nEcosystem", c: "var(--rma-orange)" },
  ];

  // Polar positions around a circle
  const positions = [
    // Tuned to avoid overlap at common breakpoints.
    { x: 50, y: 6 },
    { x: 86, y: 24 },
    { x: 86, y: 66 },
    { x: 50, y: 88 },
    { x: 14, y: 66 },
    { x: 14, y: 24 },
  ];

  return (
    <div className="mx-auto w-full max-w-[720px]">
      <div className="relative aspect-square w-full">
        <div className="pointer-events-none absolute inset-0 rounded-full border border-black/10 bg-[radial-gradient(circle_at_50%_50%,rgba(31,106,58,0.10),transparent_55%),radial-gradient(circle_at_70%_30%,rgba(37,58,135,0.10),transparent_55%),radial-gradient(circle_at_40%_80%,rgba(240,116,43,0.08),transparent_60%)]" />

        <div className="pointer-events-none absolute inset-12 rounded-full border border-black/10" />
        <div className="pointer-events-none absolute inset-[104px] rounded-full border border-black/10" />

        {/* center mark */}
        <div className="absolute left-1/2 top-1/2 h-[152px] w-[152px] -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-black/10 bg-white/90 shadow-sm backdrop-blur">
          <div className="relative h-full w-full">
            <Image
              src="/rma-mark.png"
              alt="RMA"
              fill
              sizes="152px"
              className="object-contain p-6"
              priority={false}
            />
          </div>
        </div>

        {items.map((it, idx) => {
          const p = positions[idx]!;
          return (
            <div
              key={it.t}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
            >
              <div className="w-[168px] rounded-[26px] border border-black/10 bg-white/95 px-5 py-4 text-center shadow-sm backdrop-blur">
                <div
                  className="mx-auto mb-2 h-1.5 w-12 rounded-full"
                  style={{ background: `color-mix(in srgb, ${it.c} 70%, white)` }}
                />
                <p className="whitespace-pre-line text-[13px] font-semibold leading-5 text-[var(--rma-ink)]">
                  {it.t}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-3 text-center text-xs rma-muted">
        Six pillars working together to build SME readiness and stronger local supply chains.
      </p>
    </div>
  );
}

