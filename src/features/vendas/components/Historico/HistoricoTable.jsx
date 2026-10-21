import { HISTORICO_COLUMNS } from '../../constants/tableColumns.js';
import { HistoricoRow } from './HistoricoRow.jsx';
import { Skeleton } from '../../../../shared/components/ui/Skeleton.jsx';
import { FileSearch } from 'lucide-react';

/**
 * Tabela de histórico de vendas, com skeleton de carregamento e estado vazio.
 * @param {{
 *  vendas: import('../../types/venda.types.js').VendaHistorico[],
 *  carregando: boolean,
 *  onVisualizarVenda: (venda: import('../../types/venda.types.js').VendaHistorico) => void,
 * }} props
 */
export function HistoricoTable({
  vendas,
  carregando,
  onVisualizarVenda,
}) {
  return (
    <div className="min-w-0 overflow-hidden rounded-xl border border-cm-border">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] border-collapse">
          <thead>
            <tr className="border-b border-cm-border bg-cm-bg/60 text-left text-[11px] font-semibold uppercase tracking-wider text-cm-text-muted">
              {HISTORICO_COLUMNS.map((col) => (
                <th
                  key={col.key}
                  className={`
                    whitespace-nowrap px-3 py-3
                    ${col.key === 'numero' ? 'pl-4' : ''}
                    ${col.key === 'acoes' ? 'pr-4' : ''}
                    ${col.align === 'right'
                      ? 'text-right'
                      : col.align === 'center'
                        ? 'text-center'
                        : 'text-left'}
                  `}
                  scope="col"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {carregando &&
              Array.from({ length: 5 }).map((_, i) => (
                <tr
                  key={`skeleton-${i}`}
                  className="border-b border-cm-border/60 last:border-0"
                >
                  {HISTORICO_COLUMNS.map((col) => (
                    <td key={col.key} className="px-3 py-4">
                      <Skeleton className="h-4 w-full max-w-32 rounded-md" />
                    </td>
                  ))}
                </tr>
              ))}

            {!carregando &&
              vendas.map((venda) => (
                <HistoricoRow
                  key={venda.id}
                  venda={venda}
                  onVisualizar={() => onVisualizarVenda(venda)}
                />
              ))}
          </tbody>
        </table>
      </div>

      {!carregando && vendas.length === 0 && (
        <div className="flex flex-col items-center justify-center px-5 py-12 text-center">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-cm-border bg-cm-bg/60">
            <FileSearch className="h-5 w-5 text-cm-text-muted" />
          </div>

          <p className="text-sm font-semibold text-cm-text">
            Nenhuma venda encontrada
          </p>

          <p className="mt-1 max-w-sm text-xs leading-relaxed text-cm-text-muted">
            Não encontramos vendas com os filtros selecionados. Tente alterar
            o período ou os critérios da pesquisa.
          </p>
        </div>
      )}
    </div>
  );
}
