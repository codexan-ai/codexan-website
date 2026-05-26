import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-24">
      <div className="container-x py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo className="h-9 w-auto" />
          <p className="mt-4 max-w-sm text-sm text-white/60">
            Codexan is a cloud consultancy and managed services firm helping
            organizations design, migrate, and operate resilient cloud platforms.
          </p>
        </div>
        <div>
          <h4 className="text-white text-sm font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#case-studies" className="hover:text-white">Case studies</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-sm font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li>hello@codexan.com</li>
            <li>+1 (000) 000-0000</li>
            <li>Global · Remote-first</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Codexan. All rights reserved.</p>
          <p>AWS · Azure · GCP · Private Cloud Partners</p>
        </div>
      </div>
    </footer>
  );
}
