import Card, { CardStepHeader } from "../../../../shared/components/layout/Card.jsx";
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
  const { vendas, totalFiltrado, carregando, filtros, atualizarFiltro, paginacao } = historico;

  return (
    <Card>
      <CardStepHeader step={6} title="Histórico de vendas" />

      <div className="mb-4">
        <HistoricoFiltros filtros={filtros} onAtualizarFiltro={atualizarFiltro} operadores={OPERADORES} />
      </div>

      <HistoricoTable vendas={vendas} carregando={carregando} onVisualizarVenda={onVisualizarVenda} />

      <div className="mt-2 border-t border-cm-border pt-3">
        <Pagination paginacao={paginacao} totalFiltrado={totalFiltrado} />
      </div>
    </Card>
  );
}

