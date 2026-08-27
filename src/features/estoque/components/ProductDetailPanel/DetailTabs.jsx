import { DETAIL_TABS } from './detailTabsConfig.js'
import { cn } from '../../../../shared/utils/classNames.js'

/**
 * Horizontal tab nav for the detail panel (Geral / Lotes / Movimentações /
 * Histórico / Observações). Purely controlled: active tab + onChange come
 * from the page-level useState.
 */
export default function DetailTabs({ activeTab, onChange }) {
  return (
    <div className="flex gap-4 border-b border-gray-100 dark:border-[#22254A] px-5 text-sm">
      {DETAIL_TABS.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={cn(
            'relative flex items-center gap-1 pb-2.5 pt-1 font-medium transition-colors',
            activeTab === tab.key
              ? 'text-violet-600 dark:text-violet-400'
              : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300',
          )}
        >
          {tab.label}
          {tab.badge != null && (
            <span className="rounded-full bg-gray-100 dark:bg-[#1E2142] px-1.5 text-[10px] text-gray-500 dark:text-gray-400">
              {tab.badge}
            </span>
          )}
          {activeTab === tab.key && (
            <span className="absolute -bottom-px left-0 right-0 h-0.5 rounded-full bg-violet-600 animate-fade-in" />
          )}
        </button>
      ))}
    </div>
  )
}
