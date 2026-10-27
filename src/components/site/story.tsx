"use client";

import Image from "next/image";
import { Reveal } from "./reveal";
import { useT } from "./language";

export function Story() {
  const { t } = useT();
  const { story } = t;

  return (
    <section id="story" className="grain scroll-mt-20 bg-parchment">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Text column */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow text-gold">{story.eyebrow}</p>
              <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-tight text-royal md:text-5xl">
                {story.title}
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <p className="dropcap mt-8 text-[0.98rem] leading-[1.85] text-ink/85">
                {story.p1}
              </p>
              <p className="mt-6 text-[0.98rem] leading-[1.85] text-ink/85">
                {story.p2}
              </p>
            </Reveal>

            <Reveal delay={180}>
              <blockquote className="my-10 border-l-2 border-gold pl-6 md:pl-8">
                <p className="font-display text-2xl font-medium italic leading-snug text-royal md:text-[1.7rem]">
                  {story.quote}
                </p>
                <footer className="mt-3 text-xs uppercase tracking-[0.18em] text-stonewarm">
                  — {story.quoteAttr}
                </footer>
              </blockquote>
            </Reveal>

            <Reveal delay={100}>
              <p className="text-[0.98rem] leading-[1.85] text-ink/85">
                {story.p3}
              </p>
              <p className="mt-6 text-[0.98rem] leading-[1.85] text-ink/85">
                {story.p4}
              </p>
            </Reveal>

            {/* Timeline */}
            <div className="mt-14">
              {story.timeline.map((item, i) => (
                <Reveal key={item.year} delay={i * 100}>
                  <div className="relative flex gap-6 pb-10 last:pb-0">
                    {/* rail */}
                    <div className="flex flex-col items-center">
                      <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-gold bg-cream" />
                      {i < story.timeline.length - 1 && (
                        <span className="mt-1 w-px flex-1 bg-gradient-to-b from-gold/60 to-gold/10" />
                      )}
                    </div>
                    <div>
                      <p className="font-display text-xl font-semibold italic text-gold">
                        {item.year}
                      </p>
                      <h3 className="mt-1 font-display text-2xl font-semibold text-royal">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-lg text-sm leading-relaxed text-stonewarm">
                        {item.body}
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
                      alt={story.altLector}
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 text-xs tracking-wide text-stonewarm">
                    {story.cap1}
                  </figcaption>
                </figure>
              </Reveal>

              <Reveal delay={150}>
                <div className="relative -mt-16 ml-auto w-3/5 md:-mt-20">
                  <figure className="border-[6px] border-cream shadow-xl shadow-royal/20">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src="/images/story-bottles.jpg"
                        alt={story.altBottles}
                        fill
                        sizes="(min-width: 1024px) 24vw, 60vw"
                        className="object-cover"
                      />
                    </div>
                  </figure>
                  <p className="mt-2 text-right text-xs tracking-wide text-stonewarm">
                    {story.cap2}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={250}>
                <figure className="mt-8 w-2/3 border border-gold/40 bg-cream p-3 shadow-md shadow-royal/10">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src="/images/logo-emblem.jpg"
                      alt={story.altEmblem}
                      fill
                      sizes="(min-width: 1024px) 22vw, 66vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 text-center text-[0.65rem] uppercase tracking-[0.2em] text-stonewarm">
                    {story.cap3}
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
