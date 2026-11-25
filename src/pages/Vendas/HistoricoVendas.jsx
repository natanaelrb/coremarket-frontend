import { HistoricoVendasPanel } from "../../features/vendas/components/Historico/HistoricoVendasPanel.jsx";

import { useHistoricoVendas } from "../../features/vendas/hooks/useHistoricoVendas.js";
import { useVendaDetalhe } from "../../features/vendas/hooks/useVendaDetalhe.js";

export function HistoricoVendas() {
  const historico = useHistoricoVendas();

  const {
    // vendaSelecionada,
    visualizarVenda,
  } = useVendaDetalhe();

  return (
    <main className="-mt-10 -ml-8 -mr-8 min-h-screen bg-cm-bg p-6">
      <div className="mx-auto w-full max-w-[1800px] space-y-5">
        <header className="space-y-1">
          <p className="text-sm text-cm-text-muted">
            Home / Vendas / Histórico
          </p>

          <h1 className="text-2xl font-bold text-cm-text">
            Histórico de vendas
          </h1>

          <p className="text-sm text-cm-text-muted">
            Consulte, filtre e acompanhe as vendas realizadas.
          </p>
        </header>

        <HistoricoVendasPanel
          historico={historico}
          onVisualizarVenda={visualizarVenda}
        />
      </div>
    </main>
  );
}

export default HistoricoVendas;
