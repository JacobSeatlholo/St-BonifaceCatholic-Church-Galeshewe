"use client";

import { Reveal } from "./reveal";
import { Ornament } from "./ornament";
import { useT } from "./language";

export function Patron() {
  const { t } = useT();
  const { patron } = t;

  return (
    <section className="grain bg-royal-deep text-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-3xl">
          <Reveal className="text-center">
            <Ornament tone="dark" />
            <p className="eyebrow mt-6 text-gold-bright">{patron.eyebrow}</p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-cream md:text-5xl">
              {patron.title}
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-9 space-y-6 text-[0.95rem] leading-[1.85] text-cream/75 md:text-base">
              <p>
                {patron.p1a}
                <span className="text-cream">{patron.p1em}</span>
                {patron.p1b}
              </p>
              <p>{patron.p2}</p>
            </div>
          </Reveal>

          {/* Patron facts */}
          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-cream/15 bg-cream/15 md:grid-cols-4">
            {patron.facts.map((f, i) => (
              <Reveal key={f.when} delay={i * 90} className="bg-royal-deep">
                <div className="h-full px-5 py-6">
                  <p className="font-display text-2xl font-semibold text-gold-bright">
                    {f.when}
                  </p>
                  <p className="mt-2 text-[0.8rem] leading-relaxed text-cream/65">
                    {f.what}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
