import {
  Layers3,
  TrendingUp,
  Package,
  ChartNoAxesCombined,
} from "lucide-react";

import { useDesempenhoCategorias } from "../../features/vendas/hooks/useDesempenhoCategorias.js";

import {
  formatCurrency,
  formatNumber,
} from "../../shared/utils/formatters.js";

export default function CategoriasVendas() {
  const { categorias, carregando } = useDesempenhoCategorias();

  const faturamentoTotal = categorias.reduce(
    (total, categoria) => total + categoria.faturamento,
    0,
  );

  const quantidadeTotal = categorias.reduce(
    (total, categoria) => total + categoria.quantidade,
    0,
  );

  const maiorCategoria = categorias[0];

  const indicadores = [
    {
      titulo: "Categorias com vendas",
      valor: formatNumber(categorias.length),
      descricao: "Categorias movimentadas",
      icon: Layers3,
      cor: "text-emerald-600 bg-emerald-50",
    },
    {
      titulo: "Faturamento total",
      valor: formatCurrency(faturamentoTotal),
      descricao: "Vendas concluídas",
      icon: TrendingUp,
      cor: "text-blue-600 bg-blue-50",
    },
    {
      titulo: "Itens vendidos",
      valor: formatNumber(quantidadeTotal),
      descricao: "Unidades comercializadas",
      icon: Package,
      cor: "text-violet-600 bg-violet-50",
    },
    {
      titulo: "Categoria líder",
      valor: maiorCategoria?.nome || "—",
      descricao: "Maior faturamento",
      icon: ChartNoAxesCombined,
      cor: "text-amber-600 bg-amber-50",
    },
  ];

  return (
    <main className="min-h-full p-4 sm:p-6">
      <div className="mx-auto max-w-[1600px] space-y-6">
        <header className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-sm text-cm-text-muted">
            <span>Vendas</span>
            <span>/</span>
            <span>Categorias</span>
          </div>

          <div>
            <h1 className="text-2xl font-bold text-cm-text">
              Desempenho por categorias
            </h1>

            <p className="mt-1 text-sm text-cm-text-muted">
              Acompanhe o faturamento, as vendas e a participação de cada
              categoria no resultado comercial.
            </p>
          </div>
        </header>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {indicadores.map((indicador) => {
            const Icon = indicador.icon;

            return (
              <article
                key={indicador.titulo}
                className="rounded-xl border border-cm-border bg-cm-surface p-5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm text-cm-text-muted">
                      {indicador.titulo}
                    </p>

                    <p className="mt-2 break-words text-2xl font-bold text-cm-text">
                      {carregando ? "—" : indicador.valor}
                    </p>

                    <p className="mt-1 text-xs text-cm-text-muted">
                      {indicador.descricao}
                    </p>
                  </div>

                  <div className={`rounded-xl p-3 ${indicador.cor}`}>
                    <Icon size={21} />
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        <section className="rounded-xl border border-cm-border bg-cm-surface p-5 shadow-sm">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-cm-text">
              Ranking de categorias
            </h2>

            <p className="mt-1 text-sm text-cm-text-muted">
              Categorias ordenadas pelo faturamento gerado.
            </p>
          </div>

          {carregando ? (
            <p className="py-8 text-center text-sm text-cm-text-muted">
              Carregando desempenho das categorias...
            </p>
          ) : categorias.length === 0 ? (
            <div className="py-12 text-center">
              <Layers3
                size={36}
                className="mx-auto text-cm-text-muted"
              />

              <h3 className="mt-3 font-semibold text-cm-text">
                Nenhuma categoria encontrada
              </h3>

              <p className="mt-1 text-sm text-cm-text-muted">
                As categorias aparecerão aqui quando houver vendas concluídas.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {categorias.map((categoria, index) => (
                <article key={categoria.nome}>
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cm-surface-muted text-sm font-semibold text-cm-text">
                        {index + 1}
                      </span>

                      <div className="min-w-0">
                        <h3 className="truncate font-semibold text-cm-text">
                          {categoria.nome}
                        </h3>

                        <p className="text-xs text-cm-text-muted">
                          {formatNumber(categoria.quantidade)} unidades
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="font-semibold text-cm-text">
                        {formatCurrency(categoria.faturamento)}
                      </p>

                      <p className="text-xs text-cm-text-muted">
                        {categoria.participacao.toFixed(1)}% do faturamento
                      </p>
                    </div>
                  </div>

                  <div className="h-2.5 overflow-hidden rounded-full bg-cm-surface-muted">
                    <div
                      className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                      style={{
                        width: `${Math.min(100, Math.max(0, categoria.participacao))}%`,
                      }}
                    />
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
