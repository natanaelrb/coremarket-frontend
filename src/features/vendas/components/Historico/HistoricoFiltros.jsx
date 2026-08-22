import { SlidersHorizontal, Search } from 'lucide-react';
import { Button } from "../../../../shared/components/ui/Button.jsx";
import { PERIODO_OPTIONS } from '../../constants/tableColumns.js';
import { STATUS_VENDA_OPTIONS } from '../../constants/statusVenda.js';
import { FORMA_PAGAMENTO_OPTIONS } from '../../constants/formaPagamento.js';

function FiltroSelect({ label, value, options, onChange }) {
  return (
    <label className="flex flex-col gap-1 text-xs text-cm-text-faint">
      {label}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-9 min-w-[9.5rem] rounded-lg border border-cm-border bg-cm-bg/60 px-2.5 text-sm text-cm-text outline-none transition-colors focus:border-cm-accent"
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

      <label className="flex flex-col gap-1 text-xs text-cm-text-faint">
        Cliente
        <div className="flex h-9 min-w-[10rem] items-center gap-1.5 rounded-lg border border-cm-border bg-cm-bg/60 px-2.5 focus-within:border-cm-accent">
          <Search className="h-3.5 w-3.5 shrink-0 text-cm-text-faint" />
          <input
            value={filtros.cliente}
            onChange={(e) => onAtualizarFiltro('cliente', e.target.value)}
            placeholder="Buscar cliente..."
            className="h-full w-full bg-transparent text-sm text-cm-text placeholder:text-cm-text-faint outline-none"
          />
        </div>
      </label>

      <FiltroSelect
        label="Operador"
        value={filtros.operador}
        options={operadorOptions}
        onChange={(v) => onAtualizarFiltro('operador', v)}
      />

      <Button variant="outline" size="sm" icon={SlidersHorizontal}>
        Mais filtros
      </Button>
    </div>
  );
}

