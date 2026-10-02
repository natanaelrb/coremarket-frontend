import { PackageSearch } from "lucide-react";

import { formatCurrency } from "../../../../../shared/utils/formatters.js";

// MOCK — substituir por: GET /api/fornecedores/:id/produtos
const produtosMock = [
  {
    nome: "Arroz 5kg Premium",
    categoria: "Grãos",
    preco: 32.9,
    estoque: 120,
  },
  {
    nome: "Arroz 2kg",
    categoria: "Grãos",
    preco: 14.5,
    estoque: 85,
  },
  {
    nome: "Feijão Carioca 1kg",
    categoria: "Grãos",
    preco: 8.9,
    estoque: 60,
  },
  {
    nome: "Açúcar Refinado 1kg",
    categoria: "Mercearia",
    preco: 5.2,
    estoque: 12,
  },
];

export default function ProdutosTab() {
  const hasProdutos = produtosMock.length > 0;

  return (
    <section
      className="
        animate-fade-in
        overflow-hidden
        rounded-xl
        border border-slate-200/80
        bg-white
        shadow-sm shadow-slate-900/[0.02]
        dark:border-[#252a4a]
        dark:bg-[#141833]
        dark:shadow-black/10
      "
    >
      {hasProdutos ? (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr
                className="
                  border-b border-slate-200/80
                  bg-slate-50
                  dark:border-[#252a4a]
                  dark:bg-[#10132c]
                "
              >
                <th
                  scope="col"
                  className="
                    px-4 py-3
                    text-left
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wide
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  Produto
                </th>

                <th
                  scope="col"
                  className="
                    px-4 py-3
                    text-left
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wide
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  Categoria
                </th>

                <th
                  scope="col"
                  className="
                    px-4 py-3
                    text-left
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wide
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  Preço
                </th>

                <th
                  scope="col"
                  className="
                    px-4 py-3
                    text-left
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wide
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  Estoque
                </th>
              </tr>
            </thead>

            <tbody>
              {produtosMock.map((produto) => {
                const estoqueBaixo = produto.estoque < 20;

                return (
                  <tr
                    key={produto.nome}
                    className="
                      border-b border-slate-100
                      transition-colors
                      last:border-0
                      hover:bg-slate-50/80
                      dark:border-[#1c2044]
                      dark:hover:bg-[#181d3b]
                    "
                  >
                    <td
                      className="
                        px-4 py-3
                        font-medium
                        text-slate-700
                        dark:text-slate-200
                      "
                    >
                      {produto.nome}
                    </td>

                    <td
                      className="
                        px-4 py-3
                        text-slate-500
                        dark:text-slate-400
                      "
                    >
                      {produto.categoria}
                    </td>

                    <td
                      className="
                        px-4 py-3
                        font-medium
                        tabular-nums
                        text-slate-700
                        dark:text-slate-200
                      "
                    >
                      {formatCurrency(produto.preco)}
                    </td>

                    <td className="px-4 py-3">
                      <span
                        className={`
                          inline-flex
                          items-center
                          rounded-full
                          border
                          px-2.5
                          py-1
                          text-xs
                          font-semibold
                          tabular-nums
                          ${
                            estoqueBaixo
                              ? `
                                border-amber-200
                                bg-amber-50
                                text-amber-700
                                dark:border-amber-500/20
                                dark:bg-amber-500/10
                                dark:text-amber-400
                              `
                              : `
                                border-slate-200
                                bg-slate-100
                                text-slate-600
                                dark:border-[#3a4168]
                                dark:bg-slate-500/10
                                dark:text-slate-300
                              `
                          }
                        `}
                      >
                        {produto.estoque} un.
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-3 px-6 py-12 text-center">
          <PackageSearch
            size={28}
            className="text-slate-400 dark:text-slate-500"
            aria-hidden="true"
          />

          <div>
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              Nenhum produto encontrado
            </p>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Este fornecedor ainda não possui produtos vinculados.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}