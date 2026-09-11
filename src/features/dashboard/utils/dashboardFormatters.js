import { LOCALE, MOEDA } from '../constants/dashboardConstants';

/** Formata um número como moeda BRL (ex: R$ 1.234,00). */
export function formatCurrency(value) {
  return new Intl.NumberFormat(LOCALE, { style: 'currency', currency: MOEDA }).format(value ?? 0);
}

/** Formata um número inteiro com separador de milhar pt-BR. */
export function formatNumber(value) {
  return new Intl.NumberFormat(LOCALE).format(value ?? 0);
}

/** Formata uma variação percentual com sinal (+/-) e uma casa decimal. */
export function formatPercent(value, { withSign = true } = {}) {
  const sign = withSign && value > 0 ? '+' : '';
  return `${sign}${(value ?? 0).toFixed(1)}%`;
}

/** Formata uma data ISO (yyyy-mm-dd) para dd/mm/yyyy. */
export function formatDate(isoDate) {
  const date = new Date(`${isoDate}T00:00:00`);
  return new Intl.DateTimeFormat(LOCALE).format(date);
}

/** Trunca texto longo (ex: nomes de produtos em tabelas) preservando legibilidade. */
export function truncateText(text, maxLength = 24) {
  if (!text || text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 1)}…`;
}
