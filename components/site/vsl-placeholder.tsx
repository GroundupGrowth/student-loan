import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  caption?: string;
  aspect?: "16-9" | "9-16" | "1-1" | "4-5";
  className?: string;
};

/**
 * VSL (Video Sales Letter) placeholder.
 *
 * Renders a video-player-looking box where a real embed will live. When the
 * embed URL is ready, replace this component with an iframe inside the same
 * aspect-ratio container:
 *
 *   <div className="aspect-video overflow-hidden rounded-lg shadow-card">
 *     <iframe
 *       src="https://www.youtube.com/embed/<VIDEO_ID>"
 *       title="ClearPath intro video"
 *       allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
 *       allowFullScreen
 *       className="h-full w-full"
 *     />
 *   </div>
 */
export function VslPlaceholder({
  caption = "Watch the 90-second intro",
  aspect = "16-9",
  className,
}: Props) {
  const aspectClass =
    aspect === "9-16"
      ? "aspect-[9/16]"
      : aspect === "1-1"
        ? "aspect-square"
        : aspect === "4-5"
          ? "aspect-[4/5]"
          : "aspect-video";

  return (
    <div
      role="img"
      aria-label="Video placeholder — embed will be added later"
      className={cn(
        aspectClass,
        "relative w-full overflow-hidden rounded-lg bg-[var(--ink-deep)] shadow-lift",
        className,
      )}
    >
      {/* Subtle radial vignette */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(130% 90% at 50% 40%, transparent 30%, rgba(0,0,0,0.45) 100%)",
        }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-6 text-center">
        <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[var(--coral)] text-white shadow-[0_10px_30px_rgba(0,0,0,0.45)] md:h-20 md:w-20">
          <Play
            className="ml-[3px] h-7 w-7 fill-white md:h-8 md:w-8"
            strokeWidth={0}
            aria-hidden="true"
          />
        </span>
        <div className="space-y-2">
          <p className="text-[20px] font-semibold leading-tight text-white md:text-[22px]">
            {caption}
          </p>
          <p className="inline-block rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white/80">
            Video — coming soon
          </p>
        </div>
      </div>
    </div>
  );
}
