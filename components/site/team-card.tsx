import { PlaceholderAvatar } from "@/components/site/placeholder-avatar";
import type { TeamMember } from "@/lib/content/team";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="rounded-lg bg-white p-8 text-center shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift">
      <PlaceholderAvatar
        initials={member.initials}
        size="lg"
        label={`Portrait of ${member.role} — replace before launch`}
        src={member.photo}
      />
      <h3 className="mt-5 text-[18px] font-semibold text-[var(--ink)]">
        {member.name}
      </h3>
      <p className="mt-1 text-[14px] text-[var(--ink-soft)]">{member.role}</p>
      <span className="mt-4 inline-block rounded-full bg-[var(--coral-soft)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--coral-deep)]">
        Placeholder
      </span>
    </div>
  );
}
