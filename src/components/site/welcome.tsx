import { Reveal } from "./reveal";
import { Ornament } from "./ornament";

const FACTS = [
  {
    figure: "1925",
    label: "Founded",
    body: "The year the parish was planted, within living memory of the diamond rush that built Kimberley.",
  },
  {
    figure: "100",
    label: "Years of faith",
    body: "A century of worship, resilience and service in the heart of Galeshewe.",
  },
  {
    figure: "08.12.25",
    label: "The centenary",
    body: "A Thanksgiving Mass celebrated by the whole community, one hundred years to the day.",
  },
];

export function Welcome() {
  return (
    <section className="grain bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Ornament />
          <p className="eyebrow mt-6 text-gold">Dumelang · A warm welcome</p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-royal md:text-5xl">
            Welcome home.
          </h2>
          <p className="mt-6 text-[0.95rem] leading-relaxed text-stonewarm md:text-base">
            Whether this is your first visit or your family has knelt here for
            four generations, you belong. St Boniface is a living parish — a
            place where the Word is proclaimed, the sacraments are celebrated,
            and no one walks through the door a stranger.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-6 md:mt-16">
          {FACTS.map((f, i) => (
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
