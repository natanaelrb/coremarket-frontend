/** Espelha o enum StatusContaReceber do backend Spring Boot. */
export const StatusConta = Object.freeze({
  A_VENCER: 'A_VENCER',
  VENCIDA: 'VENCIDA',
  PARCIAL: 'PARCIAL',
  NEGOCIADA: 'NEGOCIADA',
  PAGA: 'PAGA',
  CANCELADA: 'CANCELADA',
});

export const STATUS_ORDER = Object.values(StatusConta);

export const STATUS_META = {
  A_VENCER:  { label: 'A vencer',  longLabel: 'A vencer',          tone: 'blue' },
  VENCIDA:   { label: 'Vencida',   longLabel: 'Vencida',           tone: 'red' },
  PARCIAL:   { label: 'Parcial',   longLabel: 'Parcialmente paga', tone: 'amber' },
  NEGOCIADA: { label: 'Negociada', longLabel: 'Negociada',         tone: 'purple' },
  PAGA:      { label: 'Pago',      longLabel: 'Paga',              tone: 'green' },
  CANCELADA: { label: 'Cancelada', longLabel: 'Cancelada',         tone: 'gray' },
};

/** Exposição financeira (visão de saldo) — independente do status exibido. */
export const Exposure = Object.freeze({
  A_VENCER: 'A_VENCER', VENCIDO: 'VENCIDO', NEGOCIADA: 'NEGOCIADA', PAGA: 'PAGA', CANCELADA: 'CANCELADA',
});

/** Cartões de resumo por status (acima da tabela). */
export const SUMMARY_TABS = [
  { id: 'TODOS',     label: 'Todas',              tone: 'gray' },
  { id: 'A_VENCER',  label: 'A vencer',           tone: 'blue' },
  { id: 'VENCIDA',   label: 'Vencidas',           tone: 'red' },
  { id: 'PARCIAL',   label: 'Parcialmente pagas', tone: 'amber' },
  { id: 'NEGOCIADA', label: 'Negociadas',         tone: 'purple' },
  { id: 'PAGA',      label: 'Pagas',              tone: 'green' },
  { id: 'CANCELADA', label: 'Canceladas',         tone: 'gray' },
];

/** Legenda do card "Status das contas". */
export const STATUS_LEGEND = [
  { label: 'A vencer',          description: 'Dentro do prazo',     tone: 'blue' },
  { label: 'Vencendo hoje',     description: 'Vencimento hoje',     tone: 'orange' },
  { label: 'Vencida',           description: 'Prazo expirado',      tone: 'red' },
  { label: 'Parcialmente paga', description: 'Parte já recebida',   tone: 'amber' },
  { label: 'Negociada',         description: 'Existe um acordo',    tone: 'purple' },
  { label: 'Pago',              description: 'Totalmente quitada',  tone: 'green' },
  { label: 'Cancelada',         description: 'Conta cancelada',     tone: 'gray' },
];
