import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Magnetic } from "./Magnetic";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#philosophy" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-line/60 shadow-sm"
            : "bg-background border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-6 md:h-20 md:px-10">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-3 z-50"
          >
            <span
              aria-hidden
              className="grid h-8 w-8 place-items-center bg-accent text-[12px] font-bold tracking-[0.15em] text-foreground transition-colors group-hover:bg-foreground group-hover:text-background"
            >
              TC
            </span>
            <span className="text-mono-xs font-bold text-foreground tracking-widest">
              TOTAL CARE
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-10 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-[13px] font-medium tracking-wide text-foreground/90 transition-colors hover:text-accent"
              >
                <span className="relative">
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
                </span>
              </a>
            ))}
          </nav>
