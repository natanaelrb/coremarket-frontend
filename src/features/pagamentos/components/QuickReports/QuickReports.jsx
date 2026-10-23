import { FileBarChart2, ArrowUpRight } from 'lucide-react';

import { QUICK_REPORTS_CONFIG } from '../../constants/quickReportsConfig.js';

export function QuickReports({ onSelect }) {
  return (
    <section aria-labelledby="quick-reports-title" className="min-w-0 space-y-4">
      <header className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-green-100 bg-green-50 text-green-600 dark:border-green-900/40 dark:bg-green-500/10 dark:text-green-400">
          <FileBarChart2 className="h-5 w-5" />
        </div>

        <div>
          <h2
            id="quick-reports-title"
            className="text-base font-bold text-slate-800 dark:text-slate-100"
          >
            Relatórios rápidos
          </h2>

          <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
            Acesse rapidamente os principais relatórios financeiros.
          </p>
        </div>
      </header>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
        {QUICK_REPORTS_CONFIG.map((report, index) => {
          const Icon = report.icon;

          return (
            <button
              key={report.id}
              type="button"
              onClick={() => onSelect?.(report.id)}
              aria-label={`Abrir relatório: ${report.label}`}
              className="
                card-surface group relative flex min-h-[132px] min-w-0
                flex-col items-start justify-between gap-4 overflow-hidden
                rounded-[var(--radius-card)] border border-slate-200/70
                p-4 text-left shadow-sm
                transition-all duration-200
                hover:-translate-y-0.5 hover:border-green-200 hover:shadow-md
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-green-500 focus-visible:ring-offset-2
                active:scale-[0.98]
                dark:border-slate-800 dark:hover:border-green-800
                dark:focus-visible:ring-offset-slate-950
                animate-slide-up
              "
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex w-full items-start justify-between gap-2">
                <span
                  className="
                    flex h-11 w-11 shrink-0 items-center justify-center
                    rounded-xl border border-green-100 bg-green-50
                    text-green-700 transition-colors duration-200
                    group-hover:border-green-600 group-hover:bg-green-600
                    group-hover:text-white
                    dark:border-green-900/40 dark:bg-green-500/10
                    dark:text-green-400 dark:group-hover:border-green-600
                    dark:group-hover:bg-green-600 dark:group-hover:text-white
                  "
                >
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </span>

                <ArrowUpRight
                  aria-hidden="true"
                  className="
                    h-4 w-4 shrink-0 text-slate-400 opacity-0
                    transition-all duration-200
                    group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                    group-hover:opacity-100
                    group-focus-visible:opacity-100
                  "
                />
              </div>

              <span className="text-sm font-semibold leading-5 text-slate-700 transition-colors group-hover:text-green-700 dark:text-slate-200 dark:group-hover:text-green-400">
                {report.label}
              </span>

              <span
                aria-hidden="true"
                className="
                  absolute inset-x-0 bottom-0 h-0.5 origin-left
                  scale-x-0 bg-green-500 transition-transform duration-200
                  group-hover:scale-x-100
                "
              />
            </button>
          );
        })}
      </div>
    </section>
  );
}