import { useMemo, useState } from 'react'

/** Simple client-side pagination hook over an array of items. */
export function usePagination(items, pageSize = 20) {
  const [page, setPage] = useState(1)

  const totalPages = Math.max(1, Math.ceil(items.length / pageSize))
  const pageItems = useMemo(() => {
    const start = (page - 1) * pageSize
    return items.slice(start, start + pageSize)
  }, [items, page, pageSize])

  function goToPage(p) {
    setPage(Math.min(Math.max(1, p), totalPages))
  }

  return { page, totalPages, pageItems, goToPage, resetPage: () => setPage(1) }
}
