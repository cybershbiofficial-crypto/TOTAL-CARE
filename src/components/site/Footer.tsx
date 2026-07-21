export function Footer() {
  return (
    <footer className="relative border-t border-line/60 bg-background pb-10 pt-24 md:pt-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="text-mono-xs text-mute tracking-widest font-medium">
              TOTAL CARE · DUBAI
            </div>
            <h3 className="mt-6 font-display text-5xl font-medium leading-tight text-foreground md:text-7xl">
              Engineering <span className="text-foreground">Excellence,</span>
              <br />
              Deploying Trust.
            </h3>
          </div>

          <div className="md:col-span-3 md:col-start-8">
            <div className="text-mono-xs text-mute font-medium uppercase">Headquarters</div>
            <address className="mt-4 not-italic text-[14px] leading-relaxed text-foreground/80">
              Shaik Zayed Road Satwa
              <br />
              Dubai · United Arab Emirates
              <br /> <br />
              +971 56 650 2865
            </address>
          </div>

          <div className="md:col-span-2 md:col-start-11">
            <div className="text-mono-xs text-mute font-medium uppercase">Navigate</div>
            <ul className="mt-4 space-y-2 text-[14px] text-foreground/80">
              {[
                { label: "03 — Signature Portfolio", href: "#projects" },
                { label: "Services", href: "#services" },
                { label: "About", href: "#philosophy" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-accent transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-between gap-6 border-t border-line/60 pt-8 text-mono-xs text-mute font-medium">
          <span>
            © {new Date().getFullYear()} TOTAL CARE Dubai. Premier Labour Supply & Renovation.
          </span>
          <span>totalcares.official@gmail.com</span>
          <span>ISO 9001 · Dubai Municipality Licensed</span>
        </div>
      </div>
    </footer>
  );
}
