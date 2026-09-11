import { PackageX, PackageMinus, ReceiptText, CalendarClock } from 'lucide-react';
import DashboardCard from '../shared/DashboardCard';
import DashboardSection from '../shared/DashboardSection';

const ALERT_ICON = {
  ESTOQUE_BAIXO: PackageMinus,
  SEM_ESTOQUE: PackageX,
  COMPRAS_VENCIDAS: ReceiptText,
  VENDAS_VENCIDAS: CalendarClock,
};

const CRITICIDADE_STYLE = {
  CRITICO: { bg: 'bg-[#fee2e2] dark:bg-[#3a1414]', iconColor: '#dc2626', badge: 'bg-[#dc2626]' },
  ATENCAO: { bg: 'bg-[#fef3c7] dark:bg-[#3a2e10]', iconColor: '#d97706', badge: 'bg-[#d97706]' },
};

/** Cards de alertas operacionais (estoque baixo/zerado, compras e vendas vencidas). */
export default function ImportantAlerts({ data, onSelectAlert }) {
  return (
    <DashboardCard className="p-5 animate-card-in rounded-lg hover:-translate-y-1 hover:shadow-md">
      <DashboardSection title="Alertas importantes" />
      <div className="space-y-3">
        {data.map((alert) => {
          const Icon = ALERT_ICON[alert.tipo];
          const style = CRITICIDADE_STYLE[alert.criticidade];
          return (
            <button
              key={alert.tipo}
              type="button"
              onClick={() => onSelectAlert?.(alert)}
              className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left ${style.bg}
                transition-transform hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-[var(--color-brand-500,#8b5cf6)]`}
            >
              <span className="flex items-center gap-2.5">
                <Icon className="h-5 w-5 shrink-0" style={{ color: style.iconColor }} aria-hidden="true" />
                <span>
                  <span className="block text-sm font-medium text-[var(--text-primary)]">{alert.label}</span>
                  <span className="block text-xs text-[var(--text-secondary)]">
                    {alert.quantidade} {alert.unidade}
                  </span>
                </span>
              </span>
              <span className={`flex h-6 min-w-6 items-center justify-center rounded-full px-1.5 text-xs font-semibold text-white ${style.badge}`}>
                {alert.quantidade}
              </span>
            </button>
          );
        })}
      </div>
    </DashboardCard>
  );
}
