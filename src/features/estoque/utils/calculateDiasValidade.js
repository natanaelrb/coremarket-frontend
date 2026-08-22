const MS_PER_DAY = 1000 * 60 * 60 * 24

/**
 * Returns the (possibly negative) number of whole days between today and a
 * product's validade (expiry) date. Negative means already expired.
 */
export function calculateDiasValidade(isoDate) {
  if (!isoDate) return null
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const target = new Date(isoDate)
  target.setHours(0, 0, 0, 0)
  return Math.round((target - today) / MS_PER_DAY)
}

/**
 * Human readable label for a validade date, matching the design's
 * "21 dias" / "Vence hoje" / "Vencido" phrasing.
 */
export function formatValidadeLabel(isoDate) {
  if (!isoDate) return '-'
  const dias = calculateDiasValidade(isoDate)
  if (dias < 0) return 'Vencido'
  if (dias === 0) return 'Vence hoje'
  return dias === 1 ? '1 dia' : `${dias} dias`
}
