import StatsMiniGrid from './StatsMiniGrid.jsx'

/**
 * Estoque Mínimo / Máximo / Ponto de Reposição mini-grid.
 */
export default function EstoqueMinMaxStats({ produto }) {
  const items = [
    { label: 'Estoque Mínimo', value: `${produto.estMinimo} un.` },
    { label: 'Estoque Máximo', value: `${produto.estMaximo} un.` },
    { label: 'Ponto de Reposição', value: `${produto.pontoReposicao} un.` },
  ]
  return <StatsMiniGrid items={items} columns={3} />
}
