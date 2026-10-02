import { TIMELINE_TABS } from "../../constants/tableConfig.js";

export default function TimelineTabsNav({
  activeSidePanel,
  onChangeSidePanel,
}) {
  return (
    <nav
      aria-label="Seções do histórico do fornecedor"
      className="overflow-x-auto border-b border-slate-200/80 px-3 pt-2 dark:border-[#252a4a]"
    >
      <div className="flex min-w-max gap-1">
        {TIMELINE_TABS.map((tab) => {
          const isActive = activeSidePanel === tab.key;

          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => onChangeSidePanel(tab.key)}
              aria-current={isActive ? "page" : undefined}
              className={`
                relative whitespace-nowrap px-3 py-2.5 text-sm font-medium
                transition-colors duration-150
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-inset
                focus-visible:ring-emerald-500/50
                ${
                  isActive
                    ? "text-emerald-700 dark:text-emerald-400"
                    : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                }
              `}
            >
              {tab.label}

              {isActive && (
                <span
                  className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-emerald-600 dark:bg-emerald-400"
                  aria-hidden="true"
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}