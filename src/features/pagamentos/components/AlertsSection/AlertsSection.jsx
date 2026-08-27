import { AlertCard } from './AlertCard.jsx';

/**
 * "Alertas importantes" row — one card per alert, hidden entirely when
 * there are no alerts to show.
 * @param {{ alertas: object[], isLoading: boolean, onAction: (tabKey: string) => void }} props
 */
export function AlertsSection({ alertas, isLoading, onAction }) {
  if (!isLoading && alertas.length === 0) return null;

  return (
    <div>
      <h2 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-200">Alertas importantes</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {isLoading
          ? Array.from({ length: 3 }).map((_, i) => <div key={i} className="skeleton h-24 w-full rounded-[var(--radius-card)]" />)
          : alertas.map((alerta, index) => (
              <AlertCard key={alerta.id} alerta={alerta} onAction={onAction} delayMs={index * 60} />
            ))}
      </div>
    </div>
  );
}
