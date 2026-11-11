/** Séries do gráfico "Evolução das contas a receber". */
export const CHART_SERIES = [
  { key: 'aVencer',   label: 'A vencer',  color: '#3B82F6', area: true },
  { key: 'vencido',   label: 'Vencido',   color: '#EF4444', area: true },
  { key: 'recebido',  label: 'Recebido',  color: '#22C55E', area: true },
  { key: 'negociado', label: 'Negociado', color: '#F59E0B', area: false },
  { key: 'cancelado', label: 'Cancelado', color: '#8B5CF6', area: false },
];

export const GRANULARIDADE_OPTIONS = [
  { value: 'DIARIO', label: 'Diário' },
  { value: 'SEMANAL', label: 'Semanal' },
  { value: 'QUINZENAL', label: 'Quinzenal' },
  { value: 'MENSAL', label: 'Mensal' },
];
