import { LayoutDashboard } from "lucide-react";
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
}) {
  const headerContent = {
    [DASHBOARD_TABS.OVERVIEW]: {
      breadcrumb: "Dashboard",
      title: "Visão Geral",
      description: "Acompanhe o desempenho do seu negócio.",
    },

    [DASHBOARD_TABS.ADVANCED]: {
      breadcrumb: "Dashboard",
      title: "Avançado",
      description: "Análise profunda dos dados do seu negócio.",
    },
  };

  const currentHeader = headerContent[activeTab];

  return (
    <header className="mb-6">
      <div className="flex flex-wrap items-end justify-between gap-5">
        {/* Informações do Dashboard */}
        <div className="min-w-0">
          {/* Breadcrumb */}
          <div className="mb-2.5">
            <DashboardBreadcrumb
              activeLabel={currentHeader.breadcrumb}
            />
          </div>

          {/* Título */}
          <div className="flex items-center gap-2.5">
            <div
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-lg
                bg-emerald-50
                text-emerald-600
                ring-1
                ring-emerald-100
              "
            >
              <LayoutDashboard
                size={18}
                strokeWidth={2.2}
              />
            </div>

            <h1
              className="
                truncate
                text-2xl
                font-bold
                tracking-tight
                text-[var(--text-primary)]
              "
            >
              {currentHeader.title}
            </h1>
          </div>

          {/* Descrição */}
          <p
            className="
              mt-2
              max-w-2xl
              text-sm
              leading-5
              text-[var(--text-secondary)]
            "
          >
            {currentHeader.description}
          </p>
        </div>

        {/* Seletor de período */}
        <div className="flex items-center gap-2">
          <PeriodPicker
            periodId={periodId}
            label={periodLabel}
            isOpen={isPeriodPickerOpen}
            onToggle={onTogglePeriodPicker}
            onSelect={onSelectPeriod}
          />
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