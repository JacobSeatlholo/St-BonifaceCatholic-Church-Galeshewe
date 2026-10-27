import Image from "next/image";
import { Reveal } from "./reveal";
import { Ornament } from "./ornament";

export function Centenary() {
  return (
    <section id="centenary" className="grain scroll-mt-20 bg-royal-deep text-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Poster */}
          <Reveal className="order-2 lg:order-1">
            <figure className="mx-auto max-w-md">
              <div className="rounded-sm border border-gold-bright/50 p-2.5 shadow-2xl shadow-black/40">
                <div className="relative aspect-square overflow-hidden rounded-[2px]">
                  <Image
                    src="/images/centenary-poster.jpg"
                    alt="St Boniface centenary poster — 100th year anniversary, 08 December 2025, in purple and gold"
                    fill
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <figcaption className="mt-4 text-center text-xs tracking-wide text-cream/60">
                The centenary programme cover · 1925–2025
              </figcaption>
            </figure>
          </Reveal>

          {/* Narrative */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <Ornament tone="dark" className="justify-start" />
              <p className="eyebrow mt-6 text-gold-bright">
                8 December 2025 · A century of grace
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-cream md:text-5xl">
                One hundred years. One Mass of thanksgiving.
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-8 space-y-6 text-[0.95rem] leading-[1.85] text-cream/75 md:text-base">
                <p>
                  The parish&apos;s hundredth year fell within the Church&apos;s
                  Jubilee — a year of hope. On 8 December 2025, St Boniface
                  gathered exactly as it had done for a hundred years: at the
                  altar. The mosaics gleamed, the choir gave everything, and the
                  altar servers stood in ranks of white along the sanctuary.
                </p>
                <p>
                  Parishioners wore the centenary colours of purple and gold;
                  the emblem of the blessing saint was on shirts, on banners,
                  even on bottles of water set out for the crowd. It was, in the
                  truest sense, a family occasion — grandparents who were
                  baptised here, beside babies waiting for the same sacrament.
                </p>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {["Excellence", "Resilience", "Strength", "Community"].map(
                  (w) => (
                    <div
                      key={w}
                      className="border-t border-gold-bright/50 pt-3 text-center sm:text-left"
                    >
                      <p className="font-display text-lg font-semibold italic text-gold-bright">
                        {w}
                      </p>
                    </div>
                  )
                )}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-cream/60">
                The four words the parish chose for its hundredth year — and a
                fair description of the next hundred, should the Lord grant
                them.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
