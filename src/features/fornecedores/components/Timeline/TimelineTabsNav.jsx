import { TIMELINE_TABS } from '../../constants/tableConfig.js'

export default function TimelineTabsNav({ activeSidePanel, onChangeSidePanel }) {
  return (
    <div className="flex gap-1 overflow-x-auto border-b border-gray-100 px-3 pt-2 dark:border-[#1c2044]">
      {TIMELINE_TABS.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onChangeSidePanel(tab.key)}
          className={`relative whitespace-nowrap px-3 py-2 text-sm font-medium transition-colors ${
            activeSidePanel === tab.key
              ? 'text-violet-600 dark:text-violet-400'
              : 'text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300'
          }`}
        >
          {tab.label}
          {activeSidePanel === tab.key && (
            <span className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-violet-600 dark:bg-violet-400" />
          )}
        </button>
      ))}
    </div>
  )
}
