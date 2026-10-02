// Widget: lista dos lotes já vencidos, com quantidade em estoque parada.
import { WidgetCard } from './WidgetCard';
import { formatDate, formatNumber } from '../../utils/formatters';

export function LotesVencidos({ lotes, onVerTodos }) {
  return (
    <WidgetCard
      title="Lotes vencidos"
      actionLabel="Ver todos"
      onAction={onVerTodos}
    >
      <ul className="flex flex-col gap-1">
        {lotes.map((lote) => (
          <li
            key={lote.id}
            className="group flex items-center gap-3 rounded-xl px-2 py-2.5 transition-colors duration-150 hover:bg-gray-50 dark:hover:bg-white/5"
          >
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm"
              style={{ backgroundColor: `${lote.imagemCor}1A` }}
            >
              {lote.imagemEmoji}
            </span>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-gray-700 dark:text-gray-200">
                {lote.produtoNome}
              </p>

              <div className="mt-0.5 flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500">
                <span>Lote: {lote.lote}</span>
                <span className="text-gray-300 dark:text-gray-700">•</span>
                <span>
                  {formatNumber(lote.quantidade)} em estoque
                </span>
              </div>
            </div>

            <div className="flex shrink-0 flex-col items-end gap-1">
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                {formatDate(lote.validade)}
              </span>

              <span className="rounded-md bg-red-50 px-1.5 py-0.5 text-[11px] font-semibold text-red-600 dark:bg-red-500/10 dark:text-red-400">
                {lote.diasVencido} dias atrasado
              </span>
            </div>
          </li>
        ))}
      </ul>
    </WidgetCard>
  );
}