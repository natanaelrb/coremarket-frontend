/**
 * Seção reutilizável para organizar informações na página de detalhes
 * de pagamentos do CoreMarket.
 */
export function DetailSection({ title, children }) {
  return (
    <section className="border-b border-slate-200/70 py-5 first:pt-0 last:border-0 last:pb-0 dark:border-white/[0.08]">
      <h4 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
        <span
          aria-hidden="true"
          className="h-4 w-1 rounded-full bg-emerald-500"
        />
        {title}
      </h4>

      <dl className="space-y-3.5">{children}</dl>
    </section>
  );
}

/**
 * Linha de informação com rótulo e valor.
 */
export function DetailRow({
  label,
  children,
  valueClassName = '',
}) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] items-start gap-4 text-sm">
      <dt className="min-w-0 break-words leading-5 text-slate-500 dark:text-slate-400">
        {label}
      </dt>

      <dd
        className={`min-w-0 break-words text-right font-semibold leading-5 text-slate-800 dark:text-slate-100 ${valueClassName}`}
      >
        {children}
      </dd>
    </div>
  );
}
