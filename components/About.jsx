import { readJSON } from "@/lib/content";

export default function About() {
  const about = readJSON("site/about.json");

  return (
    <section id="about" className="relative py-24 border-t border-white/5">
      <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="section-eyebrow">{about.eyebrow}</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight">
            {about.headlineStart}{" "}
            <span className="gradient-text">{about.headlineAccent}</span>
          </h2>
          <p className="mt-6 text-white/70 leading-relaxed">{about.body}</p>

          <div className="mt-10 grid grid-cols-2 gap-6 max-w-md">
            {about.facts.map((f) => (
              <div key={f.label}>
                <div className="text-sm font-semibold text-white">{f.label}</div>
                <div className="text-xs text-white/60 mt-1">{f.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square rounded-3xl border border-white/10 bg-gradient-to-br from-ink-800 to-ink-900 overflow-hidden p-10 relative">
            <div className="absolute inset-0 bg-grid opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-transparent to-neon-violet/20" />
            <div className="relative h-full flex flex-col justify-between">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-emerald-400 animate-glow" />
                <span className="text-xs text-white/60 uppercase tracking-widest">
                  Live NOC · Operational
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center"
                  >
                    <div
                      className="h-2 w-2 rounded-full"
                      style={{
                        background: i % 3 === 0 ? "#22d3ee" : i % 3 === 1 ? "#8b5cf6" : "#10b981",
                        boxShadow: `0 0 12px currentColor`,
                      }}
                    />
                  </div>
                ))}
              </div>

              <div>
                <p className="text-4xl font-bold gradient-text">{about.uptime}</p>
                <p className="mt-1 text-sm text-white/60">{about.uptimeLabel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
