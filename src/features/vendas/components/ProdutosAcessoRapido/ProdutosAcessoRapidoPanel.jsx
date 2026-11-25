import { useMemo, useState } from "react";
import {
  Package,
  Plus,
  Zap,
  LayoutGrid,
  Milk,
  ShoppingBasket,
} from "lucide-react";

import Card from "../../../../shared/components/layout/Card.jsx";
import { Button } from "../../../../shared/components/ui/Button.jsx";
import { MOCK_PRODUTOS } from "../../data/mockProdutos.js";

const PRODUTOS_RAPIDOS_IDS = ["p-005", "p-006", "p-007", "p-008"];

const PRODUTOS_RAPIDOS = MOCK_PRODUTOS.filter((produto) =>
  PRODUTOS_RAPIDOS_IDS.includes(produto.id)
);

const CATEGORIAS = [
  { nome: "Todos", icone: LayoutGrid },
  { nome: "Bebidas", icone: Milk },
  { nome: "Mercearia", icone: ShoppingBasket },
];

const formatarPreco = (valor) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor);

export function ProdutosAcessoRapidoPanel({ onAdicionarProduto }) {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");

  const produtosExibidos = useMemo(() => {
    if (categoriaSelecionada === "Todos") {
      return PRODUTOS_RAPIDOS;
    }

    return MOCK_PRODUTOS.filter(
      (produto) => produto.categoria === categoriaSelecionada
    );
  }, [categoriaSelecionada]);

  return (
    <Card className="overflow-hidden p-5">
      {/* Cabeçalho */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
            <Zap size={20} />
          </div>

          <div className="min-w-0">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Produtos de acesso rápido
            </h3>

            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Adicione produtos frequentes com um clique
            </p>
          </div>
        </div>

        <span className="shrink-0 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
          {produtosExibidos.length} produtos
        </span>
      </div>

      {/* Categorias */}
      <div className="mb-5">
        <div className="mb-3 flex items-center justify-between gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Categorias
          </span>

          <span className="text-[11px] text-slate-400">
            Filtre os produtos
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {CATEGORIAS.map(({ nome, icone: Icone }) => {
            const selecionada = categoriaSelecionada === nome;

            return (
              <button
                key={nome}
                type="button"
                onClick={() => setCategoriaSelecionada(nome)}
                aria-pressed={selecionada}
                className={`
                  inline-flex items-center gap-2 rounded-xl border px-4 py-2.5
                  text-xs font-semibold transition-all duration-200
                  ${
                    selecionada
                      ? "border-blue-600 bg-blue-600 text-white shadow-sm shadow-blue-200 dark:border-blue-500 dark:bg-blue-500 dark:shadow-none"
                      : "border-cm-border bg-cm-surface text-cm-text-muted hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
                  }
                `}
              >
                <Icone size={15} strokeWidth={2} />
                {nome}
              </button>
            );
          })}
        </div>
      </div>

      {/* Produtos */}
      {produtosExibidos.length > 0 ? (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {produtosExibidos.map((produto) => {
            const semEstoque = produto.estoque <= 0;

            return (
              <div
                key={produto.id}
                className="
                  group flex min-w-0 flex-col rounded-xl
                  border border-cm-border bg-cm-surface p-3.5
                  transition-all duration-200
                  hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md
                  dark:hover:border-blue-500/40
                "
              >
                <div className="mb-4 flex items-start justify-between gap-2">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-100 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400 dark:group-hover:bg-blue-500/20">
                    <Package size={21} />
                  </div>

                  <span
                    className={`max-w-[125px] rounded-full px-2.5 py-1 text-center text-[10px] font-semibold ${
                      semEstoque
                        ? "bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400"
                        : "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400"
                    }`}
                  >
                    {semEstoque
                      ? "Sem estoque"
                      : `${produto.estoque} disponíveis`}
                  </span>
                </div>

                <div className="mb-4 min-w-0 flex-1">
                  <h4
                    className="line-clamp-2 min-h-10 text-sm font-semibold leading-5 text-cm-text"
                    title={produto.nome}
                  >
                    {produto.nome}
                  </h4>

                  <p className="mt-2 text-lg font-bold tracking-tight text-cm-text">
                    {formatarPreco(produto.preco)}
                  </p>
                </div>

                <Button
                  variant="primary"
                  size="sm"
                  fullWidth
                  icon={Plus}
                  disabled={semEstoque}
                  onClick={() => onAdicionarProduto(produto)}
                >
                  Adicionar
                </Button>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-cm-border py-10 text-center">
          <Package size={28} className="mb-3 text-cm-text-muted" />

          <p className="text-sm font-semibold text-cm-text">
            Nenhum produto encontrado
          </p>

          <p className="mt-1 text-xs text-cm-text-muted">
            Não existem produtos nesta categoria.
          </p>
        </div>
      )}
    </Card>
  );
}

export default ProdutosAcessoRapidoPanel;
