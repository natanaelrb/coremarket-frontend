import { StatusPagamento } from './statusPagamento.js';
import { TipoPagamento } from './tipoPagamento.js';
import { FormaPagamento, FORMA_PAGAMENTO_META } from './formaPagamento.js';
import { OrigemPagamento, ORIGEM_PAGAMENTO_META } from './origemPagamento.js';

const withTodos = (label) => [{ value: 'TODOS', label }];

/** Dropdown options for the filters bar — each starts with a "Todos" option. */
export const TIPO_OPTIONS = [
  ...withTodos('Todos'),
  { value: TipoPagamento.RECEBIMENTO, label: 'Recebimento' },
  { value: TipoPagamento.PAGAMENTO, label: 'Pagamento' },
];

export const STATUS_OPTIONS = [
  ...withTodos('Todos'),
  { value: StatusPagamento.RECEBIDO, label: 'Recebido' },
  { value: StatusPagamento.PAGO, label: 'Pago' },
  { value: StatusPagamento.PENDENTE, label: 'Pendente' },
  { value: StatusPagamento.VENCIDO, label: 'Vencido' },
  { value: StatusPagamento.CANCELADO, label: 'Cancelado' },
];

export const FORMA_OPTIONS = [
  ...withTodos('Todos'),
  ...Object.values(FormaPagamento).map((value) => ({
    value,
    label: FORMA_PAGAMENTO_META[value].label,
  })),
];

export const ORIGEM_OPTIONS = [
  ...withTodos('Todos'),
  ...Object.values(OrigemPagamento).map((value) => ({
    value,
    label: ORIGEM_PAGAMENTO_META[value].label,
  })),
];

export const PERIODO_OPTIONS = [
  { value: 'vencimento', label: 'Data de vencimento' },
  { value: 'criacao', label: 'Data de criação' },
  { value: 'pagamento', label: 'Data de pagamento' },
];

export const REGISTROS_POR_PAGINA_OPTIONS = [
  { value: '10', label: '10' },
  { value: '25', label: '25' },
  { value: '50', label: '50' },
  { value: '100', label: '100' },
];
