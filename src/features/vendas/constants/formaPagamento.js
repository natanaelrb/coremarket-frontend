import { Banknote, CreditCard, QrCode, Wallet } from 'lucide-react';

/**
 * Espelha o enum FormaPagamento do backend Spring Boot.
 * TODO(api): validar valores exatos com o enum FormaPagamento em br.com.coremarket.venda.enums
 */
export const FORMA_PAGAMENTO = {
  PIX: 'PIX',
  DINHEIRO: 'DINHEIRO',
  DEBITO: 'DEBITO',
  CREDITO: 'CREDITO',
  DIVIDA: 'DIVIDA',
};


export const FORMA_PAGAMENTO_CONFIG = {
  [FORMA_PAGAMENTO.PIX]: {
    label: 'PIX',
    icon: QrCode,
    color: 'text-green-600',
  },
  [FORMA_PAGAMENTO.DINHEIRO]: {
    label: 'Dinheiro',
    icon: Banknote,
    color: 'text-amber-600',
  },
  [FORMA_PAGAMENTO.DEBITO]: {
    label: 'Débito',
    icon: CreditCard,
    color: 'text-blue-600',
  },
  [FORMA_PAGAMENTO.CREDITO]: {
    label: 'Crédito',
    icon: CreditCard,
    color: 'text-violet-600',
  },
  [FORMA_PAGAMENTO.DIVIDA]: {
    label: 'Dívida',
    icon: Wallet,
    color: 'text-rose-600',
  },
};


export const FORMA_PAGAMENTO_OPTIONS = [
  { value: 'TODOS', label: 'Todos' },
  ...Object.entries(FORMA_PAGAMENTO_CONFIG).map(([value, cfg]) => ({ value, label: cfg.label })),
];

export const TIPO_VENDA = {
  PAGAMENTO_IMEDIATO: 'PAGAMENTO_IMEDIATO',
  DIVIDA: 'DIVIDA',
};

export const TIPO_VENDA_OPTIONS = [
  {
    value: TIPO_VENDA.PAGAMENTO_IMEDIATO,
    label: 'Pagamento imediato',
    description: 'Cliente paga no ato da venda',
  },
  {
    value: TIPO_VENDA.DIVIDA,
    label: 'Dívida (pagamento posterior)',
    description: 'Valor é lançado na conta do cliente',
  },
];

