// src/features/compras/components/DetailPanel/CompraDetailPanel.jsx
// Ajuste o caminho acima caso o arquivo esteja em outra pasta.

import { X, ChevronLeft, ShoppingCart, LoaderCircle } from "lucide-react";
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

export function CompraDetailPanel({
  isOpen,
  detalhe,
  isLoading,
  activeTab,
  setActiveTab,
  onClose,
  onCancelar,
  onEditar,
  onImprimir,
  onVerConferencia,
  onVerEstoque,
  onVerContasAPagar,
  onVerNotaFiscal,
  onBaixarNotaFiscal,
}) {
  if (!isOpen) return null;

  const TabContent = TAB_COMPONENTS[activeTab] ?? ResumoTab;

  const handleCancelar = () => {
    if (detalhe && onCancelar) onCancelar(detalhe.id);
  };

  const handleEditar = () => {
    if (detalhe && onEditar) onEditar(detalhe.id);
  };

  const handleImprimir = () => {
    if (detalhe && onImprimir) onImprimir(detalhe.id);
  };

  return (
    <>
      {/* Fundo de sobreposição em telas menores */}
      <button
        type="button"
        aria-label="Fechar detalhes da compra"
        onClick={onClose}
        className="fixed inset-0 z-30 cursor-default bg-slate-950/30 backdrop-blur-[2px] animate-fade-in lg:hidden"
      />

      <aside
        role="complementary"
        aria-label="Detalhes da compra"
        className="
          relative z-40 flex max-h-[calc(100dvh-2rem)] w-full shrink-0
          flex-col overflow-hidden rounded-2xl
          border border-slate-200 bg-white shadow-xl shadow-slate-900/5
          animate-slide-in-right
          dark:border-slate-700/70 dark:bg-[#151b28] dark:shadow-black/20
          lg:sticky lg:top-4 lg:w-[420px] lg:max-h-[calc(100vh-140px)]
        "
      >
        {/* Cabeçalho */}
        <header className="shrink-0 border-b border-slate-200/80 dark:border-slate-700/70">
          <div className="flex min-h-[72px] items-center justify-between gap-3 px-4 py-3 sm:px-5">
            <div className="flex min-w-0 items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                aria-label="Voltar"
                className="
                  flex h-9 w-9 shrink-0 items-center justify-center rounded-xl
                  text-slate-500 transition-colors
                  hover:bg-slate-100 hover:text-slate-800
                  focus-visible:outline-none focus-visible:ring-2
                  focus-visible:ring-emerald-500
                  dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white
                "
              >
                <ChevronLeft size={19} />
              </button>

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
                <ShoppingCart size={19} />
              </div>

              <div className="min-w-0">
                <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500">
                  Detalhes do pedido
                </p>

                <h2 className="mt-0.5 truncate text-sm font-bold text-slate-900 dark:text-slate-100">
                  {detalhe
                    ? `Compra ${formatCompraNumero(detalhe.numero)}`
                    : "Carregando compra"}
                </h2>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar painel"
              className="
                flex h-9 w-9 shrink-0 items-center justify-center rounded-xl
                text-slate-400 transition-colors
                hover:bg-red-50 hover:text-red-600
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-emerald-500
                dark:hover:bg-red-400/10 dark:hover:text-red-400
              "
            >
              <X size={18} />
            </button>
          </div>

          {detalhe && (
            <div className="flex flex-wrap items-center gap-2 px-5 pb-3 pl-[5.25rem]">
              <StatusBadge status={detalhe.status} />
              {detalhe.fornecedorNome && (
                <span className="max-w-full truncate text-xs text-slate-500 dark:text-slate-400">
                  {detalhe.fornecedorNome}
                </span>
              )}
            </div>
          )}
        </header>

        {/* Navegação entre abas */}
        <div className="shrink-0 border-b border-slate-200/80 dark:border-slate-700/70">
          <DetailPanelTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>

        {/* Conteúdo rolável */}
        <div
          className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-5 sm:px-5"
          aria-live="polite"
        >
          {isLoading || !detalhe ? (
            <DetailSkeleton />
          ) : (
            <div key={activeTab} className="animate-fade-in">
              <TabContent
                detalhe={detalhe}
                onVerConferencia={onVerConferencia}
                onVerEstoque={onVerEstoque}
                onVerContasAPagar={onVerContasAPagar}
                onVerNotaFiscal={onVerNotaFiscal}
                onBaixarNotaFiscal={onBaixarNotaFiscal}
              />
            </div>
          )}
        </div>

        {/* Ações principais */}
        {detalhe && !isLoading && (
          <div className="shrink-0 border-t border-slate-200/80 bg-white px-4 py-3 dark:border-slate-700/70 dark:bg-[#151b28] sm:px-5">
            <DetailPanelFooter
              onCancelar={handleCancelar}
              onEditar={handleEditar}
              onImprimir={handleImprimir}
            />
          </div>
        )}
      </aside>
    </>
  );
}

function DetailSkeleton() {
  return (
    <div
      className="space-y-5 animate-pulse"
      role="status"
      aria-label="Carregando detalhes da compra"
    >
      <div className="flex items-center gap-3">
        <div className="h-11 w-11 rounded-xl bg-slate-100 dark:bg-slate-800" />
        <div className="flex-1 space-y-2">
          <div className="h-3 w-2/5 rounded-md bg-slate-100 dark:bg-slate-800" />
          <div className="h-3 w-3/5 rounded-md bg-slate-100 dark:bg-slate-800" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="h-24 rounded-xl border border-slate-100 bg-slate-50 dark:border-slate-700/60 dark:bg-slate-800/50"
          />
        ))}
      </div>

      <div className="space-y-3 rounded-xl border border-slate-100 p-4 dark:border-slate-700/60">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="h-3 rounded-md bg-slate-100 dark:bg-slate-800"
            style={{ width: `${70 + (index % 3) * 10}%` }}
          />
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 py-2 text-xs text-slate-400">
        <LoaderCircle size={14} className="animate-spin" />
        Carregando informações...
      </div>
    </div>
  );
}
