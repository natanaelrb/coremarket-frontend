// Navegação por abas do painel de detalhes (Geral, Estoque, Lotes, Compras, Vendas, Financeiro, Histórico).
import { DETAIL_TABS } from '../../constants/detailTabs';

export function DetailTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex gap-1 overflow-x-auto border-b border-gray-100 px-5 dark:border-gray-800">
      {DETAIL_TABS.map((tab) => (
        <button
          key={tab.key}
          onClick={() => setActiveTab(tab.key)}
          className={[
            'relative shrink-0 px-2.5 py-3 text-sm font-medium transition-colors duration-150',
            activeTab === tab.key
              ? 'text-violet-600 dark:text-violet-400'
              : 'text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300',
          ].join(' ')}
        >
          {tab.label}
          {activeTab === tab.key && (
            <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-violet-600 dark:bg-violet-400" />
          )}
        </button>
      ))}
    </div>
  );
}
