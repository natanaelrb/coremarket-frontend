/** 86.4 -> "86,4%" */
export const formatPercent = (value, digits = 1) =>
  `${(Number(value) || 0).toFixed(digits).replace('.', ',')}%`;

/** 1250 -> "1.250" */
export const formatInt = (value) => Math.round(Number(value) || 0).toLocaleString('pt-BR');

/** 50000 -> "50K" (eixos de gráfico) */
export const formatCompact = (value) =>
  Math.abs(value) >= 1000 ? `${Math.round(value / 1000)}K` : String(Math.round(value));

/** Formata um número com duas casas decimais no padrão brasileiro. */
export function formatDecimal(value) {
  return Number(value ?? 0).toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}