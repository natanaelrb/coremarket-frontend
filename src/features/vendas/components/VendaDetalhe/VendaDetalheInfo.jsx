import { formatDateTime } from '../../../../shared/utils/formatters.js';

/**
 * Grade de metadados da venda selecionada.
 * @param {{
 *  dataHora: string,
 *  caixaNumero?: string,
 *  operadorNome: string,
 *  clienteNome?: string,
 * }} props
 */
export function VendaDetalheInfo({ dataHora, caixaNumero, operadorNome, clienteNome }) {
  return (
    <dl className="mb-4 space-y-1.5 text-xs">
      <div className="flex justify-between">
        <dt className="text-cm-text-faint">Data / Hora:</dt>
        <dd className="text-cm-text">{formatDateTime(dataHora)}</dd>
      </div>
      {caixaNumero && (
        <div className="flex justify-between">
          <dt className="text-cm-text-faint">Caixa:</dt>
          <dd className="text-cm-text">#{caixaNumero}</dd>
        </div>
      )}
      <div className="flex justify-between">
        <dt className="text-cm-text-faint">Operador:</dt>
        <dd className="text-cm-text">{operadorNome}</dd>
      </div>
      <div className="flex justify-between">
        <dt className="text-cm-text-faint">Cliente:</dt>
        <dd className="text-cm-text">{clienteNome || 'Consumidor'}</dd>
      </div>
    </dl>
  );
}

