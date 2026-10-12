import { DETAIL_TABS } from './detailTabsConfig.js'
import { cn } from '../../../../shared/utils/classNames.js'

/**
 * Navegação horizontal das abas do detalhe do estoque.
 * Controlada pelo estado da página: activeTab + onChange.
 */
export default function DetailTabs({ activeTab, onChange }) {
  return (
    <div
      className="
        border-b border-gray-100
        bg-white
        px-5
        dark:border-white/10
        dark:bg-[#151936]
      "
    >
      <div className="flex gap-1 overflow-x-auto scrollbar-none">
        {DETAIL_TABS.map((tab) => {
          const isActive = activeTab === tab.key

          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => onChange(tab.key)}
              className={cn(
                `
                  group
                  relative
                  flex
                  shrink-0
                  items-center
                  gap-2
                  rounded-t-lg
                  px-3.5
                  pb-3
                  pt-3
                  text-sm
                  font-medium
                  transition-all
                  duration-200
                  ease-out
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-emerald-500/40
                `,
                isActive
                  ? `
                    text-emerald-600
                    dark:text-emerald-400
                  `
                  : `
                    text-gray-400
                    hover:bg-gray-50
                    hover:text-gray-700
                    dark:text-gray-500
                    dark:hover:bg-white/5
                    dark:hover:text-gray-200
                  `,
              )}
            >
              <span className="relative z-10">
                {tab.label}
              </span>

              {tab.badge != null && (
                <span
                  className={cn(
                    `
                      min-w-[20px]
                      rounded-full
                      px-1.5
                      py-0.5
                      text-center
                      text-[10px]
                      font-semibold
                      leading-none
                      transition-all
                      duration-200
                    `,
                    isActive
                      ? `
                        bg-emerald-50
                        text-emerald-600
                        dark:bg-emerald-500/10
                        dark:text-emerald-400
                      `
                      : `
                        bg-gray-100
                        text-gray-500
                        dark:bg-white/5
                        dark:text-gray-400
                      `,
                  )}
                >
                  {tab.badge}
                </span>
              )}

              {/* Indicador ativo */}
              <span
                className={cn(
                  `
                    absolute
                    bottom-0
                    left-2
                    right-2
                    h-0.5
                    origin-center
                    rounded-full
                    bg-emerald-500
                    transition-all
                    duration-300
                    ease-out
                    dark:bg-emerald-400
                  `,
                  isActive
                    ? 'scale-x-100 opacity-100'
                    : 'scale-x-0 opacity-0',
                )}
              />
            </button>
          )
        })}
      </div>
    </div>
  )
}