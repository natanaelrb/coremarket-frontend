import InfoCard from '../shared/InfoCard.jsx'
import RatingCard from '../shared/RatingCard.jsx'
import ComprasChart from '../shared/ComprasChart.jsx'
import ProdutosChart from '../shared/ProdutosChart.jsx'
import AlertasCard from '../shared/AlertasCard.jsx'
import { formatCurrency, formatDate } from '../../../../../shared/utils/formatters.js'

export default function VisaoGeralTab({ detalhe }) {
  const { informacoesGerais, indicadores, comprasPor, avaliacao, comprasPorMes, produtosMaisComprados, alertas } =
    detalhe

  const infoRows = [
    { label: 'Nome Fantasia', value: informacoesGerais.nomeFantasia },
    { label: 'Razão Social', value: informacoesGerais.razaoSocial },
    { label: 'CNPJ', value: informacoesGerais.cnpj },
    { label: 'Tipo', value: informacoesGerais.tipo },
    { label: 'Cidade / Estado', value: informacoesGerais.cidadeEstado },
    { label: 'Telefone', value: informacoesGerais.telefone },
    { label: 'E-mail', value: informacoesGerais.email },
    { label: 'Contato', value: informacoesGerais.contato },
  ]

  const indicadorRows = [
    { label: 'Tempo como fornecedor', value: indicadores.tempoComoFornecedor },
    { label: 'Total de compras', value: indicadores.totalDeCompras },
    { label: 'Ticket médio', value: formatCurrency(indicadores.ticketMedio) },
    { label: 'Maior compra', value: formatCurrency(indicadores.maiorCompra) },
    { label: 'Última compra', value: formatDate(indicadores.ultimaCompra) },
    { label: 'Dias sem comprar', value: indicadores.diasSemComprar },
    { label: 'Total gasto', value: formatCurrency(indicadores.totalGasto) },
    { label: 'Pedidos pendentes', value: indicadores.pedidosPendentes },
  ]

  return (
    <div className="grid animate-fade-in gap-4 lg:grid-cols-2">
      <InfoCard title="Informações Gerais" rows={infoRows} />
      <InfoCard title="Indicadores" rows={indicadorRows} />
      <RatingCard title="Compras por Fornecedor" ratings={comprasPor} />
      <RatingCard title="Avaliação do Fornecedor" ratings={avaliacao} notaGeral={avaliacao.notaGeral} />
      <ComprasChart data={comprasPorMes} />
      <ProdutosChart data={produtosMaisComprados} />
      <div className="lg:col-span-2">
        <AlertasCard alertas={alertas} />
      </div>
    </div>
  )
}
