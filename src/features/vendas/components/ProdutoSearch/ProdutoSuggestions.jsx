import { SearchX, PackageSearch } from "lucide-react";
import { ProdutoSuggestionItem } from "./ProdutoSuggestionItem.jsx";

export function ProdutoSuggestions({ produtos, onAdicionarProduto }) {
  if (produtos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-cm-border bg-cm-bg/40 px-4 py-8 text-center animate-fade-in motion-reduce:animate-none">
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-cm-surface text-cm-text-muted ring-1 ring-cm-border">
          <SearchX size={23} strokeWidth={1.7} />
        </div>

        <p className="text-sm font-semibold text-cm-text">
          Nenhum produto encontrado
        </p>

        <p className="mt-1 max-w-xs text-xs leading-relaxed text-cm-text-muted">
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
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2 px-1">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-green-500/10 text-green-600 dark:text-green-400">
            <PackageSearch size={15} />
          </span>

          <h3 className="text-xs font-bold tracking-wide text-cm-text">
            Produtos encontrados
          </h3>
        </div>

        <span className="rounded-full border border-green-500/20 bg-green-500/5 px-2.5 py-1 text-[11px] font-semibold text-green-700 dark:text-green-400">
          {produtos.length} {produtos.length === 1 ? "produto" : "produtos"}
        </span>
      </div>

      <ul className="divide-y divide-cm-border/70">
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
