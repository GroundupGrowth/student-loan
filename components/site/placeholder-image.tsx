import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  /** What this image will eventually be — guides the future replacement. */
  label: string;
  /** Optional aspect class, defaults to landscape. */
  aspect?: "portrait" | "landscape" | "square";
  /**
   * Optional remote image URL. When provided, the component renders that
   * image inside the same aspect-ratio frame. When omitted, it renders the
   * labeled placeholder box so missing assets are impossible to miss.
   */
  src?: string;
  /** Set true on hero / above-the-fold images for priority loading. */
  priority?: boolean;
  className?: string;
};

/**
 * Image slot. Two modes:
 * - With `src`: renders a next/image with a subtle desaturation filter to
 *   match the brief's warm/desaturated tone.
 * - Without `src`: renders a labeled placeholder so the slot is obvious in
 *   QA and impossible to ship by accident.
 */
export function PlaceholderImage({ label, aspect = "landscape", src, priority, className }: Props) {
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
        "relative w-full overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--cream)]",
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
          className="object-cover [filter:saturate(0.88)_brightness(0.98)]"
        />
      ) : (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent 0 14px, rgba(15,42,68,0.04) 14px 28px)",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <p className="max-w-[80%] text-center text-[13px] uppercase tracking-[0.18em] text-[var(--slate)]">
              PLACEHOLDER
              <span className="mt-2 block normal-case tracking-normal text-[14px] font-medium text-[var(--navy)]">
                {label}
              </span>
            </p>
          </div>
        </>
      )}
    </div>
  );
}
