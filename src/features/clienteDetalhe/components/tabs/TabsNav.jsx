import { cn } from "../../../../shared/utils/classNames.js";

/** Horizontal tab strip for the client detail panel. */
export function TabsNav({ tabs, activeTab, onChange }) {
  return (
    <div className="flex gap-1 border-b border-cm-border-dark light:border-cm-border-light overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={cn(
            'px-4 py-2.5 text-sm font-medium whitespace-nowrap border-b-2 -mb-px transition-colors',
            activeTab === tab.id
              ? 'border-cm-violet text-cm-violet-soft'
              : 'border-transparent text-slate-400 light:text-slate-500 hover:text-white light:hover:text-slate-900',
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
