import { useMemo } from 'react'
import { MOCK_COMPRAS_CLIENTE, MOCK_ULTIMAS_COMPRAS } from '../data/mockUltimasCompras.js'

/** Returns the client's full purchase history and the latest-3 summary. */
export function useComprasCliente(clienteId) {
  const compras = useMemo(() => MOCK_COMPRAS_CLIENTE[clienteId] ?? [], [clienteId])
  const ultimasCompras = useMemo(() => MOCK_ULTIMAS_COMPRAS[clienteId] ?? [], [clienteId])
  return { compras, ultimasCompras }
}
