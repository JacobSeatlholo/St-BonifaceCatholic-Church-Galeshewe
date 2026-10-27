"use client";

import { Reveal } from "./reveal";
import { Ornament } from "./ornament";
import { useT } from "./language";

export function Welcome() {
  const { t } = useT();
  return (
    <section className="grain bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Ornament />
          <p className="eyebrow mt-6 text-gold">{t.welcome.eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-royal md:text-5xl">
            {t.welcome.title}
          </h2>
          <p className="mt-6 text-[0.95rem] leading-relaxed text-stonewarm md:text-base">
            {t.welcome.body}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-6 md:mt-16">
          {t.welcome.facts.map((f, i) => (
            <Reveal key={f.figure} delay={i * 120}>
              <div className="border-t border-gold/50 pt-6 text-center sm:text-left">
                <p className="font-display text-4xl font-semibold text-royal md:text-[2.75rem]">
                  {f.figure}
                </p>
                <p className="eyebrow mt-2 text-gold">{f.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-stonewarm">
                  {f.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
