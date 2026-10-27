import { Reveal } from "./reveal";
import { Ornament } from "./ornament";

const FACTS = [
  { when: "c. 675", what: "Born Wynfrith, in Devon, England" },
  { when: "716", what: "Leaves England as a missionary to the Germanic peoples" },
  { when: "754", what: "Martyred at Dokkum, Frisia" },
  { when: "5 June", what: "Feast day — patron of Germany" },
];

export function Patron() {
  return (
    <section className="grain bg-royal-deep text-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-3xl">
          <Reveal className="text-center">
            <Ornament tone="dark" />
            <p className="eyebrow mt-6 text-gold-bright">Our patron</p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-cream md:text-5xl">
              St Boniface, bishop &amp; martyr
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-9 space-y-6 text-[0.95rem] leading-[1.85] text-cream/75 md:text-base">
              <p>
                Born Wynfrith in Devon around the year 675, Boniface left
                everything to preach the Gospel among the Germanic peoples. A
                Benedictine monk, bishop and reformer, he became known as the
                <span className="text-cream"> Apostle of the Germans</span> —
                and for the night at Fritzlar when, armed only with an axe, he
                felled the sacred oak of Thor and built a chapel from its
                timber.
              </p>
              <p>
                He died a martyr at Dokkum in 754, and the Church honours him on
                5 June. Every Catholic of this parish inherits his example: a
                faith planted deep enough to fell giants, and humble enough to
                stoop and bless children. It is why our emblem shows the bishop
                bowing towards the smallest ones — the strong protecting, the
                little ones welcomed.
              </p>
            </div>
          </Reveal>

          {/* Patron facts */}
          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-cream/15 bg-cream/15 md:grid-cols-4">
            {FACTS.map((f, i) => (
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
