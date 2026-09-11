import {
  TrendingUp,
  ShoppingBag,
  PiggyBank,
  ArrowUpRight,
  BadgePercent,
} from "lucide-react";

import DashboardCard from "../shared/DashboardCard";
import DashboardSection from "../shared/DashboardSection";
import {
  formatCurrency,
  formatPercent,
} from "../../utils/dashboardFormatters";

export default function FinancialSummary({ data }) {
  const items = [
    {
      key: "faturamentoBruto",
      label: "Faturamento Bruto",
      sublabel: "Total de vendas",
      icon: TrendingUp,
      bg: "bg-[#eef3ff]",
      iconBg: "#dce6ff",
      iconColor: "#4f6fd8",
    },
    {
      key: "custoMercadorias",
      label: "Custo das Mercadorias",
      sublabel: "Total de compras",
      icon: ShoppingBag,
      bg: "bg-[#fff1f2]",
      iconBg: "#ffe0e3",
      iconColor: "#e5484d",
    },
    {
      key: "lucroLiquido",
      label: "Lucro Líquido",
      sublabel: "Faturamento - Custos",
      icon: PiggyBank,
      bg: "bg-[#ecfdf5]",
      iconBg: "#d9f7e8",
      iconColor: "#20a464",
    },
    {
      key: "margemPercentual",
      label: "Margem de lucro",
      sublabel: "Margem atual",
      icon: BadgePercent,
      bg: "bg-[#f0fdf4]",
      iconBg: "#d9f7e8",
      iconColor: "#20a464",
    },
  ];

  return (
    <DashboardCard className="p-4 animate-card-in">
      <DashboardSection title="Resumo financeiro" />

      {/* Cards financeiros */}
      <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon;
          const isMargin = item.key === "margemPercentual";

          return (
            <div
              key={item.key}
              className={`
                group relative
                ${item.bg}
                min-h-[112px]
                rounded-lg
                border border-black/[0.04]
                px-3 py-3
                transition-all duration-200
                hover:-translate-y-1
                hover:shadow-md
              `}
            >
              {/* Cabeçalho do card */}
              <div className="flex items-start gap-2">
                {/* Ícone */}
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundColor: item.iconBg }}
                >
                  <Icon
                    className="h-[18px] w-[18px]"
                    style={{ color: item.iconColor }}
                  />
                </div>

                {/* Textos */}
                <div className="min-w-0 flex-1">
                  <p
                    className="
                      text-xs
                      font-bold
                      leading-4
                      text-[var(--text-primary)]
                    "
                    title={item.label}
                  >
                    {item.label}
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[11px]
                      leading-4
                      text-[var(--text-secondary)]
                    "
                  >
                    {item.sublabel}
                  </p>
                </div>
              </div>

              {/* Valor */}
              {isMargin ? (
                <div className="-mt-0 ml-11">
                  {/* Valor principal */}
                  <p className="text-xl font-bold text-[var(--text-primary)]">
                    {formatPercent(data[item.key], {
                      withSign: false,
                    })}
                  </p>

                  {/* Variação */}
                  <div className="mt-1 flex items-center gap-1">
                    <ArrowUpRight className="h-4 w-4 text-[#16a34a]" />

                    <span className="text-xs font-semibold text-[#16a34a]">
                      +3.2%
                    </span>
                  </div>
                </div>
              ) : (
                <p className="mt-2 ml-8 whitespace-nowrap text-lg font-bold text-[var(--text-primary)]">
                  {formatCurrency(data[item.key])}
                </p>
              )}

              {/* Tooltip */}
              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-0
                  z-20
                  -translate-x-1/2
                  -translate-y-10
                  whitespace-nowrap
                  rounded-md
                  bg-slate-900
                  px-2.5
                  py-1.5
                  text-xs
                  text-white
                  opacity-0
                  shadow-lg
                  transition-all
                  duration-200
                  group-hover:-translate-y-12
                  group-hover:opacity-100
                "
              >
                {item.label}
              </div>
            </div>
          );
        })}
      </div>
    </DashboardCard>
  );
}