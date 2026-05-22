import { cn } from "@/lib/utils";

type Props = {
  /** What this image will eventually be — guides the future replacement. */
  label: string;
  /** Optional aspect class, defaults to 4/5 portrait for hero, 16/9 for general. */
  aspect?: "portrait" | "landscape" | "square";
  className?: string;
};

/**
 * Inline image placeholder. Renders a neutral box with the label visibly
 * embedded so it's impossible to ship by accident. Replace each call site
 * with a <Image src="/real-photo.jpg" ... /> before launch.
 */
export function PlaceholderImage({ label, aspect = "landscape", className }: Props) {
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
      {/* Subtle diagonal pattern so the placeholder is obviously not a finished asset */}
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
    </div>
  );
}
