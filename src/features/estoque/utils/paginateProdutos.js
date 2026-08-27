/**
 * Slices a list into the current page window and returns pagination
 * metadata needed by the Pagination component.
 */
export function paginateProdutos(produtos, page, itemsPerPage) {
  const totalItems = produtos.length
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage))
  const safePage = Math.min(Math.max(1, page), totalPages)
  const start = (safePage - 1) * itemsPerPage
  const end = start + itemsPerPage

  return {
    items: produtos.slice(start, end),
    totalItems,
    totalPages,
    page: safePage,
    start,
    end: Math.min(end, totalItems),
  }
}
