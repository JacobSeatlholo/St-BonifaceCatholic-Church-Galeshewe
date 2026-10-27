"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "./reveal";
import { useT } from "./language";
import { PARISH } from "@/lib/site";

export function Visit() {
  const { t } = useT();
  const { visit } = t;

  return (
    <section id="visit" className="grain scroll-mt-20 bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Details */}
          <div>
            <Reveal>
              <p className="eyebrow text-gold">{visit.eyebrow}</p>
              <h2 className="mt-4 font-display text-4xl font-semibold text-royal md:text-5xl">
                {visit.title}
              </h2>
              <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-stonewarm">
                {visit.intro}
              </p>
            </Reveal>

            <Reveal delay={120}>
              <ul className="mt-9 space-y-5">
                <li className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-gold/40 bg-parchment text-gold">
                    <MapPin className="h-4.5 w-4.5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">
                      {PARISH.address.line1}
                    </p>
                    <p className="text-sm text-stonewarm">
                      {PARISH.address.line2}
                      <br />
                      {PARISH.address.city}
                      <br />
                      {PARISH.address.postal}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-gold/40 bg-parchment text-gold">
                    <Phone className="h-4.5 w-4.5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">
                      {visit.officeLabel}
                    </p>
                    <a
                      href={PARISH.phoneHref}
                      className="text-sm text-stonewarm transition-colors hover:text-gold"
                    >
                      {PARISH.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-gold/40 bg-parchment text-gold">
                    <Mail className="h-4.5 w-4.5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">
                      {visit.emailLabel}
                    </p>
                    <a
                      href={`mailto:${PARISH.email}`}
                      className="text-sm text-stonewarm transition-colors hover:text-gold"
                    >
                      {PARISH.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-gold/40 bg-parchment text-gold">
                    <Clock className="h-4.5 w-4.5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">
                      {visit.hoursLabel}
                    </p>
                    <p className="text-sm text-stonewarm">{PARISH.officeHours}</p>
                  </div>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={PARISH.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm bg-royal px-7 py-3.5 text-sm font-semibold tracking-wide text-parchment transition-all hover:-translate-y-0.5 hover:bg-royal-deep"
                >
                  {visit.directionsBtn}
                </a>
                <a
                  href={`mailto:${PARISH.email}`}
                  className="rounded-sm border border-royal/30 px-7 py-3.5 text-sm font-semibold tracking-wide text-royal transition-all hover:border-gold hover:text-gold"
                >
                  {visit.emailBtn}
                </a>
              </div>
            </Reveal>
          </div>

          {/* Sunday card */}
          <Reveal delay={140}>
            <div className="flex h-full flex-col justify-between overflow-hidden rounded-sm bg-royal-deep p-8 text-cream shadow-xl shadow-royal/25 md:p-10">
              <div>
                <p className="eyebrow text-gold-bright">{visit.sundayEyebrow}</p>
                <p className="mt-5 font-display text-4xl font-semibold leading-tight md:text-5xl">
                  {visit.sundayMassA}
                  <span className="mx-3 text-gold-bright">&amp;</span>
                  {visit.sundayMassB}
                </p>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
                  {PARISH.address.line1}, {PARISH.address.line2},{" "}
                  {PARISH.address.city}. {visit.parkingNote}
                </p>
              </div>
              <div className="mt-10 border-t border-cream/15 pt-6">
                <p className="text-xs uppercase tracking-[0.2em] text-cream/50">
                  {visit.dioceseLine}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-cream/75">
                  {visit.leaderLine} {PARISH.bishop}.
                  <br />
                  {visit.priestLabel} {PARISH.parishPriest}
                </p>
                <p className="mt-5 font-display text-lg italic text-gold-bright">
                  {visit.quote}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
