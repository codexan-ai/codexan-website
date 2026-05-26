export default function Logo({ className = "h-9 w-auto" }) {
  return (
    <svg viewBox="0 0 320 80" className={className} fill="none" aria-label="Codexan">
      <defs>
        <linearGradient id="lg1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="lg2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#c4b5fd" />
        </linearGradient>
      </defs>
      <g transform="translate(8 8)">
        <path
          d="M32 2 L60 18 L60 50 L32 66 L4 50 L4 18 Z"
          stroke="url(#lg1)"
          strokeWidth="3"
          fill="rgba(34,211,238,0.06)"
        />
        <path
          d="M20 22 L44 46 M44 22 L20 46"
          stroke="url(#lg1)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <circle cx="32" cy="34" r="3" fill="#22d3ee" />
      </g>
      <text
        x="90"
        y="52"
        fontFamily="'Space Grotesk', Inter, sans-serif"
        fontSize="34"
        fontWeight="700"
        letterSpacing="2"
        fill="url(#lg2)"
      >
        CODEXAN
      </text>
    </svg>
  );
}
