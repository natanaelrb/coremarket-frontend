import { X } from "lucide-react";

import InitialsAvatar from "../../../../shared/components/data-display/InitialsAvatar.jsx";
import StarRating from "../../../../shared/components/data-display/StarRating.jsx";
import StatusBadge from "../Table/StatusBadge.jsx";

import DetailTabs from "./DetailTabs.jsx";

import VisaoGeralTab from "./tabs/VisaoGeralTab.jsx";
import DadosTab from "./tabs/DadosTab.jsx";
import ProdutosTab from "./tabs/ProdutosTab.jsx";
import ComprasTab from "./tabs/ComprasTab.jsx";
import FinanceiroTab from "./tabs/FinanceiroTab.jsx";
import MaisTab from "./tabs/MaisTab.jsx";

const TAB_COMPONENTS = {
  "visao-geral": VisaoGeralTab,
  dados: DadosTab,
  produtos: ProdutosTab,
  compras: ComprasTab,
  financeiro: FinanceiroTab,
  mais: MaisTab,
};

export default function DetailPanel({
  fornecedor,
  detalhe,
  activeTab,
  onChangeTab,
  onClose,
}) {
  if (!fornecedor) return null;

  const ActiveTabComponent =
    TAB_COMPONENTS[activeTab] ?? VisaoGeralTab;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 flex h-[88vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl animate-scale-in dark:border-[#252a4a] dark:bg-[#141833]">
        
        {/* Header */}
        <div className="flex flex-shrink-0 items-start justify-between border-b border-gray-100 px-6 py-5 dark:border-[#252a4a]">
          
          <div className="flex items-center gap-4">
            <InitialsAvatar
              name={fornecedor.nomeFantasia}
              size="lg"
            />

            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  {fornecedor.nomeFantasia}
                </h2>

                <StatusBadge status={fornecedor.status} />
              </div>

              <div className="mt-1 flex items-center gap-2">
                <StarRating value={fornecedor.nota} size={13} />

                <span className="text-xs text-gray-400 dark:text-gray-500">
                  {fornecedor.nota.toFixed(1)} (28 avaliações)
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-[#1f234a] dark:hover:text-gray-200"
          >
            <X size={20} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex-shrink-0 border-b border-gray-100 px-6 dark:border-[#252a4a]">
          <DetailTabs
            activeTab={activeTab}
            onChangeTab={onChangeTab}
          />
        </div>

        {/* Conteúdo */}
        <div className="flex-1 overflow-y-auto p-6">
          <ActiveTabComponent
            fornecedor={fornecedor}
            detalhe={detalhe}
          />
        </div>

      </div>
    </div>
  );
}