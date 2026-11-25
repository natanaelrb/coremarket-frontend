import { Plus, Package } from "lucide-react";

import {
  formatCurrency,
  formatNumber,
} from "../../../../shared/utils/formatters.js";

export function ProdutoSuggestionItem({
  produto,
  onAdicionar,
}) {
  const estoque = Number(produto.estoque) || 0;
  const semEstoque = estoque <= 0;
  const estoqueBaixo = estoque > 0 && estoque <= 5;

  const estoqueClasses = semEstoque
    ? "bg-red-50 text-red-600 ring-red-100"
    : estoqueBaixo
      ? "bg-amber-50 text-amber-700 ring-amber-100"
      : "bg-blue-50 text-blue-700 ring-blue-100";

  return (
    <div className="group flex min-w-0 items-center gap-3 rounded-xl px-3 py-3 transition-all duration-200 hover:bg-blue-50/60">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-blue-100 bg-blue-50 text-blue-600 transition-transform duration-200 group-hover:scale-105">
        {produto.imagemUrl ? (
          <img
            src={produto.imagemUrl}
            alt={produto.nome}
            className="h-full w-full object-contain"
          />
        ) : (
          <Package size={23} strokeWidth={1.8} />
        )}
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-slate-800">
          {produto.nome}
        </p>

        <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="text-sm font-bold text-blue-700">
            {formatCurrency(produto.preco)}
          </span>

          <span className="text-xs text-slate-400">•</span>

          <span className="text-xs text-slate-500">
            Cód. {produto.codigoBarras}
          </span>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <span
          className={`hidden rounded-full px-2.5 py-1 text-xs font-medium ring-1 sm:inline-flex ${estoqueClasses}`}
        >
          {semEstoque
            ? "Sem estoque"
            : estoqueBaixo
              ? `Estoque baixo: ${formatNumber(estoque)}`
              : `${formatNumber(estoque)} un.`}
        </span>

        <button
          type="button"
          title={semEstoque ? "Produto sem estoque" : "Adicionar produto"}
          onClick={onAdicionar}
          disabled={semEstoque}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md active:translate-y-0 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400 disabled:shadow-none"
        >
          <Plus size={18} strokeWidth={2.4} />
        </button>
      </div>
    </div>
  );
}
