/** Formats a raw digit string as CPF (11 digits) or CNPJ (14 digits). */
export function formatDocument(raw) {
  if (!raw) return '--'
  const digits = raw.replace(/\D/g, '')
  if (digits.length === 11) {
    return digits.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
  }
  if (digits.length === 14) {
    return digits.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
  }
  return raw
}
