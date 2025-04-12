interface SkillBarProps {
  skill: string;
  percentage: number;
}

export default function SkillBar({ skill, percentage }: SkillBarProps) {
  return (
    <div className="skill-item">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-secondary-700">{skill}</span>
      </div>
      <div className="w-full bg-secondary-200 rounded-full h-2">
        <div className="bg-primary-500 h-2 rounded-full skill-progress" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}
