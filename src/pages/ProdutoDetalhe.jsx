import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useProdutos } from "../features/produtos/hooks/useProdutos";

import { DetailHeader } from "../features/produtos/components/ProductDetailPanel/DetailHeader";
import { DetailTabs } from "../features/produtos/components/ProductDetailPanel/DetailTabs";

import {
  GeralTab,
  EstoqueTab,
  LotesTab,
  ComprasTab,
  VendasTab,
  FinanceiroTab,
  HistoricoTab,
} from "../features/produtos/components/ProductDetailPanel/tabs";

const TAB_COMPONENTS = {
  geral: GeralTab,
  estoque: EstoqueTab,
  lotes: LotesTab,
  compras: ComprasTab,
  vendas: VendasTab,
  financeiro: FinanceiroTab,
  historico: HistoricoTab,
};

export default function ProdutoDetalhe() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { produtos, isLoading } = useProdutos();

  const [activeTab, setActiveTab] = useState("geral");

  const produto = produtos.find(
    (item) => String(item.id) === String(id)
  );

  const ActiveTabComponent =
    TAB_COMPONENTS[activeTab] ?? GeralTab;

  if (isLoading) {
    return (
      <div className="flex min-h-[300px] items-center justify-center">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Carregando produto...
        </p>
      </div>
    );
  }

  if (!produto) {
    return (
      <div className="mx-auto w-full max-w-[1100px]">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-[#252a4a] dark:bg-[#151936]">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Produto não encontrado
          </h2>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            O produto informado não existe ou não está disponível.
          </p>

          <button
            type="button"
            onClick={() => navigate("/produtos")}
            className="mt-4 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
          >
            Voltar para produtos
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto -mt-4 w-full max-w-[1400px] space-y-5">
      <DetailHeader
        produto={produto}
        onClose={() => navigate("/produtos")}
      />

      <DetailTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <ActiveTabComponent produto={produto} />
    </div>
  );
}