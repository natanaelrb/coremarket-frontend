import { ChevronLeft, ChevronRight } from "lucide-react";
import { ITENS_POR_PAGINA_OPTIONS } from "../../constants/filterOptions.js";

function getPageNumbers(current, total) {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages = [1];

  if (current > 3) {
    pages.push("...");
  }

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (current < total - 2) {
    pages.push("...");
  }

  pages.push(total);

  return pages;
}

export default function TablePagination({ pagination }) {
  const {
    currentPage,
    totalPages,
    itemsPerPage,
    goToPage,
    changeItemsPerPage,
    rangeStart,
    rangeEnd,
    totalItems,
  } = pagination;

  const pageNumbers = getPageNumbers(currentPage, totalPages);

  return (
    <div
      className="
        flex flex-col items-center justify-between gap-3
        border-t border-slate-200/80
        px-4 py-3
        sm:flex-row
        dark:border-[#252a4a]
      "
    >
      <p className="text-xs text-slate-500 dark:text-slate-400">
        Mostrando de {rangeStart} a {rangeEnd} de {totalItems} fornecedores
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Página anterior"
            className="
              rounded-lg p-1.5
              text-slate-400
              transition-colors
              hover:bg-slate-100 hover:text-slate-700
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-emerald-500/30
              disabled:cursor-not-allowed
              disabled:opacity-40
              dark:text-slate-500
              dark:hover:bg-[#252a4a]
              dark:hover:text-slate-200
            "
          >
            <ChevronLeft size={16} aria-hidden="true" />
          </button>

          {pageNumbers.map((page, index) =>
            page === "..." ? (
              <span
                key={`ellipsis-${index}`}
                className="px-1.5 text-xs text-slate-400 dark:text-slate-500"
              >
                …
              </span>
            ) : (
              <button
                key={page}
                type="button"
                onClick={() => goToPage(page)}
                aria-current={page === currentPage ? "page" : undefined}
                className={`
                  h-8 w-8 rounded-lg
                  text-xs font-semibold
                  transition-all duration-150
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-emerald-500/30
                  ${
                    page === currentPage
                      ? `
                        bg-emerald-600
                        text-white
                        shadow-sm shadow-emerald-600/20
                        hover:bg-emerald-700
                      `
                      : `
                        text-slate-500
                        hover:bg-slate-100
                        hover:text-slate-700
                        dark:text-slate-400
                        dark:hover:bg-[#252a4a]
                        dark:hover:text-slate-200
                      `
                  }
                `}
              >
                {page}
              </button>
            )
          )}

          <button
            type="button"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Próxima página"
            className="
              rounded-lg p-1.5
              text-slate-400
              transition-colors
              hover:bg-slate-100 hover:text-slate-700
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-emerald-500/30
              disabled:cursor-not-allowed
              disabled:opacity-40
              dark:text-slate-500
              dark:hover:bg-[#252a4a]
              dark:hover:text-slate-200
            "
          >
            <ChevronRight size={16} aria-hidden="true" />
          </button>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
          <span className="whitespace-nowrap">Itens por página</span>

          <select
            value={itemsPerPage}
            onChange={(e) => changeItemsPerPage(Number(e.target.value))}
            aria-label="Quantidade de itens por página"
            className="
              rounded-lg
              border border-slate-200
              bg-white px-2 py-1.5
              text-xs text-slate-600
              outline-none transition-colors
              hover:border-slate-300
              focus:border-emerald-500
              focus:ring-2 focus:ring-emerald-500/10
              dark:border-[#252a4a]
              dark:bg-[#0f1230]
              dark:text-slate-300
              dark:hover:border-[#3a4168]
              dark:focus:border-emerald-500
            "
          >
            {ITENS_POR_PAGINA_OPTIONS.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}