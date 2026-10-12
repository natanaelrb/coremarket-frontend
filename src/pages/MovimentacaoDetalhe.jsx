import { useNavigate, useParams } from "react-router-dom";

import MovementDetailPanel from "../features/movimentacoes/components/DetailPanel/MovementDetailPanel.jsx";
import { useMovements } from "../features/movimentacoes/hooks/useMovements.js";

export default function MovimentacaoDetalhe() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { movements, isLoading } = useMovements();

  const movement = movements.find((item) => String(item.id) === String(id));

  if (isLoading) {
    return (
      <div className="-mt-6 -ml-8 -mr-8 min-h-screen bg-[#F8FAFC] px-6 py-7">
        <div className="animate-pulse space-y-5">
          <div className="h-40 rounded-2xl bg-white" />

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="h-56 rounded-2xl bg-white" />
            <div className="h-56 rounded-2xl bg-white" />
          </div>
        </div>
      </div>
    );
  }

  if (!movement) {
    return (
      <div className="-mt-6 -ml-8 -mr-8 flex min-h-screen items-center justify-center bg-[#F8FAFC]">
        <div className="text-center">
          <h1 className="text-lg font-bold text-slate-900">
            Movimentação não encontrada
          </h1>

          <button
            type="button"
            onClick={() => navigate("/movimentacoes")}
            className="mt-4 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-600"
          >
            Voltar para movimentações
          </button>
        </div>
      </div>
    );
  }

  return (
    <MovementDetailPanel
      movement={movement}
      onBack={() => navigate("/movimentacoes")}
      onPrint={() => window.print()}
      onExport={() => {
        console.log("[Movimentação] Exportar:", movement.id);
      }}
      onReverse={() => {
        console.log("[Movimentação] Estornar:", movement.id);
      }}
    />
  );
}
