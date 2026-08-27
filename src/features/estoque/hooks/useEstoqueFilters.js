import { useMemo, useState } from 'react'
import { filterProdutos } from '../utils/filterProdutos.js'

const INITIAL_FILTERS = {
  search: '',
  categoria: 'todas',
  fornecedor: 'todos',
  localizacao: 'todas',
  situacao: 'todos',
  validade: 'todos',
  tipo: 'todos',
  statusAtivo: 'ativo',
}

/**
 * Owns all filter/search state for the Estoque table and derives the
 * filtered product list. Single responsibility: turn (produtos, filters)
 * into a filtered array, plus setters for each filter control.
 */
export function useEstoqueFilters(produtos) {
  const [filters, setFilters] = useState(INITIAL_FILTERS)

  const setFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  const clearFilters = () => setFilters(INITIAL_FILTERS)

  const filteredProdutos = useMemo(
    () => filterProdutos(produtos, filters),
    [produtos, filters],
  )

  const hasActiveFilters = useMemo(
    () => JSON.stringify(filters) !== JSON.stringify(INITIAL_FILTERS),
    [filters],
  )

  return { filters, setFilter, clearFilters, filteredProdutos, hasActiveFilters }
}
