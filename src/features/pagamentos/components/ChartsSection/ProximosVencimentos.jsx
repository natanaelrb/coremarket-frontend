import { ChartCard } from './ChartCard.jsx';
import { Button } from '../../../../shared/components/ui/Button.jsx';
import { formatCurrency } from '../../utils/formatCurrency.js';
import { cn } from '../../../../shared/utils/cn.js';

/**
 * "Próximos vencimentos" summary list (Hoje, Amanhã, Esta semana,
 * Próximos 7 dias) with a "Ver todos os vencimentos" CTA.
 * @param {{ itens: object[], isLoading: boolean, onVerTodos: () => void }} props
 */
export function ProximosVencimentos({ itens, isLoading, onVerTodos }) {
  return (
    <ChartCard title="Próximos vencimentos">
      <div className="flex flex-col gap-1">
        {isLoading
          ? Array.from({ length: 4 }).map((_, i) => <div key={i} className="skeleton h-12 w-full rounded-lg" />)
          : itens.map((item, index) => (
              <div
                key={item.id}
                className={cn(
                  'animate-slide-up flex items-center justify-between rounded-lg px-2 py-2.5 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/60',
                  index === 0 && 'bg-amber-50/60 dark:bg-amber-500/5'
                )}
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{item.label}</span>
                <div className="text-right">
                  <p className="text-sm font-bold text-slate-900 dark:text-slate-50">{formatCurrency(item.valor)}</p>
                  <p className="text-xs text-slate-400">{item.quantidade} títulos</p>
                </div>
              </div>
            ))}
      </div>
      <Button variant="outline" size="sm" className="mt-3 w-full" onClick={onVerTodos}>
        Ver todos os vencimentos
      </Button>
    </ChartCard>
  );
}
