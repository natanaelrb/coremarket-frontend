import { useState } from 'react'

/** Owns which modal is open from the client detail header (editar/pagamento). */
export function useClienteDetalheModals() {
  const [modal, setModal] = useState(null) // 'editar' | 'pagamento' | null

  return {
    modal,
    abrirEditar: () => setModal('editar'),
    abrirPagamento: () => setModal('pagamento'),
    fechar: () => setModal(null),
  }
}
