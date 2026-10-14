// Página de Compras — camada de composição pura.
// Nenhuma regra de negócio vive aqui: cada hook resolve uma responsabilidade
// (dados, filtros, ordenação, paginação, seleção, KPIs, gráficos, detalhe,
// colunas, ações, exportação) e os componentes apenas renderizam o que
// recebem via props. Isso mantém a página fácil de ler e de testar.

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ModalNovaCompra } from "../features/compras/components/Modal/NovaCompra/ModalNovaCompra";
import { useNovaCompra } from "../features/compras/hooks/useNovaCompra";
import { ModalNovoPedido } from "../features/compras/components/Modal/NovoPedido/ModalNovoPedido";
import { useNovoPedido } from "../features/compras/hooks/useNovoPedido";
import { ModalNovaCotacao } from "../features/compras/components/Modal/Cotacao/ModalNovaCotacao";
import { useNovaCotacao } from "../features/compras/hooks/useNovaCotacao";
import { ModalImportarXml } from "../features/compras/components/Modal/ImportarXml/ModalImportarXml";
import { ModalImportarNota } from "../features/compras/components/Modal/ImportarNota/ModalImportarNota";
import { ModalEditarCompra } from "../features/compras/components/Modal/EditarCompra/ModalEditarCompra";
import { atualizarCompra } from "../features/compras/data/comprasStore";

import { ComprasHeader } from "../features/compras/components/Header/ComprasHeader";
import { KpiCardsRow } from "../features/compras/components/KpiCards/KpiCardsRow";
import { ComprasToolbar } from "../features/compras/components/Toolbar/ComprasToolbar";
import { FiltersBar } from "../features/compras/components/Filters/FiltersBar";
import { ComprasTable } from "../features/compras/components/Table/ComprasTable";
import { EvolucaoComprasChart } from "../features/compras/components/Charts/EvolucaoComprasChart";
import { ComprasPorFornecedorChart } from "../features/compras/components/Charts/ComprasPorFornecedorChart";
import { StatusComprasChart } from "../features/compras/components/Charts/StatusComprasChart";
import { CompraDetailPanel } from "../features/compras/components/DetailPanel/CompraDetailPanel";
import { CancelCompraDialog } from "../features/compras/components/Dialogs/CancelCompraDialog";

import { useComprasData } from "../features/compras/hooks/useComprasData";
import { useComprasFilters } from "../features/compras/hooks/useComprasFilters";
import { useComprasSort } from "../features/compras/hooks/useComprasSort";
import { useComprasPagination } from "../features/compras/hooks/useComprasPagination";
import { useComprasSelection } from "../features/compras/hooks/useComprasSelection";
import { useComprasKpis } from "../features/compras/hooks/useComprasKpis";
import { useComprasCharts } from "../features/compras/hooks/useComprasCharts";
import { useCompraDetail } from "../features/compras/hooks/useCompraDetail";
import { useColumnCustomization } from "../features/compras/hooks/useColumnCustomization";
import { useCompraActions } from "../features/compras/hooks/useCompraActions";
import { useComprasExport } from "../features/compras/hooks/useComprasExport";

import { mockFornecedores } from "../features/compras/data/mockFornecedores";

export default function Compras() {
  const navigate = useNavigate();
  const [modalNovaCompraAberto, setModalNovaCompraAberto] = useState(false);
  const [mensagemCompra, setMensagemCompra] = useState("");
  const [modalNovoPedidoAberto, setModalNovoPedidoAberto] = useState(false);
  const [mensagemPedido, setMensagemPedido] = useState("");
  const [modalNovaCotacaoAberto, setModalNovaCotacaoAberto] = useState(false);
  const [mensagemCotacao, setMensagemCotacao] = useState("");
  const formularioNovaCotacao = useNovaCotacao();
  const [modalImportarXmlAberto, setModalImportarXmlAberto] = useState(false);
  const [mensagemXml, setMensagemXml] = useState("");
  const [modalImportarNotaAberto, setModalImportarNotaAberto] = useState(false);
  const [mensagemNota, setMensagemNota] = useState("");
  const [compraEmEdicao, setCompraEmEdicao] = useState(null);

  const formularioNovoPedido = useNovoPedido();
  const formularioNovaCompra = useNovaCompra();
  const {
    compras,
    isLoading,
    error,
    atualizar,
  } = useComprasData();
  const { filtros, setFiltro, comprasFiltradas, filtrosAtivos } =
    useComprasFilters(compras);

  const { comprasOrdenadas, sortConfig, toggleSort } =
    useComprasSort(comprasFiltradas);

  const pagination = useComprasPagination(comprasOrdenadas, 10);
  const selection = useComprasSelection(pagination.paginatedItems);

  const { columns, toggleColumn } = useColumnCustomization();

  const kpis = useComprasKpis(comprasFiltradas, compras);
  const charts = useComprasCharts(comprasFiltradas);

  const detail = useCompraDetail();

  const actions = useCompraActions({
    onCancelSuccess: detail.closeDetail,
  });

  const { exportar, isExporting } = useComprasExport(comprasFiltradas);

  function handleRowAction(action, compra) {
    if (action === "ver") {
      navigate(`/compras/${compra.id}`);
      return;
    }

    if (action === "editar") {
      setCompraEmEdicao(compra);
      return;
    }

    if (action === "imprimir") {
      actions.imprimirCompra(compra.id);
      return;
    }

    if (action === "cancelar") {
      actions.requestCancel(compra.id);
    }
  }

  return (
    <div className="-mt-10 -ml-6 -mr-6 min-h-screen bg-slate-50 dark:bg-[#0B0E24] transition-colors duration-300">
      <div className="p-6 space-y-5">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <ComprasHeader />
        </div>

        <KpiCardsRow kpis={kpis} />

        <ComprasToolbar
          onNovaCompra={() => {
            setMensagemCompra("");
            setModalNovaCompraAberto(true);
          }}
          onNovoPedido={() => {
            setMensagemPedido("");
            setModalNovoPedidoAberto(true);
          }}
          onNovaCotacao={() => {
            setMensagemCotacao("");
            setModalNovaCotacaoAberto(true);
          }}
          onImportarXml={() => {
            setMensagemXml("");
            setModalImportarXmlAberto(true);
          }}
          onImportarNota={() => {
            setMensagemNota("");
            setModalImportarNotaAberto(true);
          }}
          onExportar={exportar}
          isExporting={isExporting}
          onImprimir={() => window.print()}
          onAtualizar={atualizar}
          isRefreshing={isLoading}
        />

        <div className="flex flex-col lg:flex-row gap-5 items-start">
          <div className="flex-1 min-w-0 space-y-5">
            <FiltersBar
              filtros={filtros}
              setFiltro={setFiltro}
              fornecedores={mockFornecedores}
              filtrosAtivos={filtrosAtivos}
              onOpenMoreFilters={() => {}}
            />

            <ComprasTable
              compras={pagination.paginatedItems}
              totalCount={comprasOrdenadas.length}
              columns={columns}
              toggleColumn={toggleColumn}
              sortConfig={sortConfig}
              toggleSort={toggleSort}
              selection={selection}
              pagination={pagination}
              onRowClick={(id) => navigate(`/compras/${id}`)}
              onRowAction={handleRowAction}
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <div className="lg:col-span-1">
                <EvolucaoComprasChart data={charts.evolucaoData} />
              </div>

              <ComprasPorFornecedorChart
                dataset={charts.fornecedorData.dataset}
                total={charts.fornecedorData.total}
              />

              <StatusComprasChart
                dataset={charts.statusData.dataset}
                total={charts.statusData.total}
              />
            </div>
          </div>

          <CompraDetailPanel
            isOpen={detail.isOpen}
            detalhe={detail.detalhe}
            isLoading={detail.isLoading}
            activeTab={detail.activeTab}
            setActiveTab={detail.setActiveTab}
            onClose={detail.closeDetail}
            onCancelar={actions.requestCancel}
            onEditar={() => {}}
            onImprimir={actions.imprimirCompra}
          />
        </div>
      </div>

      <CancelCompraDialog
        isOpen={actions.confirmCancelId !== null}
        isCancelling={actions.isCancelling}
        onConfirm={actions.confirmCancel}
        onDismiss={actions.dismissCancel}
      />

      <ModalNovaCompra
        isOpen={modalNovaCompraAberto}
        form={formularioNovaCompra}
        onClose={() => setModalNovaCompraAberto(false)}
        onSalvar={() => {
          setMensagemCompra(
            "Compra registrada no armazenamento local deste navegador. A tabela e o banco de dados ainda não foram atualizados.",
          );
        }}
      />

      {mensagemCompra && (
        <div
          role="status"
          className="fixed bottom-5 right-5 z-[110] max-w-md rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-900 shadow-xl dark:border-amber-400/20 dark:bg-[#151b28] dark:text-amber-200"
        >
          {mensagemCompra}
          <button
            type="button"
            onClick={() => setMensagemCompra("")}
            className="ml-3 font-bold"
            aria-label="Fechar aviso"
          >
            ×
          </button>
        </div>
      )}

      <ModalNovoPedido
        isOpen={modalNovoPedidoAberto}
        form={formularioNovoPedido}
        onClose={() => setModalNovoPedidoAberto(false)}
        onSalvar={(pedido) => {
          setMensagemPedido(
            `Pedido ${pedido.numero} salvo localmente. Ele ainda não foi integrado à tabela nem ao banco de dados.`,
          );
        }}
      />

      {mensagemPedido && (
        <div
          role="status"
          className="fixed bottom-5 right-5 z-[110] max-w-md rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-900 shadow-xl dark:border-green-400/20 dark:bg-[#151b28] dark:text-green-200"
        >
          {mensagemPedido}
          <button
            type="button"
            onClick={() => setMensagemPedido("")}
            className="ml-3 font-bold"
            aria-label="Fechar aviso"
          >
            ×
          </button>
        </div>
      )}

      <ModalNovaCotacao
        isOpen={modalNovaCotacaoAberto}
        form={formularioNovaCotacao}
        onClose={() => setModalNovaCotacaoAberto(false)}
        onSalvar={(cotacao) => {
          setMensagemCotacao(
            `Cotação ${cotacao.numero} salva localmente. Ela ainda não foi enviada aos fornecedores nem integrada ao banco de dados.`
          );
        }}
      />

      {mensagemCotacao && (
        <div
          role="status"
          className="fixed bottom-5 right-5 z-[110] max-w-md rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-900 shadow-xl dark:border-green-400/20 dark:bg-[#151b28] dark:text-green-200"
        >
          {mensagemCotacao}
          <button
            type="button"
            onClick={() => setMensagemCotacao("")}
            className="ml-3 font-bold"
            aria-label="Fechar aviso"
          >
            ×
          </button>
        </div>
      )}

      <ModalImportarXml
        isOpen={modalImportarXmlAberto}
        onClose={() => setModalImportarXmlAberto(false)}
        onImportar={(nota) => {
          const chave = "coremarket-xml-conferencias-temporarias";
          const anteriores = JSON.parse(localStorage.getItem(chave) || "[]");

          localStorage.setItem(
            chave,
            JSON.stringify([nota, ...anteriores])
          );

          setMensagemXml(
            `NF-e ${nota.numero || ""} encaminhada para conferência local. A compra ainda não foi registrada.`
          );
        }}
      />

      {mensagemXml && (
        <div
          role="status"
          className="fixed bottom-5 right-5 z-[110] max-w-md rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-900 shadow-xl dark:border-green-400/20 dark:bg-[#151b28] dark:text-green-200"
        >
          {mensagemXml}
          <button
            type="button"
            onClick={() => setMensagemXml("")}
            className="ml-3 font-bold"
            aria-label="Fechar aviso"
          >
            ×
          </button>
        </div>
      )}

      <ModalImportarNota
        isOpen={modalImportarNotaAberto}
        onClose={() => setModalImportarNotaAberto(false)}
        onImportar={(nota) => {
          const chave = "coremarket-notas-temporarias";

          const anteriores = JSON.parse(
            localStorage.getItem(chave) || "[]"
          );

          localStorage.setItem(
            chave,
            JSON.stringify([nota, ...anteriores])
          );

          setMensagemNota(
            `Arquivo "${nota.nomeArquivo}" encaminhado para conferência.`
          );
        }}
      />

      {mensagemNota && (
        <div
          role="status"
          className="fixed bottom-5 right-5 z-[110] flex max-w-md items-start gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-900 shadow-xl dark:border-green-500/20 dark:bg-[#151b28] dark:text-green-200"
        >
          <CheckCircle2 size={19} className="mt-0.5 shrink-0" />

          <span className="flex-1">{mensagemNota}</span>

          <button
            type="button"
            onClick={() => setMensagemNota("")}
            aria-label="Fechar aviso"
            className="font-bold"
          >
            ×
          </button>
        </div>
      )}

      {compraEmEdicao && (
        <ModalEditarCompra
          compra={compraEmEdicao}
          onClose={() => setCompraEmEdicao(null)}
          onSave={(alteracoes) => {
            const sucesso = atualizarCompra(compraEmEdicao.id, alteracoes);

            if (sucesso) {
              setCompraEmEdicao(null);
            }

            return sucesso;
          }}
        />
      )}
    </div>
  );
}
