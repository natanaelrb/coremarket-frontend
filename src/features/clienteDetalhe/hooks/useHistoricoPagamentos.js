import { useMemo } from 'react'
import { MOCK_HISTORICO_PAGAMENTOS } from '../data/mockHistoricoPagamentos.js'

/** Returns the client's payment history. */
export function useHistoricoPagamentos(clienteId) {
  return useMemo(() => MOCK_HISTORICO_PAGAMENTOS[clienteId] ?? [], [clienteId])
}
