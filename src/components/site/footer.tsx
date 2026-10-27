import Image from "next/image";
import Link from "next/link";
import { PARISH } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="grain mt-auto bg-royal-deep text-cream">
      <div className="mx-auto max-w-6xl px-5 pb-10 pt-16 md:px-8 md:pt-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-4">
              <div className="rounded-sm bg-cream p-1.5 shadow-md">
                <Image
                  src="/images/logo-light.jpg"
                  alt="St Boniface Parish Kimberley emblem"
                  width={64}
                  height={50}
                  className="h-11 w-auto"
                />
              </div>
              <div>
                <p className="font-display text-xl font-semibold">
                  St Boniface Catholic Church
                </p>
                <p className="text-[0.65rem] uppercase tracking-[0.22em] text-cream/60">
                  Galeshewe · Kimberley · Est. 1925
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/65">
              A hundred years of grace — and a second century begun. Whatever
              brings you to Galeshewe, you will find a chair saved and a candle
              lit.
            </p>
          </div>

          {/* Explore */}
          <div className="md:col-span-3">
            <p className="eyebrow text-gold-bright">Explore</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              {[
                ["#story", "Our story"],
                ["#worship", "Mass times & sacraments"],
                ["#centenary", "The centenary"],
                ["#community", "Parish life"],
                ["#gallery", "Gallery"],
                ["#visit", "Find us"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-cream/70 transition-colors hover:text-gold-bright"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="eyebrow text-gold-bright">Contact</p>
            <ul className="mt-5 space-y-2.5 text-sm text-cream/70">
              <li>{PARISH.address.line1}</li>
              <li>{PARISH.address.line2}, {PARISH.address.city}</li>
              <li>{PARISH.address.postal}</li>
              <li>
                <a href={PARISH.phoneHref} className="transition-colors hover:text-gold-bright">
                  {PARISH.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PARISH.email}`}
                  className="transition-colors hover:text-gold-bright"
                >
                  {PARISH.email}
                </a>
              </li>
              <li>{PARISH.officeHours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/12 pt-7 text-[0.72rem] tracking-wide text-cream/50 md:flex-row">
          <p>
            © {year} {PARISH.name}, Galeshewe. A parish of the {PARISH.diocese}.
          </p>
          <p className="font-display text-sm italic text-gold-bright/90">
            1925 – 2025 · A hundred years of grace
          </p>
        </div>
      </div>
    </footer>
  );
}
