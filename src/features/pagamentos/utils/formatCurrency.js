/**
 * Formats a number as Brazilian Real currency, e.g. 1234.5 -> "R$ 1.234,50".
 * @param {number} value
 * @returns {string}
 */
export function formatCurrency(value) {
  const safeValue = Number.isFinite(value) ? value : 0;
  return safeValue.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });
}

/**
 * Formats a number as a compact percentage string, e.g. 0.018 -> "1,80%".
 * @param {number} ratio - fraction (0.018 = 1.8%)
 * @param {number} [digits=1]
 * @returns {string}
 */
export function formatPercent(ratio, digits = 1) {
  const safeValue = Number.isFinite(ratio) ? ratio : 0;
  return `${safeValue.toLocaleString('pt-BR', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  })}%`;
}
