export default function StatCard({
  icon: Icon,
  iconBg = "bg-emerald-50 dark:bg-emerald-500/10",
  iconColor = "text-emerald-600 dark:text-emerald-400",
  label,
  value,
  caption,
  captionColor = "text-gray-500 dark:text-gray-400",
  delayIndex = 0,
}) {
  return (
    <div
      className={`
        card-hover
        animate-fade-in-up
        stagger-${Math.min(delayIndex + 1, 6)}
        rounded-xl
        border border-gray-200/70
        bg-white
        p-4
        shadow-sm
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:shadow-md
        dark:border-white/[0.06]
        dark:bg-[#141a1f]
      `}
    >
      <div className="flex items-center gap-3">
        {/* Ícone */}
        <div
          className={`
            flex h-10 w-10 shrink-0 items-center justify-center
            rounded-lg
            ${iconBg}
          `}
        >
          <Icon size={19} strokeWidth={2} className={iconColor} />
        </div>

        {/* Informações */}
        <div className="min-w-0 flex-1">
          <p className="mb-0.5 truncate text-xs font-bold text-gray-500 dark:text-gray-400">
            {label}
          </p>

          <p className="truncate text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
            {value}
          </p>
        </div>
      </div>

      {/* Legenda */}
      {caption && (
        <p
          className={`
            mt-2.5 truncate
            text-xs
            font-medium
            ${captionColor}
          `}
        >
          {caption}
        </p>
      )}
    </div>
  );
}
