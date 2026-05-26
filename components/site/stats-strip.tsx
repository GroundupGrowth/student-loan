import { STATS } from "@/lib/config";

const items = [
  { number: STATS.yearsExperience, label: "Years Experience" },
  { number: STATS.clientsServed, label: "Clients Served" },
  { number: STATS.casesCompleted, label: "Cases Completed" },
  { number: STATS.averageRating, label: "Average Rating" },
];

export function StatsStrip() {
  return (
    <section className="bg-[var(--ink-deep)] text-white">
      <div className="container max-w-content py-16 md:py-24">
        <ul className="grid grid-cols-2 gap-y-10 gap-x-6 text-center md:grid-cols-4">
          {items.map((item) => (
            <li key={item.label}>
              <p className="text-[clamp(2.75rem,6vw,4.25rem)] font-extrabold leading-none tracking-tight text-white">
                {item.number}
              </p>
              <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/60">
                {item.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
