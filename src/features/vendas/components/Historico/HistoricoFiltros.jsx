import { SlidersHorizontal, Search } from 'lucide-react';
import { Button } from '../../../../shared/components/ui/Button.jsx';
import { PERIODO_OPTIONS } from '../../constants/tableColumns.js';
import { STATUS_VENDA_OPTIONS } from '../../constants/statusVenda.js';
import { FORMA_PAGAMENTO_OPTIONS } from '../../constants/formaPagamento.js';

function FiltroSelect({ label, value, options, onChange }) {
  return (
    <label className="flex min-w-0 flex-1 flex-col gap-1.5 text-xs font-medium text-cm-text-muted sm:min-w-[9.5rem]">
      {label}

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-10 w-full rounded-xl border border-cm-border bg-cm-surface px-3 text-sm font-medium text-cm-text outline-none transition-colors duration-200 hover:border-cm-text-faint focus:border-green-500 focus:ring-2 focus:ring-green-500/10"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </label>
  );
}

/**
 * Barra de filtros da tabela de histórico: período, status, pagamento,
 * cliente e operador.
 * @param {{
 *  filtros: { periodo: string, status: string, pagamento: string, cliente: string, operador: string },
 *  onAtualizarFiltro: (chave: string, valor: string) => void,
 *  operadores: string[],
 * }} props
 */
export function HistoricoFiltros({ filtros, onAtualizarFiltro, operadores }) {
  const operadorOptions = [
    { value: 'TODOS', label: 'Todos' },
    ...operadores.map((nome) => ({ value: nome, label: nome })),
  ];

  return (
    <div className="flex flex-wrap items-end gap-3">
      <FiltroSelect
        label="Período"
        value={filtros.periodo}
        options={PERIODO_OPTIONS}
        onChange={(v) => onAtualizarFiltro('periodo', v)}
      />

      <FiltroSelect
        label="Status"
        value={filtros.status}
        options={STATUS_VENDA_OPTIONS}
        onChange={(v) => onAtualizarFiltro('status', v)}
      />

      <FiltroSelect
        label="Pagamento"
        value={filtros.pagamento}
        options={FORMA_PAGAMENTO_OPTIONS}
        onChange={(v) => onAtualizarFiltro('pagamento', v)}
      />

      <label className="flex min-w-0 flex-1 flex-col gap-1.5 text-xs font-medium text-cm-text-muted sm:min-w-[10rem]">
        Cliente

        <div className="flex h-10 items-center gap-2 rounded-xl border border-cm-border bg-cm-surface px-3 transition-colors duration-200 hover:border-cm-text-faint focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-500/10">
          <Search className="h-4 w-4 shrink-0 text-cm-text-muted" />

          <input
            value={filtros.cliente}
            onChange={(e) => onAtualizarFiltro('cliente', e.target.value)}
            placeholder="Buscar cliente..."
            aria-label="Buscar por cliente"
            className="h-full min-w-0 w-full bg-transparent text-sm text-cm-text outline-none placeholder:text-cm-text-faint"
          />
        </div>
      </label>

      <FiltroSelect
        label="Operador"
        value={filtros.operador}
        options={operadorOptions}
        onChange={(v) => onAtualizarFiltro('operador', v)}
      />

      <div className="flex items-end">
        <Button
          variant="outline"
          size="sm"
          icon={SlidersHorizontal}
          disabled
          title="Filtros adicionais ainda não disponíveis"
          className="!h-10 !rounded-xl !border-cm-border !bg-cm-surface !text-cm-text-muted"
        >
          Mais filtros
        </Button>
      </div>
    </div>
  );
}