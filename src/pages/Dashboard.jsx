import { useState } from "react";

import DashboardHeader from "../features/dashboard/components/Header/DashboardHeader";
import OverviewDashboard from "../features/dashboard/components/Overview/OverviewDashboard";
import AdvancedDashboard from "../features/dashboard/components/Advanced/AdvancedDashboard";
import EmptyState from "../features/dashboard/components/shared/EmptyState";

import { useDashboard } from "../features/dashboard/hooks/useDashboard";
import { useDashboardPeriod } from "../features/dashboard/hooks/useDashboardPeriod";

import {
  DASHBOARD_TABS,
  PERIOD_OPTIONS,
} from "../features/dashboard/constants/dashboardTabs";

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
    overviewData,
    advancedData,
    isLoading,
  } = useDashboard(activeTab, periodId);

  const periodLabel =
    PERIOD_OPTIONS.find((p) => p.id === periodId)?.label ?? "Período";

  return (
    <div className="w-full-12 pb-6 pt-6 -mt-10 -ml-2 max-w-[1400px]">

      {/* Cabeçalho */}
      <div
        className="relative z-50 animate-stagger"
        style={{ "--delay": "0ms" }}
      >
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
        />
      </div>

      {/* Estado de carregamento */}
      {isLoading && (
        <div
          className="animate-stagger"
          style={{ "--delay": "100ms" }}
        >
          <EmptyState message="Carregando dados do dashboard..." />
        </div>
      )}

      {/* Dashboard Overview */}
      {!isLoading &&
        activeTab === DASHBOARD_TABS.OVERVIEW &&
        overviewData && (
          <div
            className="animate-stagger"
            style={{ "--delay": "120ms" }}
          >
            <OverviewDashboard data={overviewData} />
          </div>
        )}

      {/* Dashboard Avançado */}
      {!isLoading &&
        activeTab === DASHBOARD_TABS.ADVANCED &&
        advancedData && (
          <div
            className="animate-stagger"
            style={{ "--delay": "120ms" }}
          >
            <AdvancedDashboard data={advancedData} />
          </div>
        )}
    </div>
  );
}