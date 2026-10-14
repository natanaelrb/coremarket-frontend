import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { ROWS_PER_PAGE_OPTIONS } from "../../constants/tableColumns";

export function TablePagination({ pagination, totalCount }) {
  const { page, pageSize, totalPages, goToPage, changePageSize } = pagination;

  const start = totalCount === 0 ? 0 : (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, totalCount);

  const pageNumbers = getPageNumbers(page, totalPages);
  const isFirstPage = page <= 1;
  const isLastPage = page >= totalPages;

  return (
    <div className="flex flex-col gap-4 border-t border-slate-100 px-4 py-4 dark:border-white/[0.07] sm:px-5 lg:flex-row lg:items-center lg:justify-between">
      {/* Informações e quantidade por página */}
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Mostrando{" "}
          <span className="font-semibold text-slate-700 dark:text-slate-200">
            {start}–{end}
          </span>{" "}
          de{" "}
          <span className="font-semibold text-slate-700 dark:text-slate-200">
            {totalCount}
          </span>{" "}
          compras
        </p>

        <div className="flex items-center gap-2">
          <label
            htmlFor="compras-page-size"
            className="whitespace-nowrap text-xs text-slate-500 dark:text-slate-400"
          >
            Por página
          </label>

          <select
            id="compras-page-size"
            value={pageSize}
            onChange={(e) => changePageSize(Number(e.target.value))}
            className="
              h-9 rounded-lg border border-slate-200 bg-white px-3
              text-xs font-medium text-slate-700 outline-none
              transition-colors hover:border-green-300
              focus:border-green-500 focus:ring-2 focus:ring-green-500/15
              dark:border-white/10 dark:bg-[#151b28] dark:text-slate-200
              dark:hover:border-green-500/40
              dark:focus:border-green-500
            "
          >
            {ROWS_PER_PAGE_OPTIONS.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Navegação entre páginas */}
      <nav
        aria-label="Paginação das compras"
        className="flex flex-wrap items-center gap-1"
      >
        <PageButton
          ariaLabel="Ir para a primeira página"
          onClick={() => goToPage(1)}
          disabled={isFirstPage || totalPages === 0}
        >
          <ChevronsLeft className="h-4 w-4" />
        </PageButton>

        <PageButton
          ariaLabel="Ir para a página anterior"
          onClick={() => goToPage(page - 1)}
          disabled={isFirstPage || totalPages === 0}
        >
          <ChevronLeft className="h-4 w-4" />
        </PageButton>

        <div className="mx-1 flex items-center gap-1">
          {pageNumbers.map((p, i) =>
            p === "..." ? (
              <span
                key={`ellipsis-${i}`}
                aria-hidden="true"
                className="flex h-9 min-w-5 items-center justify-center text-xs text-slate-400"
              >
                …
              </span>
            ) : (
              <PageButton
                key={p}
                onClick={() => goToPage(p)}
                active={p === page}
                ariaLabel={`Ir para a página ${p}`}
                ariaCurrent={p === page ? "page" : undefined}
              >
                {p}
              </PageButton>
            )
          )}
        </div>

        <PageButton
          ariaLabel="Ir para a próxima página"
          onClick={() => goToPage(page + 1)}
          disabled={isLastPage || totalPages === 0}
        >
          <ChevronRight className="h-4 w-4" />
        </PageButton>

        <PageButton
          ariaLabel="Ir para a última página"
          onClick={() => goToPage(totalPages)}
          disabled={isLastPage || totalPages === 0}
        >
          <ChevronsRight className="h-4 w-4" />
        </PageButton>
      </nav>
    </div>
  );
}

function PageButton({
  children,
  onClick,
  active = false,
  disabled = false,
  ariaLabel,
  ariaCurrent,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-current={ariaCurrent}
      className={`
        flex h-9 min-w-9 items-center justify-center rounded-xl px-2
        text-xs font-semibold
        transition-colors duration-150
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-green-500/40 focus-visible:ring-offset-1
        motion-reduce:transition-none
        ${
          active
            ? "border border-green-600 bg-green-600 text-white shadow-sm shadow-green-600/15 dark:border-green-500 dark:bg-green-500 dark:text-[#102016]"
            : "border border-transparent text-slate-500 hover:border-slate-200 hover:bg-slate-50 hover:text-slate-800 dark:text-slate-400 dark:hover:border-white/10 dark:hover:bg-white/[0.06] dark:hover:text-slate-100"
        }
        disabled:pointer-events-none disabled:opacity-30
        dark:focus-visible:ring-offset-[#151b28]
      `}
    >
      {children}
    </button>
  );
}

function getPageNumbers(current, total) {
  if (total <= 0) return [];
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  if (current <= 4) {
    return [1, 2, 3, 4, 5, "...", total];
  }

  if (current >= total - 3) {
    return [
      1,
      "...",
      total - 4,
      total - 3,
      total - 2,
      total - 1,
      total,
    ];
  }

  return [1, "...", current - 1, current, current + 1, "...", total];
}
