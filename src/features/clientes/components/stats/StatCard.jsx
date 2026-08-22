import Sparkline from "../../../../shared/components/data-display/Sparkline";

export default function StatCard({
  icon: Icon,
  iconBg,
  iconColor,
  label,
  value,
  sub,
  spark,
  sparkColor,
  delay = 0,
}) {
  return (
    <div
      className="
     transition-all
     duration-300
     ease-out
     
     hover:-translate-y-1
     hover:shadow-lg
     hover:scale-[1.01]

     
     hover:shadow-xl
     hover:shadow-violet-900/10

     hover:border-violet-400/40

        rounded-2xl
        hover:border-violet-300
        border
        border-slate-200
        dark:border-white/10
        bg-white
        dark:bg-white dark:bg-[#12162C]
        p-6
        dark:hover:border-violet-500/40
        "
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-3">
        <div
          className="w-12
              h-12
              rounded-full
              flex
              items-center
              justify-center
              shrink-0

              shadow-sm"
          style={{ backgroundColor: iconBg }}
        >
          <Icon size={22} style={{ color: iconColor }} />
        </div>
        <div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-300">
            {label}
          </p>
          <p className="text-[32px] leading-none font-bold tracking-tight text-slate-900 dark:text-[var(--sidebar-text)] mt-1 tabular-nums">
            {value}
          </p>
          <p className="mt-2 text-sm font-medium text-emerald-500">↑ {sub}</p>
        </div>
      </div>
      <div className="mt-0 flex justify-end">
        <Sparkline data={spark} color={sparkColor} />
      </div>
    </div>
  );
}
