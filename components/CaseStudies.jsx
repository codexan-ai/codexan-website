import { readCollection, readJSON } from "@/lib/content";

export default function CaseStudies() {
  const studies = readCollection("case-studies");
  const { logos } = readJSON("site/client-logos.json");

  return (
    <section id="case-studies" className="relative py-24 border-t border-white/5">
      <div className="container-x">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div className="max-w-2xl">
            <span className="section-eyebrow">Case Studies</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight">
              Outcomes that <span className="gradient-text">moved the P&amp;L.</span>
            </h2>
          </div>
          <a href="#contact" className="btn-ghost">Request the full deck →</a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {studies.map((c) => (
            <article key={c.headline} className="card flex flex-col h-full">
              <div className="text-xs uppercase tracking-wider text-neon-cyan/80">
                {c.sector}
              </div>
              <h3 className="mt-3 font-display text-xl font-semibold text-white leading-snug">
                {c.headline}
              </h3>
              <div className="mt-auto pt-6">
                <p className="text-sm gradient-text font-semibold">{c.metric}</p>
                <p className="mt-2 text-xs text-white/50">{c.tag}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <p className="text-center text-xs uppercase tracking-widest text-white/40">
            Trusted by teams at
          </p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-4">
            {logos.map((l) => (
              <div
                key={l.name}
                className="flex items-center justify-center h-12 rounded-lg border border-white/5 bg-white/[0.02] text-white/40 font-display font-semibold tracking-wider"
              >
                {l.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
