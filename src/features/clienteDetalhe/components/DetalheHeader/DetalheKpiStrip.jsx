import { formatCurrency } from "../../../../shared/utils/formatCurrency.js";

const ITEMS = [
  {
    key: "totalComprado",
    label: "Total comprado",
    valueClass: "text-[#0f172a] dark:text-white",
  },
  {
    key: "totalPago",
    label: "Total pago",
    valueClass: "text-[#16a34a] dark:text-[#4ade80]",
  },
  {
    key: "emAberto",
    label: "Em aberto",
    valueClass: "text-[#d97706] dark:text-[#fbbf24]",
  },
  {
    key: "emAtraso",
    label: "Em atraso",
    valueClass: "text-[#dc2626] dark:text-[#f87171]",
  },
];

/** Row of 4 mini financial KPI cards shown under the client's name. */
export function DetalheKpiStrip({ cliente }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {ITEMS.map((item) => (
        <div
          key={item.key}
          className="
            rounded-xl
            border border-slate-200
            bg-white
            p-4
            shadow-[0_1px_2px_rgba(15,23,42,0.02)]
            transition-all duration-200
            hover:border-slate-300
            hover:shadow-[0_4px_12px_rgba(15,23,42,0.05)]
            dark:border-white/10
            dark:bg-zinc-900
          "
        >
          <p
            className={`
              text-lg
              font-semibold
              leading-tight
              ${item.valueClass}
            `}
          >
            {formatCurrency(cliente[item.key])}
          </p>

          <p className="mt-1 text-xs font-medium text-[#64748b] dark:text-slate-400">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}