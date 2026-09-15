import { useState } from 'react'

/**
 * Owns which clients-page modal is open (novo/editar, pagamento, importar,
 * segmentação) and which cliente it targets, so ClientesPage stays a pure
 * composition component.
 */
export function useClientesModals() {
  const [modal, setModal] = useState(null) // 'novo' | 'editar' | 'pagamento' | 'importar' | 'segmentar' | null
  const [clienteAlvo, setClienteAlvo] = useState(null)

  function abrirNovo() {
    setClienteAlvo(null)
    setModal('novo')
  }
  function abrirEditar(cliente) {
    setClienteAlvo(cliente)
    setModal('editar')
  }
  function abrirPagamento(cliente) {
    setClienteAlvo(cliente)
    setModal('pagamento')
  }
  function abrirImportar() {
    setModal('importar')
  }
  function abrirSegmentar() {
    setModal('segmentar')
  }
  function fechar() {
    setModal(null)
    setClienteAlvo(null)
  }

  return { modal, clienteAlvo, abrirNovo, abrirEditar, abrirPagamento, abrirImportar, abrirSegmentar, fechar }
}
