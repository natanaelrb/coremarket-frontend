const TABS = [
  { id: "resumo", label: "Resumo" },
  { id: "produtos", label: "Produtos" },
  { id: "recebimento", label: "Recebimento" },
  { id: "financeiro", label: "Financeiro" },
  { id: "nf", label: "NF e Anexos" },
  { id: "historico", label: "Histórico" },
];

export function DetailPanelTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex items-center gap-1 px-3 pt-1 border-b border-slate-100 dark:border-white/5 overflow-x-auto">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`relative px-3 py-2.5 text-xs font-medium whitespace-nowrap transition-colors ${
            activeTab === tab.id ? "text-violet-600 dark:text-violet-400" : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
          }`}
        >
          {tab.label}
          {activeTab === tab.id && <span className="absolute left-0 right-0 -bottom-px h-0.5 bg-violet-600 rounded-full animate-fade-in" />}
        </button>
      ))}
    </div>
  );
}
