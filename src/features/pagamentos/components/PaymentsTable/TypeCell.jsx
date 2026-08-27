import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { TIPO_PAGAMENTO_META } from '../../constants/index.js';
import { cn } from '../../../../shared/utils/cn.js';

/** Renders the "Tipo" table cell: a directional arrow icon + label. */
export function TypeCell({ tipo }) {
  const meta = TIPO_PAGAMENTO_META[tipo];
  const Icon = meta.direction === 'in' ? ArrowUpRight : ArrowDownRight;
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 text-sm font-medium',
        meta.direction === 'in' ? 'text-green-600 dark:text-green-400' : 'text-red-500 dark:text-red-400'
      )}
    >
      <Icon className="h-4 w-4" />
      {meta.label}
    </span>
  );
}
