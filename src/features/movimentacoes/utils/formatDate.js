/**
 * Formats an ISO date string (yyyy-mm-dd) into pt-BR display format (dd/mm/yyyy).
 */
export function formatDate(date) {
  if (!date) return '-'

  const d = date instanceof Date ? date : new Date(date)

  if (Number.isNaN(d.getTime())) return '-'

  return d.toLocaleDateString('pt-BR')
}

/**
 * Formats a full ISO datetime string into "dd/mm HH:mm" for activity feeds.
 */
export function formatDateTime(isoDateTime) {
  if (!isoDateTime) return '-'
  const date = new Date(isoDateTime)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  return `${day}/${month} ${hours}:${minutes}`
}

export function formatFullDateTime(isoString) {
  const date = new Date(isoString);
  const dateLabel = date.toLocaleDateString('pt-BR');
  const timeLabel = date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  return `${dateLabel} às ${timeLabel}`;
}

export function formatShortDate(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString('pt-BR');
}
