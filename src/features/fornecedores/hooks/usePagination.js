import { useEffect, useMemo, useState } from 'react'
import { paginate } from '../utils/filterFornecedores.js'

export function usePagination(items, initialItemsPerPage = 10) {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage)

  const totalPages = Math.max(1, Math.ceil(items.length / itemsPerPage))

  // Corrige a página atual caso os filtros reduzam o total de páginas
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1)
    }
  }, [totalPages, currentPage])

  const paginatedItems = useMemo(
    () => paginate(items, currentPage, itemsPerPage),
    [items, currentPage, itemsPerPage]
  )

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
  }

  const changeItemsPerPage = (value) => {
    setItemsPerPage(value)
    setCurrentPage(1)
  }

  const rangeStart = items.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1
  const rangeEnd = Math.min(currentPage * itemsPerPage, items.length)

  return {
    currentPage,
    totalPages,
    itemsPerPage,
    paginatedItems,
    goToPage,
    changeItemsPerPage,
    rangeStart,
    rangeEnd,
    totalItems: items.length,
  }
}
