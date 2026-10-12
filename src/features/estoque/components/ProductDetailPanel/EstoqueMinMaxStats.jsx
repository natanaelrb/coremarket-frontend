import StatsMiniGrid from './StatsMiniGrid.jsx'

export default function EstoqueMinMaxStats({ produto }) {
  const items = [
    {
      label: 'Estoque Mínimo',
      value: `${produto?.estMinimo ?? 0} un.`,
      tone: 'warning',
      helper: 'Nível mínimo',
    },
    {
      label: 'Estoque Máximo',
      value: `${produto?.estMaximo ?? 0} un.`,
      tone: 'success',
      helper: 'Capacidade ideal',
    },
    {
      label: 'Ponto de Reposição',
      value: `${produto?.pontoReposicao ?? 0} un.`,
      tone: 'info',
      helper: 'Quando repor',
    },
  ]

  return <StatsMiniGrid items={items} columns={3} />
}