/**
 * Labeled section wrapper used throughout the detail panel
 * ("Informações gerais", "Origem", "Datas", "Dados da transação").
 */
export function DetailSection({ title, children }) {
  return (
    <div className="border-b border-slate-100 py-4 first:pt-0 last:border-0 dark:border-slate-800">
      <h4 className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-slate-400">{title}</h4>
      <dl className="space-y-2">{children}</dl>
    </div>
  );
}

/** A single "label ... value" row inside a DetailSection. */
export function DetailRow({ label, children, valueClassName = '' }) {
  return (
    <div className="flex items-center justify-between gap-4 text-sm">
      <dt className="text-slate-500 dark:text-slate-400">{label}</dt>
      <dd className={`text-right font-medium text-slate-800 dark:text-slate-100 ${valueClassName}`}>{children}</dd>
    </div>
  );
}
