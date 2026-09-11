import DashboardCard from "../shared/DashboardCard";
import DashboardSection from "../shared/DashboardSection";
import { formatCurrency } from "../../utils/dashboardFormatters";
import { calcularPercentualMeta } from "../../utils/dashboardCalculations";

/** Indicador de progresso da meta mensal */
export default function MonthlyGoal({ data }) {
  const percentual = calcularPercentualMeta(data.atual, data.meta);

  return (
    <DashboardCard className="h-full p-4 animate-card-in transition-all duration-200 hover:scale-[1.01]">
      <DashboardSection title="Meta mensal" />

      <div className="mt-5 flex items-start justify-between">
        {/* Percentual */}
        <span className="text-[28px] font-bold leading-none text-[#059669]">
          {percentual}%
        </span>

        {/* Valores */}
        <div className="text-right text-xs leading-5">
          <p className="text-[var(--text-secondary)]">
            Meta:{" "}
            <span className="font-semibold text-[var(--text-primary)]">
              {formatCurrency(data.meta)}
            </span>
          </p>

          <p className="text-[var(--text-secondary)]">
            Atual:{" "}
            <span className="font-semibold text-[var(--text-primary)]">
              {formatCurrency(data.atual)}
            </span>
          </p>
        </div>
      </div>

      {/* Barra */}
      <div
        className="
          mt-4 h-2.5 w-full
          overflow-hidden
          rounded-full
          bg-[#e9edf5]
        "
        role="progressbar"
        aria-valuenow={percentual}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="
            h-full
            rounded-full
            bg-gradient-to-r
            from-[#059669]
            to-[#059669]
            transition-[width]
            duration-1000
            ease-out
          "
          style={{
            width: `${Math.min(percentual, 100)}%`,
          }}
        />
      </div>
    </DashboardCard>
  );
}