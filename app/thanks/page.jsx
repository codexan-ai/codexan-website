import Link from "next/link";

export const metadata = { title: "Thanks — Codexan" };

export default function ThanksPage() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="aurora" />
      <div className="container-x relative text-center max-w-2xl">
        <span className="section-eyebrow">Message received</span>
        <h1 className="mt-6 font-display text-5xl md:text-6xl font-bold tracking-tight">
          Thanks — we'll be <span className="gradient-text">in touch shortly.</span>
        </h1>
        <p className="mt-6 text-white/70">
          One of our cloud architects will reply within one business day to
          schedule your 30-minute discovery call. In the meantime, feel free
          to explore more of what we do.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-primary">Back to home</Link>
          <Link href="/#services" className="btn-ghost">Explore services</Link>
        </div>
      </div>
    </section>
  );
}
