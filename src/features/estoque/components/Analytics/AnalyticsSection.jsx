import EntradasSaidasChart from './EntradasSaidasChart.jsx'
import ValorEstoqueChart from './ValorEstoqueChart.jsx'
import EstoquePorCategoriaChart from './EstoquePorCategoriaChart.jsx'
import SituacaoEstoqueChart from './SituacaoEstoqueChart.jsx'
import Top5ProdutosGiro from './Top5ProdutosGiro.jsx'

/**
 * Section title + the responsive grid of all 5 analytics charts. Receives
 * the fully-loaded analytics data object from useEstoqueAnalytics.
 */
export default function AnalyticsSection({ analytics, valorTotalEstoque, totalProdutos }) {
  return (
    <div className="space-y-3">
      <h2 className="text-base font-semibold text-gray-900 dark:text-white">Análises do Estoque</h2>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 xl:grid-cols-5">
        <EntradasSaidasChart data={analytics.entradasSaidas} />
        <ValorEstoqueChart data={analytics.valorHistorico} />
        <EstoquePorCategoriaChart data={analytics.porCategoria} valorTotal={valorTotalEstoque} />
        <SituacaoEstoqueChart data={analytics.situacao} totalProdutos={totalProdutos} />
        <Top5ProdutosGiro data={analytics.topGiro} />
      </div>
    </div>
  )
}
