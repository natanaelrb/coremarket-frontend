import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ITENS_POR_PAGINA_OPTIONS } from '../../constants/filterOptions.js'

function getPageNumbers(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)

  const pages = [1]
  if (current > 3) pages.push('...')

  const start = Math.max(2, current - 1)
  const end = Math.min(total - 1, current + 1)
  for (let i = start; i <= end; i++) pages.push(i)

  if (current < total - 2) pages.push('...')
  pages.push(total)

  return pages
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
  } = pagination

  const pageNumbers = getPageNumbers(currentPage, totalPages)

  return (
    <div className="flex flex-col items-center justify-between gap-3 border-t border-gray-100 px-4 py-3 sm:flex-row dark:border-[#1c2044]">
      <p className="text-xs text-gray-400 dark:text-gray-500">
        Mostrando de {rangeStart} a {rangeEnd} de {totalItems} fornecedores
      </p>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 dark:hover:bg-[#1f234a]"
          >
            <ChevronLeft size={16} />
          </button>

          {pageNumbers.map((page, i) =>
            page === '...' ? (
              <span key={`ellipsis-${i}`} className="px-1.5 text-xs text-gray-400">
                …
              </span>
            ) : (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`h-7 w-7 rounded-lg text-xs font-medium transition-colors ${
                  page === currentPage
                    ? 'bg-violet-600 text-white'
                    : 'text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-[#1f234a]'
                }`}
              >
                {page}
              </button>
            )
          )}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 dark:hover:bg-[#1f234a]"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
          Itens por página
          <select
            value={itemsPerPage}
            onChange={(e) => changeItemsPerPage(Number(e.target.value))}
            className="rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs text-gray-600 outline-none dark:border-[#252a4a] dark:bg-[#0f1230] dark:text-gray-300"
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
  )
}
