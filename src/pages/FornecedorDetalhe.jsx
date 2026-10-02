import { useMemo, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import InitialsAvatar from "../shared/components/data-display/InitialsAvatar.jsx";
import StarRating from "../shared/components/data-display/StarRating.jsx";
import StatusBadge from "../features/fornecedores/components/Table/StatusBadge.jsx";

import DetailTabs from "../features/fornecedores/components/DetailPanel/DetailTabs.jsx";

import VisaoGeralTab from "../features/fornecedores/components/DetailPanel/tabs/VisaoGeralTab.jsx";
import DadosTab from "../features/fornecedores/components/DetailPanel/tabs/DadosTab.jsx";
import ProdutosTab from "../features/fornecedores/components/DetailPanel/tabs/ProdutosTab.jsx";
import ComprasTab from "../features/fornecedores/components/DetailPanel/tabs/ComprasTab.jsx";
import FinanceiroTab from "../features/fornecedores/components/DetailPanel/tabs/FinanceiroTab.jsx";
import MaisTab from "../features/fornecedores/components/DetailPanel/tabs/MaisTab.jsx";

import TimelineSection from "../features/fornecedores/components/Timeline/TimelineSection.jsx";

import { useFornecedores } from "../features/fornecedores/hooks/useFornecedores.js";
import {
  detalheFornecedorMock,
  detalheFallback,
} from "../features/fornecedores/mocks/detailMock.js";

const TAB_COMPONENTS = {
  "visao-geral": VisaoGeralTab,
  dados: DadosTab,
  produtos: ProdutosTab,
  compras: ComprasTab,
  financeiro: FinanceiroTab,
  mais: MaisTab,
};

export default function FornecedorDetalhe() {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    fornecedores,
    isLoading,
  } = useFornecedores();

  const [activeTab, setActiveTab] = useState("visao-geral");
  const [activeSidePanel, setActiveSidePanel] = useState("timeline");

  const fornecedor = useMemo(
    () =>
      fornecedores.find(
        (item) => String(item.id) === String(id)
      ),
    [fornecedores, id]
  );

  const detalhe = useMemo(
    () => detalheFornecedorMock[id] ?? detalheFallback,
    [id]
  );

  const ActiveTabComponent =
    TAB_COMPONENTS[activeTab] ?? VisaoGeralTab;

  if (isLoading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-sm text-gray-500">
          Carregando fornecedor...
        </p>
      </div>
    );
  }

  if (!fornecedor) {
    return (
      <div className="space-y-4">
        <button
          type="button"
          onClick={() => navigate("/fornecedores")}
          className="
            flex items-center gap-2
            text-sm text-gray-500
            transition-colors hover:text-gray-800
          "
        >
          <ArrowLeft size={16} />
          Voltar para fornecedores
        </button>

        <div className="rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800">
            Fornecedor não encontrado
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Não foi possível localizar o fornecedor solicitado.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in-up space-y-6">
      {/* Cabeçalho */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => navigate("/fornecedores")}
          className="
            flex items-center gap-2
            text-sm font-medium text-gray-500
            transition-colors hover:text-gray-800
            dark:text-gray-400 dark:hover:text-gray-100
          "
        >
          <ArrowLeft size={17} />
          Voltar para fornecedores
        </button>
      </div>

      {/* Identificação do fornecedor */}
      <section
        className="
          rounded-2xl border border-gray-200
          bg-white p-6 shadow-sm
          dark:border-[#252a4a] dark:bg-[#141833]
        "
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <InitialsAvatar
              name={fornecedor.nomeFantasia}
              size="lg"
            />

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  {fornecedor.nomeFantasia}
                </h1>

                <StatusBadge status={fornecedor.status} />
              </div>

              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {fornecedor.razaoSocial}
              </p>

              <div className="mt-2 flex items-center gap-2">
                <StarRating
                  value={fornecedor.nota}
                  size={13}
                />

                <span className="text-xs text-gray-400 dark:text-gray-500">
                  {Number(fornecedor.nota ?? 0).toFixed(1)}{" "}
                  (28 avaliações)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Abas */}
      <section
        className="
          overflow-hidden rounded-2xl
          border border-gray-200 bg-white shadow-sm
          dark:border-[#252a4a] dark:bg-[#141833]
        "
      >
        <div className="border-b border-gray-100 px-6 dark:border-[#252a4a]">
          <DetailTabs
            activeTab={activeTab}
            onChangeTab={setActiveTab}
          />
        </div>

        <div className="p-6">
          <ActiveTabComponent
            fornecedor={fornecedor}
            detalhe={detalhe}
          />
        </div>
      </section>

      {/* Histórico e documentos do fornecedor */}
      
        {/* Timeline */}
        <TimelineSection
          activeSidePanel={activeSidePanel}
          onChangeSidePanel={setActiveSidePanel}
          detalhe={detalhe}
        />  
      </div>
  );
}