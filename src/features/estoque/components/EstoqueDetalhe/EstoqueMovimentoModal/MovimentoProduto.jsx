import { Package } from "lucide-react";

export default function MovimentoProduto({
  produto,
  estoqueAtual,
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50/70 p-3.5 dark:border-white/10 dark:bg-white/[0.025]">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-emerald-600 shadow-sm dark:bg-white/5 dark:text-emerald-400">
        <Package size={16} />
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-gray-800 dark:text-gray-200">
          {produto?.nome || "Produto"}
        </p>

        <p className="mt-0.5 truncate text-[11px] text-gray-400 dark:text-gray-500">
          SKU: {produto?.sku || "—"}
        </p>
      </div>

      <div className="shrink-0 text-right">
        <p className="text-[9px] font-semibold uppercase tracking-[0.06em] text-gray-400">
          Estoque atual
        </p>

        <p className="mt-0.5 text-sm font-bold text-gray-800 dark:text-gray-200">
          {estoqueAtual} un.
        </p>
      </div>
    </div>
  );
}