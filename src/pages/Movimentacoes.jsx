import { useNavigate } from "react-router-dom";
import PageHeader from "../features/movimentacoes/components/PageHeader/PageHeader";
import StatsCardsRow from "../features/movimentacoes/components/StatsCards/StatsCardsRow";
import FiltersPanel from "../features/movimentacoes/components/Filters/FiltersPanel";
import QuickFilterTabs from "../features/movimentacoes/components/Filters/QuickFilterTabs";
import MovementsTable from "../features/movimentacoes/components/MovementsTable/MovementsTable";
import AnalyticsSection from "../features/movimentacoes/components/Analytics/AnalyticsSection";
import AlertsPanel from "../features/movimentacoes/components/Alerts/AlertsPanel";
import QuickExportPanel from "../features/movimentacoes/components/QuickExport/QuickExportPanel";
import NewMovementModal from "../features/movimentacoes/components/NewMovementModal/NewMovementModal";

import { useMovements } from "../features/movimentacoes/hooks/useMovements";
import { useMovementStats } from "../features/movimentacoes/hooks/useMovementStats";
import { useQuickFilterTabs } from "../features/movimentacoes/hooks/useQuickFilterTabs";
import { useMovementFilters } from "../features/movimentacoes/hooks/useMovementFilters";
import { useAnalyticsData } from "../features/movimentacoes/hooks/useAnalyticsData";
import { useAlerts } from "../features/movimentacoes/hooks/useAlerts";
import { useExport } from "../features/movimentacoes/hooks/useExport";
import { useNewMovementModal } from "../features/movimentacoes/hooks/useNewMovementModal";

// Página "Movimentações de Estoque" — renderiza apenas os componentes.
// Todo o estado é dono dos hooks em ./hooks, seguindo o padrão do CoreMarket:
// página = composição, hooks = estado, componentes = apresentação pura.
export default function Movimentacoes() {
  const navigate = useNavigate();
  const openMovement = (id) => {
    navigate(`/movimentacoes/${id}`);
  };
  const { movements, isLoading: isLoadingMovements, refetch } = useMovements();
  const { stats, isLoading: isLoadingStats } = useMovementStats();
  const { tabs, activeTab, setActiveTab, filterValue } =
    useQuickFilterTabs(movements);
  const {
    draftFilters,
    updateDraft,
    applyFilters,
    clearFilters,
    filteredMovements,
  } = useMovementFilters(movements, filterValue);
  const {
    data: analyticsData,
    isLoading: isLoadingAnalytics,
    activeView,
    setActiveView,
  } = useAnalyticsData();
  const { alerts } = useAlerts();
  const { isExporting, lastExport, exportAs } = useExport(
    filteredMovements.length,
    movements.length,
  );
  const newMovementModal = useNewMovementModal();

  const isRefreshing = isLoadingMovements;

  return (
    <div className="-mt-10 -ml-8 -mr-8 min-h-screen bg-[#F8FAFC] px-6 py-7 text-slate-900 2xl:px-8">
      <PageHeader
        onNewMovement={newMovementModal.open}
        onExport={(fmt) => exportAs(fmt, "filtradas")}
        onPrint={() => window.print()}
        onRefresh={refetch}
        isRefreshing={isRefreshing}
      />

      <div className="mb-6">
        <StatsCardsRow stats={stats} isLoading={isLoadingStats} />
      </div>

      <div className="mb-6">
        <FiltersPanel
          draftFilters={draftFilters}
          updateDraft={updateDraft}
          onApply={applyFilters}
          onClear={clearFilters}
        />
      </div>

      <div className="mb-4">
        <QuickFilterTabs
          tabs={tabs}
          activeTab={activeTab}
          onSelect={setActiveTab}
        />
      </div>

      <div className="mb-8">
        <MovementsTable
          movements={filteredMovements}
          onOpenMovement={openMovement}
        />
      </div>

      <div className="mb-6">
        <AnalyticsSection
          data={analyticsData}
          isLoading={isLoadingAnalytics}
          activeView={activeView}
          onChangeView={setActiveView}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <AlertsPanel alerts={alerts} />
        <QuickExportPanel
          onExport={(fmt) => exportAs(fmt, "todas")}
          isExporting={isExporting}
          lastExport={lastExport}
          filteredCount={filteredMovements.length}
          totalCount={movements.length}
        />
      </div>

      <NewMovementModal
        isOpen={newMovementModal.isOpen}
        onClose={newMovementModal.close}
        tabs={newMovementModal.tabs}
        activeTab={newMovementModal.activeTab}
        onChangeTab={newMovementModal.setActiveTab}
        isSubmitting={newMovementModal.isSubmitting}
        justSubmitted={newMovementModal.justSubmitted}
        onSubmit={newMovementModal.submit}
      />
    </div>
  );
}
