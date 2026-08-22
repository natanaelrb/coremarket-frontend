import { useEffect, useState } from 'react'
import { paginateProdutos } from '../utils/paginateProdutos.js'

/**
 * Owns page number + items-per-page state and derives the current page
 * slice of a given list. Resets to page 1 whenever the source list length
 * changes (e.g. after filters narrow the result set).
 */
export function usePagination(items, defaultItemsPerPage = 10) {
  const [page, setPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(defaultItemsPerPage)

  useEffect(() => {
    setPage(1)
  }, [items.length, itemsPerPage])

  const pagination = paginateProdutos(items, page, itemsPerPage)

  return {
    ...pagination,
    itemsPerPage,
    setItemsPerPage,
    setPage,
    goToNextPage: () => setPage((p) => Math.min(p + 1, pagination.totalPages)),
    goToPreviousPage: () => setPage((p) => Math.max(p - 1, 1)),
  }
}
