interface SkillBadgeProps {
  name: string
}

export function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <div className="rounded-full bg-gray-300 px-3 py-1 text-sm font-medium text-gray-600 transition dark:bg-gray-700 dark:text-gray-300">
      {name}
    </div>
  )
}
