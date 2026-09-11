import { DASHBOARD_TAB_ITEMS } from "../../constants/dashboardTabs";

/**
 * Abas "Visão Geral" / "Avançado"
 * com indicador animado verde sob a aba ativa.
 */
export default function DashboardTabs({ activeTab, onChange }) {
  return (
    <div
      className="flex items-center gap-7 border-b border-[var(--border-subtle)]"
      role="tablist"
      aria-label="Abas do dashboard"
    >
      {DASHBOARD_TAB_ITEMS.map((tab) => {
        const isActive = tab.id === activeTab;

        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={`
              relative pb-3 text-sm font-semibold transition-all duration-200
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-emerald-500/30
              rounded-t-md
              ${
                isActive
                  ? "text-emerald-600"
                  : "text-[var(--text-secondary)] hover:text-emerald-600"
              }
            `}
          >
            {tab.label}

            {/* Indicador inferior */}
            <span
              className={`
                absolute -bottom-px left-0 h-[2px] w-full
                origin-center rounded-full
                bg-emerald-600
                transition-transform duration-300 ease-out
                ${isActive ? "scale-x-100" : "scale-x-0"}
              `}
            />
          </button>
        );
      })}
    </div>
  );
}