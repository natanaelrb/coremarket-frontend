import { Skeleton } from "../../../../shared/components/ui/Skeleton.jsx";

const TONE_CLASSES = {
  accent: 'bg-cm-accent-soft text-cm-accent',
  info: 'bg-cm-info-soft text-cm-info',
  warning: 'bg-cm-warning-soft text-cm-warning',
  danger: 'bg-cm-danger-soft text-cm-danger',
  success: 'bg-cm-success-soft text-cm-success',
};

/**
 * Cartão de indicador (KPI) com ícone, valor principal e variação opcional.
 * @param {{
 *  icon: React.ReactNode,
 *  tone?: keyof typeof TONE_CLASSES,
 *  label: string,
 *  value: string,
 *  helper?: string,
 *  trend?: { value: string, positive: boolean } | null,
 *  loading?: boolean,
 * }} props
 */
export function KPICard({ icon, tone = 'accent', label, value, helper, trend, loading = false }) {
  if (loading) {
    return (
      <div className="flex items-center gap-3 rounded-xl border border-cm-border bg-cm-surface p-4">
        <Skeleton className="h-10 w-10 rounded-lg" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-5 w-24" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex animate-slide-up items-center gap-3 rounded-xl border border-cm-border bg-cm-surface p-4 transition-colors duration-150 hover:bg-cm-surface-hover">
      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${TONE_CLASSES[tone]}`}>
        {icon}
      </span>
      <div className="min-w-0">
        <p className="truncate text-xs text-cm-text-muted">{label}</p>
        <p className="text-lg font-bold leading-tight text-cm-text">{value}</p>
        {(helper || trend) && (
          <div className="flex items-center gap-1.5">
            {trend && (
              <span className={`text-[11px] font-medium ${trend.positive ? 'text-cm-success' : 'text-cm-danger'}`}>
                {trend.positive ? '↑' : '↓'} {trend.value}
              </span>
            )}
            {helper && <span className="text-[11px] text-cm-text-faint">{helper}</span>}
          </div>
        )}
      </div>
    </div>
  );
}

