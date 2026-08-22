import { HISTORICO_COLUMNS } from '../../constants/tableColumns.js';
import { HistoricoRow } from './HistoricoRow.jsx';
import { Skeleton } from "../../../../shared/components/ui/Skeleton.jsx";
import { FileSearch } from 'lucide-react';

/**
 * Tabela de histórico de vendas, com skeleton de carregamento e estado vazio.
 * @param {{
 *  vendas: import('../../types/venda.types.js').VendaHistorico[],
 *  carregando: boolean,
 *  onVisualizarVenda: (venda: import('../../types/venda.types.js').VendaHistorico) => void,
 * }} props
 */
export function HistoricoTable({ vendas, carregando, onVisualizarVenda }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[820px] border-collapse">
        <thead>
          <tr className="border-b border-cm-border text-left text-xs text-cm-text-faint">
            {HISTORICO_COLUMNS.map((col) => (
              <th
                key={col.key}
                className={`
                  pb-2 font-medium
                  ${col.key === 'numero' ? 'pl-2' : ''}
                  ${col.key === 'acoes' ? 'pr-2' : ''}
                  ${col.align === 'right' ? 'text-right' : col.align === 'center' ? 'text-center' : 'text-left'}
                `}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {carregando &&
            Array.from({ length: 5 }).map((_, i) => (
              <tr key={i} className="border-b border-cm-border/60 last:border-0">
                {HISTORICO_COLUMNS.map((col) => (
                  <td key={col.key} className="py-3 pr-3">
                    <Skeleton className="h-4 w-full" />
                  </td>
                ))}
              </tr>
            ))}

          {!carregando &&
            vendas.map((venda) => (
              <HistoricoRow key={venda.id} venda={venda} onVisualizar={() => onVisualizarVenda(venda)} />
            ))}
        </tbody>
      </table>

      {!carregando && vendas.length === 0 && (
        <div className="flex flex-col items-center justify-center gap-2 py-10 text-center">
          <FileSearch className="h-8 w-8 text-cm-text-faint" />
          <p className="text-sm text-cm-text-muted">Nenhuma venda encontrada com os filtros atuais.</p>
        </div>
      )}
    </div>
  );
}

