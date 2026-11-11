/* Datas trafegam como ISO "YYYY-MM-DD" (mesmo formato do LocalDate no Spring Boot). */
const pad = (n) => String(n).padStart(2, '0');

export const parseISODate = (iso) => {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d);
};
export const toISODate = (date) => `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
export const addDays = (iso, n) => {
  const d = parseISODate(iso);
  d.setDate(d.getDate() + n);
  return toISODate(d);
};
/** Diferença em dias (a - b). */
export const diffInDays = (a, b) => Math.round((parseISODate(a) - parseISODate(b)) / 86400000);
export const startOfMonthISO = (iso) => `${iso.slice(0, 7)}-01`;
export const endOfMonthISO = (iso) => {
  const d = parseISODate(iso);
  return toISODate(new Date(d.getFullYear(), d.getMonth() + 1, 0));
};
export const addMonthsISO = (iso, n) => {
  const d = parseISODate(iso);
  return toISODate(new Date(d.getFullYear(), d.getMonth() + n, 1));
};
export const isBetween = (iso, from, to) => Boolean(iso) && iso >= from && iso <= to;
