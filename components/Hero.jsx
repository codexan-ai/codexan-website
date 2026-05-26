import { readJSON } from "@/lib/content";

export default function Hero() {
  const hero = readJSON("site/hero.json");

  return (
    <section className="relative overflow-hidden pt-20 pb-32">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="aurora" />

      <div className="container-x relative">
        <div className="max-w-4xl">
          <span className="section-eyebrow animate-fade-up">
            <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan animate-glow" />
            {hero.eyebrow}
          </span>

          <h1 className="mt-6 font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight animate-fade-up">
            {hero.headlineStart}{" "}
            <span className="gradient-text">{hero.headlineAccent}</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-white/70 animate-fade-up">
            {hero.subhead}
          </p>

          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up">
            <a href="#contact" className="btn-primary">{hero.primaryCta}</a>
            <a href="#services" className="btn-ghost">{hero.secondaryCta}</a>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl">
            {hero.stats.map((s) => (
              <div key={s.label} className="border-l border-white/10 pl-4">
                <div className="text-3xl font-bold gradient-text">{s.value}</div>
                <div className="text-xs text-white/60 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block absolute right-0 top-20 h-80 w-80 rounded-full bg-gradient-to-br from-neon-cyan/30 to-neon-violet/30 blur-3xl animate-float" />
      </div>
    </section>
  );
}
