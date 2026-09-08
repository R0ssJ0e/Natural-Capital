/**
 * TerraceField — the signature element.
 *
 * A subak rice terrace seen from above and an engineering site survey are the
 * same drawing: stacked contour lines. This renders one field that reads as
 * both, with a Jakarta skyline rising out of the topmost contour.
 *
 * The SVG stretches to fill (preserveAspectRatio="none"), so it carries no
 * text and no true circles — the elevation annotations are HTML, laid over the
 * top by the Hero, where they stay crisp.
 */

const W = 1440;
const H = 620;
const SKYLINE_BASE = 262; // the horizon: towers above, terraces below
const BANDS = 9;

// Far haze (paddy water catching the dawn sky) to near earth (shadowed bund).
const FAR = [72, 182, 150];
const NEAR = [5, 38, 29];

const hex = (c) =>
  `#${c.map((v) => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, "0")).join("")}`;
const mix = (a, b, t) => a.map((v, i) => v + (b[i] - v) * t);
const lift = (c, amount) => hex(c.map((v) => v + amount));

// mix() returns an array; every consumer wants a colour string.
const shade = (a, b, t) => hex(mix(a, b, t));

function bandPath(i) {
  const t = i / (BANDS - 1);
  const gap = (H - 30 - (SKYLINE_BASE + 10)) / (BANDS - 1);
  const baseY = SKYLINE_BASE + 10 + t * (BANDS - 1) * gap;
  const amp = Math.min(gap * 0.34, 15 - t * 7);
  const freq = 1.05 + t * 0.8;
  const phase = t * 4.4;

  const steps = 80;
  let d = `M 0 ${baseY.toFixed(1)}`;
  for (let s = 1; s <= steps; s += 1) {
    const u = s / steps;
    const x = u * W;
    const y =
      baseY +
      Math.sin(u * Math.PI * 2 * freq + phase) * amp +
      Math.sin(u * Math.PI * 2 * freq * 2.4 + phase * 1.7) * (amp * 0.22);
    d += ` L ${x.toFixed(1)} ${y.toFixed(1)}`;
  }
  d += ` L ${W} ${H + 60} L 0 ${H + 60} Z`;
  return d;
}

// SCBD / Sudirman massing: glass volumes with setbacks, deliberately unruly.
const TOWERS = [
  { x: 402, w: 34, h: 74 },
  { x: 444, w: 22, h: 118 },
  { x: 474, w: 46, h: 156, setback: 26 },
  { x: 528, w: 26, h: 96 },
  { x: 562, w: 18, h: 138 },
  { x: 588, w: 52, h: 182, setback: 34, mast: true },
  { x: 648, w: 28, h: 108 },
  { x: 684, w: 20, h: 84 },
  { x: 712, w: 44, h: 164, setback: 22 },
  { x: 764, w: 24, h: 124, mast: true },
  { x: 796, w: 36, h: 96 },
  { x: 840, w: 18, h: 142 },
  { x: 866, w: 40, h: 112, setback: 18 },
  { x: 914, w: 22, h: 78 },
  { x: 948, w: 38, h: 128, setback: 20 },
  { x: 996, w: 20, h: 92 },
  { x: 1026, w: 30, h: 118 },
  { x: 1066, w: 18, h: 70 },
];

export default function TerraceField({ className = "" }) {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ncaSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#04231b" />
          <stop offset="70%" stopColor="#06301f" />
          <stop offset="100%" stopColor="#0a3d2a" />
        </linearGradient>

        <radialGradient id="ncaSun" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#f7c766" stopOpacity="0.62" />
          <stop offset="22%" stopColor="#f0b13f" stopOpacity="0.36" />
          <stop offset="55%" stopColor="#d97706" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="ncaHaze" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7cc4ac" stopOpacity="0" />
          <stop offset="55%" stopColor="#8fd4c1" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#7cc4ac" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="ncaGlass" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0%" stopColor="#a7e8d3" stopOpacity="0.34" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
        </linearGradient>

        {Array.from({ length: BANDS }).map((_, i) => {
          const t = i / (BANDS - 1);
          const base = mix(FAR, NEAR, Math.pow(t, 0.9));
          const paddy = i % 2 === 0 ? lift(base, 13) : hex(base);
          return (
            <linearGradient key={i} id={`ncaBand-${i}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={lift(base, 34)} />
              <stop offset="7%" stopColor={paddy} />
              <stop offset="100%" stopColor={shade(base, NEAR, 0.35)} />
            </linearGradient>
          );
        })}

        <linearGradient id="ncaSheen" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="48%" stopColor="#e6fff6" stopOpacity="0.2" />
          <stop offset="52%" stopColor="#e6fff6" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        <clipPath id="ncaFieldClip">
          <rect x="0" y={SKYLINE_BASE - 2} width={W} height={H} />
        </clipPath>
      </defs>

      <rect x="0" y="0" width={W} height={H} fill="url(#ncaSky)" />

      {/* low sun, drawn as a stretched field so nothing reads as a hard disc */}
      <rect
        x={W * 0.53 - 260}
        y={SKYLINE_BASE - 210}
        width="520"
        height="420"
        fill="url(#ncaSun)"
      />

      {/* horizon haze */}
      <rect
        x="0"
        y={SKYLINE_BASE - 70}
        width={W}
        height="140"
        fill="url(#ncaHaze)"
      />

      {/* skyline massing */}
      <g>
        {TOWERS.map((tw, i) => {
          const top = SKYLINE_BASE - tw.h;
          const sbW = tw.setback ? tw.w * 0.52 : 0;
          return (
            <g key={i}>
              {tw.setback && (
                <rect
                  x={tw.x + (tw.w - sbW) / 2}
                  y={top - tw.setback}
                  width={sbW}
                  height={tw.setback + 4}
                  fill="url(#ncaGlass)"
                  stroke="#a7e8d3"
                  strokeOpacity="0.3"
                  strokeWidth="1"
                />
              )}
              {tw.mast && (
                <line
                  x1={tw.x + tw.w / 2}
                  x2={tw.x + tw.w / 2}
                  y1={top - (tw.setback || 0) - 30}
                  y2={top - (tw.setback || 0)}
                  stroke="#a7e8d3"
                  strokeOpacity="0.42"
                  strokeWidth="1.5"
                />
              )}
              <rect
                x={tw.x}
                y={top}
                width={tw.w}
                height={tw.h}
                fill="url(#ncaGlass)"
                stroke="#a7e8d3"
                strokeOpacity="0.32"
                strokeWidth="1"
              />
              {/* mullions: glass floors, and a stack of survey rules at once */}
              {Array.from({ length: Math.floor(tw.h / 13) }).map((_, f) => (
                <line
                  key={f}
                  x1={tw.x + 1.5}
                  x2={tw.x + tw.w - 1.5}
                  y1={top + 9 + f * 13}
                  y2={top + 9 + f * 13}
                  stroke="#a7e8d3"
                  strokeOpacity="0.13"
                  strokeWidth="1"
                />
              ))}
              <rect
                x={tw.x}
                y={top}
                width={tw.w}
                height={tw.h}
                fill="#e6fff6"
                opacity="0"
                className="animate-gleam"
                style={{ animationDelay: `${i * 0.42}s` }}
              />
            </g>
          );
        })}
      </g>

      {/* the terrace field / contour stack */}
      <g clipPath="url(#ncaFieldClip)" className="animate-drift">
        {Array.from({ length: BANDS }).map((_, i) => {
          const d = bandPath(i);
          const t = i / (BANDS - 1);
          const major = i % 3 === 0;
          return (
            <g key={i}>
              <path d={d} fill={`url(#ncaBand-${i})`} />
              {/* the bund: terrace lip and contour line in one stroke */}
              <path
                d={d}
                fill="none"
                stroke={major ? "#dcfbef" : "#a9ecd3"}
                strokeOpacity={major ? 0.5 - t * 0.2 : 0.3 - t * 0.12}
                strokeWidth={major ? 1.6 : 1}
              />
            </g>
          );
        })}
      </g>

      {/* sunlight travelling across the flooded paddies */}
      <g clipPath="url(#ncaFieldClip)">
        <rect
          x="0"
          y={SKYLINE_BASE}
          width={W * 0.5}
          height={H}
          fill="url(#ncaSheen)"
          className="animate-sheen"
        />
      </g>
    </svg>
  );
}
