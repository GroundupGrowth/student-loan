import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  /** Caption shown under the play button. */
  caption?: string;
  /** Aspect ratio. 16/9 is the default and fits YouTube / Vimeo / Wistia. */
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
 *   <div className="aspect-video overflow-hidden rounded-xl border border-[var(--line)]">
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
        "relative w-full overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--navy)] shadow-[0_18px_40px_-22px_rgba(15,42,68,0.55)]",
        className,
      )}
    >
      {/* Subtle texture so the placeholder reads as intentional */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent 0 14px, rgba(255,255,255,0.05) 14px 28px)",
        }}
      />
      {/* Vignette */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 40%, transparent 30%, rgba(0,0,0,0.35) 100%)",
        }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-6 text-center">
        <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-[var(--navy)] shadow-[0_10px_30px_rgba(0,0,0,0.35)] md:h-20 md:w-20">
          {/* The lucide Play glyph is left-heavy; pad it 2px so it looks centered */}
          <Play
            className="ml-[3px] h-7 w-7 fill-[var(--navy)] md:h-8 md:w-8"
            strokeWidth={0}
            aria-hidden="true"
          />
        </span>
        <div className="space-y-2">
          <p className="font-serif text-[20px] leading-tight text-white md:text-[22px]">
            {caption}
          </p>
          <p className="text-[11px] uppercase tracking-[0.22em] text-white/60">
            Video embed — coming soon
          </p>
        </div>
      </div>
    </div>
  );
}
