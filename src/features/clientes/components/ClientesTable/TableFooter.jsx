import { Pagination } from "../../../../shared/components/data-display/Pagination.jsx";

/** "Mostrando X-Y de Z clientes" caption + pagination control + page-size select. */
export function TableFooter({ page, totalPages, totalItems, pageSize, onPageChange, onPageSizeChange }) {
  const start = totalItems === 0 ? 0 : (page - 1) * pageSize + 1
  const end = Math.min(page * pageSize, totalItems)

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 py-3 border-t border-cm-border-dark light:border-cm-border-light text-xs text-slate-400 light:text-slate-500">
      <span>
        Mostrando {start}-{end} de {totalItems.toLocaleString('pt-BR')} clientes
      </span>
      <div className="flex items-center gap-4">
        <label className="flex items-center gap-2">
          Exibir
          <select
            value={pageSize}
            onChange={(e) => onPageSizeChange(Number(e.target.value))}
            className="rounded-md bg-white/5 light:bg-black/5 border border-cm-border-dark light:border-cm-border-light px-2 py-1 text-slate-200 light:text-slate-700"
          >
            {[10, 20, 50].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </label>
        <Pagination page={page} totalPages={totalPages} onPageChange={onPageChange} />
      </div>
    </div>
  )
}
