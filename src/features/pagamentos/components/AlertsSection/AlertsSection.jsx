import { BellRing, ShieldCheck } from 'lucide-react';

import { AlertCard } from './AlertCard.jsx';

export function AlertsSection({ alertas, isLoading, onAction }) {
  const quantidade = Array.isArray(alertas) ? alertas.length : 0;

  if (!isLoading && quantidade === 0) return null;

  return (
    <section
      aria-labelledby="alertas-importantes-title"
      className="min-w-0 space-y-4"
    >
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-100 bg-amber-50 text-amber-600 dark:border-amber-900/40 dark:bg-amber-500/10 dark:text-amber-400">
            <BellRing className="h-5 w-5" />
          </div>

          <div className="min-w-0">
            <h2
              id="alertas-importantes-title"
              className="text-base font-bold text-slate-800 dark:text-slate-100"
            >
              Alertas importantes
            </h2>

            <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
              Acompanhe pendências e movimentações que precisam de atenção.
            </p>
          </div>
        </div>

        {!isLoading && quantidade > 0 && (
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            {quantidade} {quantidade === 1 ? 'alerta' : 'alertas'}
          </span>
        )}
      </header>

      {isLoading ? (
        <div
          className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-3"
          aria-label="Carregando alertas"
          aria-busy="true"
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="flex min-h-44 flex-col gap-4 rounded-[var(--radius-card)] border border-slate-200/70 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex items-center gap-3">
                <div className="skeleton h-11 w-11 shrink-0 rounded-2xl" />

                <div className="flex-1 space-y-2">
                  <div className="skeleton h-3 w-24 rounded" />
                  <div className="skeleton h-4 w-36 max-w-full rounded" />
                </div>
              </div>

              <div className="skeleton h-14 w-full rounded-xl" />
              <div className="skeleton h-8 w-full rounded-lg" />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {alertas.map((alerta, index) => (
            <AlertCard
              key={alerta.id ?? `${alerta.tone}-${index}`}
              alerta={alerta}
              onAction={onAction}
              delayMs={index * 60}
            />
          ))}
        </div>
      )}

      {!isLoading && quantidade === 0 && (
        <div className="flex items-center gap-3 rounded-xl border border-emerald-200/80 bg-emerald-50/70 p-4 dark:border-emerald-900/40 dark:bg-emerald-950/20">
          <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />

          <p className="text-sm text-emerald-800 dark:text-emerald-300">
            Tudo certo! Não há alertas financeiros pendentes.
          </p>
        </div>
      )}
    </section>
  );
}