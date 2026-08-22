import { AlertTriangle, AlertOctagon } from "lucide-react";
import ChartCard from "../cards/ChartCard";
import { alertasImportantes } from "../data/dashboardData";

const NIVEL_STYLE = {
  amber: {
    bg: "bg-amber-50 dark:bg-amber-500/10",
    border: "border-amber-100 dark:border-amber-500/20",
    icon: "text-amber-500",
    badge: "bg-amber-500 text-[var(--sidebar-text)]",
  },
  red: {
    bg: "bg-red-50 dark:bg-red-500/10",
    border: "border-red-100 dark:border-red-500/20",
    icon: "text-red-500",
    badge: "bg-red-500 text-[var(--sidebar-text)]",
  },
};

export default function AlertasImportantes() {
  return (
    <ChartCard title="Alertas importantes">
      <div className="space-y-2">
        {alertasImportantes.map((a, i) => {
          const s = NIVEL_STYLE[a.nivel];
          const Icon = a.nivel === "red" ? AlertOctagon : AlertTriangle;
          return (
            <div
              key={a.titulo}
              className={`flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg border ${s.bg} ${s.border} animate-stagger`}
              style={{ "--delay": `${i * 60}ms` }}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <Icon size={15} className={`flex-shrink-0 ${s.icon}`} />
                <div className="min-w-0">
                  <p className="text-xs font-medium text-slate-700 dark:text-[var(--sidebar-text)]/85 truncate">
                    {a.titulo}
                  </p>
                  <p className="text-[11px] text-slate-400 dark:text-[var(--sidebar-text)]/40">
                    {a.detalhe}
                  </p>
                </div>
              </div>
              <span
                className={`text-[11px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${s.badge}`}
              >
                {a.qtd}
              </span>
            </div>
          );
        })}
      </div>
    </ChartCard>
  );
}
