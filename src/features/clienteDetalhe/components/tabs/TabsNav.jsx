import { cn } from "../../../../shared/utils/classNames.js";

/** Horizontal tab strip for the client detail panel. */
export function TabsNav({ tabs, activeTab, onChange }) {
  return (
    <div
      className="
        flex
        gap-1
        overflow-x-auto
        border-b
        border-slate-200
        dark:border-white/10
      "
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={cn(
            `
              whitespace-nowrap
              border-b-2
              -mb-px
              px-4
              py-2.5
              text-sm
              font-medium
              transition-all
              duration-200
            `,
            activeTab === tab.id
              ? `
                  border-[#22c55e]
                  text-[#16a34a]
                  dark:border-[#4ade80]
                  dark:text-[#4ade80]
                `
              : `
                  border-transparent
                  text-[#64748b]
                  hover:border-[#bbf7d0]
                  hover:text-[#16a34a]
                  dark:text-slate-400
                  dark:hover:border-emerald-900
                  dark:hover:text-[#4ade80]
                `,
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}