import { cn } from '../../../../shared/utils/cn.js';

/**
 * Horizontal tab strip above the payments table.
 * Includes optional count badges for overdue and reconciliation tabs.
 */
export function TabsBar({ tabs, activeTabKey, onChange }) {
  return (
    <div
      className="
        mx-[-8px]
        flex
        gap-1
        overflow-x-auto
        border-b
        border-slate-200
        dark:border-white/10
        sm:mx-[-12px]
      "
      role="tablist"
      aria-label="Categorias de pagamentos"
    >
      {tabs.map((tab) => {
        const isActive = tab.key === activeTabKey;

        return (
          <button
            key={tab.key}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.key)}
            className={cn(
              `
                relative
                -mb-px
                inline-flex
                shrink-0
                items-center
                gap-2
                whitespace-nowrap
                border-b-2
                px-4
                py-2.5
                text-sm
                font-medium
                transition-all
                duration-200
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-green-500/40
              `,
              isActive
                ? `
                    border-[#22c55e]
                    text-[#16a34a]
                    dark:border-[#4ade80]
                    dark:text-[#4ade80]
                  `
                : `
                    border-transparent
                    text-[#64748b]
                    hover:border-[#bbf7d0]
                    hover:text-[#16a34a]
                    dark:text-slate-400
                    dark:hover:border-green-900
                    dark:hover:text-[#4ade80]
                  `
            )}
          >
            <span>{tab.label}</span>

            {tab.count !== undefined && tab.count > 0 && (
              <span
                className={cn(
                  'inline-flex min-w-5 items-center justify-center',
                  'rounded-full px-1.5 py-0.5 text-[10px] font-bold',
                  'leading-none tabular-nums',
                  tab.key === 'vencidos'
                    ? `
                        bg-red-100
                        text-red-600
                        dark:bg-red-500/15
                        dark:text-red-400
                      `
                    : `
                        bg-amber-100
                        text-amber-600
                        dark:bg-amber-500/15
                        dark:text-amber-400
                      `
                )}
              >
                {tab.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
