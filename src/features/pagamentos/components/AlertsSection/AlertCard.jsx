import { AlertTriangle, Clock, CalendarClock } from 'lucide-react';
import { Button } from '../../../../shared/components/ui/Button.jsx';
import { formatCurrency } from '../../utils/formatCurrency.js';
import { cn } from '../../../../shared/utils/cn.js';

const TONE_STYLES = {
  danger: {
    icon: AlertTriangle,
    bg: 'bg-red-50 border-red-100 dark:bg-red-500/5 dark:border-red-900/40',
    iconBg: 'bg-red-100 text-red-600 dark:bg-red-500/15 dark:text-red-400',
    titleColor: 'text-red-700 dark:text-red-400',
  },
  warning: {
    icon: Clock,
    bg: 'bg-amber-50 border-amber-100 dark:bg-amber-500/5 dark:border-amber-900/40',
    iconBg: 'bg-amber-100 text-amber-600 dark:bg-amber-500/15 dark:text-amber-400',
    titleColor: 'text-amber-700 dark:text-amber-400',
  },
  info: {
    icon: CalendarClock,
    bg: 'bg-blue-50 border-blue-100 dark:bg-blue-500/5 dark:border-blue-900/40',
    iconBg: 'bg-blue-100 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400',
    titleColor: 'text-blue-700 dark:text-blue-400',
  },
};

/**
 * Single alert card ("12 pagamentos vencidos", etc) with an action
 * button that jumps to the matching table tab.
 * @param {{ alerta: object, onAction: (tabKey: string) => void, delayMs: number }} props
 */
export function AlertCard({ alerta, onAction, delayMs = 0 }) {
  const style = TONE_STYLES[alerta.tone];
  const Icon = style.icon;

  return (
    <div
      className={cn('animate-slide-up flex flex-col gap-3 rounded-[var(--radius-card)] border p-4', style.bg)}
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <div className="flex items-start gap-3">
        <span className={cn('flex h-9 w-9 shrink-0 items-center justify-center rounded-xl', style.iconBg)}>
          <Icon className="h-4.5 w-4.5" />
        </span>
        <div>
          <p className={cn('text-sm font-semibold', style.titleColor)}>{alerta.titulo}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Total: {formatCurrency(alerta.valorTotal)}
          </p>
        </div>
      </div>
      <Button variant="outline" size="sm" onClick={() => onAction(alerta.filterTabKey)}>
        {alerta.actionLabel}
      </Button>
    </div>
  );
}
