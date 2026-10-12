import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import EstoqueDetalheHeader from "../features/estoque/components/EstoqueDetalhe/EstoqueDetalheHeader.jsx";
import EstoqueResumo from "../features/estoque/components/EstoqueDetalhe/EstoqueResumo.jsx";
import EstoqueInformacoes from "../features/estoque/components/EstoqueDetalhe/EstoqueInformacoes.jsx";
import EstoqueTabs from "../features/estoque/components/EstoqueDetalhe/EstoqueTabs.jsx";
import EstoqueMovimentacoes from "../features/estoque/components/EstoqueDetalhe/EstoqueMovimentacoes.jsx";
import EstoqueMovimentoModal from "../features/estoque/components/EstoqueDetalhe/EstoqueMovimentoModal.jsx";

import { MOCK_PRODUTOS_ESTOQUE } from "../features/estoque/mocks/mockProdutosEstoque.js";
import { MOCK_MOVIMENTACOES_RECENTES } from "../features/estoque/mocks/mockMovimentacoes.js";

export default function EstoqueDetalhe() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [activeTab, setActiveTab] = useState("geral");
  const [movimentoModal, setMovimentoModal] = useState(null);

  const produto = MOCK_PRODUTOS_ESTOQUE.find(
    (item) => item.id === id,
  );

  if (!produto) {
    return null;
  }

  const movimentacoes = MOCK_MOVIMENTACOES_RECENTES.filter(
    (item) =>
      !item.produtoId ||
      item.produtoId === produto.id,
  );

  return (
    <div className="-mt-6 min-h-screen bg-gray-50 pb-8 pt-2 dark:bg-[#0A0C1F]">
      <div className="w-full space-y-5 -pl-5 -pr-3">
        <EstoqueDetalheHeader
          produto={produto}
          onBack={() => navigate("/estoque")}
          onEntrada={() => setMovimentoModal("entrada")}
          onSaida={() => setMovimentoModal("saida")}
        />

        <EstoqueResumo produto={produto} />

        <EstoqueInformacoes produto={produto} />

        <EstoqueTabs
          produto={produto}
          activeTab={activeTab}
          onChange={setActiveTab}
        />

        <EstoqueMovimentacoes
          produto={produto}
          movimentacoes={movimentacoes}
        />

        <EstoqueMovimentoModal
          open={movimentoModal !== null}
          tipo={movimentoModal}
          produto={produto}
          onClose={() => setMovimentoModal(null)}
          onConfirm={(payload) => {
            console.log("[Estoque] Movimento:", payload);
            setMovimentoModal(null);
          }}
        />
      </div>
    </div>
  );
}