import { useKPIsVendas } from "../../features/vendas/hooks/useKPIsVendas.js";
import { useDesempenhoCategorias } from "../../features/vendas/hooks/useDesempenhoCategorias.js";

import { VendasOverviewKPIs } from "../../features/vendas/components/Overview/VendasOverviewKPIs.jsx";
import { VendasDesempenhoCategorias } from "../../features/vendas/components/Overview/VendasDesempenhoCategorias.jsx";

export function AnalisesVendas() {
  const { kpis, carregando } = useKPIsVendas();

  const {
    categorias,
    carregando: carregandoCategorias,
  } = useDesempenhoCategorias();

  return (
    <main className="-mt-10 -ml-8 -mr-8 min-h-screen bg-cm-bg p-6">
      <div className="mx-auto w-full max-w-[1800px] space-y-6">
        <header className="space-y-2">
          <p className="text-sm text-cm-text-muted">
            Home / Vendas / Análises
          </p>

          <h1 className="text-2xl font-bold tracking-tight text-cm-text">
            Análises de vendas
          </h1>

          <p className="max-w-2xl text-sm leading-relaxed text-cm-text-muted">
            Acompanhe indicadores, faturamento e desempenho comercial
            das vendas realizadas.
          </p>
        </header>

        <section className="space-y-3">
          <div>
            <h2 className="text-base font-bold text-cm-text">
              Indicadores do dia
            </h2>
            <p className="mt-1 text-sm text-cm-text-muted">
              Resumo dos principais indicadores comerciais.
            </p>
          </div>

          <VendasOverviewKPIs
            kpis={kpis}
            loading={carregando}
          />
        </section>

        <VendasDesempenhoCategorias
          categorias={categorias}
          carregando={carregandoCategorias}
        />
      </div>
    </main>
  );
}

export default AnalisesVendas;
