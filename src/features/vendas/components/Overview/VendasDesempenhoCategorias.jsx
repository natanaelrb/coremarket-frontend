import { PieChart } from "lucide-react";

const CORES = [
  "#8b5cf6",
  "#3b82f6",
  "#10b981",
  "#f59e0b",
  "#ec4899",
  "#06b6d4",
];

export function VendasDesempenhoCategorias({ categorias, carregando }) {
  const formatarMoeda = (valor) =>
    Number(valor || 0).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  const faturamentoTotal = categorias.reduce(
    (total, categoria) => total + categoria.faturamento,
    0,
  );

  const { fatias } = categorias.reduce(
  (acumulador, categoria, index) => {
    const inicio = acumulador.acumulado;
    const fim = inicio + Number(categoria.participacao || 0);

    return {
      acumulado: fim,
      fatias: [
        ...acumulador.fatias,
        `${CORES[index % CORES.length]} ${inicio}% ${fim}%`,
      ],
    };
  },
  { acumulado: 0, fatias: [] },
);

  const gradiente = `conic-gradient(${fatias.join(", ")})`;

  return (
    <section className="rounded-2xl border border-cm-border bg-white p-5 shadow-sm dark:bg-cm-surface">
      <div className="mb-7 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600 dark:bg-violet-950/40 dark:text-violet-400">
          <PieChart size={21} />
        </span>

        <div>
          <h2 className="font-bold text-cm-text">
            Desempenho por categoria
          </h2>
          <p className="text-sm text-cm-text-muted">
            Distribuição do faturamento por categoria.
          </p>
        </div>
      </div>

      {carregando ? (
        <p className="py-8 text-center text-sm text-cm-text-muted">
          Carregando desempenho...
        </p>
      ) : categorias.length === 0 ? (
        <p className="py-8 text-center text-sm text-cm-text-muted">
          Ainda não existem vendas concluídas para analisar.
        </p>
      ) : (
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[220px_1fr]">
          <div className="flex justify-center">
            <div
              className="relative h-48 w-48 rounded-full"
              style={{ background: gradiente }}
            >
              <div className="absolute inset-5 flex flex-col items-center justify-center rounded-full bg-white dark:bg-cm-surface">
                <span className="text-xs text-cm-text-muted">
                  Faturamento total
                </span>
                <strong className="mt-1 text-xl font-bold text-cm-text">
                  {formatarMoeda(faturamentoTotal)}
                </strong>
                <span className="mt-1 text-xs text-cm-text-muted">
                  {categorias.length} categorias
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {categorias.map((categoria, index) => (
              <div
                key={categoria.nome}
                className="flex items-center justify-between gap-4"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <span
                    className="h-3 w-3 shrink-0 rounded-full"
                    style={{
                      backgroundColor: CORES[index % CORES.length],
                    }}
                  />

                  <div className="min-w-0">
                    <p className="truncate font-semibold text-cm-text">
                      {categoria.nome}
                    </p>
                    <p className="text-xs text-cm-text-muted">
                      {categoria.quantidade} itens vendidos
                    </p>
                  </div>
                </div>

                <div className="shrink-0 text-right">
                  <p className="font-bold text-cm-text">
                    {formatarMoeda(categoria.faturamento)}
                  </p>
                  <p className="text-xs text-cm-text-muted">
                    {categoria.participacao.toFixed(1)}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
