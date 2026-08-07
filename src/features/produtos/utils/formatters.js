// Funções puras de formatação (moeda, data, percentual, números).
// Nenhuma função aqui depende de estado ou de React.

export function formatCurrency(value) {
  if (value === null || value === undefined || Number.isNaN(value)) return '—';
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

export function formatNumber(value) {
  if (value === null || value === undefined || Number.isNaN(value)) return '—';
  return new Intl.NumberFormat('pt-BR').format(value);
}

export function formatPercent(value, decimals = 2) {
  if (value === null || value === undefined || Number.isNaN(value)) return '—';
  return `${value.toFixed(decimals).replace('.', ',')}%`;
}

export function formatDate(dateInput) {
  if (!dateInput) return '—';
  const date = dateInput instanceof Date ? dateInput : new Date(dateInput);
  if (Number.isNaN(date.getTime())) return '—';
  return new Intl.DateTimeFormat('pt-BR').format(date);
}

export function formatWeightKg(value) {
  if (value === null || value === undefined) return '—';
  return `${value.toFixed(2).replace('.', ',')} kg`;
}

export function formatVolumeL(value) {
  if (value === null || value === undefined) return '—';
  return `${value.toFixed(2).replace('.', ',')} L`;
}
