import Card, { CardStepHeader } from '../../../../shared/components/layout/Card.jsx';
import { HistoricoFiltros } from './HistoricoFiltros.jsx';
import { HistoricoTable } from './HistoricoTable.jsx';
import { Pagination } from './Pagination.jsx';

const OPERADORES = ['João Silva', 'Ana Paula', 'Bruno Costa'];

/**
 * Painel "6. Histórico de vendas": filtros, tabela paginada e paginação.
 * @param {{
 *  historico: ReturnType<typeof import('../../hooks/useHistoricoVendas.js').useHistoricoVendas>,
 *  onVisualizarVenda: (venda: import('../../types/venda.types.js').VendaHistorico) => void,
 * }} props
 */
export function HistoricoVendasPanel({ historico, onVisualizarVenda }) {
  const {
    vendas,
    totalFiltrado,
    carregando,
    filtros,
    atualizarFiltro,
    paginacao,
  } = historico;

  return (
    <Card className="overflow-hidden">
      <div className="p-5 sm:p-6">
        <CardStepHeader
          step={6}
          title="Histórico de vendas"
          description="Consulte vendas anteriores, filtre os resultados e visualize os detalhes."
        />

        <div className="mb-5 rounded-xl border border-cm-border bg-cm-bg/40 p-3 sm:p-4">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-cm-text-muted">
              Filtros de pesquisa
            </h3>

            <span className="text-xs text-cm-text-faint">
              {totalFiltrado} {totalFiltrado === 1 ? 'resultado' : 'resultados'}
            </span>
          </div>

          <HistoricoFiltros
            filtros={filtros}
            onAtualizarFiltro={atualizarFiltro}
            operadores={OPERADORES}
          />
        </div>

        <div className="min-w-0">
          <HistoricoTable
            vendas={vendas}
            carregando={carregando}
            onVisualizarVenda={onVisualizarVenda}
          />
        </div>

        <div className="mt-5 border-t border-cm-border pt-4">
          <Pagination
            paginacao={paginacao}
            totalFiltrado={totalFiltrado}
          />
        </div>
      </div>
    </Card>
  );
}
