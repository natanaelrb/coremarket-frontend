/**
 * Espelha o enum StatusVenda do backend Spring Boot.
 * TODO(api): validar valores exatos com o enum StatusVenda em br.com.coremarket.venda.enums
 */
export const STATUS_VENDA = {
  CONCLUIDA: 'CONCLUIDA',
  CANCELADA: 'CANCELADA',
  PENDENTE: 'PENDENTE',
  EM_ANDAMENTO: 'EM_ANDAMENTO',
};

export const STATUS_VENDA_CONFIG = {
  [STATUS_VENDA.CONCLUIDA]: { label: 'Concluída', variant: 'success' },
  [STATUS_VENDA.CANCELADA]: { label: 'Cancelada', variant: 'warning' },
  [STATUS_VENDA.PENDENTE]: { label: 'Pendente', variant: 'info' },
  [STATUS_VENDA.EM_ANDAMENTO]: { label: 'Em andamento', variant: 'accent' },
};

export const STATUS_VENDA_OPTIONS = [
  { value: 'TODOS', label: 'Todos' },
  ...Object.entries(STATUS_VENDA_CONFIG).map(([value, cfg]) => ({ value, label: cfg.label })),
];

