import { formatCurrency } from '../../../../shared/utils/formatters.js';

/**
 * Linha de valor do resumo financeiro.
 *
 * Tons disponíveis:
 * default, negative, positive, info, discount, warning
 */
export function ResumoLinha({ label, valor, tone = 'default' }) {
  const TONES = {
    default: {
      label: 'text-cm-text-muted',
      value: 'text-cm-text',
      prefix: '',
    },
    negative: {
      label: 'text-red-600 dark:text-red-400',
      value: 'text-red-600 dark:text-red-400',
      prefix: '− ',
    },
    positive: {
      label: 'text-green-700 dark:text-green-400',
      value: 'text-green-700 dark:text-green-400',
      prefix: '+ ',
    },
    info: {
      label: 'text-blue-600 dark:text-blue-400',
      value: 'text-blue-600 dark:text-blue-400',
      prefix: '',
    },
    discount: {
      label: 'text-red-600 dark:text-red-400',
      value: 'text-red-600 dark:text-red-400',
      prefix: '− ',
    },
    warning: {
      label: 'text-amber-700 dark:text-amber-400',
      value: 'text-amber-700 dark:text-amber-400',
      prefix: '+ ',
    },
  };

  const estilo = TONES[tone] ?? TONES.default;

  return (
    <div className="flex items-center justify-between gap-3 rounded-lg px-2.5 py-2.5 transition-colors duration-150 hover:bg-cm-surface-hover/60">
      <span className={`min-w-0 text-sm ${estilo.label}`}>
        {label}
      </span>

      <span className={`shrink-0 text-sm font-semibold tabular-nums ${estilo.value}`}>
        {estilo.prefix}
        {formatCurrency(Math.abs(valor))}
      </span>
    </div>
  );
}
