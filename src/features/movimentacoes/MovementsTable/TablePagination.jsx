import { ChevronLeft, ChevronRight } from 'lucide-react';

function buildPageList(current, total) {
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
  if (current <= 3) return [1, 2, 3, '...', total];
  if (current >= total - 2) return [1, '...', total - 2, total - 1, total];
  return [1, '...', current, '...', total];
}

export default function TablePagination({ currentPage, totalPages, onPageChange, itemsPerPage, onItemsPerPageChange }) {
  const pages = buildPageList(currentPage, totalPages);

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/5 px-4 py-3">
      <div className="flex items-center gap-1">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="rounded-lg p-1.5 text-slate-400 hover:bg-white/5 disabled:opacity-30"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        {pages.map((p, i) => (
          typeof p === 'number' ? (
            <button
              key={p}
              onClick={() => onPageChange(p)}
              className={`h-8 min-w-8 rounded-lg px-2 text-sm font-medium transition-colors ${
                p === currentPage ? 'bg-violet-600 text-white' : 'text-slate-400 hover:bg-white/5'
              }`}
            >
              {p}
            </button>
          ) : (
            <span key={`dots-${i}`} className="px-1 text-slate-600">…</span>
          )
        ))}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="rounded-lg p-1.5 text-slate-400 hover:bg-white/5 disabled:opacity-30"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <label className="flex items-center gap-2 text-sm text-slate-400">
        Itens por página
        <select
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
          className="rounded-lg border border-white/10 bg-[#0D1029] px-2 py-1 text-slate-200 outline-none focus:border-violet-500"
        >
          {[25, 50, 100].map((n) => <option key={n} value={n}>{n}</option>)}
        </select>
      </label>
    </div>
  );
}
