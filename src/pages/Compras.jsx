// Página de Compras — camada de composição pura.
// Nenhuma regra de negócio vive aqui: cada hook resolve uma responsabilidade
// (dados, filtros, ordenação, paginação, seleção, KPIs, gráficos, detalhe,
// colunas, ações, exportação) e os componentes apenas renderizam o que
// recebem via props. Isso mantém a página fácil de ler e de testar.

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
  const { compras } = useComprasData();
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
    if (action === "ver") detail.openDetail(compra.id);
    if (action === "editar") detail.openDetail(compra.id);
    if (action === "imprimir") actions.imprimirCompra(compra.id);
    if (action === "cancelar") actions.requestCancel(compra.id);
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B0E24] transition-colors duration-300">
      <div className="p-6 space-y-5">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <ComprasHeader />
        </div>

        <KpiCardsRow kpis={kpis} />

        <ComprasToolbar
          onNovaCompra={() => {}}
          onNovoPedido={() => {}}
          onNovaCotacao={() => {}}
          onImportarXml={() => {}}
          onImportarNota={() => {}}
          onExportar={exportar}
          isExporting={isExporting}
          onImprimir={() => window.print()}
          onAtualizar={() => {}}
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
              onRowClick={detail.openDetail}
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
    </div>
  );
}