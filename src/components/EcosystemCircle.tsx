export function EcosystemCircle() {
  const items = [
    { t: "Enterprise\nDevelopment", c: "var(--rma-green)" },
    { t: "Supplier\nDevelopment", c: "var(--rma-blue)" },
    { t: "Access to\nFinance", c: "var(--rma-orange)" },
    { t: "Market\nAccess", c: "var(--rma-green)" },
    { t: "Local Content\nAdvisory", c: "var(--rma-blue)" },
    { t: "Digital SME\nEcosystem", c: "var(--rma-orange)" },
  ];

  // Fixed SVG geometry (viewBox 0..1000) prevents overlap at all sizes.
  const nodeW = 270;
  const nodeH = 140;
  const cx = 500;
  const cy = 500;
  const r = 420;
  const anglesDeg = [-90, -25, 35, 90, 145, 205];
  const nodes = items.map((it, idx) => {
    const a = (anglesDeg[idx]! * Math.PI) / 180;
    const x = cx + r * Math.cos(a) - nodeW / 2;
    const y = cy + r * Math.sin(a) - nodeH / 2;
    return { ...it, x, y };
  });

  return (
    <div className="mx-auto w-full max-w-[860px]">
      <svg
        viewBox="0 0 1000 1000"
        role="img"
        aria-label="RMA ESD ecosystem: six service pillars around the RMA mark"
        className="h-auto w-full"
      >
        <defs>
          <radialGradient id="rma-bg" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="rgba(31,106,58,0.10)" />
            <stop offset="60%" stopColor="rgba(31,106,58,0.00)" />
          </radialGradient>
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="rgba(0,0,0,0.10)" />
          </filter>
        </defs>

        {/* background rings */}
        <circle cx={cx} cy={cy} r="490" fill="white" stroke="rgba(0,0,0,0.10)" />
        <circle cx={cx} cy={cy} r="420" fill="url(#rma-bg)" />
        <circle cx={cx} cy={cy} r="360" fill="none" stroke="rgba(0,0,0,0.10)" />
        <circle cx={cx} cy={cy} r="270" fill="none" stroke="rgba(0,0,0,0.10)" />

        {/* center card */}
        <g filter="url(#softShadow)">
          <rect
            x={cx - 92}
            y={cy - 92}
            width="184"
            height="184"
            rx="32"
            fill="rgba(255,255,255,0.92)"
            stroke="rgba(0,0,0,0.10)"
          />
        </g>
        <image
          href="/rma-mark.png"
          x={cx - 70}
          y={cy - 70}
          width="140"
          height="140"
          preserveAspectRatio="xMidYMid meet"
        />

        {/* nodes */}
        {nodes.map((n) => (
          <g key={n.t} filter="url(#softShadow)">
            <rect
              x={n.x}
              y={n.y}
              width={nodeW}
              height={nodeH}
              rx="34"
              fill="rgba(255,255,255,0.96)"
              stroke="rgba(0,0,0,0.10)"
            />
            <rect
              x={n.x + nodeW / 2 - 36}
              y={n.y + 18}
              width="72"
              height="10"
              rx="5"
              fill={`color-mix(in srgb, ${n.c} 70%, white)`}
            />
            <text
              x={n.x + nodeW / 2}
              y={n.y + 66}
              textAnchor="middle"
              fontSize="22"
              fontWeight="700"
              fill="var(--rma-ink)"
            >
              {n.t.split("\n").map((line, i) => (
                <tspan key={line} x={n.x + nodeW / 2} dy={i === 0 ? 0 : 26}>
                  {line}
                </tspan>
              ))}
            </text>
          </g>
        ))}
      </svg>

      <p className="mt-3 text-center text-xs rma-muted">
        Six pillars working together to build SME readiness and stronger local supply chains.
      </p>
    </div>
  );
}

