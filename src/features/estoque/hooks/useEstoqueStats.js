import { useMemo } from 'react'
import { MOCK_ESTOQUE_STATS } from '../mocks/mockEstoqueStats.js'

/**
 * Loads the KPI values for the stats card row.
 * TODO(api): swap the mock import for a fetch to GET /api/estoque/resumo
 * and manage loading/error state here (e.g. with useState + useEffect,
 * or a data-fetching lib like TanStack Query).
 */
export function useEstoqueStats() {
  const stats = useMemo(() => MOCK_ESTOQUE_STATS, [])
  return { stats, isLoading: false, error: null }
}
