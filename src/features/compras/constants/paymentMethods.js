// Formas de pagamento aceitas para compras junto a fornecedores.
export const FORMAS_PAGAMENTO = {
  A_VISTA: "a_vista",
  PIX: "pix",
  PARCELADO_15: "parcelado_15",
  PARCELADO_30: "parcelado_30",
  PARCELADO_2856: "parcelado_28_56",
  PARCELADO_3060: "parcelado_30_60",
};

export const FORMA_PAGAMENTO_LABELS = {
  [FORMAS_PAGAMENTO.A_VISTA]: "À vista",
  [FORMAS_PAGAMENTO.PIX]: "Pix",
  [FORMAS_PAGAMENTO.PARCELADO_15]: "15 dias",
  [FORMAS_PAGAMENTO.PARCELADO_30]: "30 dias",
  [FORMAS_PAGAMENTO.PARCELADO_2856]: "28/56 dias",
  [FORMAS_PAGAMENTO.PARCELADO_3060]: "30/60 dias",
};

export const FORMA_PAGAMENTO_OPTIONS = [
  { value: "todas", label: "Todas as formas" },
  ...Object.entries(FORMA_PAGAMENTO_LABELS).map(([value, label]) => ({ value, label })),
];

export const PARCELA_STATUS = {
  PENDENTE: "pendente",
  PAGA: "paga",
  ATRASADA: "atrasada",
};

export const PARCELA_STATUS_LABELS = {
  [PARCELA_STATUS.PENDENTE]: "Pendente",
  [PARCELA_STATUS.PAGA]: "Paga",
  [PARCELA_STATUS.ATRASADA]: "Atrasada",
};
