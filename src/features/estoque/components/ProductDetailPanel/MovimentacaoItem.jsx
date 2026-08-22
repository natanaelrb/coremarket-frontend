import {
  ArrowDownCircle,
  ArrowUpCircle,
  ArrowLeftRight,
  SlidersHorizontal,
} from "lucide-react";
import { formatDateTime } from "../../../movimentacoes/utils/formatDate.js";

const TYPE_ICONS = {
  Entrada: ArrowDownCircle,
  Venda: ArrowUpCircle,
  Transferência: ArrowLeftRight,
  Ajuste: SlidersHorizontal,
};

const TONE_STYLES = {
  success:
    "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10",
  danger: "text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-500/10",
  info: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10",
  warning:
    "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10",
};

/**
 * Single row in the recent movements feed: icon, type, doc reference,
 * timestamp and the signed quantity delta.
 */
export default function MovimentacaoItem({ movimentacao }) {
  const Icon = TYPE_ICONS[movimentacao.tipo] ?? SlidersHorizontal;
  const isPositive = movimentacao.quantidade > 0;

  return (
    <li className="flex items-center gap-3 py-2.5">
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${TONE_STYLES[movimentacao.tone]}`}
      >
        <Icon size={16} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-gray-800 dark:text-gray-200">
          {movimentacao.tipo}
        </p>
        <p className="truncate text-xs text-gray-400 dark:text-gray-500">
          {movimentacao.doc} · {formatDateTime(movimentacao.dataHora)}
        </p>
      </div>
      <span
        className={`shrink-0 text-sm font-semibold ${isPositive ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`}
      >
        {isPositive ? "+" : ""}
        {movimentacao.quantidade}
      </span>
    </li>
  );
}
