import { useMemo, useState } from 'react'
import { filterFornecedores, sortFornecedores } from '../utils/filterFornecedores.js'

const INITIAL_FILTERS = {
  situacao: 'todos',
  tipo: 'todos',
  cidade: 'todos',
  estado: 'todos',
  produto: 'todos',
  ultimaCompra: 'todos',
  valorComprado: 'todos',
}

export function useFornecedorFilters(fornecedores) {
  const [filters, setFilters] = useState(INITIAL_FILTERS)
  const [searchTerm, setSearchTerm] = useState('')
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [sortKey, setSortKey] = useState(null)
  const [sortDirection, setSortDirection] = useState('asc')

  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  const clearFilters = () => {
    setFilters(INITIAL_FILTERS)
    setSearchTerm('')
  }

  const toggleSort = (key) => {
    if (sortKey === key) {
      setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortKey(key)
      setSortDirection('asc')
    }
  }

  const activeFilterChips = useMemo(() => {
    return Object.entries(filters)
      .filter(([, value]) => value !== 'todos')
      .map(([key, value]) => ({ key, value }))
  }, [filters])

  const filteredFornecedores = useMemo(() => {
    const filtered = filterFornecedores(fornecedores, filters, searchTerm)
    return sortFornecedores(filtered, sortKey, sortDirection)
  }, [fornecedores, filters, searchTerm, sortKey, sortDirection])

  return {
    filters,
    updateFilter,
    clearFilters,
    searchTerm,
    setSearchTerm,
    showAdvanced,
    setShowAdvanced,
    activeFilterChips,
    filteredFornecedores,
    sortKey,
    sortDirection,
    toggleSort,
  }
}
