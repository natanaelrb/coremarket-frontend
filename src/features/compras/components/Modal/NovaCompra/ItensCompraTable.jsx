
import { Minus, Package, Plus, Trash2 } from "lucide-react";

const moeda = (valor) =>
  Number(valor).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

export function ItensCompraTable({ form }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/[0.08] dark:bg-[#151b28] sm:p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400">
            <Package size={20} />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white">
              Produtos da compra
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {form.itens.length} produto(s) diferente(s)
            </p>
          </div>
        </div>
      </div>

      {form.itens.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 px-4 py-9 text-center dark:border-white/15">
          <Package size={30} className="text-slate-400" />
          <p className="mt-3 text-sm font-semibold text-slate-700 dark:text-slate-200">
            Nenhum produto adicionado
          </p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Use a busca acima para incluir produtos nesta compra.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[620px] text-left">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500 dark:border-white/10 dark:text-slate-400">
                <th className="px-3 py-3 font-semibold">Produto</th>
                <th className="px-3 py-3 font-semibold">Preço unit.</th>
                <th className="px-3 py-3 font-semibold">Quantidade</th>
                <th className="px-3 py-3 text-right font-semibold">Total</th>
                <th className="px-3 py-3" aria-label="Ações" />
              </tr>
            </thead>

            <tbody>
              {form.itens.map((item) => (
                <tr
                  key={item.produtoId}
                  className="border-b border-slate-100 last:border-0 dark:border-white/[0.06]"
                >
                  <td className="px-3 py-4">
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                      {item.nome}
                    </p>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      {item.codigoBarras}
                    </p>
                  </td>

                  <td className="px-3 py-4">
                    <label className="sr-only" htmlFor={`preco-${item.produtoId}`}>
                      Preço unitário de {item.nome}
                    </label>
                    <input
                      id={`preco-${item.produtoId}`}
                      type="number"
                      min="0"
                      step="0.01"
                      value={item.precoUnitario}
                      onChange={(event) =>
                        form.atualizarItem(
                          item.produtoId,
                          "precoUnitario",
                          event.target.value
                        )
                      }
                      className="w-28 rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-sm text-slate-800 outline-none focus:border-green-500 dark:border-white/10 dark:bg-[#111827] dark:text-white"
                    />
                  </td>

                  <td className="px-3 py-4">
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        aria-label={`Diminuir quantidade de ${item.nome}`}
                        onClick={() =>
                          form.atualizarItem(
                            item.produtoId,
                            "quantidade",
                            Math.max(0, item.quantidade - 1)
                          )
                        }
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/5"
                      >
                        <Minus size={14} />
                      </button>

                      <label className="sr-only" htmlFor={`qtd-${item.produtoId}`}>
                        Quantidade de {item.nome}
                      </label>
                      <input
                        id={`qtd-${item.produtoId}`}
                        type="number"
                        min="0"
                        step="1"
                        value={item.quantidade}
                        onChange={(event) =>
                          form.atualizarItem(
                            item.produtoId,
                            "quantidade",
                            event.target.value
                          )
                        }
                        className="w-16 rounded-lg border border-slate-200 bg-white px-2 py-2 text-center text-sm text-slate-800 outline-none focus:border-green-500 dark:border-white/10 dark:bg-[#111827] dark:text-white"
                      />

                      <button
                        type="button"
                        aria-label={`Aumentar quantidade de ${item.nome}`}
                        onClick={() =>
                          form.atualizarItem(
                            item.produtoId,
                            "quantidade",
                            item.quantidade + 1
                          )
                        }
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/5"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </td>

                  <td className="px-3 py-4 text-right text-sm font-bold text-slate-800 dark:text-white">
                    {moeda(item.quantidade * item.precoUnitario)}
                  </td>

                  <td className="px-3 py-4 text-right">
                    <button
                      type="button"
                      aria-label={`Remover ${item.nome}`}
                      onClick={() => form.removerProduto(item.produtoId)}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-red-500 transition hover:bg-red-50 hover:text-red-700 dark:hover:bg-red-400/10"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
