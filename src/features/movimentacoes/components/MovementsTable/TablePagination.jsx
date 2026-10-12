import { ChevronLeft, ChevronRight } from 'lucide-react';

function buildPageList(current, total) {
  if (total <= 5) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  if (current <= 3) {
    return [1, 2, 3, '...', total];
  }

  if (current >= total - 2) {
    return [1, '...', total - 2, total - 1, total];
  }

  return [1, '...', current, '...', total];
}

export default function TablePagination({
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage,
  onItemsPerPageChange,
}) {
  const pages = buildPageList(currentPage, totalPages);

  return (
    <div className="
      flex flex-wrap items-center justify-between
      gap-3
      px-4 py-3
      sm:px-5
    ">
      {/* Navegação */}
      <div
        className="flex items-center gap-1"
        aria-label="Paginação da tabela"
      >
        {/* Página anterior */}
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Página anterior"
          title="Página anterior"
          className="
            flex h-8 w-8 items-center justify-center
            rounded-lg
            text-slate-500
            transition-all duration-200
            hover:bg-slate-100
            hover:text-slate-800
            disabled:cursor-not-allowed
            disabled:opacity-30
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-emerald-500/30
          "
        >
          <ChevronLeft
            className="h-4 w-4"
            strokeWidth={2}
          />
        </button>

        {/* Páginas */}
        {pages.map((page, index) =>
          typeof page === 'number' ? (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page)}
              aria-label={`Ir para página ${page}`}
              aria-current={page === currentPage ? 'page' : undefined}
              className={`
                flex h-8 min-w-8 items-center justify-center
                rounded-lg px-2
                text-sm font-semibold
                transition-all duration-200
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-emerald-500/30
                ${
                  page === currentPage
                    ? 'bg-emerald-500 text-white shadow-sm shadow-emerald-500/20'
                    : 'text-slate-500 hover:bg-slate-100 hover:text-slate-800'
                }
              `}
            >
              {page}
            </button>
          ) : (
            <span
              key={`dots-${index}`}
              aria-hidden="true"
              className="
                flex h-8 min-w-6
                items-center justify-center
                px-1
                text-sm font-medium
                text-slate-400
              "
            >
              …
            </span>
          )
        )}

        {/* Próxima página */}
        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Próxima página"
          title="Próxima página"
          className="
            flex h-8 w-8 items-center justify-center
            rounded-lg
            text-slate-500
            transition-all duration-200
            hover:bg-slate-100
            hover:text-slate-800
            disabled:cursor-not-allowed
            disabled:opacity-30
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-emerald-500/30
          "
        >
          <ChevronRight
            className="h-4 w-4"
            strokeWidth={2}
          />
        </button>
      </div>

      {/* Itens por página */}
      <label className="
        flex items-center gap-2
        text-xs font-medium text-slate-500
      ">
        <span>Itens por página</span>

        <select
          value={itemsPerPage}
          onChange={(event) =>
            onItemsPerPageChange(Number(event.target.value))
          }
          aria-label="Quantidade de itens por página"
          className="
            h-8
            rounded-lg
            border border-slate-200
            bg-white
            px-2.5
            text-sm font-semibold text-slate-700
            outline-none
            transition-all
            hover:border-slate-300
            focus:border-emerald-500
            focus:ring-2
            focus:ring-emerald-500/10
          "
        >
          {[25, 50, 100].map((number) => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}