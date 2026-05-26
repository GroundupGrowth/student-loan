import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  initials: string;
  size?: "sm" | "md" | "lg";
  label?: string;
  /**
   * Optional remote image URL. When provided, renders a circular photo;
   * otherwise renders the initials silhouette.
   */
  src?: string;
  className?: string;
};

/**
 * Avatar slot. With `src`, renders a circular photo; without, renders the
 * neutral initials silhouette (used for trust-bar client avatars and any
 * deliberately-anonymous placeholder).
 */
export function PlaceholderAvatar({ initials, size = "md", label, src, className }: Props) {
  const dim =
    size === "sm"
      ? "h-9 w-9 text-[12px]"
      : size === "lg"
        ? "h-20 w-20 text-[20px]"
        : "h-12 w-12 text-[14px]";

  if (src) {
    const sizePx = size === "sm" ? 36 : size === "lg" ? 80 : 48;
    return (
      <span
        className={cn(
          dim,
          "relative inline-block overflow-hidden rounded-full border border-[var(--line)] bg-[var(--cream)]",
          className,
        )}
      >
        <Image
          src={src}
          alt={label ?? "Team member portrait"}
          width={sizePx}
          height={sizePx}
          className="h-full w-full object-cover [filter:saturate(0.9)]"
        />
      </span>
    );
  }

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
