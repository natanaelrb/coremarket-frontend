// Utilitários puros de formatação numérica.

export function formatQuantitySigned(quantidade, unidade = 'un') {
  const sign = quantidade > 0 ? '+' : '';
  return `${sign}${quantidade} ${unidade}.`;
}

export function formatNumber(value) {
  return new Intl.NumberFormat('pt-BR').format(value);
}

export function formatPercentual(value) {
  const sign = value > 0 ? '+' : '';
  return `${sign}${value}%`;
}
