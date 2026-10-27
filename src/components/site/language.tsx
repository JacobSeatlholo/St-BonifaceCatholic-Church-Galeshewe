"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { LANGS, T, type Dict, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "stboniface-lang";

type LanguageContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
};

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  t: T.en,
});

/**
 * Wraps the page; keeps the chosen language in localStorage and
 * updates <html lang> for accessibility. Defaults to English.
 */
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Restore saved preference after mount (avoids hydration mismatch).
  useEffect(() => {
    let cancelled = false;
    // Deferred so the first client render matches the server render.
    const id = window.setTimeout(() => {
      try {
        const saved = window.localStorage.getItem(STORAGE_KEY);
        if (
          !cancelled &&
          (saved === "en" || saved === "tn" || saved === "af")
        ) {
          setLangState(saved);
        }
      } catch {
        /* private mode — ignore */
      }
    }, 0);
    return () => {
      cancelled = true;
      window.clearTimeout(id);
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = T[lang].meta.htmlLang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* private mode — ignore */
    }
  }, []);

  const value = useMemo(() => ({ lang, setLang, t: T[lang] }), [lang, setLang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useT() {
  return useContext(LanguageContext);
}

/**
 * Compact EN / TN / AF segmented control.
 * `tone="light"` for use on dark backgrounds (hero, mobile menu),
 * `tone="dark"` on parchment surfaces.
 */
export function LanguageSwitcher({
  tone = "dark",
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const { lang, setLang, t } = useT();

  return (
    <div
      role="group"
      aria-label={t.meta.switchLabel}
      className={cn(
        "inline-flex items-center overflow-hidden rounded-sm border",
        tone === "light"
          ? "border-cream/25 bg-royal-deep/30"
          : "border-border bg-parchment",
        className
      )}
    >
      {LANGS.map((l) => {
        const active = lang === l.code;
        return (
          <button
            key={l.code}
            type="button"
            onClick={() => setLang(l.code)}
            aria-pressed={active}
            title={l.native}
            className={cn(
              "px-2.5 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] transition-colors",
              tone === "light"
                ? active
                  ? "bg-gold text-royal-deep"
                  : "text-cream/70 hover:text-gold-bright"
                : active
                  ? "bg-royal text-parchment"
                  : "text-stonewarm hover:text-royal"
            )}
          >
            {l.short}
          </button>
        );
      })}
    </div>
  );
}
