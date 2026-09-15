import { useMemo } from 'react'
import { MOCK_CONTAS_RECEBER } from '../data/mockContasReceber.js'

/** Returns the client's receivable accounts (open + settled). */
export function useContasReceber(clienteId) {
  const contas = useMemo(() => MOCK_CONTAS_RECEBER[clienteId] ?? [], [clienteId])
  const contasEmAberto = useMemo(() => contas.filter((c) => c.saldo > 0), [contas])
  return { contas, contasEmAberto }
}
