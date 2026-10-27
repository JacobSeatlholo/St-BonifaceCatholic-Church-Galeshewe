"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { Reveal } from "./reveal";
import { GALLERY } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? null : (i - 1 + GALLERY.length) % GALLERY.length)),
    []
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? null : (i + 1) % GALLERY.length)),
    []
  );

  useEffect(() => {
    if (index === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, prev, next]);

  return (
    <section id="gallery" className="grain scroll-mt-20 bg-parchment-deep">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold">Moments</p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-royal md:text-5xl">
            The parish in pictures
          </h2>
          <p className="mt-5 text-[0.95rem] leading-relaxed text-stonewarm">
            Photographs from the life of St Boniface — most of them from the
            centenary Thanksgiving Mass on 8 December 2025.
          </p>
        </Reveal>

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {GALLERY.map((g, i) => (
            <Reveal key={g.src} delay={(i % 3) * 100} className="mb-5 break-inside-avoid">
              <figure>
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  className="group relative block w-full overflow-hidden rounded-sm shadow-md shadow-royal/10 focus-visible:outline-2 focus-visible:outline-gold"
                  aria-label={`View photo: ${g.caption}`}
                >
                  <div className={cn("relative w-full", i % 3 === 1 ? "aspect-square" : "aspect-[4/5]")}>
                    <Image
                      src={g.src}
                      alt={g.alt}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-deep/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-cream/90 text-royal opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <Expand className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                </button>
                <figcaption className="mt-3 text-center text-xs leading-relaxed tracking-wide text-stonewarm">
                  {g.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {index !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-royal-deep/95 p-4 backdrop-blur-sm md:p-10"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:bg-cream/10"
            aria-label="Close photo viewer"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:bg-cream/10 md:left-6"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-6 w-6" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:bg-cream/10 md:right-6"
            aria-label="Next photo"
          >
            <ChevronRight className="h-6 w-6" strokeWidth={1.5} />
          </button>

          <figure
            className="flex max-h-full flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="relative overflow-hidden rounded-sm shadow-2xl shadow-black/50"
              style={{ height: "min(74vh, 90vw)", width: "min(74vh, 90vw)" }}
            >
              <Image
                src={GALLERY[index].src}
                alt={GALLERY[index].alt}
                fill
                sizes="(min-width: 768px) 76vh, 90vw"
                className="object-contain"
              />
            </div>
            <figcaption className="mt-4 max-w-xl text-center text-sm tracking-wide text-cream/80">
              {GALLERY[index].caption}
            </figcaption>
            <p className="mt-1 text-[0.65rem] uppercase tracking-[0.24em] text-cream/40">
              {index + 1} / {GALLERY.length}
            </p>
          </figure>
        </div>
      )}
    </section>
  );
}
