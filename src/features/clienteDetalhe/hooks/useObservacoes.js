import { useState } from 'react'

/** Owns the editable "Observações" text for the client detail tab. */
export function useObservacoes(clienteId, valorInicial, onSalvar) {
  const [texto, setTexto] = useState(valorInicial ?? '')
  const [salvando, setSalvando] = useState(false)
  const [editando, setEditando] = useState(false)

  // TODO(api): PATCH /api/clientes/{clienteId} { observacoes }
  async function salvar() {
    setSalvando(true)
    await new Promise((r) => setTimeout(r, 400))
    setSalvando(false)
    setEditando(false)
    onSalvar?.(texto)
  }

  return { texto, setTexto, editando, setEditando, salvando, salvar }
}
