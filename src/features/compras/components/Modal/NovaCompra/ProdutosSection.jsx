import { PackagePlus, Search } from "lucide-react";

export function ProdutosSection({ form }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/[0.08] dark:bg-[#151b28] sm:p-5">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400">
          <PackagePlus size={20} />
        </div>
        <div>
          <h3 className="font-bold text-slate-900 dark:text-white">
            Adicionar produtos
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Pesquise pelo nome ou código de barras.
          </p>
        </div>
      </div>

      <div className="relative">
        <Search
          size={18}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          type="search"
          value={form.buscaProduto}
          onChange={(event) => form.setBuscaProduto(event.target.value)}
          placeholder="Ex.: Arroz 5kg ou código de barras..."
          className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 dark:border-white/10 dark:bg-[#111827] dark:text-white"
        />
      </div>

      {form.buscaProduto.trim() && (
        <div className="mt-3 overflow-hidden rounded-xl border border-slate-200 dark:border-white/10">
          {form.produtosEncontrados.length > 0 ? (
            form.produtosEncontrados.map((produto) => {
              const adicionado = form.itens.some(
                (item) => item.produtoId === produto.id
              );

              return (
                <div
                  key={produto.id}
                  className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 p-3 last:border-b-0 dark:border-white/[0.06]"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                      {produto.nome}
                    </p>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      Código: {produto.codigoBarras}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-slate-800 dark:text-white">
                      {Number(produto.preco).toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </span>
                    <button
                      type="button"
                      onClick={() => form.adicionarProduto(produto)}
                      className="rounded-lg bg-green-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-green-700"
                    >
                      {adicionado ? "Adicionar +1" : "Adicionar"}
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="p-4 text-sm text-slate-500 dark:text-slate-400">
              Nenhum produto encontrado nos dados de demonstração.
            </p>
          )}
        </div>
      )}
    </section>
  );
}
