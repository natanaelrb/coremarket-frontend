/**
 * Mirrors the backend `StatusPagamento` enum (Spring Boot).
 * @readonly
 * @enum {string}
 */
export const StatusPagamento = Object.freeze({
  RECEBIDO: 'RECEBIDO',
  PAGO: 'PAGO',
  PENDENTE: 'PENDENTE',
  VENCIDO: 'VENCIDO',
  CANCELADO: 'CANCELADO',
});

/** UI metadata (label + badge tone) keyed by StatusPagamento. */
export const STATUS_PAGAMENTO_META = Object.freeze({
  [StatusPagamento.RECEBIDO]: { label: 'Recebido', tone: 'success' },
  [StatusPagamento.PAGO]: { label: 'Pago', tone: 'success' },
  [StatusPagamento.PENDENTE]: { label: 'Pendente', tone: 'warning' },
  [StatusPagamento.VENCIDO]: { label: 'Vencido', tone: 'danger' },
  [StatusPagamento.CANCELADO]: { label: 'Cancelado', tone: 'neutral' },
});
