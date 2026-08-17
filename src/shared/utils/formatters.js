/**
 * Formata um valor numérico para moeda brasileira (R$)
 */
export function formatCurrency(value) {
  if (value === null || value === undefined) return 'R$ 0,00'
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

/**
 * Formata uma data ISO (yyyy-mm-dd) para dd/mm/yyyy
 */
export function formatDate(isoDate) {
  if (!isoDate) return '-'
  const [year, month, day] = isoDate.split('-')
  return `${day}/${month}/${year}`
}

/**
 * Retorna quantos dias se passaram desde uma data ISO até hoje
 */
export function daysSince(isoDate) {
  if (!isoDate) return null
  const then = new Date(isoDate)
  const now = new Date('2026-07-15') // data de referência do sistema (mock)
  const diff = Math.floor((now - then) / (1000 * 60 * 60 * 24))
  return diff
}

/**
 * Formata "há X dias" a partir de uma data ISO
 */
export function formatRelativeDays(isoDate) {
  const days = daysSince(isoDate)
  if (days === null) return ''
  if (days <= 0) return 'hoje'
  if (days === 1) return 'há 1 dia'
  return `há ${days} dias`
}

/**
 * Formata CNPJ (00.000.000/0000-00)
 */
export function formatCNPJ(value) {
  const digits = String(value).replace(/\D/g, '')
  if (digits.length !== 14) return value
  return digits.replace(
    /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
    '$1.$2.$3/$4-$5'
  )
}

/**
 * Formata telefone brasileiro
 */
export function formatPhone(value) {
  const digits = String(value).replace(/\D/g, '')
  if (digits.length === 11) {
    return digits.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
  }
  if (digits.length === 10) {
    return digits.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
  }
  return value
}

/**
 * Abrevia números grandes para exibição em eixos de gráfico (ex: 12000 -> 12k)
 */
export function formatCompactNumber(value) {
  if (value >= 1000) return `${(value / 1000).toFixed(0)}k`
  return String(value)
}
