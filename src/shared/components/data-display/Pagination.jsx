import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from "../../utils/classNames.js";

/** Numbered pagination control with prev/next and an ellipsis for large sets. */
export function Pagination({ page, totalPages, onPageChange }) {
  const pages = buildPageList(page, totalPages)

  return (
    <div className="flex items-center gap-1">
      <button
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
        className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-white/10 light:text-slate-500 light:hover:bg-black/5 disabled:opacity-30 disabled:pointer-events-none"
        aria-label="Página anterior"
      >
        <ChevronLeft size={16} />
      </button>

      {pages.map((p, i) =>
        p === '...' ? (
          <span key={`dots-${i}`} className="px-2 text-slate-500 text-sm">
            ...
          </span>
        ) : (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            className={cn(
              'w-8 h-8 rounded-md text-sm font-medium transition-colors',
              p === page
                ? 'bg-cm-violet text-white'
                : 'text-slate-300 hover:bg-white/10 light:text-slate-600 light:hover:bg-black/5',
            )}
          >
            {p}
          </button>
        ),
      )}

      <button
        disabled={page >= totalPages}
        onClick={() => onPageChange(page + 1)}
        className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-white/10 light:text-slate-500 light:hover:bg-black/5 disabled:opacity-30 disabled:pointer-events-none"
        aria-label="Próxima página"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  )
}

function buildPageList(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)
  const pages = [1]
  if (current > 3) pages.push('...')
  for (let p = Math.max(2, current - 1); p <= Math.min(total - 1, current + 1); p++) pages.push(p)
  if (current < total - 2) pages.push('...')
  pages.push(total)
  return pages
}
