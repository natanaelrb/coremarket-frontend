// Configuração central dos status de produto.
// Usado por StatusBadge, filtros e KPIs para manter cores/labels consistentes.

export const PRODUCT_STATUS = {
  OK: 'ok',
  VENCE_EM_BREVE: 'vence_em_breve',
  VENCE_HOJE: 'vence_hoje',
  VENCIDO: 'vencido',
  ESTOQUE_BAIXO: 'estoque_baixo',
  SEM_ESTOQUE: 'sem_estoque',
};

export const STATUS_CONFIG = {
  [PRODUCT_STATUS.OK]: {
    label: 'OK',
    dotClass: 'bg-emerald-500',
    textClass: 'text-emerald-600 dark:text-emerald-400',
    bgClass: 'bg-emerald-50 dark:bg-emerald-500/10',
  },
  [PRODUCT_STATUS.VENCE_EM_BREVE]: {
    label: 'Vence em breve',
    dotClass: 'bg-amber-500',
    textClass: 'text-amber-600 dark:text-amber-400',
    bgClass: 'bg-amber-50 dark:bg-amber-500/10',
  },
  [PRODUCT_STATUS.VENCE_HOJE]: {
    label: 'Vence hoje',
    dotClass: 'bg-orange-500',
    textClass: 'text-orange-600 dark:text-orange-400',
    bgClass: 'bg-orange-50 dark:bg-orange-500/10',
  },
  [PRODUCT_STATUS.VENCIDO]: {
    label: 'Vencido',
    dotClass: 'bg-red-500',
    textClass: 'text-red-600 dark:text-red-400',
    bgClass: 'bg-red-50 dark:bg-red-500/10',
  },
  [PRODUCT_STATUS.ESTOQUE_BAIXO]: {
    label: 'Estoque baixo',
    dotClass: 'bg-amber-500',
    textClass: 'text-amber-600 dark:text-amber-400',
    bgClass: 'bg-amber-50 dark:bg-amber-500/10',
  },
  [PRODUCT_STATUS.SEM_ESTOQUE]: {
    label: 'Sem estoque',
    dotClass: 'bg-red-500',
    textClass: 'text-red-600 dark:text-red-400',
    bgClass: 'bg-red-50 dark:bg-red-500/10',
  },
};

export const STOCK_SITUATION_OPTIONS = [
  { value: 'todos', label: 'Todos' },
  { value: 'disponivel', label: 'Disponível' },
  { value: 'baixo', label: 'Estoque baixo' },
  { value: 'sem_estoque', label: 'Sem estoque' },
  { value: 'em_transito', label: 'Em trânsito' },
];

export const PRODUCT_TYPE_OPTIONS = [
  { value: 'todos', label: 'Todos' },
  { value: 'revenda', label: 'Revenda' },
  { value: 'materia_prima', label: 'Matéria-prima' },
  { value: 'uso_consumo', label: 'Uso e consumo' },
  { value: 'servico', label: 'Serviço' },
];
