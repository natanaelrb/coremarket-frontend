export const BucketKind = Object.freeze({ AHEAD: 'AHEAD', LATE: 'LATE', CURRENT: 'CURRENT' });

/** Tabela "Vencimentos próximos" (dias até vencer). */
export const PROXIMOS_BUCKETS = [
  { id: 'VENCE_HOJE',   label: 'Vence hoje',      kind: BucketKind.AHEAD, min: 0,  max: 0 },
  { id: 'PROX_7',       label: 'Próximos 7 dias', kind: BucketKind.AHEAD, min: 1,  max: 7 },
  { id: 'PROX_8_15',    label: '8 - 15 dias',     kind: BucketKind.AHEAD, min: 8,  max: 15 },
  { id: 'PROX_16_30',   label: '16 - 30 dias',    kind: BucketKind.AHEAD, min: 16, max: 30 },
  { id: 'PROX_30_MAIS', label: '+ 30 dias',       kind: BucketKind.AHEAD, min: 31, max: Infinity },
];

/** Tabela "Aging de recebíveis (atraso)". */
export const AGING_BUCKETS = [
  { id: 'AGING_A_VENCER', label: 'A vencer',    kind: BucketKind.CURRENT, tone: 'green' },
  { id: 'AGING_1_7',      label: '1 - 7 dias',  kind: BucketKind.LATE, min: 1,  max: 7,        tone: 'orange' },
  { id: 'AGING_8_30',     label: '8 - 30 dias', kind: BucketKind.LATE, min: 8,  max: 30,       tone: 'orange' },
  { id: 'AGING_31_60',    label: '31 - 60 dias',kind: BucketKind.LATE, min: 31, max: 60,       tone: 'red' },
  { id: 'AGING_61_90',    label: '61 - 90 dias',kind: BucketKind.LATE, min: 61, max: 90,       tone: 'red' },
  { id: 'AGING_90_MAIS',  label: '+ 90 dias',   kind: BucketKind.LATE, min: 91, max: Infinity, tone: 'red' },
];

export const VENCIDAS_BUCKET = { id: 'VENCIDAS', label: 'Vencidas', kind: BucketKind.LATE, min: 1, max: Infinity };

export const ALL_BUCKETS = [...PROXIMOS_BUCKETS, ...AGING_BUCKETS, VENCIDAS_BUCKET];

/** Opções do filtro "Vencimento". */
export const VENCIMENTO_FILTER_OPTIONS = [
  { value: 'TODOS', label: 'Todos' },
  ...PROXIMOS_BUCKETS.map((b) => ({ value: b.id, label: b.label })),
  { value: VENCIDAS_BUCKET.id, label: 'Vencidas (todas)' },
  ...AGING_BUCKETS.filter((b) => b.kind === BucketKind.LATE).map((b) => ({ value: b.id, label: `Vencidas há ${b.label.toLowerCase()}` })),
];

/** Janelas do card "Previsão de recebimentos" (dias a partir de hoje). */
export const PREVISAO_JANELAS = [
  { id: 'SEMANA',      label: 'Esta semana',      min: 0,  max: 7 },
  { id: 'PROX_SEMANA', label: 'Próxima semana',   min: 8,  max: 14 },
  { id: 'QUINZE',      label: 'Próximos 15 dias', min: 0,  max: 15 },
  { id: 'TRINTA',      label: 'Próximos 30 dias', min: 0,  max: 30 },
  { id: 'MAIS_30',     label: '+ 30 dias',        min: 31, max: Infinity },
];
