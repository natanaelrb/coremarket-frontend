import { useMemo } from 'react'
import { MOCK_PRODUTOS_ESTOQUE } from '../mocks/mockProdutosEstoque.js'

/**
 * Loads the raw product/stock list.
 * TODO(api): replace with GET /api/estoque/produtos, keeping the same
 * return shape so downstream hooks (filters/pagination) don't need changes.
 */
export function useProdutosEstoque() {
  const produtos = useMemo(() => MOCK_PRODUTOS_ESTOQUE, [])
  return { produtos, isLoading: false, error: null }
}
