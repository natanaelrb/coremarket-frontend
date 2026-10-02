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

  const nota = Number(fornecedor.nota ?? 0);

  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        p-4 sm:p-6
      "
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="fornecedor-detail-title"
        className="
          relative z-10
          flex h-[88vh] w-full max-w-6xl
          flex-col overflow-hidden
          rounded-2xl
          border border-slate-200
          bg-white
          shadow-2xl shadow-slate-950/20
          animate-scale-in
          dark:border-[#252a4a]
          dark:bg-[#141833]
          dark:shadow-black/30
        "
      >
        {/* Header */}
        <div
          className="
            flex flex-shrink-0
            items-start justify-between
            gap-4
            border-b border-slate-200/80
            px-5 py-5
            sm:px-6
            dark:border-[#252a4a]
          "
        >
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <InitialsAvatar
              name={fornecedor.nomeFantasia}
              size="lg"
            />

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h2
                  id="fornecedor-detail-title"
                  className="
                    truncate
                    text-lg font-semibold
                    text-slate-800
                    dark:text-slate-100
                  "
                >
                  {fornecedor.nomeFantasia}
                </h2>

                <StatusBadge status={fornecedor.status} />
              </div>

              <div className="mt-1 flex flex-wrap items-center gap-2">
                <StarRating value={nota} size={13} />

                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {nota.toFixed(1)} (28 avaliações)
                </span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar detalhes do fornecedor"
            className="
              flex h-9 w-9
              flex-shrink-0
              items-center justify-center
              rounded-lg
              text-slate-400
              transition-colors
              hover:bg-slate-100
              hover:text-slate-700
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-emerald-500/40
              dark:text-slate-500
              dark:hover:bg-[#252a4a]
              dark:hover:text-slate-200
            "
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        {/* Tabs */}
        <div
          className="
            flex-shrink-0
            overflow-x-auto
            border-b border-slate-200/80
            px-5 sm:px-6
            dark:border-[#252a4a]
          "
        >
          <DetailTabs
            activeTab={activeTab}
            onChangeTab={onChangeTab}
          />
        </div>

        {/* Conteúdo */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6">
          <ActiveTabComponent
            fornecedor={fornecedor}
            detalhe={detalhe}
          />
        </div>
      </div>
    </div>
  );
}