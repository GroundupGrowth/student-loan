import { PlaceholderAvatar } from "@/components/site/placeholder-avatar";
import type { TeamMember } from "@/lib/content/team";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="card-base flex flex-col items-center p-7 text-center">
      <PlaceholderAvatar
        initials={member.initials}
        size="lg"
        label={`Portrait of ${member.role} — replace before launch`}
        src={member.photo}
      />
      <h3 className="mt-4 font-serif text-[18px] text-[var(--navy)]">
        {member.name}
      </h3>
      <p className="mt-1 text-[14px] text-[var(--slate)]">{member.role}</p>
      <span className="mt-3 inline-block rounded-md border border-dashed border-[var(--gold)]/50 bg-[var(--cream)] px-2 py-1 text-[11px] uppercase tracking-[0.16em] text-[var(--slate)]">
        Placeholder — replace before launch
      </span>
    </div>
  );
}
