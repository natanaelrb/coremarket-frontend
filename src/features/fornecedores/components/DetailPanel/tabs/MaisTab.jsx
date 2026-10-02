import { FileText, Link2, Ban, Trash2, ChevronRight } from "lucide-react";

const actions = [
  {
    icon: FileText,
    label: "Gerar relatório do fornecedor",
    description: "Consulte e exporte um resumo das informações.",
    variant: "default",
  },
  {
    icon: Link2,
    label: "Vincular a outro cadastro",
    description: "Associe este fornecedor a outro registro.",
    variant: "default",
  },
  {
    icon: Ban,
    label: "Bloquear fornecedor",
    description: "Impeça novas operações com este fornecedor.",
    variant: "warning",
  },
  {
    icon: Trash2,
    label: "Excluir fornecedor",
    description: "Remova o cadastro do sistema.",
    variant: "danger",
  },
];

const VARIANT_STYLES = {
  default: {
    container:
      "border-slate-200/80 hover:border-slate-300 hover:bg-slate-50/80 dark:border-[#252a4a] dark:hover:border-[#3a4168] dark:hover:bg-[#181d3b]",
    icon: "bg-slate-100 text-slate-600 dark:bg-slate-500/10 dark:text-slate-300",
    title: "text-slate-700 dark:text-slate-200",
    description: "text-slate-500 dark:text-slate-400",
  },
  warning: {
    container:
      "border-amber-200/80 hover:border-amber-300 hover:bg-amber-50/60 dark:border-amber-500/20 dark:hover:bg-amber-500/10",
    icon: "bg-amber-100 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400",
    title: "text-amber-700 dark:text-amber-400",
    description: "text-slate-500 dark:text-slate-400",
  },
  danger: {
    container:
      "border-rose-200/80 hover:border-rose-300 hover:bg-rose-50/60 dark:border-rose-500/20 dark:hover:bg-rose-500/10",
    icon: "bg-rose-100 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400",
    title: "text-rose-700 dark:text-rose-400",
    description: "text-slate-500 dark:text-slate-400",
  },
};

export default function MaisTab() {
  return (
    <div className="animate-fade-in space-y-3">
      {actions.map((action) => {
        const styles = VARIANT_STYLES[action.variant];
        const Icon = action.icon;

        return (
          <button
            key={action.label}
            type="button"
            disabled
            title="Ação ainda não implementada"
            className={`
              flex w-full items-center gap-3 rounded-xl border p-4 text-left
              opacity-80 transition-colors
              disabled:cursor-not-allowed
              ${styles.container}
            `}
          >
            <span
              className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg ${styles.icon}`}
            >
              <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
            </span>

            <span className="min-w-0 flex-1">
              <span className={`block text-sm font-semibold ${styles.title}`}>
                {action.label}
              </span>

              <span className={`mt-1 block text-xs ${styles.description}`}>
                {action.description}
              </span>
            </span>

            <ChevronRight
              size={17}
              className="flex-shrink-0 text-slate-400 dark:text-slate-500"
              aria-hidden="true"
            />
          </button>
        );
      })}
    </div>
  );
}