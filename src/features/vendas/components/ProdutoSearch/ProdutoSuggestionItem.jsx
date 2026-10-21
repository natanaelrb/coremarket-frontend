import { Plus, Barcode, Package } from "lucide-react";
import {
  formatCurrency,
  formatNumber,
} from "../../../../shared/utils/formatters.js";

export function ProdutoSuggestionItem({ produto, onAdicionar }) {
  const estoque = Number(produto.estoque) || 0;
  const semEstoque = estoque <= 0;
  const estoqueBaixo = estoque > 0 && estoque <= 5;

  return (
    <li className="group flex min-w-0 items-center gap-3 rounded-xl border border-transparent px-3 py-3 transition-all duration-200 hover:border-green-500/20 hover:bg-green-500/[0.04] motion-reduce:transition-none sm:gap-4 sm:px-4">
      {/* Identificação visual */}
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-green-500/15 bg-green-500/10 text-sm font-bold text-green-700 transition-transform duration-200 group-hover:scale-105 dark:text-green-400 motion-reduce:transform-none">
        {produto.nome.slice(0, 2).toUpperCase()}
      </div>

      {/* Nome e código */}
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-cm-text">
          {produto.nome}
        </p>

        <p className="mt-1 flex min-w-0 items-center gap-1.5 text-xs text-cm-text-muted">
          <Barcode size={13} className="shrink-0" />
          <span className="truncate">
            {produto.codigoBarras || "Sem código cadastrado"}
          </span>
        </p>
      </div>

      {/* Estoque */}
      <div className="hidden shrink-0 flex-col items-start gap-1 md:flex">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-cm-text-muted">
          Estoque
        </span>

        <span
          className={`inline-flex items-center gap-1.5 text-xs font-medium ${
            semEstoque
              ? "text-rose-600 dark:text-rose-400"
              : estoqueBaixo
                ? "text-amber-600 dark:text-amber-400"
                : "text-cm-text-muted"
          }`}
        >
          <Package size={13} />
          {formatNumber(estoque)} un
        </span>
      </div>

      {/* Preço */}
      <div className="shrink-0 text-right">
        <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-cm-text-muted">
          Preço
        </span>

        <p className="whitespace-nowrap text-sm font-bold tracking-tight text-cm-text sm:text-base">
          {formatCurrency(produto.preco)}
        </p>
      </div>

      {/* Adicionar ao carrinho */}
      <button
        type="button"
        onClick={onAdicionar}
        aria-label={`Adicionar ${produto.nome} ao carrinho`}
        title="Adicionar ao carrinho"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-green-600 text-white shadow-sm transition-all duration-200 hover:scale-105 hover:bg-green-700 hover:shadow-md active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-500/25 motion-reduce:transform-none motion-reduce:transition-none"
      >
        <Plus size={18} strokeWidth={2.5} />
      </button>
    </li>
  );
}
