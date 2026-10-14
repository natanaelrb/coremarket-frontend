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
    <nav
      aria-label="Seções dos detalhes da compra"
      className="
        border-b border-slate-200/80
        dark:border-slate-700/70
      "
    >
      <div
        className="
          flex items-center gap-1 overflow-x-auto px-3
          scrollbar-thin scrollbar-thumb-slate-300
          dark:scrollbar-thumb-slate-700
        "
        role="tablist"
        aria-orientation="horizontal"
      >
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              id={`compra-tab-${tab.id}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`compra-tabpanel-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={`
                relative shrink-0 whitespace-nowrap
                px-3.5 py-3.5 text-xs font-semibold
                transition-colors duration-200
                focus-visible:outline-none
                focus-visible:z-10
                focus-visible:ring-2
                focus-visible:ring-inset
                focus-visible:ring-emerald-500
                ${
                  isActive
                    ? "text-emerald-700 dark:text-emerald-400"
                    : `
                      text-slate-500 hover:text-slate-800
                      dark:text-slate-400 dark:hover:text-slate-200
                    `
                }
              `}
            >
              {tab.label}

              <span
                aria-hidden="true"
                className={`
                  absolute inset-x-2 bottom-0 h-[2px]
                  rounded-t-full transition-all duration-200
                  ${
                    isActive
                      ? "scale-x-100 bg-emerald-500 opacity-100"
                      : "scale-x-50 bg-transparent opacity-0"
                  }
                `}
              />
            </button>
          );
        })}
      </div>
    </nav>
  );
}
