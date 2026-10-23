import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { TIPO_PAGAMENTO_META } from '../../constants/index.js';
import { cn } from '../../../../shared/utils/cn.js';

/** Renders the "Tipo" table cell: a directional arrow icon + label. */
export function TypeCell({ tipo }) {
  const meta = TIPO_PAGAMENTO_META[tipo];

  if (!meta) {
    return (
      <span className="text-sm text-slate-500 dark:text-slate-400">
        —
      </span>
    );
  }

  const isEntrada = meta.direction === 'in';
  const Icon = isEntrada ? ArrowUpRight : ArrowDownRight;

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-medium',
        isEntrada
          ? 'text-green-600 dark:text-green-400'
          : 'text-rose-600 dark:text-rose-400'
      )}
    >
      <Icon
        className="h-4 w-4 shrink-0"
        strokeWidth={2}
        aria-hidden="true"
      />
      {meta.label}
    </span>
  );
}