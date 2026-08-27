import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '../../../../shared/utils/classNames.js'

function getVisiblePages(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)
  const pages = new Set([1, 2, current - 1, current, current + 1, total])
  return [...pages].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b)
}

/**
 * Numbered pagination control with ellipsis support for large page counts,
 * matching the "1 2 3 4 5 ... 325" pattern from the design.
 */
export default function Pagination({ page, totalPages, onPageChange, onPrev, onNext }) {
  const visiblePages = getVisiblePages(page, totalPages)

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={onPrev}
        disabled={page === 1}
        className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#1E2142] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronLeft size={16} />
      </button>

      {visiblePages.map((p, idx) => {
        const prev = visiblePages[idx - 1]
        const showEllipsis = prev != null && p - prev > 1
        return (
          <span key={p} className="flex items-center">
            {showEllipsis && <span className="px-1 text-gray-400 text-sm">...</span>}
            <button
              onClick={() => onPageChange(p)}
              className={cn(
                'flex h-8 min-w-8 items-center justify-center rounded-lg px-2 text-sm font-medium transition-colors',
                p === page
                  ? 'bg-violet-600 text-white shadow-sm shadow-violet-600/30'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#1E2142]',
              )}
            >
              {p}
            </button>
          </span>
        )
      })}

      <button
        onClick={onNext}
        disabled={page === totalPages}
        className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#1E2142] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  )
}
