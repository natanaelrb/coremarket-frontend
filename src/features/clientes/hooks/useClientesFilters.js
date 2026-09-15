import { useMemo, useState } from 'react'
import { useDebounce } from '../../../shared/hooks/useDebounce.js'
import { matchesQuickFilter, matchesSearchTerm } from '../utils/clienteStatusHelpers.js'

/**
 * Owns search + quick-filter state for the clients table and returns the
 * filtered list. TODO(api): once server-side, debounce should drive
 * GET /api/clientes?q=&status= instead of filtering in memory.
 */
export function useClientesFilters(clientes) {
  const [searchTerm, setSearchTerm] = useState('')
  const [quickFilter, setQuickFilter] = useState('todos')
  const debouncedSearch = useDebounce(searchTerm, 250)

  const filtered = useMemo(
    () =>
      clientes.filter(
        (c) => matchesQuickFilter(c, quickFilter) && matchesSearchTerm(c, debouncedSearch),
      ),
    [clientes, quickFilter, debouncedSearch],
  )

  return { searchTerm, setSearchTerm, quickFilter, setQuickFilter, filtered }
}
