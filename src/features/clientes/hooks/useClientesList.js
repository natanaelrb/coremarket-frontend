import { useState } from 'react'
import { MOCK_CLIENTES } from '../data/mockClientes.js'

/**
 * Owns the raw clients collection (source of truth for this page).
 * TODO(api): replace initial state with GET /api/clientes and expose
 * refetch()/mutate() once wired to the backend.
 */
export function useClientesList() {
  const [clientes, setClientes] = useState(MOCK_CLIENTES)
  const [loading] = useState(false)

  function addCliente(novo) {
    setClientes((prev) => [novo, ...prev])
  }

  function updateCliente(id, patch) {
    setClientes((prev) => prev.map((c) => (c.id === id ? { ...c, ...patch } : c)))
  }

  return { clientes, loading, addCliente, updateCliente }
}
