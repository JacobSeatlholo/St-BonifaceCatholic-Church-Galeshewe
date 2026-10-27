"use client";

import Image from "next/image";
import { Reveal } from "./reveal";
import { useT } from "./language";

/** Full-bleed band showing the mosaics above the parish altar. */
export function MosaicBand() {
  const { t } = useT();
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-64 w-full md:h-96">
        <Image
          src="/images/mosaic-banner.jpg"
          alt={t.mosaic.alt}
          fill
          sizes="100vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-royal-deep/70 via-transparent to-royal-deep/70" />
        <Reveal className="absolute inset-0 flex items-center justify-center px-6">
          <p className="max-w-2xl text-center font-display text-2xl font-medium italic leading-snug text-cream md:text-4xl">
            {t.mosaic.quote}
          </p>
        </Reveal>
        <p className="absolute bottom-5 left-1/2 w-full -translate-x-1/2 text-center text-[0.65rem] uppercase tracking-[0.24em] text-cream/70">
          {t.mosaic.caption}
        </p>
      </div>
    </section>
  );
}
