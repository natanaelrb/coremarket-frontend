// Paginação da tabela: navegação por páginas + seletor de itens por página.
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ITEMS_PER_PAGE_OPTIONS } from '../../constants/tableColumns';
import { formatNumber } from '../../utils/formatters';

function buildPageList(page, totalPages) {
  const pages = new Set([1, totalPages, page, page - 1, page + 1]);
  return [...pages]
    .filter((p) => p >= 1 && p <= totalPages)
    .sort((a, b) => a - b);
}

export function Pagination({ page, totalPages, totalItems, itemsPerPage, goToPage, nextPage, prevPage, changeItemsPerPage }) {
  const pageList = buildPageList(page, totalPages);
  const start = (page - 1) * itemsPerPage + 1;
  const end = Math.min(page * itemsPerPage, totalItems);

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Mostrando {formatNumber(start)} a {formatNumber(end)} de {formatNumber(totalItems)} produtos
      </p>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <button
            onClick={prevPage}
            disabled={page === 1}
            className="flex h-7 w-7 items-center justify-center rounded-md text-gray-500 transition-colors hover:bg-gray-100 disabled:opacity-30 dark:text-gray-400 dark:hover:bg-white/5"
          >
            <ChevronLeft size={15} />
          </button>

          {pageList.map((p, idx) => {
            const prev = pageList[idx - 1];
            const showEllipsis = prev !== undefined && p - prev > 1;
            return (
              <span key={p} className="flex items-center">
                {showEllipsis && <span className="px-1 text-gray-300 dark:text-gray-600">…</span>}
                <button
                  onClick={() => goToPage(p)}
                  className={[
                    'flex h-7 w-7 items-center justify-center rounded-md text-sm transition-colors duration-150',
                    p === page
                      ? 'bg-violet-600 text-white shadow-sm shadow-violet-600/30'
                      : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5',
                  ].join(' ')}
                >
                  {p}
                </button>
              </span>
            );
          })}

          <button
            onClick={nextPage}
            disabled={page === totalPages}
            className="flex h-7 w-7 items-center justify-center rounded-md text-gray-500 transition-colors hover:bg-gray-100 disabled:opacity-30 dark:text-gray-400 dark:hover:bg-white/5"
          >
            <ChevronRight size={15} />
          </button>
        </div>

        <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
          Itens por página
          <select
            value={itemsPerPage}
            onChange={(e) => changeItemsPerPage(Number(e.target.value))}
            className="rounded-md border border-gray-200 bg-white px-1.5 py-1 text-sm outline-none dark:border-gray-700 dark:bg-[#151936] dark:text-gray-200"
          >
            {ITEMS_PER_PAGE_OPTIONS.map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
