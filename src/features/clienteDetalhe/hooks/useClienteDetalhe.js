import { useState, useEffect } from 'react'

/**
 * Holds a local, editable copy of the cliente being viewed so payments and
 * edits reflect instantly without waiting on a round trip.
 * TODO(api): replace with GET /api/clientes/{id} + refetch on mutation.
 */
export function useClienteDetalhe(clienteInicial) {
  const [cliente, setCliente] = useState(clienteInicial)

  useEffect(() => setCliente(clienteInicial), [clienteInicial])

  function aplicarPagamento(valor) {
    setCliente((prev) => ({
      ...prev,
      emAberto: Math.max(0, prev.emAberto - valor),
      totalPago: prev.totalPago + valor,
    }))
  }

  function aplicarEdicao(patch) {
    setCliente((prev) => ({ ...prev, ...patch }))
  }

  return { cliente, aplicarPagamento, aplicarEdicao }
}
