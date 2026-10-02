// Widget: resumo textual de indicadores de estoque (custo total, sem estoque, reservado, trânsito).
import { WidgetCard } from './WidgetCard';
import { formatCurrency, formatNumber } from '../../utils/formatters';

export function ResumoEstoque({ resumo, onVerRelatorio }) {
  const linhas = [
    {
      label: 'Estoque total (custo)',
      value: formatCurrency(resumo.estoqueTotalCusto),
      valueClassName: 'text-emerald-600 dark:text-emerald-400',
    },
    {
      label: 'Produtos sem estoque',
      value: formatNumber(resumo.produtosSemEstoque),
      valueClassName: 'text-red-600 dark:text-red-400',
    },
    {
      label: 'Produtos com estoque baixo',
      value: formatNumber(resumo.produtosComEstoqueBaixo),
      valueClassName: 'text-amber-600 dark:text-amber-400',
    },
    {
      label: 'Estoque reservado',
      value: formatCurrency(resumo.estoqueReservadoValor),
      valueClassName: 'text-blue-600 dark:text-blue-400',
    },
    {
      label: 'Itens em trânsito',
      value: formatNumber(resumo.itensEmTransito),
      valueClassName: 'text-gray-700 dark:text-gray-200',
    },
  ];

  return (
    <WidgetCard
      title="Resumo do estoque"
      actionLabel="Ver relatório"
      onAction={onVerRelatorio}
    >
      <ul className="flex flex-col">
        {linhas.map((linha, index) => (
          <li
            key={linha.label}
            className={[
              'flex items-center justify-between gap-4 py-2.5',
              index !== 0
                ? 'border-t border-gray-100 dark:border-gray-800/60'
                : '',
            ].join(' ')}
          >
            <span className="min-w-0 truncate text-sm text-gray-500 dark:text-gray-400">
              {linha.label}
            </span>

            <span
              className={`shrink-0 text-sm font-semibold ${linha.valueClassName}`}
            >
              {linha.value}
            </span>
          </li>
        ))}
      </ul>
    </WidgetCard>
  );
}