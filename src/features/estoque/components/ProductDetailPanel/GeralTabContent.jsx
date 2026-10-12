import {
  CalendarArrowDown,
  CalendarArrowUp,
  History,
  Weight,
} from "lucide-react";
import { formatDate } from "../../../movimentacoes/utils/formatDate.js";
import { cn } from "../../../../shared/utils/classNames.js";

const ROW_STYLES = {
  success: {
    icon: "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400",
    value: "text-emerald-700 dark:text-emerald-400",
  },
  info: {
    icon: "bg-sky-50 text-sky-600 dark:bg-sky-500/10 dark:text-sky-400",
    value: "text-sky-700 dark:text-sky-400",
  },
  neutral: {
    icon: "bg-gray-100 text-gray-500 dark:bg-white/5 dark:text-gray-400",
    value: "text-gray-800 dark:text-gray-200",
  },
};

export default function GeralTabContent({ produto }) {
  const rows = [
    {
      label: "Última Compra",
      value: `${formatDate(produto?.ultimaCompra?.data)} · ${produto?.ultimaCompra?.doc ?? "—"}`,
      tone: "success",
      icon: CalendarArrowDown,
    },
    {
      label: "Última Venda",
      value: `${formatDate(produto?.ultimaVenda?.data)} · ${produto?.ultimaVenda?.doc ?? "—"}`,
      tone: "success",
      icon: CalendarArrowUp,
    },
    {
      label: "Última Movimentação",
      value: `${formatDate(produto?.ultimaMovimentacao?.data)} · ${produto?.ultimaMovimentacao?.tipo ?? "—"}`,
      tone: "info",
      icon: History,
    },
    {
      label: "Peso Líquido",
      value: produto?.pesoLiquido ?? "—",
      tone: "neutral",
      icon: Weight,
    },
  ];

  return (
    <div className="space-y-5 p-5 animate-fade-in">
      {/* Informações principais */}
      <div className="overflow-hidden rounded-xl border border-gray-100 bg-white dark:border-white/10 dark:bg-[#151936]">
        <div className="divide-y divide-gray-100 dark:divide-white/10">
          {rows.map((row, index) => {
            const style = ROW_STYLES[row.tone] ?? ROW_STYLES.neutral;
            const Icon = row.icon;

            return (
              <div
                key={row.label}
                className="
                  group
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  transition-colors
                  duration-200
                  hover:bg-gray-50/80
                  dark:hover:bg-white/[0.03]
                  animate-slide-up
                "
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <div
                  className={cn(
                    `
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      transition-transform
                      duration-200
                      group-hover:scale-105
                    `,
                    style.icon,
                  )}
                >
                  <Icon size={15} strokeWidth={2} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.06em] text-gray-400 dark:text-gray-500">
                    {row.label}
                  </p>

                  <p
                    className={cn(
                      "mt-0.5 truncate text-sm font-semibold",
                      style.value,
                    )}
                    title={row.value}
                  >
                    {row.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Observações */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-gray-500 dark:text-gray-400">
            Observações
          </p>

          {produto?.observacoes && (
            <span className="text-[10px] text-gray-400 dark:text-gray-500">
              Informação adicional
            </span>
          )}
        </div>

        <div
          className="
            rounded-xl
            border
            border-gray-100
            bg-gray-50/80
            p-4
            transition-colors
            duration-200
            hover:border-emerald-100
            hover:bg-emerald-50/40
            dark:border-white/10
            dark:bg-white/[0.03]
            dark:hover:border-emerald-500/20
            dark:hover:bg-emerald-500/[0.03]
          "
        >
          <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
            {produto?.observacoes || "Nenhuma observação registrada."}
          </p>
        </div>
      </div>
    </div>
  );
}