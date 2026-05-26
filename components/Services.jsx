import { readCollection } from "@/lib/content";

const ICONS = {
  migration: <path d="M4 17h11a4 4 0 0 0 0-8 6 6 0 0 0-11.7-1.5A4.5 4.5 0 0 0 4 17Z M12 13v6m-3-3 3 3 3-3" />,
  modernization: <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z M10 7h4M7 10v4M17 10v4M10 17h4" />,
  managed: <path d="M12 2a10 10 0 1 0 10 10 M12 6v6l4 2" />,
  security: <path d="M12 2 4 6v6c0 5 4 9 8 10 4-1 8-5 8-10V6l-8-4Z M9 12l2 2 4-4" />,
  devops: <path d="M4 7h16M4 12h16M4 17h16 M8 4v3M16 9v3M10 14v3" />,
  data: <path d="M4 7c0-2 4-3 8-3s8 1 8 3-4 3-8 3-8-1-8-3z M4 7v10c0 2 4 3 8 3s8-1 8-3V7 M4 12c0 2 4 3 8 3s8-1 8-3" />,
};

export default function Services() {
  const services = readCollection("services");

  return (
    <section id="services" className="relative py-24">
      <div className="container-x">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div className="max-w-2xl">
            <span className="section-eyebrow">Services</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight">
              End-to-end <span className="gradient-text">cloud expertise</span> —
              from strategy to 24/7 operations.
            </h2>
          </div>
          <p className="text-white/60 max-w-md">
            Six practice areas, one accountable team. Engage us for a single
            phase or hand us the whole journey.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="card group">
              <div className="relative">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-violet/20 border border-white/10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-neon-cyan fill-none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {ICONS[s.icon] ?? ICONS.managed}
                  </svg>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
