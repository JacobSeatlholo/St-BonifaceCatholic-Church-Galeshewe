import { Reveal } from "./reveal";
import { MINISTRIES } from "@/lib/site";

export function Community() {
  return (
    <section id="community" className="grain scroll-mt-20 bg-parchment">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold">Parish life</p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-royal md:text-5xl">
            A parish of many hands
          </h2>
          <p className="mt-5 text-[0.95rem] leading-relaxed text-stonewarm">
            The Mass is the source and summit of everything we do — and around
            the altar, the parish hums with the work of many hands. There is a
            place for yours.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MINISTRIES.map((m, i) => (
            <Reveal key={m.title} delay={(i % 3) * 110}>
              <article className="group h-full rounded-sm border border-border bg-cream p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg hover:shadow-royal/10">
                <p className="font-display text-3xl font-medium italic text-gold/60 transition-colors group-hover:text-gold">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-display text-2xl font-semibold text-royal">
                  {m.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stonewarm">
                  {m.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mx-auto mt-10 max-w-xl text-center text-xs leading-relaxed text-stonewarm">
            Groups meet through the week; meeting times are arranged through the
            parish office. New members are always welcome.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
