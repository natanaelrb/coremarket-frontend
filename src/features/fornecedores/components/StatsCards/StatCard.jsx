export default function StatCard({
  icon: Icon,
  iconBg,
  iconColor,
  label,
  value,
  caption,
  captionColor = 'text-gray-400 dark:text-gray-500',
  delayIndex = 0,
}) {
  return (
    <div
      className={`card-hover animate-fade-in-up stagger-${Math.min(delayIndex + 1, 6)} rounded-xl border border-gray-100 bg-white p-4 shadow-sm dark:border-[#1c2044] dark:bg-[#141833]`}
    >
      <div className="flex items-center gap-3">
        <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${iconBg}`}>
          <Icon size={19} className={iconColor} />
        </div>
        <div className="min-w-0">
          <p className="truncate text-xs text-gray-500 dark:text-gray-400">{label}</p>
          <p className="text-xl font-bold leading-tight text-gray-900 dark:text-white">{value}</p>
        </div>
      </div>
      <p className={`mt-2 text-xs ${captionColor}`}>{caption}</p>
    </div>
  )
}
