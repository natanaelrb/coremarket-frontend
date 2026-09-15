import { STATUS_CLIENTE } from "../../../shared/constants/enums.js";
import { STATUS_CLIENTE_CONFIG } from '../constants/statusClienteConfig.js'

/** Returns { label, tone } for a cliente's status, falling back gracefully. */
export function getStatusConfig(status) {
  return STATUS_CLIENTE_CONFIG[status] ?? { label: status, tone: 'neutral' }
}

/** Applies a quick-filter id (from FILTROS_RAPIDOS) against a cliente. */
export function matchesQuickFilter(cliente, filtroId) {
  switch (filtroId) {
    case 'todos':
      return true
    case 'com-divida':
      return cliente.emAberto > 0
    case 'sem-divida':
      return cliente.emAberto === 0
    case STATUS_CLIENTE.ATIVO:
    case STATUS_CLIENTE.INATIVO:
    case STATUS_CLIENTE.EM_ATRASO:
      return cliente.status === filtroId
    default:
      return true
  }
}

/** Applies the free-text search against name, id, and phone. */
export function matchesSearchTerm(cliente, term) {
  if (!term) return true
  const needle = term.toLowerCase()
  return (
    cliente.nome.toLowerCase().includes(needle) ||
    cliente.id.toLowerCase().includes(needle) ||
    cliente.telefone.includes(needle.replace(/\D/g, ''))
  )
}
