// Célula de validade: data formatada + texto auxiliar de dias (colorido conforme urgência).
import { formatDate } from '../../utils/formatters';
import { getDaysUntil, getValidadeHelperText } from '../../utils/validadeUtils';

export function ValidadeCell({ validade }) {
  if (!validade) return <span className="text-sm text-gray-400">—</span>;

  const dias = getDaysUntil(validade);
  const colorClass =
    dias < 0
      ? 'text-red-500'
      : dias <= 7
      ? 'text-amber-500'
      : 'text-gray-400 dark:text-gray-500';

  return (
    <div>
      <p className="text-sm text-gray-700 dark:text-gray-200">{formatDate(validade)}</p>
      <p className={`text-xs ${colorClass}`}>{getValidadeHelperText(dias)}</p>
    </div>
  );
}
