import { DETAIL_TABS } from "../../constants/tableConfig.js";

export default function DetailTabs({ activeTab, onChangeTab }) {
  return (
    <div className="flex gap-1">
      {DETAIL_TABS.map((tab) => {
        const isActive = activeTab === tab.key;

        return (
          <button
            key={tab.key}
            type="button"
            onClick={() => onChangeTab(tab.key)}
            aria-current={isActive ? "page" : undefined}
            className={`
              relative
              whitespace-nowrap
              px-3
              py-3
              text-sm
              font-medium
              transition-colors
              duration-150
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-inset
              focus-visible:ring-emerald-500/50
              ${
                isActive
                  ? `
                    text-emerald-700
                    dark:text-emerald-400
                  `
                  : `
                    text-slate-500
                    hover:text-slate-700
                    dark:text-slate-400
                    dark:hover:text-slate-200
                  `
              }
            `}
          >
            {tab.label}

            {isActive && (
              <span
                className="
                  absolute
                  inset-x-2
                  -bottom-px
                  h-0.5
                  rounded-full
                  bg-emerald-600
                  dark:bg-emerald-400
                "
                aria-hidden="true"
              />
            )}
          </button>
        );
      })}
    </div>
  );
}