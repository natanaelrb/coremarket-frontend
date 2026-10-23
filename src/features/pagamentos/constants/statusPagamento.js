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
  [StatusPagamento.RECEBIDO]: {
    label: 'Recebido',
    tone: 'green',
  },
  [StatusPagamento.PAGO]: {
    label: 'Pago',
    tone: 'green',
  },
  [StatusPagamento.PENDENTE]: {
    label: 'Pendente',
    tone: 'amber',
  },
  [StatusPagamento.VENCIDO]: {
    label: 'Vencido',
    tone: 'red',
  },
  [StatusPagamento.CANCELADO]: {
    label: 'Cancelado',
    tone: 'neutral',
  },
});