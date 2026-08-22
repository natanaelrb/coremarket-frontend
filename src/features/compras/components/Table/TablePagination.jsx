import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { ROWS_PER_PAGE_OPTIONS } from "../../constants/tableColumns";

export function TablePagination({ pagination, totalCount }) {
  const { page, pageSize, totalPages, goToPage, changePageSize } = pagination;
  const start = totalCount === 0 ? 0 : (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, totalCount);

  const pageNumbers = getPageNumbers(page, totalPages);

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-t border-slate-100 dark:border-white/5">
      <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
        <span>
          Mostrando {start} a {end} de {totalCount} compras
        </span>
        <select
          value={pageSize}
          onChange={(e) => changePageSize(Number(e.target.value))}
          className="ml-2 text-xs border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-violet-500/40"
        >
          {ROWS_PER_PAGE_OPTIONS.map((size) => (
            <option key={size} value={size}>
              {size} por página
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-1">
        <PageButton onClick={() => goToPage(1)} disabled={page === 1}>
          <ChevronsLeft className="w-3.5 h-3.5" />
        </PageButton>
        <PageButton onClick={() => goToPage(page - 1)} disabled={page === 1}>
          <ChevronLeft className="w-3.5 h-3.5" />
        </PageButton>

        {pageNumbers.map((p, i) =>
          p === "..." ? (
            <span key={`ellipsis-${i}`} className="px-2 text-xs text-slate-400">
              ...
            </span>
          ) : (
            <PageButton key={p} onClick={() => goToPage(p)} active={p === page}>
              {p}
            </PageButton>
          )
        )}

        <PageButton onClick={() => goToPage(page + 1)} disabled={page === totalPages}>
          <ChevronRight className="w-3.5 h-3.5" />
        </PageButton>
        <PageButton onClick={() => goToPage(totalPages)} disabled={page === totalPages}>
          <ChevronsRight className="w-3.5 h-3.5" />
        </PageButton>
      </div>
    </div>
  );
}

function PageButton({ children, onClick, active, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`min-w-[28px] h-7 px-1.5 rounded-md text-xs font-medium flex items-center justify-center transition-colors disabled:opacity-30 disabled:pointer-events-none ${
        active
          ? "bg-violet-600 text-white"
          : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10"
      }`}
    >
      {children}
    </button>
  );
}

function getPageNumbers(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  if (current <= 4) return [1, 2, 3, 4, 5, "...", total];
  if (current >= total - 3) return [1, "...", total - 4, total - 3, total - 2, total - 1, total];
  return [1, "...", current - 1, current, current + 1, "...", total];
}
