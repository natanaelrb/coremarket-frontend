/** Formats an ISO date string ("2026-09-10") as "dd/MM/yyyy". */
export function formatDate(isoDate) {
  if (!isoDate) return '--'
  const [year, month, day] = isoDate.split('-')
  return `${day}/${month}/${year}`
}

/** Formats an ISO date + time as "dd/MM/yyyy - HH:mm". */
export function formatDateTime(isoDateTime) {
  if (!isoDateTime) return '--'
  const [datePart, timePart] = isoDateTime.split('T')
  return `${formatDate(datePart)} - ${timePart?.slice(0, 5) ?? ''}`
}

/** Returns the number of whole days between an ISO date and today. */
export function daysSince(isoDate) {
  if (!isoDate) return 0
  const then = new Date(isoDate)
  const now = new Date()
  return Math.floor((now - then) / (1000 * 60 * 60 * 24))
}
