// Tipos de movimentação de estoque e suas configurações visuais.
//
// Espelha o enum TipoMovimentacao no backend (Spring Boot).

export const MOVEMENT_TYPES = {
  ENTRADA: 'ENTRADA',
  SAIDA: 'SAIDA',
  AJUSTE: 'AJUSTE',
  PERDA: 'PERDA',
  TRANSFERENCIA: 'TRANSFERENCIA',
  DEVOLUCAO_CLIENTE: 'DEVOLUCAO_CLIENTE',
  DEVOLUCAO_FORNECEDOR: 'DEVOLUCAO_FORNECEDOR',
  INVENTARIO: 'INVENTARIO',
};

export const MOVEMENT_TYPE_CONFIG = {
  [MOVEMENT_TYPES.ENTRADA]: {
    label: 'Entrada',
    icon: 'ArrowUp',
    color: '#16A34A',
    bg: '#DCFCE7',
    text: 'text-emerald-700',
  },

  [MOVEMENT_TYPES.SAIDA]: {
    label: 'Saída',
    icon: 'ArrowDown',
    color: '#DC2626',
    bg: '#FEE2E2',
    text: 'text-red-700',
  },

  [MOVEMENT_TYPES.AJUSTE]: {
    label: 'Ajuste',
    icon: 'SlidersHorizontal',
    color: '#2563EB',
    bg: '#DBEAFE',
    text: 'text-blue-700',
  },

  [MOVEMENT_TYPES.PERDA]: {
    label: 'Perda',
    icon: 'AlertTriangle',
    color: '#D97706',
    bg: '#FEF3C7',
    text: 'text-amber-700',
  },

  [MOVEMENT_TYPES.TRANSFERENCIA]: {
    label: 'Transferência',
    icon: 'ArrowLeftRight',
    color: '#0284C7',
    bg: '#E0F2FE',
    text: 'text-sky-700',
  },

  [MOVEMENT_TYPES.DEVOLUCAO_CLIENTE]: {
    label: 'Devolução cliente',
    icon: 'Undo2',
    color: '#7C3AED',
    bg: '#EDE9FE',
    text: 'text-violet-700',
  },

  [MOVEMENT_TYPES.DEVOLUCAO_FORNECEDOR]: {
    label: 'Devolução fornecedor',
    icon: 'Redo2',
    color: '#EA580C',
    bg: '#FFEDD5',
    text: 'text-orange-700',
  },

  [MOVEMENT_TYPES.INVENTARIO]: {
    label: 'Inventário',
    icon: 'ClipboardList',
    color: '#475569',
    bg: '#F1F5F9',
    text: 'text-slate-700',
  },
};