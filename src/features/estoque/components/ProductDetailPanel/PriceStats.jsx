import StatsMiniGrid from './StatsMiniGrid.jsx'
import { formatCurrency } from '../../../../shared/utils/formatCurrency.js'

/**
 * Custo Médio / Preço de Venda / Valor em Estoque mini-grid.
 */
export default function PriceStats({ produto }) {
  const items = [
    { label: 'Custo Médio', value: formatCurrency(produto.custoMedio) },
    { label: 'Preço de Venda', value: formatCurrency(produto.precoVenda) },
    { label: 'Valor em Estoque', value: formatCurrency(produto.valorEmEstoque) },
  ]
  return <StatsMiniGrid items={items} columns={3} />
}
