import { Cross } from "lucide-react";
import { cn } from "@/lib/utils";

/** Gold hairline ornament with a small cross — section divider. */
export function Ornament({
  tone = "light",
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-4",
        className
      )}
      aria-hidden="true"
    >
      <span
        className={cn(
          "h-px w-14",
          tone === "light"
            ? "bg-gradient-to-r from-transparent to-gold/60"
            : "bg-gradient-to-r from-transparent to-gold-bright/60"
        )}
      />
      <Cross
        className={cn(
          "h-3.5 w-3.5",
          tone === "light" ? "text-gold" : "text-gold-bright"
        )}
        strokeWidth={1.75}
      />
      <span
        className={cn(
          "h-px w-14",
          tone === "light"
            ? "bg-gradient-to-l from-transparent to-gold/60"
            : "bg-gradient-to-l from-transparent to-gold-bright/60"
        )}
      />
    </div>
  );
}
