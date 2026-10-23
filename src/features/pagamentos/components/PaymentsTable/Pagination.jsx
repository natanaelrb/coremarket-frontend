import { ChevronLeft, ChevronRight } from 'lucide-react';

import IconButton from '../../../../shared/components/actions/IconButton.jsx';
import { Select } from '../../../../shared/components/ui/Select.jsx';
import { REGISTROS_POR_PAGINA_OPTIONS } from '../../constants/index.js';
import { cn } from '../../../../shared/utils/cn.js';

function buildPageList(page, totalPages) {
  const pages = new Set([1, totalPages, page, page - 1, page + 1]);

  return [...pages]
    .filter((p) => p >= 1 && p <= totalPages)
    .sort((a, b) => a - b);
}

/**
 * Pagination footer: record count, page buttons and page-size selector.
 */
export function Pagination({
  page,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
  onPageSizeChange,
}) {
  const start = totalItems === 0 ? 0 : (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, totalItems);
  const pageList = buildPageList(page, totalPages);

  return (
    <div
      className="
        flex flex-col gap-4
        bg-white px-4 py-4
        text-sm
        sm:px-5
        lg:flex-row lg:flex-wrap
        lg:items-center lg:justify-between
        dark:bg-slate-900
      "
    >
      {/* Contagem de registros */}
      <p className="text-center text-xs text-slate-500 sm:text-sm lg:text-left dark:text-slate-400">
        Mostrando{' '}
        <span className="font-semibold text-slate-800 dark:text-slate-100">
          {start}–{end}
        </span>{' '}
        de{' '}
        <span className="font-semibold text-slate-800 dark:text-slate-100">
          {totalItems}
        </span>{' '}
        registros
      </p>

      {/* Navegação entre páginas */}
      <nav
        className="flex items-center justify-center gap-1"
        aria-label="Paginação do histórico de pagamentos"
      >
        <IconButton
          icon={ChevronLeft}
          label="Página anterior"
          size="sm"
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
        />

        {pageList.map((p, idx) => {
          const prev = pageList[idx - 1];
          const showEllipsis = prev !== undefined && p - prev > 1;

          return (
            <span key={p} className="flex items-center gap-1">
              {showEllipsis && (
                <span
                  className="px-1 text-slate-400"
                  aria-hidden="true"
                >
                  …
                </span>
              )}

              <button
                type="button"
                aria-label={`Página ${p}`}
                aria-current={p === page ? 'page' : undefined}
                onClick={() => onPageChange(p)}
                className={cn(
                  `
                    flex h-8 w-8 shrink-0
                    items-center justify-center
                    rounded-lg
                    text-sm font-medium
                    transition-colors duration-150
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-green-500/40
                  `,
                  p === page
                    ? `
                        bg-green-600 text-white
                        shadow-sm shadow-green-600/20
                        hover:bg-green-700
                        dark:bg-green-500
                        dark:text-slate-950
                        dark:hover:bg-green-400
                      `
                    : `
                        text-slate-600
                        hover:bg-green-50 hover:text-green-700
                        dark:text-slate-300
                        dark:hover:bg-green-500/10
                        dark:hover:text-green-400
                      `
                )}
              >
                {p}
              </button>
            </span>
          );
        })}

        <IconButton
          icon={ChevronRight}
          label="Próxima página"
          size="sm"
          disabled={page >= totalPages}
          onClick={() => onPageChange(page + 1)}
        />
      </nav>

      {/* Quantidade de registros por página */}
      <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500 sm:text-sm lg:justify-end dark:text-slate-400">
        <label htmlFor="pagamentos-page-size">
          Registros por página
        </label>

        <Select
          options={REGISTROS_POR_PAGINA_OPTIONS}
          value={String(pageSize)}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
          containerClassName="w-20"
        />
      </div>
    </div>
  );
}