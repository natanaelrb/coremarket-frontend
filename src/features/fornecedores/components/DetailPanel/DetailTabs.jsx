import { DETAIL_TABS } from '../../constants/tableConfig.js'

export default function DetailTabs({ activeTab, onChangeTab }) {
  return (
    <div className="flex gap-1 overflow-x-auto border-b border-gray-100 px-3 dark:border-[#1c2044]">
      {DETAIL_TABS.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onChangeTab(tab.key)}
          className={`relative whitespace-nowrap px-3 py-2.5 text-sm font-medium transition-colors ${
            activeTab === tab.key
              ? 'text-violet-600 dark:text-violet-400'
              : 'text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300'
          }`}
        >
          {tab.label}
          {activeTab === tab.key && (
            <span className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-violet-600 dark:bg-violet-400" />
          )}
        </button>
      ))}
    </div>
  )
}
