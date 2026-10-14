import { useState } from "react";
import { Pencil } from "lucide-react";

import {
  atualizarCompra,
  obterCompra,
} from "../features/compras/data/comprasStore";

import { ModalEditarCompra } from "../features/compras/components/Modal/EditarCompra/ModalEditarCompra";

import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { useCompraDetalhePage } from "../features/compras/hooks/useCompraDetalhePage";
import { StatusBadge } from "../features/compras/components/Table/StatusBadge";
import { DetailPanelTabs } from "../features/compras/components/DetailPanel/DetailPanelTabs";

import { ResumoTab } from "../features/compras/components/DetailPanel/tabs/ResumoTab";
import { ProdutosTab } from "../features/compras/components/DetailPanel/tabs/ProdutosTab";
import { RecebimentoTab } from "../features/compras/components/DetailPanel/tabs/RecebimentoTab";
import { FinanceiroTab } from "../features/compras/components/DetailPanel/tabs/FinanceiroTab";
import { NFAnexosTab } from "../features/compras/components/DetailPanel/tabs/NFAnexosTab";
import { HistoricoTab } from "../features/compras/components/DetailPanel/tabs/HistoricoTab";

import { formatCompraNumero } from "../features/compras/utils/formatters";

const TAB_COMPONENTS = {
  resumo: ResumoTab,
  produtos: ProdutosTab,
  recebimento: RecebimentoTab,
  financeiro: FinanceiroTab,
  nf: NFAnexosTab,
  historico: HistoricoTab,
};


export default function CompraDetalhe() {
  const navigate = useNavigate();
  const [modalEditarAberto, setModalEditarAberto] = useState(false);

  const {
    detalhe,
    isLoading,
    activeTab,
    setActiveTab,
  } = useCompraDetalhePage();  

  const compraAtual = detalhe
    ? obterCompra(detalhe.id)
    : null;

  const TabContent = TAB_COMPONENTS[activeTab] ?? ResumoTab;

  if (isLoading) {
    return (
      <div className="mx-auto max-w-[1400px] space-y-5 animate-pulse">
        <div className="h-8 w-64 rounded-lg bg-slate-200 dark:bg-white/10" />
        <div className="h-24 rounded-2xl bg-slate-200 dark:bg-white/10" />
        <div className="h-14 rounded-xl bg-slate-200 dark:bg-white/10" />
        <div className="h-64 rounded-2xl bg-slate-200 dark:bg-white/10" />
      </div>
    );
  }

  if (!detalhe) {
    return (
      <div className="mx-auto w-full max-w-[1100px]">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-[#252a4a] dark:bg-[#151936]">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Compra não encontrada
          </h2>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            A compra informada não existe ou não está disponível.
          </p>

          <button
            type="button"
            onClick={() => navigate("/compras")}
            className="mt-4 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
          >
            Voltar para compras
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto -mt-4 w-full max-w-[1400px] space-y-5 pb-8">
      <button
        type="button"
        onClick={() => navigate("/compras")}
        className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-emerald-50 hover:text-emerald-700 dark:text-slate-300 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400"
      >
        <ArrowLeft className="-ml-6 h-4 w-4" />
        Voltar para compras
      </button>

      <header className="flex flex-wrap items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/5 dark:bg-[#151936]">
        <div className="flex items-start gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
            <span className="text-lg font-bold">C</span>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              Compras / Detalhes
            </p>

            <h1 className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
              Compra {formatCompraNumero(detalhe.numero)}
            </h1>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Consulte os produtos, o recebimento e as informações financeiras desta compra.
            </p>
          </div>
        </div>

        
      <div className="flex flex-wrap items-center gap-3">
        <StatusBadge status={detalhe.status} />

        <button
          type="button"
          onClick={() => setModalEditarAberto(true)}
          className="inline-flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-sm font-semibold text-emerald-700 transition hover:border-emerald-300 hover:bg-emerald-100 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400 dark:hover:bg-emerald-500/20"
        >
          <Pencil size={16} />
          Editar compra
        </button>
      </div>

      </header>

      <DetailPanelTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <section className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/5 dark:bg-[#151936] sm:p-6">

      <TabContent
        detalhe={detalhe}
        onVerConferencia={() => setActiveTab("recebimento")}
        onVerEstoque={() => setActiveTab("produtos")}
        onVerContasAPagar={() => setActiveTab("financeiro")}
        onVerNotaFiscal={() => setActiveTab("nf")}
      />


      {modalEditarAberto && compraAtual && (
        <ModalEditarCompra
          compra={compraAtual}
          onClose={() => setModalEditarAberto(false)}
          onSave={(alteracoes) => {
            const sucesso = atualizarCompra(compraAtual.id, alteracoes);

            if (sucesso) {
              setModalEditarAberto(false);
              window.location.reload();
            }

            return sucesso;
          }}
        />
      )}
      </section>
    </div>
  );
}