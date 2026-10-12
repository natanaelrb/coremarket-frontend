import {
  ArrowDownCircle,
  ArrowUpCircle,
  ArrowLeftRight,
  SlidersHorizontal,
} from "lucide-react";
import { formatDateTime } from "../../../movimentacoes/utils/formatDate.js";
import { cn } from "../../../../shared/utils/classNames.js";

const TYPE_CONFIG = {
  Entrada: {
    icon: ArrowDownCircle,
    tone: "success",
    label: "Entrada",
  },
  Venda: {
    icon: ArrowUpCircle,
    tone: "danger",
    label: "Venda",
  },
  Transferência: {
    icon: ArrowLeftRight,
    tone: "info",
    label: "Transferência",
  },
  Ajuste: {
    icon: SlidersHorizontal,
    tone: "warning",
    label: "Ajuste",
  },
};

const TONE_STYLES = {
  success: {
    icon: "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400",
    hover:
      "hover:border-emerald-100 hover:bg-emerald-50/30 dark:hover:border-emerald-500/20 dark:hover:bg-emerald-500/[0.03]",
  },
  danger: {
    icon: "bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400",
    hover:
      "hover:border-rose-100 hover:bg-rose-50/30 dark:hover:border-rose-500/20 dark:hover:bg-rose-500/[0.03]",
  },
  info: {
    icon: "bg-sky-50 text-sky-600 dark:bg-sky-500/10 dark:text-sky-400",
    hover:
      "hover:border-sky-100 hover:bg-sky-50/30 dark:hover:border-sky-500/20 dark:hover:bg-sky-500/[0.03]",
  },
  warning: {
    icon: "bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400",
    hover:
      "hover:border-amber-100 hover:bg-amber-50/30 dark:hover:border-amber-500/20 dark:hover:bg-amber-500/[0.03]",
  },
};

export default function MovimentacaoItem({ movimentacao, index = 0 }) {
  const config =
    TYPE_CONFIG[movimentacao?.tipo] ?? TYPE_CONFIG.Ajuste;

  const Icon = config.icon;
  const style = TONE_STYLES[config.tone];

  const quantidade = Number(movimentacao?.quantidade ?? 0);
  const isPositive = quantidade > 0;

  return (
    <li
      className={cn(
        `
          group
          flex
          items-center
          gap-3
          rounded-xl
          border
          border-transparent
          px-2.5
          py-3
          transition-all
          duration-200
          ease-out
          hover:-translate-y-px
          animate-slide-up
        `,
        style.hover,
      )}
      style={{
        animationDelay: `${index * 45}ms`,
      }}
    >
      {/* Ícone */}
      <div
        className={cn(
          `
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-xl
            transition-transform
            duration-200
            group-hover:scale-105
          `,
          style.icon,
        )}
      >
        <Icon size={17} strokeWidth={2} />
      </div>

      {/* Informações */}
      <div className="min-w-0 flex-1">
        <div className="flex min-w-0 items-center gap-2">
          <p className="truncate text-sm font-semibold text-gray-800 dark:text-gray-200">
            {config.label}
          </p>

          {movimentacao?.doc && (
            <span className="hidden shrink-0 rounded-md bg-gray-100 px-1.5 py-0.5 text-[9px] font-medium text-gray-500 sm:inline dark:bg-white/5 dark:text-gray-400">
              {movimentacao.doc}
            </span>
          )}
        </div>

        <p className="mt-0.5 truncate text-[11px] text-gray-400 dark:text-gray-500">
          {movimentacao?.doc && (
            <span className="sm:hidden">{movimentacao.doc} · </span>
          )}
          {movimentacao?.dataHora
            ? formatDateTime(movimentacao.dataHora)
            : "Data não informada"}
        </p>
      </div>

      {/* Quantidade */}
      <div className="shrink-0 text-right">
        <span
          className={cn(
            "text-sm font-bold tracking-tight",
            isPositive
              ? "text-emerald-600 dark:text-emerald-400"
              : quantidade < 0
                ? "text-rose-600 dark:text-rose-400"
                : "text-gray-500 dark:text-gray-400",
          )}
        >
          {isPositive ? "+" : ""}
          {quantidade}
        </span>

        <p className="mt-0.5 text-[9px] font-medium uppercase tracking-wide text-gray-400 dark:text-gray-500">
          unidades
        </p>
      </div>
    </li>
  );
}