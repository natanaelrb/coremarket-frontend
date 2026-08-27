// Painel lateral deslizante com o detalhe completo de uma compra.
// Composição pura: orquestra header, tabs e footer; conteúdo de cada aba
// vive em ./tabs.
import { X, ChevronLeft } from "lucide-react";
import { StatusBadge } from "../Table/StatusBadge";
import { DetailPanelTabs } from "./DetailPanelTabs";
import { DetailPanelFooter } from "./DetailPanelFooter";
import { ResumoTab } from "./tabs/ResumoTab";
import { ProdutosTab } from "./tabs/ProdutosTab";
import { RecebimentoTab } from "./tabs/RecebimentoTab";
import { FinanceiroTab } from "./tabs/FinanceiroTab";
import { NFAnexosTab } from "./tabs/NFAnexosTab";
import { HistoricoTab } from "./tabs/HistoricoTab";
import { formatCompraNumero } from "../../utils/formatters";

const TAB_COMPONENTS = {
  resumo: ResumoTab,
  produtos: ProdutosTab,
  recebimento: RecebimentoTab,
  financeiro: FinanceiroTab,
  nf: NFAnexosTab,
  historico: HistoricoTab,
};

export function CompraDetailPanel({ isOpen, detalhe, isLoading, activeTab, setActiveTab, onClose, onCancelar, onEditar, onImprimir }) {
  if (!isOpen) return null;

  const TabContent = TAB_COMPONENTS[activeTab];

  return (
    <>
      <div className="fixed inset-0 bg-black/20 dark:bg-black/40 z-30 animate-fade-in lg:hidden" onClick={onClose} />
      <aside className="w-full lg:w-[420px] shrink-0 bg-white dark:bg-[#131736] border border-slate-200 dark:border-white/5 rounded-2xl flex flex-col animate-slide-in-right max-h-[calc(100vh-140px)] sticky top-4 overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 dark:border-white/5">
          <div className="flex items-center gap-2">
            <button onClick={onClose} className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <h3 className="text-sm font-semibold text-slate-800 dark:text-white">
              Compra {detalhe ? formatCompraNumero(detalhe.numero) : ""}
            </h3>
            {detalhe && <StatusBadge status={detalhe.status} />}
          </div>
          <button onClick={onClose} className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        <DetailPanelTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5">
          {isLoading || !detalhe ? (
            <DetailSkeleton />
          ) : (
            <TabContent detalhe={detalhe} />
          )}
        </div>

        {detalhe && !isLoading && (
          <DetailPanelFooter onCancelar={() => onCancelar(detalhe.id)} onEditar={() => onEditar(detalhe.id)} onImprimir={() => onImprimir(detalhe.id)} />
        )}
      </aside>
    </>
  );
}

function DetailSkeleton() {
  return (
    <div className="space-y-3 animate-pulse">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="h-4 bg-slate-100 dark:bg-white/5 rounded-md" style={{ width: `${70 + (i % 3) * 10}%` }} />
      ))}
    </div>
  );
}
