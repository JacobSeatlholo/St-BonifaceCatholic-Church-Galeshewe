import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col overflow-hidden bg-royal-deep">
      {/* Backdrop */}
      <Image
        src="/images/hero-mass.jpg"
        alt="Sunday Mass at St Boniface, Galeshewe, beneath the mosaic of Christ with arms outstretched"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-royal-deep/75 via-royal-deep/35 to-royal-deep/85" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(36,23,65,0.45)_100%)]" />

      {/* Content */}
      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 pb-24 pt-32 md:px-8">
        <p className="eyebrow animate-[fadeup_1s_ease-out_both] text-gold-bright">
          St Boniface Catholic Church · Est. 1925
        </p>
        <h1 className="mt-6 max-w-4xl animate-[fadeup_1s_0.15s_ease-out_both] font-display text-5xl font-semibold leading-[1.04] text-cream sm:text-6xl md:text-7xl lg:text-[5.25rem]">
          A hundred years of{" "}
          <em className="font-medium italic text-gold-bright">grace</em> in
          Galeshewe.
        </h1>
        <p className="mt-7 max-w-xl animate-[fadeup_1s_0.3s_ease-out_both] text-base leading-relaxed text-cream/80 md:text-lg">
          On the historic streets of Kimberley&apos;s oldest township, a parish
          has kept the faith for a century — through struggle and celebration,
          always with open doors and open arms.
        </p>
        <div className="mt-10 flex animate-[fadeup_1s_0.45s_ease-out_both] flex-wrap items-center gap-4">
          <Link
            href="#worship"
            className="rounded-sm bg-gold px-7 py-3.5 text-sm font-semibold tracking-wide text-royal-deep shadow-lg shadow-royal-deep/40 transition-all hover:-translate-y-0.5 hover:bg-gold-bright"
          >
            Join us for Mass
          </Link>
          <Link
            href="#story"
            className="rounded-sm border border-cream/35 px-7 py-3.5 text-sm font-semibold tracking-wide text-cream transition-all hover:border-cream/70 hover:bg-cream/10"
          >
            Read our story
          </Link>
        </div>
      </div>

      {/* Info strip */}
      <div className="relative border-t border-cream/15 bg-royal-deep/45 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-4 text-center text-[0.8rem] tracking-wide text-cream/75 sm:flex-row md:px-8">
          <span>Sundays · Mass at 08:00 &amp; 10:00</span>
          <span className="hidden h-1 w-1 rounded-full bg-gold sm:block" />
          <span>3–5 Caritas Road, Galeshewe, Kimberley</span>
          <span className="hidden h-1 w-1 rounded-full bg-gold sm:block" />
          <span className="font-display text-[0.95rem] italic text-gold-bright">
            All are welcome
          </span>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-20 left-1/2 hidden -translate-x-1/2 md:block">
        <ChevronDown
          className="h-5 w-5 animate-bounce text-cream/50"
          strokeWidth={1.5}
        />
      </div>
    </section>
  );
}
