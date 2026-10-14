
import { useMemo } from "react";
import {
  Package,
  Boxes,
  ShoppingBasket,
  DollarSign,
} from "lucide-react";
import { formatCurrency } from "../../../utils/formatters";

export function ProdutosTab({ detalhe }) {
  const produtos = detalhe?.produtos ?? [];

  const resumo = useMemo(() => {
    const quantidadeItens = produtos.reduce(
      (total, produto) => total + Number(produto.quantidade ?? 0),
      0,
    );

    const valorTotal = produtos.reduce(
      (total, produto) =>
        total + Number(
          produto.valorTotal ??
            Number(produto.quantidade ?? 0) *
              Number(produto.valorUnitario ?? 0),
        ),
      0,
    );

    return {
      quantidadeItens,
      valorTotal,
    };
  }, [produtos]);

  return (
    <div className="animate-fade-in space-y-5">
      {/* Cabeçalho */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
            <Package size={21} />
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
              Produtos da compra
            </h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Confira os produtos, as quantidades e os valores registrados
              neste pedido.
            </p>
          </div>
        </div>

        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-400">
          <Boxes size={14} />
          {produtos.length} {produtos.length === 1 ? "produto" : "produtos"}
        </span>
      </div>

      {/* Indicadores */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <ResumoCard
          icon={ShoppingBasket}
          label="Quantidade total"
          valor={resumo.quantidadeItens.toLocaleString("pt-BR")}
          descricao="Unidades somadas dos produtos"
          cor="emerald"
        />

        <ResumoCard
          icon={DollarSign}
          label="Valor dos produtos"
          valor={formatCurrency(resumo.valorTotal)}
          descricao="Soma dos valores dos itens"
          cor="sky"
        />
      </div>

      {/* Tabela */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-950/[0.02] dark:border-slate-700/80 dark:bg-[#151b28]">
        <div className="flex items-center justify-between gap-3 border-b border-slate-200 px-5 py-4 dark:border-slate-700/80">
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              Itens do pedido
            </h4>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Valores unitários e totais por produto
            </p>
          </div>

          <Package
            size={19}
            className="shrink-0 text-emerald-600 dark:text-emerald-400"
          />
        </div>

        {produtos.length > 0 ? (
          <>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[650px] text-sm">
                <thead>
                  <tr className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-slate-800/60 dark:text-slate-400">
                    <th className="px-5 py-3.5 text-left font-semibold">
                      Produto
                    </th>
                    <th className="px-5 py-3.5 text-right font-semibold">
                      Quantidade
                    </th>
                    <th className="px-5 py-3.5 text-right font-semibold">
                      Valor unitário
                    </th>
                    <th className="px-5 py-3.5 text-right font-semibold">
                      Valor total
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60">
                  {produtos.map((produto, index) => {
                    const quantidade = Number(produto.quantidade ?? 0);
                    const valorUnitario = Number(produto.valorUnitario ?? 0);
                    const valorTotal = Number(
                      produto.valorTotal ?? quantidade * valorUnitario,
                    );

                    return (
                      <tr
                        key={produto.id ?? `${produto.nome}-${index}`}
                        className="transition-colors duration-150 hover:bg-emerald-50/40 dark:hover:bg-emerald-400/[0.035]"
                      >
                        <td className="px-5 py-4">
                          <div className="flex min-w-0 items-center gap-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-300">
                              <Package size={17} />
                            </div>

                            <div className="min-w-0">
                              <p className="font-medium text-slate-800 dark:text-slate-100">
                                {produto.nome || "Produto sem nome"}
                              </p>

                              {produto.codigo && (
                                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                  Código: {produto.codigo}
                                </p>
                              )}
                            </div>
                          </div>
                        </td>

                        <td className="px-5 py-4 text-right">
                          <span className="inline-flex items-center rounded-lg bg-slate-100 px-2.5 py-1 font-medium tabular-nums text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                            {quantidade.toLocaleString("pt-BR")}
                          </span>
                        </td>

                        <td className="whitespace-nowrap px-5 py-4 text-right tabular-nums text-slate-600 dark:text-slate-300">
                          {formatCurrency(valorUnitario)}
                        </td>

                        <td className="whitespace-nowrap px-5 py-4 text-right font-semibold tabular-nums text-emerald-700 dark:text-emerald-400">
                          {formatCurrency(valorTotal)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Total */}
            <div className="flex flex-col gap-2 border-t border-slate-200 bg-slate-50/80 px-5 py-4 sm:flex-row sm:items-center sm:justify-between dark:border-slate-700/80 dark:bg-slate-800/30">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Total de {produtos.length}{" "}
                {produtos.length === 1 ? "produto" : "produtos"}
              </p>

              <div className="flex items-center justify-between gap-5 sm:justify-end">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                  Total dos itens
                </span>

                <span className="text-lg font-bold tabular-nums text-emerald-700 dark:text-emerald-400">
                  {formatCurrency(resumo.valorTotal)}
                </span>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center px-5 py-14 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500">
              <Package size={25} />
            </div>

            <h4 className="mt-4 text-sm font-semibold text-slate-800 dark:text-slate-200">
              Nenhum produto encontrado
            </h4>

            <p className="mt-1 max-w-sm text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              Os produtos desta compra aparecerão aqui quando estiverem
              registrados no pedido.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function ResumoCard({ icon: Icon, label, valor, descricao, cor }) {
  const cores = {
    emerald: {
      icon: "bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400",
      valor: "text-emerald-700 dark:text-emerald-400",
    },
    sky: {
      icon: "bg-sky-50 text-sky-600 dark:bg-sky-400/10 dark:text-sky-400",
      valor: "text-sky-700 dark:text-sky-400",
    },
  };

  const tema = cores[cor] ?? cores.emerald;

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/[0.02] transition-shadow duration-200 hover:shadow-md dark:border-slate-700/80 dark:bg-[#151b28]">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            {label}
          </p>

          <p
            className={[
              "mt-3 break-words text-2xl font-bold tracking-tight",
              tema.valor,
            ].join(" ")}
          >
            {valor}
          </p>
        </div>

        <div
          className={[
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
            tema.icon,
          ].join(" ")}
        >
          <Icon size={19} />
        </div>
      </div>

      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
        {descricao}
      </p>
    </article>
  );
}
