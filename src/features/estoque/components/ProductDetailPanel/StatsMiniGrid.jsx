import { cn } from '../../../../shared/utils/classNames.js'

const TONE_STYLES = {
  success: {
    wrapper:
      'border-emerald-100 bg-emerald-50/70 dark:border-emerald-500/15 dark:bg-emerald-500/5',
    icon: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400',
    value: 'text-emerald-700 dark:text-emerald-400',
    indicator: 'bg-emerald-500',
  },

  warning: {
    wrapper:
      'border-amber-100 bg-amber-50/70 dark:border-amber-500/15 dark:bg-amber-500/5',
    icon: 'bg-amber-100 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400',
    value: 'text-amber-700 dark:text-amber-400',
    indicator: 'bg-amber-500',
  },

  danger: {
    wrapper:
      'border-rose-100 bg-rose-50/70 dark:border-rose-500/15 dark:bg-rose-500/5',
    icon: 'bg-rose-100 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400',
    value: 'text-rose-700 dark:text-rose-400',
    indicator: 'bg-rose-500',
  },

  info: {
    wrapper:
      'border-sky-100 bg-sky-50/70 dark:border-sky-500/15 dark:bg-sky-500/5',
    icon: 'bg-sky-100 text-sky-600 dark:bg-sky-500/10 dark:text-sky-400',
    value: 'text-sky-700 dark:text-sky-400',
    indicator: 'bg-sky-500',
  },

  accent: {
    wrapper:
      'border-emerald-100 bg-emerald-50/70 dark:border-emerald-500/15 dark:bg-emerald-500/5',
    icon: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400',
    value: 'text-emerald-700 dark:text-emerald-400',
    indicator: 'bg-emerald-500',
  },

  neutral: {
    wrapper:
      'border-gray-100 bg-gray-50 dark:border-white/10 dark:bg-white/[0.03]',
    icon: 'bg-gray-100 text-gray-500 dark:bg-white/5 dark:text-gray-400',
    value: 'text-gray-900 dark:text-white',
    indicator: 'bg-gray-400',
  },
}

export default function StatsMiniGrid({ items = [], columns = 2 }) {
  return (
    <div
      className="mt-3 grid gap-3 px-5 pb-5"
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      }}
    >
      {items.map((item, index) => {
        const tone = TONE_STYLES[item.tone] ?? TONE_STYLES.neutral

        return (
          <div
            key={item.label}
            className={cn(
              `
                group
                relative
                overflow-hidden
                rounded-xl
                border
                p-3.5
                transition-all
                duration-200
                ease-out
                hover:-translate-y-0.5
                hover:shadow-sm
                animate-slide-up
              `,
              tone.wrapper,
            )}
            style={{
              animationDelay: `${index * 50}ms`,
            }}
          >
            {/* Indicador lateral */}
            <span
              className={cn(
                'absolute inset-y-0 left-0 w-0.5 opacity-80',
                tone.indicator,
              )}
            />

            <div className="flex items-start justify-between gap-2">
              <p className="min-w-0 text-[10px] font-semibold uppercase leading-4 tracking-[0.05em] text-gray-500 dark:text-gray-400">
                {item.label}
              </p>

              {item.icon && (
                <div
                  className={cn(
                    `
                      flex h-7 w-7 shrink-0
                      items-center justify-center
                      rounded-lg
                      transition-transform
                      duration-200
                      group-hover:scale-105
                    `,
                    tone.icon,
                  )}
                >
                  <item.icon size={14} strokeWidth={2.1} />
                </div>
              )}
            </div>

            <p
              className={cn(
                'mt-2 truncate text-base font-bold tracking-tight',
                tone.value,
              )}
            >
              {item.value}
            </p>

            {item.helper && (
              <p className="mt-1 truncate text-[10px] text-gray-400 dark:text-gray-500">
                {item.helper}
              </p>
            )}
          </div>
        )
      })}
    </div>
  )
}