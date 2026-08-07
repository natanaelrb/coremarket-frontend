// Bloco com título + grade de InfoField, usado para organizar cada seção da aba Geral.
export function InfoSection({ title, columns = 3, children }) {
  return (
    <div className="border-b border-gray-50 py-4 last:border-0 dark:border-gray-800/60">
      <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">{title}</h4>
      <div className={`grid gap-4`} style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}>
        {children}
      </div>
    </div>
  );
}
