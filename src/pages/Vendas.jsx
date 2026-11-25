import {
  ArrowRight,
  Plus,
  History,
  ShoppingCart,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "../shared/components/ui/Button.jsx";

import { useKPIsVendas } from "../features/vendas/hooks/useKPIsVendas.js";

import { VendasOverviewKPIs } from "../features/vendas/components/Overview/VendasOverviewKPIs.jsx";
import { VendasRecentes } from "../features/vendas/components/Overview/VendasRecentes.jsx";

import { useDesempenhoCategorias } from "../features/vendas/hooks/useDesempenhoCategorias.js";

import { VendasDesempenhoCategorias } from "../features/vendas/components/Overview/VendasDesempenhoCategorias.jsx";

export function Vendas() {
  const { kpis, carregando } = useKPIsVendas();

  const {
    categorias,
    carregando: carregandoCategorias,
  } = useDesempenhoCategorias();

  return (
    <main className="-mt-10 -ml-8 -mr-8 min-h-screen bg-cm-bg p-6">
      <div className="mx-auto w-full max-w-[1800px] space-y-6">

        {/* Cabeçalho */}
        <header className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
          <div className="space-y-2">
            <p className="text-sm text-cm-text-muted">
              Home / Vendas
            </p>

            <h1 className="text-2xl font-bold tracking-tight text-cm-text">
              Visão geral de vendas
            </h1>

            <p className="max-w-2xl text-sm leading-relaxed text-cm-text-muted">
              Acompanhe o desempenho comercial, consulte as movimentações
              e acesse rapidamente as operações de venda.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link to="/vendas/historico">
              <Button variant="secondary" icon={History}>
                Histórico
              </Button>
            </Link>

            <Link to="/vendas/nova">
              <Button variant="primary" icon={Plus}>
                Nova venda
              </Button>
            </Link>
          </div>
        </header>

        {/* Indicadores */}
        <section aria-label="Indicadores de vendas" className="space-y-3">
          <div>
            <h2 className="text-base font-bold text-cm-text">
              Desempenho do dia
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

        {/* Atalhos */}
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Link
            to="/vendas/nova"
            className="group flex items-center justify-between gap-4 rounded-2xl border border-cm-border bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:bg-cm-surface"
          >
            <div className="flex min-w-0 items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
                <ShoppingCart size={22} />
              </span>

              <div className="min-w-0">
                <h3 className="font-bold text-cm-text">
                  Iniciar nova venda
                </h3>
                <p className="mt-1 text-sm text-cm-text-muted">
                  Acesse o PDV e registre uma operação.
                </p>
              </div>
            </div>

            <ArrowRight
              size={19}
              className="shrink-0 text-cm-text-muted transition-transform group-hover:translate-x-1"
            />
          </Link>

          <Link
            to="/vendas/historico"
            className="group flex items-center justify-between gap-4 rounded-2xl border border-cm-border bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:bg-cm-surface"
          >
            <div className="flex min-w-0 items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600 dark:bg-violet-950/40 dark:text-violet-400">
                <BarChart3 size={22} />
              </span>

              <div className="min-w-0">
                <h3 className="font-bold text-cm-text">
                  Consultar vendas
                </h3>
                <p className="mt-1 text-sm text-cm-text-muted">
                  Pesquise operações e acompanhe seus registros.
                </p>
              </div>
            </div>

            <ArrowRight
              size={19}
              className="shrink-0 text-cm-text-muted transition-transform group-hover:translate-x-1"
            />
          </Link>
        </section>

        {/* Desempenho por categoria */}
        <VendasDesempenhoCategorias
          categorias={categorias}
          carregando={carregandoCategorias}
        />

        {/* Vendas recentes */}
        <VendasRecentes />

      </div>
    </main>
  );
}

export default Vendas;
