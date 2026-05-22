import { STATS } from "@/lib/config";

const items = [
  { number: STATS.yearsExperience, label: "Years Experience" },
  { number: STATS.clientsServed, label: "Clients Served" },
  { number: STATS.casesCompleted, label: "Cases Completed" },
  { number: STATS.averageRating, label: "Average Rating" },
];

export function StatsStrip() {
  return (
    <section className="surface-navy">
      <div className="container max-w-content py-14 md:py-20">
        <ul className="grid grid-cols-2 gap-y-10 gap-x-6 text-center md:grid-cols-4">
          {items.map((item) => (
            <li key={item.label}>
              <p className="font-serif text-[clamp(2.5rem,5vw,3.75rem)] font-semibold leading-none text-white">
                {item.number}
              </p>
              <p className="mt-3 text-[13px] uppercase tracking-[0.18em] text-white/70">
                {item.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
