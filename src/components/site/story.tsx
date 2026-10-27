import Image from "next/image";
import { Reveal } from "./reveal";
import { TIMELINE } from "@/lib/site";

export function Story() {
  return (
    <section id="story" className="grain scroll-mt-20 bg-parchment">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Text column */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow text-gold">Our story</p>
              <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-tight text-royal md:text-5xl">
                Faith planted deep, growing for a century.
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <p className="dropcap mt-8 text-[0.98rem] leading-[1.85] text-ink/85">
                St Boniface was founded in 1925, in the township that grew up
                beside Kimberley&apos;s diamond mines. Galeshewe — one of the
                oldest townships in South Africa — has known hardship, removals
                and resistance; through all of it, the parish has been a fixed
                point: a sanctuary of stone and mosaic where generations came to
                be baptised, married, mourned and sent out again.
              </p>
              <p className="mt-6 text-[0.98rem] leading-[1.85] text-ink/85">
                Over ten decades the parish raised choirs and catechists, altar
                servers and sodalities. It taught children their prayers, stood
                with families in bereavement and in celebration, and kept its
                doors open through the hardest years of the country&apos;s
                history. Many who lead in the parish today first served on its
                altars as children — the faith handed on, generation to
                generation, exactly as it was handed to us.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <blockquote className="my-10 border-l-2 border-gold pl-6 md:pl-8">
                <p className="font-display text-2xl font-medium italic leading-snug text-royal md:text-[1.7rem]">
                  &ldquo;Celebrating 100 years of Excellence, Resilience,
                  Strength, and Supporting the Community.&rdquo;
                </p>
                <footer className="mt-3 text-xs uppercase tracking-[0.18em] text-stonewarm">
                  — The parish&apos;s own words, centenary year 2025
                </footer>
              </blockquote>
            </Reveal>

            <Reveal delay={100}>
              <p className="text-[0.98rem] leading-[1.85] text-ink/85">
                On 8 December 2025 the parish marked its centenary with a
                Thanksgiving Mass — the whole of Galeshewe gathered under one
                roof, in shirts and banners of purple and gold. Even the bottles
                of water set out for the crowd wore the parish emblem: a saint
                bending to bless two children, drawn in a single blue line. That
                line has always been the whole story.
              </p>
              <p className="mt-6 text-[0.98rem] leading-[1.85] text-ink/85">
                Today St Boniface looks to its second century with the same
                quiet confidence it has always had: the doors open, the mosaics
                glowing above the altar, and the welcome as wide as the arms of
                Christ depicted there.
              </p>
            </Reveal>

            {/* Timeline */}
            <div className="mt-14">
              {TIMELINE.map((t, i) => (
                <Reveal key={t.year} delay={i * 100}>
                  <div className="relative flex gap-6 pb-10 last:pb-0">
                    {/* rail */}
                    <div className="flex flex-col items-center">
                      <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-gold bg-cream" />
                      {i < TIMELINE.length - 1 && (
                        <span className="mt-1 w-px flex-1 bg-gradient-to-b from-gold/60 to-gold/10" />
                      )}
                    </div>
                    <div>
                      <p className="font-display text-xl font-semibold italic text-gold">
                        {t.year}
                      </p>
                      <h3 className="mt-1 font-display text-2xl font-semibold text-royal">
                        {t.title}
                      </h3>
                      <p className="mt-2 max-w-lg text-sm leading-relaxed text-stonewarm">
                        {t.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Image collage column */}
          <div className="lg:col-span-5">
            <div className="relative lg:sticky lg:top-28">
              <Reveal>
                <figure>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl shadow-royal/20">
                    <Image
                      src="/images/story-lector.jpg"
                      alt="A parishioner in the St Boniface centenary t-shirt carrying the Book of the Gospels"
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 text-xs tracking-wide text-stonewarm">
                    Centenary Thanksgiving Mass · December 2025
                  </figcaption>
                </figure>
              </Reveal>

              <Reveal delay={150}>
                <div className="relative -mt-16 ml-auto w-3/5 md:-mt-20">
                  <figure className="border-[6px] border-cream shadow-xl shadow-royal/20">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src="/images/story-bottles.jpg"
                        alt="Commemorative centenary water bottles bearing the parish emblem, address and contact details"
                        fill
                        sizes="(min-width: 1024px) 24vw, 60vw"
                        className="object-cover"
                      />
                    </div>
                  </figure>
                  <p className="mt-2 text-right text-xs tracking-wide text-stonewarm">
                    Centenary keepsakes, 1925–2025
                  </p>
                </div>
              </Reveal>

              <Reveal delay={250}>
                <figure className="mt-8 w-2/3 border border-gold/40 bg-cream p-3 shadow-md shadow-royal/10">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src="/images/logo-emblem.jpg"
                      alt="The parish emblem on ochre: St Boniface blessing two children, drawn in a single blue line"
                      fill
                      sizes="(min-width: 1024px) 22vw, 66vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 text-center text-[0.65rem] uppercase tracking-[0.2em] text-stonewarm">
                    The parish emblem
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
