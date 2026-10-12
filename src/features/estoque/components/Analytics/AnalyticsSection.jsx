import EntradasSaidasChart from './EntradasSaidasChart.jsx'
import ValorEstoqueChart from './ValorEstoqueChart.jsx'
import EstoquePorCategoriaChart from './EstoquePorCategoriaChart.jsx'
import SituacaoEstoqueChart from './SituacaoEstoqueChart.jsx'
import EstoquePorLocalizacaoChart from './EstoquePorLocalizacaoChart.jsx'
import Top5ProdutosGiro from './Top5ProdutosGiro.jsx'

export default function AnalyticsSection({
  analytics,
  valorTotalEstoque,
  totalProdutos,
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-base font-semibold text-gray-900 dark:text-white">
        Análises do Estoque
      </h2>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
        <EstoquePorCategoriaChart
          data={analytics.porCategoria}
          valorTotal={valorTotalEstoque}
        />
        
        <SituacaoEstoqueChart
          data={analytics.situacao}
          totalProdutos={totalProdutos}
        />

        <ValorEstoqueChart
          data={analytics.valorHistorico}
        />


        <EntradasSaidasChart
          data={analytics.entradasSaidas}
        />

        <EstoquePorLocalizacaoChart
          data={analytics.porLocalizacao}
        />

        <Top5ProdutosGiro
          data={analytics.topGiro}
        />
      </div>
    </section>
  )
}