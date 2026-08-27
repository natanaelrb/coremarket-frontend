import { QUICK_REPORTS_CONFIG } from '../../constants/quickReportsConfig.js';

/**
 * "Relatórios rápidos" tile grid at the bottom of the page.
 * @param {{ onSelect: (id: string) => void }} props
 */
export function QuickReports({ onSelect }) {
  return (
    <div>
      <h2 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-200">Relatórios rápidos</h2>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
        {QUICK_REPORTS_CONFIG.map((report, index) => {
          const Icon = report.icon;
          return (
            <button
              key={report.id}
              onClick={() => onSelect?.(report.id)}
              className="card-surface animate-slide-up group flex flex-col items-center gap-2 rounded-[var(--radius-card)] p-4 text-center transition-transform hover:-translate-y-0.5 active:scale-[0.97]"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-brand-violet transition-colors group-hover:bg-brand-violet group-hover:text-white dark:bg-violet-500/15">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-xs font-medium text-slate-600 dark:text-slate-300">{report.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
