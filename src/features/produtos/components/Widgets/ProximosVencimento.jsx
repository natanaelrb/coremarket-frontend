// Widget: lista dos lotes que vencem em breve (ordenados por urgência).
import { WidgetCard } from './WidgetCard';
import { formatDate } from '../../utils/formatters';

function diasLabel(dias) {
  if (dias === 0) return { text: '0 dias', className: 'text-orange-500' };
  if (dias < 0) return { text: `${dias} dias`, className: 'text-red-500' };
  return { text: `${dias} dias`, className: 'text-amber-500' };
}

export function ProximosVencimento({ lotes, onVerTodos }) {
  return (
    <WidgetCard title="Produtos próximos do vencimento" actionLabel="Ver todos" onAction={onVerTodos}>
      <ul className="flex flex-col gap-1">
        {lotes.map((lote) => {
          const { text, className } = diasLabel(lote.diasRestantes);
          return (
            <li
              key={lote.id}
              className="flex items-center gap-3 rounded-lg px-1.5 py-2 transition-colors duration-100 hover:bg-gray-50 dark:hover:bg-white/5"
            >
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm"
                style={{ backgroundColor: `${lote.imagemCor}1A` }}
              >
                {lote.imagemEmoji}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-700 dark:text-gray-200">{lote.produtoNome}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500">Lote: {lote.lote}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500 dark:text-gray-400">{formatDate(lote.validade)}</p>
                <p className={`text-xs font-medium ${className}`}>{text}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </WidgetCard>
  );
}
