import { useMemo } from 'react'
import {
  MOCK_ENTRADAS_SAIDAS,
  MOCK_VALOR_ESTOQUE_HISTORICO,
  MOCK_ESTOQUE_POR_CATEGORIA,
  MOCK_SITUACAO_ESTOQUE,
  MOCK_TOP_GIRO,
} from '../mocks/mockAnalytics.js'

/**
 * Loads all series needed by the "Análises do Estoque" charts section.
 * TODO(api): replace each mock with its analytics endpoint (see
 * mocks/mockAnalytics.js for the exact routes).
 */
export function useEstoqueAnalytics() {
  const data = useMemo(
    () => ({
      entradasSaidas: MOCK_ENTRADAS_SAIDAS,
      valorHistorico: MOCK_VALOR_ESTOQUE_HISTORICO,
      porCategoria: MOCK_ESTOQUE_POR_CATEGORIA,
      situacao: MOCK_SITUACAO_ESTOQUE,
      topGiro: MOCK_TOP_GIRO,
    }),
    [],
  )
  return { data, isLoading: false }
}
