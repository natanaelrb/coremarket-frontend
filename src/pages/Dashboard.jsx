import { useState } from 'react';

import DashboardHeader from '../features/dashboard/components/Header/DashboardHeader';
import OverviewDashboard from '../features/dashboard/components/Overview/OverviewDashboard';
import AdvancedDashboard from '../features/dashboard/components/Advanced/AdvancedDashboard';
import EmptyState from '../features/dashboard/components/shared/EmptyState';

import { useDashboard } from '../features/dashboard/hooks/useDashboard';
import { useDashboardPeriod } from '../features/dashboard/hooks/useDashboardPeriod';
import { useDashboardFilters } from '../features/dashboard/hooks/useDashboardFilters';

import {
  DASHBOARD_TABS,
  PERIOD_OPTIONS,
} from '../features/dashboard/constants/dashboardTabs';

/**
 * Página principal do Dashboard.
 * Responsabilidade única: importar componentes, controlar a estrutura
 * principal (aba ativa, período) e renderizar o layout.
 * Toda a lógica de dados vive nos hooks.
 */
export default function Dashboard() {
  const [activeTab, setActiveTab] = useState(DASHBOARD_TABS.OVERVIEW);
  const [isPeriodPickerOpen, setIsPeriodPickerOpen] = useState(false);

  const { periodId, selectPeriod } = useDashboardPeriod();

  const {
    isOpen: isFiltersOpen,
    setIsOpen: setIsFiltersOpen,
    activeCount,
  } = useDashboardFilters();

  const {
    overviewData,
    advancedData,
    isLoading,
  } = useDashboard(activeTab, periodId);

  const periodLabel =
    PERIOD_OPTIONS.find((p) => p.id === periodId)?.label ?? 'Período';

  return (
    <div className="w-full-12 pb-6 pt-6 -mt-8">
      <DashboardHeader
        activeTab={activeTab}
        onTabChange={setActiveTab}
        periodId={periodId}
        periodLabel={periodLabel}
        isPeriodPickerOpen={isPeriodPickerOpen}
        onTogglePeriodPicker={setIsPeriodPickerOpen}
        onSelectPeriod={(id) => {
          selectPeriod(id);
          setIsPeriodPickerOpen(false);
        }}
        onOpenFilters={() => setIsFiltersOpen(!isFiltersOpen)}
        activeFilterCount={activeCount}
      />

      {isLoading && (
        <EmptyState message="Carregando dados do dashboard..." />
      )}

      {!isLoading &&
        activeTab === DASHBOARD_TABS.OVERVIEW &&
        overviewData && (
          <OverviewDashboard data={overviewData} />
        )}

      {!isLoading &&
        activeTab === DASHBOARD_TABS.ADVANCED &&
        advancedData && (
          <AdvancedDashboard data={advancedData} />
        )}
    </div>
  );
}