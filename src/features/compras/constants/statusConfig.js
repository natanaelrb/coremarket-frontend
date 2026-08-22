// Configuração central de todos os status possíveis de uma Compra.
// Cada status carrega seu rótulo, cor semântica e cor de fundo/borda usada
// nos badges (StatusBadge) e no gráfico de donut (StatusComprasChart).
export const COMPRA_STATUS = {
  RECEBIDA: "recebida",
  FINALIZADA: "finalizada",
  RECEBIMENTO_PARCIAL: "recebimento_parcial",
  AGUARDANDO_RECEBIMENTO: "aguardando_recebimento",
  PEDIDO_REALIZADO: "pedido_realizado",
  EM_CONFERENCIA: "em_conferencia",
  CANCELADA: "cancelada",
};

export const STATUS_CONFIG = {
  [COMPRA_STATUS.RECEBIDA]: {
    label: "Recebida",
    textClass: "text-emerald-600 dark:text-emerald-400",
    bgClass: "bg-emerald-50 dark:bg-emerald-500/10",
    borderClass: "border-emerald-200 dark:border-emerald-500/20",
    dotClass: "bg-emerald-500",
    chartColor: "#10B981",
  },
  [COMPRA_STATUS.FINALIZADA]: {
    label: "Finalizada",
    textClass: "text-sky-600 dark:text-sky-400",
    bgClass: "bg-sky-50 dark:bg-sky-500/10",
    borderClass: "border-sky-200 dark:border-sky-500/20",
    dotClass: "bg-sky-500",
    chartColor: "#0EA5E9",
  },
  [COMPRA_STATUS.RECEBIMENTO_PARCIAL]: {
    label: "Recebimento parcial",
    textClass: "text-violet-600 dark:text-violet-400",
    bgClass: "bg-violet-50 dark:bg-violet-500/10",
    borderClass: "border-violet-200 dark:border-violet-500/20",
    dotClass: "bg-violet-500",
    chartColor: "#7C3AED",
  },
  [COMPRA_STATUS.AGUARDANDO_RECEBIMENTO]: {
    label: "Aguardando recebimento",
    textClass: "text-amber-600 dark:text-amber-400",
    bgClass: "bg-amber-50 dark:bg-amber-500/10",
    borderClass: "border-amber-200 dark:border-amber-500/20",
    dotClass: "bg-amber-500",
    chartColor: "#F59E0B",
  },
  [COMPRA_STATUS.PEDIDO_REALIZADO]: {
    label: "Pedido realizado",
    textClass: "text-blue-600 dark:text-blue-400",
    bgClass: "bg-blue-50 dark:bg-blue-500/10",
    borderClass: "border-blue-200 dark:border-blue-500/20",
    dotClass: "bg-blue-500",
    chartColor: "#3B82F6",
  },
  [COMPRA_STATUS.EM_CONFERENCIA]: {
    label: "Em conferência",
    textClass: "text-orange-600 dark:text-orange-400",
    bgClass: "bg-orange-50 dark:bg-orange-500/10",
    borderClass: "border-orange-200 dark:border-orange-500/20",
    dotClass: "bg-orange-500",
    chartColor: "#FB923C",
  },
  [COMPRA_STATUS.CANCELADA]: {
    label: "Cancelada",
    textClass: "text-red-600 dark:text-red-400",
    bgClass: "bg-red-50 dark:bg-red-500/10",
    borderClass: "border-red-200 dark:border-red-500/20",
    dotClass: "bg-red-500",
    chartColor: "#EF4444",
  },
};

export const STATUS_OPTIONS = [
  { value: "todos", label: "Todos os status" },
  ...Object.entries(STATUS_CONFIG).map(([value, cfg]) => ({ value, label: cfg.label })),
];
