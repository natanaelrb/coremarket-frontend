const DATE_FORMATTER = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
const TIME_FORMATTER = new Intl.DateTimeFormat('pt-BR', { hour: '2-digit', minute: '2-digit' });

/**
 * Formats an ISO date/datetime string as "dd/mm/aaaa".
 * @param {string|null|undefined} isoDate
 * @returns {string}
 */
export function formatDate(isoDate) {
  if (!isoDate) return '—';
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return '—';
  return DATE_FORMATTER.format(date);
}

/**
 * Formats an ISO datetime string as "dd/mm/aaaa HH:mm".
 * @param {string|null|undefined} isoDateTime
 * @returns {string}
 */
export function formatDateTime(isoDateTime) {
  if (!isoDateTime) return '—';
  const date = new Date(isoDateTime);
  if (Number.isNaN(date.getTime())) return '—';
  return `${DATE_FORMATTER.format(date)} ${TIME_FORMATTER.format(date)}`;
}

/**
 * Formats an ISO datetime string as "HH:mm".
 * @param {string|null|undefined} isoDateTime
 * @returns {string}
 */
export function formatTime(isoDateTime) {
  if (!isoDateTime) return '—';
  const date = new Date(isoDateTime);
  if (Number.isNaN(date.getTime())) return '—';
  return TIME_FORMATTER.format(date);
}

/**
 * Returns a short weekday/day label such as "18/08" used in chart axes.
 * @param {string} isoDate
 * @returns {string}
 */
export function formatShortDate(isoDate) {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return '';
  return `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}`;
}

/**
 * Builds the human label shown in the period picker trigger, e.g.
 * "Este mês (01/08/2026 - 18/08/2026)".
 * @param {string} presetLabel
 * @param {string} startIso
 * @param {string} endIso
 * @returns {string}
 */
export function formatPeriodoLabel(presetLabel, startIso, endIso) {
  return `${presetLabel} (${formatDate(startIso)} - ${formatDate(endIso)})`;
}
