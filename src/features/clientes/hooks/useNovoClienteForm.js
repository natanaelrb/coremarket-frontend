import { useState } from 'react'
import { validateNovoCliente } from '../utils/validators.js'

const INITIAL_FORM = {
  nomeCompleto: '',
  dataNascimento: '',
  genero: '',
  documento: '',
  telefone: '',
  whatsapp: '',
  email: '',
  cep: '',
  rua: '',
  numero: '',
  complemento: '',
  bairro: '',
  estado: '',
  limiteCredito: '',
  prazoPagamento: '',
  status: 'ATIVO',
  observacoes: '',
}

/**
 * Owns the "Novo cliente" / edit-cliente form state and validation.
 * @param {import('../types/cliente.types.js').Cliente|null} clienteParaEditar
 */
export function useNovoClienteForm(clienteParaEditar, onSubmit) {
  const [form, setForm] = useState(() =>
    clienteParaEditar
      ? {
          nomeCompleto: clienteParaEditar.nome,
          dataNascimento: clienteParaEditar.dataNascimento,
          genero: clienteParaEditar.genero,
          documento: clienteParaEditar.documento,
          telefone: clienteParaEditar.telefone,
          whatsapp: clienteParaEditar.whatsapp,
          email: clienteParaEditar.email,
          cep: clienteParaEditar.endereco?.cep ?? '',
          rua: clienteParaEditar.endereco?.rua ?? '',
          numero: clienteParaEditar.endereco?.numero ?? '',
          complemento: clienteParaEditar.endereco?.complemento ?? '',
          bairro: clienteParaEditar.endereco?.bairro ?? '',
          estado: clienteParaEditar.endereco?.estado ?? '',
          limiteCredito: String(clienteParaEditar.limiteCredito ?? ''),
          prazoPagamento: clienteParaEditar.prazoPagamento ?? '',
          status: clienteParaEditar.status,
          observacoes: clienteParaEditar.observacoes ?? '',
        }
      : INITIAL_FORM,
  )
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  function setField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  // TODO(api): POST /api/clientes (novo) ou PUT /api/clientes/{id} (edição)
  async function submit() {
    const validation = validateNovoCliente(form)
    setErrors(validation)
    if (Object.keys(validation).length > 0) return false

    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 500))
    setSubmitting(false)
    onSubmit?.(form)
    return true
  }

  return { form, setField, errors, submitting, submit }
}
