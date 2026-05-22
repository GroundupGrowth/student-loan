import { cn } from "@/lib/utils";

type Props = {
  initials: string;
  size?: "sm" | "md" | "lg";
  label?: string;
  className?: string;
};

/**
 * Neutral silhouette-style avatar. Renders initials over a flat cream
 * background, deliberately not a stock smiling-faces photo. Replace with a
 * real next/image headshot before launch.
 */
export function PlaceholderAvatar({ initials, size = "md", label, className }: Props) {
  const dim =
    size === "sm" ? "h-9 w-9 text-[12px]" : size === "lg" ? "h-20 w-20 text-[20px]" : "h-12 w-12 text-[14px]";
  return (
    <span
      role="img"
      aria-label={label ?? `Placeholder portrait, initials ${initials}`}
      className={cn(
        dim,
        "inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-[var(--cream)] font-medium text-[var(--navy)]",
        className,
      )}
    >
      {initials}
    </span>
  );
}
