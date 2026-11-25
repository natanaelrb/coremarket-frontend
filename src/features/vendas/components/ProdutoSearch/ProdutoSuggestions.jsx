import { SearchX, PackageSearch } from "lucide-react";
import { ProdutoSuggestionItem } from "./ProdutoSuggestionItem.jsx";

export function ProdutoSuggestions({
  produtos,
  onAdicionarProduto,
}) {
  if (produtos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50/70 px-4 py-8 text-center animate-fade-in motion-reduce:animate-none dark:border-white/10 dark:bg-white/[0.02]">
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-500 ring-1 ring-blue-100 dark:bg-blue-500/10 dark:text-blue-400 dark:ring-blue-500/20">
          <SearchX size={23} strokeWidth={1.7} />
        </div>

        <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
          Nenhum produto encontrado
        </p>

        <p className="mt-1 max-w-xs text-xs leading-relaxed text-slate-500 dark:text-slate-400">
          Experimente pesquisar por outro nome ou conferir o código de barras.
        </p>
      </div>
    );
  }

  return (
    <section
      aria-label="Sugestões de produtos"
      className="min-w-0 animate-fade-in motion-reduce:animate-none"
    >
      <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
            <PackageSearch size={16} />
          </span>

          <div>
            <h3 className="text-xs font-bold text-slate-800 dark:text-slate-200">
              Produtos encontrados
            </h3>
            <p className="mt-0.5 text-[10px] text-slate-500 dark:text-slate-400">
              Selecione um produto para adicionar à venda
            </p>
          </div>
        </div>

        <span className="rounded-full border border-blue-100 bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300">
          {produtos.length} {produtos.length === 1 ? "produto" : "produtos"}
        </span>
      </div>

      <ul className="divide-y divide-slate-100 overflow-hidden rounded-xl border border-slate-100 dark:divide-white/[0.06] dark:border-white/[0.08]">
        {produtos.map((produto) => (
          <ProdutoSuggestionItem
            key={produto.id}
            produto={produto}
            onAdicionar={() => onAdicionarProduto(produto)}
          />
        ))}
      </ul>
    </section>
  );
}