// Tipos de movimentação de estoque e suas configurações visuais.
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
    color: '#22C55E',
    bg: 'rgba(34, 197, 94, 0.12)',
    text: 'text-emerald-400',
  },
  [MOVEMENT_TYPES.SAIDA]: {
    label: 'Saída',
    icon: 'ArrowDown',
    color: '#EF4444',
    bg: 'rgba(239, 68, 68, 0.12)',
    text: 'text-red-400',
  },
  [MOVEMENT_TYPES.AJUSTE]: {
    label: 'Ajuste',
    icon: 'SlidersHorizontal',
    color: '#3B82F6',
    bg: 'rgba(59, 130, 246, 0.12)',
    text: 'text-blue-400',
  },
  [MOVEMENT_TYPES.PERDA]: {
    label: 'Perda',
    icon: 'AlertTriangle',
    color: '#F59E0B',
    bg: 'rgba(245, 158, 11, 0.12)',
    text: 'text-amber-400',
  },
  [MOVEMENT_TYPES.TRANSFERENCIA]: {
    label: 'Transferência',
    icon: 'ArrowLeftRight',
    color: '#A855F7',
    bg: 'rgba(168, 85, 247, 0.12)',
    text: 'text-purple-400',
  },
  [MOVEMENT_TYPES.DEVOLUCAO_CLIENTE]: {
    label: 'Devolução Cli.',
    icon: 'Undo2',
    color: '#EC4899',
    bg: 'rgba(236, 72, 153, 0.12)',
    text: 'text-pink-400',
  },
  [MOVEMENT_TYPES.DEVOLUCAO_FORNECEDOR]: {
    label: 'Devolução Forn.',
    icon: 'Redo2',
    color: '#F97316',
    bg: 'rgba(249, 115, 22, 0.12)',
    text: 'text-orange-400',
  },
  [MOVEMENT_TYPES.INVENTARIO]: {
    label: 'Inventário',
    icon: 'ClipboardList',
    color: '#14B8A6',
    bg: 'rgba(20, 184, 166, 0.12)',
    text: 'text-teal-400',
  },
};
