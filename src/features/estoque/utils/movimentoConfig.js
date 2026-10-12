import {
  ArrowDownToLine,
  ArrowUpToLine,
} from "lucide-react";

export const MOVIMENTO_CONFIG = {
  entrada: {
    title: "Registrar entrada",
    description:
      "Adicione unidades ao estoque deste produto.",
    icon: ArrowDownToLine,
    actionLabel: "Confirmar entrada",

    iconClass:
      "flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400",
  },

  saida: {
    title: "Registrar saída",
    description:
      "Retire unidades do estoque deste produto.",
    icon: ArrowUpToLine,
    actionLabel: "Confirmar saída",

    iconClass:
      "flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400",
  },
};