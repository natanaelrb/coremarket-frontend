import { Pagination } from "../../../../shared/components/data-display/Pagination.jsx";

/** "Mostrando X-Y de Z clientes" caption + pagination control + page-size select. */
export function TableFooter({
  page,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
  onPageSizeChange,
}) {
  const start = totalItems === 0 ? 0 : (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, totalItems);

  return (
    <div
      className="
        flex flex-col
        items-center justify-between
        gap-3
        border-t border-slate-100
        px-4 py-3
        text-xs text-slate-500
        sm:flex-row
        dark:border-white/5
        dark:text-slate-400
      "
    >
      <span>
        Mostrando {start}-{end} de{" "}
        {totalItems.toLocaleString("pt-BR")} clientes
      </span>

      <div className="flex items-center gap-4">
        <label className="flex items-center gap-2">
          Exibir

          <select
            value={pageSize}
            onChange={(e) => onPageSizeChange(Number(e.target.value))}
            className="
              cursor-pointer
              rounded-md
              border border-slate-200
              bg-white
              px-2 py-1
              text-slate-700
              outline-none
              transition-colors
              focus:border-[#42c878]
              focus:ring-1
              focus:ring-[#42c878]/20
              dark:border-white/10
              dark:bg-zinc-900
              dark:text-slate-200
            "
          >
            {[10, 20, 50].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </label>

        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
}