// Widget: lista dos lotes que vencem em breve (ordenados por urgência).
import { WidgetCard } from './WidgetCard';
import { formatDate } from '../../utils/formatters';

function diasLabel(dias) {
  if (dias === 0) {
    return {
      text: 'Hoje',
      className:
        'bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400',
    };
  }

  if (dias < 0) {
    return {
      text: `${Math.abs(dias)} dias atrasado`,
      className:
        'bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400',
    };
  }

  return {
    text: `${dias} dias`,
    className:
      'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400',
  };
}

export function ProximosVencimento({ lotes, onVerTodos }) {
  return (
    <WidgetCard
      title="Produtos próximos do vencimento"
      actionLabel="Ver todos"
      onAction={onVerTodos}
    >
      <ul className="flex flex-col gap-1">
        {lotes.map((lote) => {
          const { text, className } = diasLabel(lote.diasRestantes);

          return (
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

                <p className="mt-0.5 text-xs text-gray-400 dark:text-gray-500">
                  Lote: {lote.lote}
                </p>
              </div>

              <div className="flex shrink-0 flex-col items-end gap-1">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  {formatDate(lote.validade)}
                </span>

                <span
                  className={`rounded-md px-1.5 py-0.5 text-[11px] font-semibold ${className}`}
                >
                  {text}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </WidgetCard>
  );
}