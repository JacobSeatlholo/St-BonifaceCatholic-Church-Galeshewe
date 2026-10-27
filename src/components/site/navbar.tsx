"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-500",
          scrolled
            ? "border-b border-border/70 bg-parchment/95 shadow-[0_1px_24px_rgba(42,35,28,0.08)] backdrop-blur"
            : "bg-gradient-to-b from-royal-deep/60 to-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:h-20 md:px-8">
          {/* Brand */}
          <Link
            href="/"
            className="group flex min-w-0 items-center gap-3"
            aria-label="St Boniface Catholic Church — home"
          >
            <span
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border transition-colors md:h-11 md:w-11",
                scrolled
                  ? "border-gold/40 bg-cream"
                  : "border-cream/30 bg-cream/95"
              )}
            >
              <Image
                src="/images/logo-illustration.jpg"
                alt="St Boniface parish emblem — the saint blessing two children"
                width={56}
                height={36}
                className="h-auto w-7 md:w-8"
              />
            </span>
            <span className="min-w-0 leading-tight">
              <span
                className={cn(
                  "block truncate font-display text-lg font-semibold tracking-wide transition-colors md:text-xl",
                  scrolled ? "text-royal" : "text-cream"
                )}
              >
                St Boniface
              </span>
              <span
                className={cn(
                  "block text-[0.6rem] uppercase tracking-[0.22em] transition-colors",
                  scrolled ? "text-stonewarm" : "text-cream/70"
                )}
              >
                Catholic Church · Galeshewe
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "text-[0.8rem] font-medium tracking-wide transition-colors hover:text-gold-bright",
                  scrolled
                    ? "text-ink/80 hover:text-gold"
                    : "text-cream/85 hover:text-gold-bright"
                )}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="#worship"
              className={cn(
                "rounded-sm px-4 py-2 text-[0.8rem] font-semibold tracking-wide transition-all",
                scrolled
                  ? "bg-royal text-parchment hover:bg-royal-deep"
                  : "bg-gold text-royal-deep hover:bg-gold-bright"
              )}
            >
              Join us for Mass
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-sm transition-colors lg:hidden",
              scrolled
                ? "text-royal hover:bg-royal/5"
                : "text-cream hover:bg-cream/10"
            )}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu className="h-6 w-6" strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 flex flex-col bg-royal-deep transition-all duration-500 lg:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="flex h-16 items-center justify-between px-5">
          <span className="font-display text-xl font-semibold text-cream">
            St Boniface
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex h-11 w-11 items-center justify-center rounded-sm text-cream hover:bg-cream/10"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" strokeWidth={1.5} />
          </button>
        </div>
        <nav className="flex flex-1 flex-col justify-center gap-2 px-8" aria-label="Mobile">
          {NAV_LINKS.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={cn(
                "border-b border-cream/10 py-4 font-display text-3xl font-medium text-cream transition-all duration-500 hover:pl-3 hover:text-gold-bright",
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
              style={{ transitionDelay: `${80 + i * 60}ms` }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="px-8 pb-10 text-sm text-cream/60">
          <p>3–5 Caritas Road, Galeshewe, Kimberley</p>
          <p className="mt-1">+27 53 831 4411 · All are welcome</p>
        </div>
      </div>
    </>
  );
}
