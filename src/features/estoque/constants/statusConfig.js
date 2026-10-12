/**
 * Centraliza os status de estoque e sua apresentação na interface.
 * Mantém labels e tons consistentes entre tabela, filtros e detalhes.
 */
export const STATUS_CONFIG = {
  normal: {
    label: "Normal",
    tone: "success",
  },

  baixo_estoque: {
    label: "Baixo estoque",
    tone: "warning",
  },

  sem_estoque: {
    label: "Sem estoque",
    tone: "danger",
  },

  proximo_validade: {
    label: "Próximo da validade",
    tone: "warning",
  },

  vence_hoje: {
    label: "Vence hoje",
    tone: "danger",
  },

  vencido: {
    label: "Vencido",
    tone: "danger",
  },
};

const DEFAULT_STATUS = {
  label: "Desconhecido",
  tone: "neutral",
};

export function getStatusConfig(status) {
  return STATUS_CONFIG[status] ?? DEFAULT_STATUS;
}