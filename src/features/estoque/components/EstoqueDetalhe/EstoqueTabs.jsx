import { Clock3, History, Settings2 } from "lucide-react";

import DetailTabs from "../ProductDetailPanel/DetailTabs.jsx";
import GeralTabContent from "../ProductDetailPanel/GeralTabContent.jsx";

export default function EstoqueTabs({
  produto,
  activeTab,
  onChange,
}) {
  return (
    <section
      className="
        overflow-hidden rounded-2xl
        border border-gray-100 bg-white shadow-sm
        transition-all duration-200
        dark:border-white/10 dark:bg-[#151936]
        animate-slide-up
      "
    >
      <DetailTabs
        activeTab={activeTab}
        onChange={onChange}
      />

      <div className="min-h-[240px]">
        {activeTab === "geral" && (
          <GeralTabContent produto={produto} />
        )}

        {activeTab !== "geral" && (
          <TabPlaceholder activeTab={activeTab} />
        )}
      </div>
    </section>
  );
}

function TabPlaceholder({ activeTab }) {
  const config = {
    movimentacoes: {
      icon: History,
      title: "Movimentações",
      description:
        "O histórico completo de entradas, saídas e ajustes será exibido nesta seção.",
    },
    historico: {
      icon: Clock3,
      title: "Histórico",
      description:
        "O histórico detalhado deste produto será disponibilizado quando a API estiver integrada.",
    },
  };

  const current = config[activeTab] ?? {
    icon: Settings2,
    title: activeTab,
    description:
      "Esta seção será disponibilizada quando os dados correspondentes estiverem integrados ao sistema.",
  };

  const Icon = current.icon;

  return (
    <div
      className="
        flex min-h-[240px] items-center justify-center
        px-6 py-12 animate-fade-in
      "
    >
      <div className="max-w-md text-center">
        <div
          className="
            mx-auto flex h-11 w-11 items-center justify-center
            rounded-xl border border-emerald-100
            bg-emerald-50 text-emerald-600
            dark:border-emerald-500/15
            dark:bg-emerald-500/10 dark:text-emerald-400
          "
        >
          <Icon size={18} strokeWidth={2} />
        </div>

        <h3 className="mt-4 text-sm font-semibold text-gray-800 dark:text-gray-200">
          {current.title}
        </h3>

        <p className="mx-auto mt-1.5 max-w-sm text-xs leading-5 text-gray-400 dark:text-gray-500">
          {current.description}
        </p>

        <span
          className="
            mt-4 inline-flex items-center rounded-full
            border border-gray-100 bg-gray-50
            px-2.5 py-1 text-[10px] font-medium
            text-gray-400
            dark:border-white/10 dark:bg-white/[0.03]
            dark:text-gray-500
          "
        >
          Em integração
        </span>
      </div>
    </div>
  );
}