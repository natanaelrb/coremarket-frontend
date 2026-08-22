/**
 * Formats a number as Brazilian Real currency (R$ 1.234,56).
 */
export function formatCurrency(value) {
  const number = Number(value) || 0
  return number.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  })
}
