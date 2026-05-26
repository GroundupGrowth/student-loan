import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  label: string;
  aspect?: "portrait" | "landscape" | "square";
  src?: string;
  priority?: boolean;
  className?: string;
};

/**
 * Image slot. Two modes:
 * - With `src`: renders a next/image with a subtle desaturation filter.
 * - Without `src`: renders a labeled placeholder so the slot is obvious.
 */
export function PlaceholderImage({
  label,
  aspect = "landscape",
  src,
  priority,
  className,
}: Props) {
  const ratio =
    aspect === "portrait"
      ? "aspect-[4/5]"
      : aspect === "square"
        ? "aspect-square"
        : "aspect-[16/10]";

  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        ratio,
        "relative w-full overflow-hidden rounded-lg bg-[var(--surface-deep)] shadow-card",
        className,
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={label}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover [filter:saturate(0.92)_brightness(0.99)]"
        />
      ) : (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent 0 14px, rgba(27,27,31,0.04) 14px 28px)",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <p className="max-w-[80%] text-center text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--ink-soft)]">
              PLACEHOLDER
              <span className="mt-2 block text-[14px] font-medium tracking-normal text-[var(--ink)]">
                {label}
              </span>
            </p>
          </div>
        </>
      )}
    </div>
  );
}
