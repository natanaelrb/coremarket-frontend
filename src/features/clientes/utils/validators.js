/** Minimal client-form validation, mirroring backend @NotBlank/@Pattern rules. */
export function validateNovoCliente(form) {
  const errors = {}
  if (!form.nomeCompleto?.trim()) errors.nomeCompleto = 'Informe o nome completo.'
  if (!form.documento?.trim()) errors.documento = 'Informe o CPF ou CNPJ.'
  if (!form.telefone?.trim()) errors.telefone = 'Informe o telefone.'
  if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) errors.email = 'E-mail inválido.'
  if (!form.rua?.trim()) errors.rua = 'Informe a rua.'
  if (!form.numero?.trim()) errors.numero = 'Informe o número.'
  if (!form.bairro?.trim()) errors.bairro = 'Informe o bairro.'
  if (!form.estado?.trim()) errors.estado = 'Informe o estado.'
  return errors
}

/** Validates the "Registrar pagamento" form. */
export function validateRegistrarPagamento(form) {
  const errors = {}
  if (!form.contaId) errors.contaId = 'Selecione a conta.'
  if (!form.valor || Number(form.valor) <= 0) errors.valor = 'Informe um valor válido.'
  if (!form.formaPagamento) errors.formaPagamento = 'Selecione a forma de pagamento.'
  if (!form.data) errors.data = 'Informe a data.'
  return errors
}
