import { cn } from '../../../../shared/utils/cn.js';

/**
 * Horizontal tab strip above the payments table with optional count
 * badges (e.g. "Vencidos 12").
 * @param {{ tabs: object[], activeTabKey: string, onChange: (key: string) => void }} props
 */
export function TabsBar({ tabs, activeTabKey, onChange }) {
  return (
    <div className="flex flex-wrap items-center gap-1 border-b border-slate-200 px-1 dark:border-slate-800">
      {tabs.map((tab) => {
        const isActive = tab.key === activeTabKey;
        return (
          <button
            key={tab.key}
            onClick={() => onChange(tab.key)}
            className={cn(
              'relative flex items-center gap-1.5 px-3 py-2.5 text-sm font-medium transition-colors',
              isActive
                ? 'text-brand-violet'
                : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
            )}
          >
            {tab.label}
            {tab.count !== undefined && tab.count > 0 ? (
              <span
                className={cn(
                  'flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-[11px] font-bold',
                  tab.key === 'vencidos'
                    ? 'bg-red-100 text-red-600 dark:bg-red-500/15 dark:text-red-400'
                    : 'bg-amber-100 text-amber-600 dark:bg-amber-500/15 dark:text-amber-400'
                )}
              >
                {tab.count}
              </span>
            ) : null}
            <span
              className={cn(
                'absolute inset-x-0 -bottom-px h-0.5 origin-left scale-x-0 rounded-full bg-brand-violet transition-transform duration-200',
                isActive && 'scale-x-100'
              )}
            />
          </button>
        );
      })}
    </div>
  );
}
