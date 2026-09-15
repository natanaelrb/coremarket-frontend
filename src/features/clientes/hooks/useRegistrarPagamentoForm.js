import { useState } from 'react'
import { validateRegistrarPagamento } from '../utils/validators.js'

/**
 * Owns the "Registrar pagamento" modal form state.
 * @param {import('../types/cliente.types.js').Cliente} cliente
 * @param {Array} contasEmAberto
 */
export function useRegistrarPagamentoForm(cliente, contasEmAberto, onConfirm) {
  const [form, setForm] = useState({
    contaId: contasEmAberto?.[0]?.id ?? '',
    valor: '',
    formaPagamento: 'PIX',
    data: new Date().toISOString().slice(0, 10),
    observacao: '',
  })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  function setField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  // TODO(api): POST /api/clientes/{clienteId}/pagamentos
  async function confirmar() {
    const validation = validateRegistrarPagamento(form)
    setErrors(validation)
    if (Object.keys(validation).length > 0) return false

    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 500))
    setSubmitting(false)
    onConfirm?.(form)
    return true
  }

  return { form, setField, errors, submitting, confirmar }
}
