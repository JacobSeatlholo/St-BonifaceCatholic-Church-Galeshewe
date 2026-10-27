"use client";

import Image from "next/image";
import { Reveal } from "./reveal";
import { useT } from "./language";

export function Worship() {
  const { t } = useT();
  const { worship } = t;

  return (
    <section id="worship" className="grain scroll-mt-20 bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold">{worship.eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-royal md:text-5xl">
            {worship.title}
          </h2>
          <p className="mt-5 text-[0.95rem] leading-relaxed text-stonewarm">
            {worship.intro}
          </p>
        </Reveal>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Schedule */}
          <Reveal>
            <div className="overflow-hidden rounded-sm border border-border bg-parchment shadow-sm">
              <div className="border-b border-gold/30 bg-royal-deep px-6 py-4">
                <p className="font-display text-lg font-semibold text-cream">
                  {worship.weekTitle}
                </p>
              </div>
              <ul>
                {worship.massTimes.map((m) => (
                  <li
                    key={m.day}
                    className="flex items-baseline justify-between gap-4 border-b border-border/70 px-6 py-4 last:border-b-0"
                  >
                    <div>
                      <p className="text-sm font-semibold text-ink">
                        {m.day}
                      </p>
                      <p className="mt-0.5 text-xs uppercase tracking-[0.14em] text-stonewarm/80">
                        {m.note}
                      </p>
                    </div>
                    <p className="text-right font-display text-base font-medium italic text-royal">
                      {m.detail}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="border-t border-gold/30 bg-parchment-deep/60 px-6 py-3 text-[0.72rem] leading-relaxed text-stonewarm">
                {worship.scheduleNote}
              </p>
            </div>
          </Reveal>

          {/* Ambo image */}
          <Reveal delay={140}>
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-xl shadow-royal/15 sm:aspect-[3/2] lg:aspect-[4/5]">
                <Image
                  src="/images/worship-ambo.jpg"
                  alt={worship.amboAlt}
                  fill
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 flex items-center justify-between gap-4 text-xs tracking-wide text-stonewarm">
                <span>{worship.amboCaption}</span>
                <span className="font-display text-sm italic text-gold">
                  {worship.verse}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* Sacraments */}
        <div className="mt-20">
          <Reveal className="text-center">
            <p className="eyebrow text-gold">{worship.sacEyebrow}</p>
            <h3 className="mt-3 font-display text-3xl font-semibold text-royal md:text-4xl">
              {worship.sacTitle}
            </h3>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {worship.sacraments.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 110}>
                <div className="group h-full rounded-sm border border-border bg-parchment p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg hover:shadow-royal/10">
                  <p className="font-display text-[0.7rem] font-semibold tracking-[0.3em] text-gold/70 transition-colors group-hover:text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h4 className="mt-3 font-display text-xl font-semibold text-royal">
                    {s.title}
                  </h4>
                  <p className="mt-2.5 text-sm leading-relaxed text-stonewarm">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mx-auto mt-8 max-w-xl text-center text-xs leading-relaxed text-stonewarm">
              {worship.sacNote}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
