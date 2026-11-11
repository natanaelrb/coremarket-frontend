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


/** Formata uma data ISO como "dd/MM". */
export function formatDayMonth(isoDate) {
  if (!isoDate) return '--';

  const [, month, day] = isoDate.split('-');
  return `${day}/${month}`;
}

/** Formata uma data ISO como "MM/yyyy". */
export function formatMonthYear(isoDate) {
  if (!isoDate) return '--';

  const [year, month] = isoDate.split('-');
  return `${month}/${year}`;
}

/** Formata uma data ISO no padrão brasileiro dd/MM/yyyy. */
export function formatDateBR(isoDate) {
  return formatDate(isoDate);
}

/** Formata data e hora no padrão brasileiro dd/MM/yyyy - HH:mm. */
export function formatDateTimeBR(isoDateTime) {
  return formatDateTime(isoDateTime);
}