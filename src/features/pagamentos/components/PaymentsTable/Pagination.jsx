import { ChevronLeft, ChevronRight } from 'lucide-react';
import IconButton from '../../../../shared/components/actions/IconButton.jsx';
import { Select } from '../../../../shared/components/ui/Select.jsx';
import { REGISTROS_POR_PAGINA_OPTIONS } from '../../constants/index.js';
import { cn } from '../../../../shared/utils/cn.js';

function buildPageList(page, totalPages) {
  const pages = new Set([1, totalPages, page, page - 1, page + 1]);
  return [...pages].filter((p) => p >= 1 && p <= totalPages).sort((a, b) => a - b);
}

/**
 * Pagination footer: "Mostrando X a Y de Z registros", page buttons and
 * the registros-por-página select.
 * @param {{ page: number, totalPages: number, totalItems: number, pageSize: number, onPageChange: (p:number)=>void, onPageSizeChange: (s:number)=>void }} props
 */
export function Pagination({ page, totalPages, totalItems, pageSize, onPageChange, onPageSizeChange }) {
  const start = totalItems === 0 ? 0 : (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, totalItems);
  const pageList = buildPageList(page, totalPages);

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 px-4 py-3 text-sm dark:border-slate-800">
      <p className="text-slate-500 dark:text-slate-400">
        Mostrando {start} a {end} de {totalItems} registros
      </p>

      <div className="flex items-center gap-1">
        <IconButton icon={ChevronLeft} label="Página anterior" size="sm" disabled={page <= 1} onClick={() => onPageChange(page - 1)} />
        {pageList.map((p, idx) => {
          const prev = pageList[idx - 1];
          const showEllipsis = prev !== undefined && p - prev > 1;
          return (
            <span key={p} className="flex items-center">
              {showEllipsis ? <span className="px-1 text-slate-400">…</span> : null}
              <button
                onClick={() => onPageChange(p)}
                className={cn(
                  'flex h-8 w-8 items-center justify-center rounded-lg text-sm font-medium transition-colors',
                  p === page
                    ? 'bg-brand-violet text-white'
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                )}
              >
                {p}
              </button>
            </span>
          );
        })}
        <IconButton icon={ChevronRight} label="Próxima página" size="sm" disabled={page >= totalPages} onClick={() => onPageChange(page + 1)} />
      </div>

      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
        Registros por página
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
