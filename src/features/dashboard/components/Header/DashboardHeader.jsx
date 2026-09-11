import { SlidersHorizontal, ChevronDown } from "lucide-react";
import DashboardBreadcrumb from "./DashboardBreadcrumb";
import DashboardTabs from "./DashboardTabs";
import PeriodPicker from "./PeriodPicker";
import { DASHBOARD_TABS } from "../../constants/dashboardTabs";

export default function DashboardHeader({
  activeTab,
  onTabChange,
  periodId,
  periodLabel,
  isPeriodPickerOpen,
  onTogglePeriodPicker,
  onSelectPeriod,
  onOpenFilters,
  activeFilterCount = 0,
}) {
  const isAdvanced = activeTab === DASHBOARD_TABS.ADVANCED;

  // Configuração dinâmica da aba atual
  const headerContent = {
    [DASHBOARD_TABS.OVERVIEW]: {
      breadcrumb: "Visão Geral",
      description: "Acompanhe o desempenho do seu negócio",
    },

    [DASHBOARD_TABS.ADVANCED]: {
      breadcrumb: "Avançado",
      description: "Análise profunda dos dados do seu negócio",
    },
  };

  const currentHeader = headerContent[activeTab];

  return (
    <header className="mb-6">
      <div className="flex flex-wrap items-start justify-between gap-4">

        {/* Informações do Dashboard */}
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">
            Dashboard
          </h1>

          <div className="mt-1">
            <DashboardBreadcrumb
              activeLabel={currentHeader.breadcrumb}
            />
          </div>

          {/* Descrição dinâmica */}
          <p className="mt-2 text-sm font-semibold text-[var(--text-secondary)]">
            {currentHeader.description}
          </p>
        </div>

        {/* Ações */}
        <div className="flex items-center gap-2">
          <PeriodPicker
            periodId={periodId}
            label={periodLabel}
            isOpen={isPeriodPickerOpen}
            onToggle={onTogglePeriodPicker}
            onSelect={onSelectPeriod}
          />

          {isAdvanced && (
            <button
              type="button"
              onClick={onOpenFilters}
              className="
                flex items-center gap-2 rounded-xl
                border border-emerald-200
                bg-emerald-50
                px-3.5 py-2
                text-sm font-medium text-emerald-700
                transition-all duration-200
                hover:bg-emerald-100
                hover:border-emerald-300
              "
            >
              <SlidersHorizontal
                className="h-4 w-4 text-emerald-600"
              />

              Filtros

              {activeFilterCount > 0 && (
                <span className="rounded-full bg-emerald-600 px-1.5 py-0.5 text-[10px] font-semibold text-white">
                  {activeFilterCount}
                </span>
              )}

              <ChevronDown className="h-3.5 w-3.5 text-emerald-600" />
            </button>
          )}
        </div>
      </div>

      {/* Abas */}
      <div className="mt-5">
        <DashboardTabs
          activeTab={activeTab}
          onChange={onTabChange}
        />
      </div>
    </header>
  );
}