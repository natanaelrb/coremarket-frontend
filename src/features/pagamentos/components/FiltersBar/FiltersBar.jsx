import { Search } from 'lucide-react';
import { Input } from '../../../../shared/components/ui/Input.jsx';
import { Select } from '../../../../shared/components/ui/Select.jsx';
import { Button } from '../../../../shared/components/ui/Button.jsx';
import {
  TIPO_OPTIONS,
  STATUS_OPTIONS,
  FORMA_OPTIONS,
  ORIGEM_OPTIONS,
  PERIODO_OPTIONS,
} from '../../constants/index.js';

/**
 * Filters bar: search + tipo/status/forma/origem/período selects, plus
 * the min/max value range and the apply/clear actions.
 * @param {{ filters: ReturnType<typeof import('../../hooks/usePagamentosFilters.js').usePagamentosFilters> }} props
 */
export function FiltersBar({ filters }) {
  const { draft, updateField, applyFilters, clearFilters } = filters;

  return (
    <div className="card-surface animate-fade-in space-y-3 rounded-[var(--radius-card)] p-4">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
        <Input
          icon={Search}
          placeholder="Buscar cliente, fornecedor, documento..."
          value={draft.busca}
          onChange={(e) => updateField('busca', e.target.value)}
          containerClassName="lg:col-span-2"
        />
        <LabeledSelect label="Tipo" options={TIPO_OPTIONS} value={draft.tipo} onChange={(v) => updateField('tipo', v)} />
        <LabeledSelect label="Status" options={STATUS_OPTIONS} value={draft.status} onChange={(v) => updateField('status', v)} />
        <LabeledSelect label="Forma de pagamento" options={FORMA_OPTIONS} value={draft.forma} onChange={(v) => updateField('forma', v)} />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
        <LabeledSelect label="Origem" options={ORIGEM_OPTIONS} value={draft.origem} onChange={(v) => updateField('origem', v)} />
        <LabeledSelect label="Período" options={PERIODO_OPTIONS} value={draft.campoData} onChange={(v) => updateField('campoData', v)} />
        <DateField label="Data inicial" value={draft.dataInicio} onChange={(v) => updateField('dataInicio', v)} />
        <DateField label="Data final" value={draft.dataFim} onChange={(v) => updateField('dataFim', v)} />
        <div className="grid grid-cols-2 gap-2">
          <NumberField label="Valor mínimo" value={draft.valorMinimo} onChange={(v) => updateField('valorMinimo', v)} />
          <NumberField label="Valor máximo" value={draft.valorMaximo} onChange={(v) => updateField('valorMaximo', v)} />
        </div>
      </div>

      <div className="flex justify-end gap-2 pt-1">
        <Button variant="outline" size="sm" onClick={clearFilters}>
          Limpar filtros
        </Button>
        <Button size="sm" onClick={applyFilters}>
          Aplicar filtros
        </Button>
      </div>
    </div>
  );
}

function LabeledSelect({ label, options, value, onChange }) {
  return (
    <label className="block text-xs font-medium text-slate-500 dark:text-slate-400">
      {label}
      <Select
        options={options}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        containerClassName="mt-1"
      />
    </label>
  );
}

function DateField({ label, value, onChange }) {
  return (
    <label className="block text-xs font-medium text-slate-500 dark:text-slate-400">
      {label}
      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 transition-colors focus:border-brand-violet focus:outline-none focus:ring-2 focus:ring-brand-violet/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
      />
    </label>
  );
}

function NumberField({ label, value, onChange }) {
  return (
    <label className="block text-xs font-medium text-slate-500 dark:text-slate-400">
      {label}
      <input
        type="number"
        min={0}
        step={1}
        value={value || ''}
        onChange={(e) => onChange(Number(e.target.value) || 0)}
        placeholder="R$ 0,00"
        className="mt-1 h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-brand-violet focus:outline-none focus:ring-2 focus:ring-brand-violet/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
      />
    </label>
  );
}
