import StatsMiniGrid from './StatsMiniGrid.jsx'

/**
 * Quantidade Total / Reservado / Disponível mini-grid.
 */
export default function QuantityStats({ produto }) {
  const items = [
    { label: 'Quantidade Total', value: `${produto.quantidade} un.` },
    { label: 'Reservado', value: `${produto.reservado} un.` },
    { label: 'Disponível', value: `${produto.disponivel} un.` },
  ]
  return <StatsMiniGrid items={items} columns={3} />
}
