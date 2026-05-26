export default function Contact() {
  return (
    <section id="contact" className="relative py-24 border-t border-white/5">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 p-10 md:p-16">
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div className="absolute -top-32 -right-20 h-80 w-80 rounded-full bg-neon-violet/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-neon-cyan/20 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-eyebrow">Let's talk</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight">
                Ready to <span className="gradient-text">re-engineer your cloud?</span>
              </h2>
              <p className="mt-4 text-white/70 max-w-md">
                Tell us about your environment and goals. We'll come back within
                one business day with a 30-minute discovery call.
              </p>

              <div className="mt-8 space-y-3 text-sm text-white/70">
                <div className="flex items-center gap-3">
                  <span className="h-8 w-8 rounded-lg border border-white/10 grid place-items-center">@</span>
                  hello@codexan.com
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-8 w-8 rounded-lg border border-white/10 grid place-items-center">☎</span>
                  +1 (000) 000-0000
                </div>
              </div>
            </div>

            {/*
              Netlify Forms: name + data-netlify + hidden form-name input.
              The form posts natively to the same page; Netlify intercepts
              and redirects to action="/thanks". A honeypot field "bot-field"
              catches naive spam bots.
            */}
            <form
              name="contact"
              method="POST"
              action="/thanks"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Name" name="name" placeholder="Jane Doe" required />
                <Field label="Work email" name="email" type="email" placeholder="jane@company.com" required />
              </div>
              <Field label="Company" name="company" placeholder="Acme Corp" />
              <div>
                <label className="block text-xs font-medium text-white/70 mb-2">Tell us about your project</label>
                <textarea
                  rows={4}
                  name="message"
                  required
                  placeholder="Migrating 200 VMs from on-prem to AWS, need help with landing zone and managed services..."
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-neon-cyan/60 transition-colors"
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                Send message →
              </button>
              <p className="text-xs text-white/40 text-center">
                We respond within one business day. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder, required = false }) {
  return (
    <div>
      <label className="block text-xs font-medium text-white/70 mb-2">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-neon-cyan/60 transition-colors"
      />
    </div>
  );
}
