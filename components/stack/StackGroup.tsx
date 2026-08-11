import type { SkillGroup } from "@/types";
import SkillBadge from "@/components/ui/SkillBadge";

export default function StackGroup({ group }: { group: SkillGroup }) {
  return (
    <div>
      <h3 className="font-mono text-sm text-muted">
        <span className="text-accent">## </span>
        {group.category}
      </h3>
      <ul className="mt-3 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <li key={skill}>
            <SkillBadge>{skill}</SkillBadge>
          </li>
        ))}
      </ul>
    </div>
  );
}
