const steps = [
  {
    n: "01",
    title: "Discover",
    desc: "Workshops, application discovery, and dependency mapping. We baseline cost, performance, and risk before recommending anything.",
  },
  {
    n: "02",
    title: "Design",
    desc: "Target architecture, landing zone, and a phased migration wave plan — reviewed against Well-Architected and your compliance posture.",
  },
  {
    n: "03",
    title: "Migrate & Modernize",
    desc: "Automated migration tooling, IaC-everywhere, blue/green cutovers, and refactors where they unlock real business value.",
  },
  {
    n: "04",
    title: "Operate",
    desc: "Codexan-managed 24/7 NOC, FinOps governance, security operations, and a quarterly optimization roadmap — forever.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 border-t border-white/5">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="section-eyebrow">How We Work</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight">
            A proven path from <span className="gradient-text">whiteboard to 24/7 operations.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4 relative">
          <div className="hidden lg:block absolute top-12 left-8 right-8 h-px bg-gradient-to-r from-transparent via-neon-cyan/40 to-transparent" />
          {steps.map((s) => (
            <div key={s.n} className="card relative">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full border border-neon-cyan/40 bg-ink-900 flex items-center justify-center text-sm font-bold gradient-text">
                  {s.n}
                </div>
                <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              </div>
              <p className="mt-4 text-sm text-white/65 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
