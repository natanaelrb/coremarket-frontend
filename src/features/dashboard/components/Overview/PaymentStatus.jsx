import {
  CheckCircle2,
  Clock,
  AlertCircle,
} from "lucide-react";

import DashboardCard from "../shared/DashboardCard";
import DashboardSection from "../shared/DashboardSection";

const STATUS_STYLE = {
  PAGO: {
    icon: CheckCircle2,
    bg: "bg-[#dcfce7] dark:bg-[#123321]",
    text: "text-[#16a34a]",
    iconColor: "#16a34a",
  },

  PENDENTE: {
    icon: Clock,
    bg: "bg-[#fef3c7] dark:bg-[#3a2e10]",
    text: "text-[#d97706]",
    iconColor: "#d97706",
  },

  VENCIDO: {
    icon: AlertCircle,
    bg: "bg-[#fee2e2] dark:bg-[#3a1414]",
    text: "text-[#dc2626]",
    iconColor: "#dc2626",
  },
};

/** Cards de status de pagamentos */
export default function PaymentStatus({ data }) {
  return (
    <DashboardCard className="flex h-full min-h-[200px] flex-col p-4 animate-card-in rounded-lg hover:-translate-y-1 hover:shadow-md">
      <DashboardSection title="Status de pagamentos" />

      <div className="mt-1 flex flex-1 flex-col justify-center gap-3">
        {data.map((item) => {
          const style = STATUS_STYLE[item.status];
          const Icon = style.icon;

          return (
            <div
              key={item.status}
              className={`
                flex flex-1 items-center justify-between
                rounded-xl px-4 py-3
                ${style.bg}
                transition-all duration-200
                hover:scale-[1.01]
              `}
            >
              <span className="flex items-center gap-2.5 text-sm font-medium text-[var(--text-primary)]">
                <Icon
                  className="h-5 w-5"
                  style={{ color: style.iconColor }}
                  aria-hidden="true"
                />

                {item.label}
              </span>

              <span
                className={`text-sm font-semibold ${style.text}`}
              >
                {item.quantidade} ({item.percentual}%)
              </span>
            </div>
          );
        })}
      </div>
    </DashboardCard>
  );
}