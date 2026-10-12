// Status possíveis de uma movimentação de estoque.
// Espelha o enum StatusMovimentacao no backend (Spring Boot).

export const MOVEMENT_STATUS = {
  CONCLUIDA: 'CONCLUIDA',
  PENDENTE: 'PENDENTE',
  CANCELADA: 'CANCELADA',
  ESTORNADA: 'ESTORNADA',
};

export const MOVEMENT_STATUS_CONFIG = {
  [MOVEMENT_STATUS.CONCLUIDA]: {
    label: 'Concluída',
    bg: 'bg-emerald-50',
    text: 'text-emerald-700',
    dot: 'bg-emerald-500',
    border: 'border-emerald-200',
  },

  [MOVEMENT_STATUS.PENDENTE]: {
    label: 'Pendente',
    bg: 'bg-amber-50',
    text: 'text-amber-700',
    dot: 'bg-amber-500',
    border: 'border-amber-200',
  },

  [MOVEMENT_STATUS.CANCELADA]: {
    label: 'Cancelada',
    bg: 'bg-slate-100',
    text: 'text-slate-600',
    dot: 'bg-slate-400',
    border: 'border-slate-200',
  },

  [MOVEMENT_STATUS.ESTORNADA]: {
    label: 'Estornada',
    bg: 'bg-red-50',
    text: 'text-red-700',
    dot: 'bg-red-500',
    border: 'border-red-200',
  },
};