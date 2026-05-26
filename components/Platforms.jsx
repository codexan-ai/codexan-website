const platforms = [
  {
    name: "AWS",
    tag: "Advanced Partner",
    color: "from-orange-400 to-yellow-400",
    bullets: ["EKS · ECS · Lambda", "Landing Zones · Control Tower", "Well-Architected Reviews"],
  },
  {
    name: "Azure",
    tag: "Solutions Partner",
    color: "from-sky-400 to-blue-500",
    bullets: ["AKS · App Service · Functions", "Entra ID · Sentinel", "Azure Landing Zones"],
  },
  {
    name: "Google Cloud",
    tag: "Service Partner",
    color: "from-emerald-400 to-cyan-400",
    bullets: ["GKE · Cloud Run · BigQuery", "Anthos · Vertex AI", "Org policies & VPC SC"],
  },
  {
    name: "Private Cloud",
    tag: "Hybrid Specialist",
    color: "from-fuchsia-400 to-violet-500",
    bullets: ["OpenStack · VMware · Nutanix", "Bare-metal Kubernetes", "Hybrid networking"],
  },
];

export default function Platforms() {
  return (
    <section id="platforms" className="relative py-24 border-t border-white/5">
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto">
          <span className="section-eyebrow">Cloud Platforms</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight">
            Vendor-neutral. <span className="gradient-text">Hyperscaler-deep.</span>
          </h2>
          <p className="mt-4 text-white/65">
            We pick the right platform for your workload — and we have the
            certifications and battle scars to back it up.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {platforms.map((p) => (
            <div key={p.name} className="card overflow-hidden">
              <div className={`absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${p.color} opacity-20 blur-2xl`} />
              <div className="relative">
                <div className={`inline-block text-xs font-medium tracking-wider uppercase bg-gradient-to-r ${p.color} bg-clip-text text-transparent`}>
                  {p.tag}
                </div>
                <h3 className="mt-2 font-display text-2xl font-bold text-white">{p.name}</h3>
                <ul className="mt-5 space-y-2 text-sm text-white/65">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className={`mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r ${p.color}`} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
