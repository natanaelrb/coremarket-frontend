// Widget: resumo textual de indicadores de estoque (custo total, sem estoque, reservado, trânsito).
import { WidgetCard } from './WidgetCard';
import { formatCurrency, formatNumber } from '../../utils/formatters';

export function ResumoEstoque({ resumo, onVerRelatorio }) {
  const linhas = [
    { label: 'Estoque total (custo)', value: formatCurrency(resumo.estoqueTotalCusto) },
    { label: 'Produtos sem estoque', value: formatNumber(resumo.produtosSemEstoque) },
    { label: 'Produtos com estoque baixo', value: formatNumber(resumo.produtosComEstoqueBaixo) },
    { label: 'Estoque reservado', value: formatCurrency(resumo.estoqueReservadoValor) },
    { label: 'Itens em trânsito', value: formatNumber(resumo.itensEmTransito) },
  ];

  return (
    <WidgetCard title="Resumo do estoque" actionLabel="Ver relatório" onAction={onVerRelatorio}>
      <ul className="flex flex-col divide-y divide-gray-50 dark:divide-gray-800/60">
        {linhas.map((linha) => (
          <li key={linha.label} className="flex items-center justify-between py-2 text-sm">
            <span className="text-gray-500 dark:text-gray-400">{linha.label}</span>
            <span className="font-medium text-gray-800 dark:text-gray-100">{linha.value}</span>
          </li>
        ))}
      </ul>
    </WidgetCard>
  );
}
