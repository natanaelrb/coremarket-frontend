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
    bg: 'bg-emerald-500/15',
    text: 'text-emerald-400',
    dot: 'bg-emerald-400',
  },
  [MOVEMENT_STATUS.PENDENTE]: {
    label: 'Pendente',
    bg: 'bg-amber-500/15',
    text: 'text-amber-400',
    dot: 'bg-amber-400',
  },
  [MOVEMENT_STATUS.CANCELADA]: {
    label: 'Cancelada',
    bg: 'bg-slate-500/15',
    text: 'text-slate-400',
    dot: 'bg-slate-400',
  },
  [MOVEMENT_STATUS.ESTORNADA]: {
    label: 'Estornada',
    bg: 'bg-red-500/15',
    text: 'text-red-400',
    dot: 'bg-red-400',
  },
};
