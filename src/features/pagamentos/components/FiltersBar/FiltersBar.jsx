import { Search, SlidersHorizontal, RotateCcw, Check } from 'lucide-react';

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

export function FiltersBar({ filters }) {
  const { draft, updateField, applyFilters, clearFilters } = filters;

  return (
    <section
      aria-label="Filtros de pagamentos"
      className="
        card-surface mx-[-8px] overflow-hidden rounded-2xl
        border border-slate-200/80 shadow-sm
        transition-colors duration-200
        dark:border-slate-800
        sm:mx-[-24px]
      "
    >
      {/* Cabeçalho dos filtros */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-4 py-3 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-50 text-green-600 dark:bg-green-500/10 dark:text-green-400">
            <SlidersHorizontal size={17} aria-hidden="true" />
          </span>

          <div>
            <h2 className="text-sm font-semibold text-slate-800 dark:text-slate-100">
              Filtrar pagamentos
            </h2>
            <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
              Refine os resultados da sua busca
            </p>
          </div>
        </div>
      </div>

      {/* Campos de filtro */}
      <div className="space-y-4 p-4">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <div className="min-w-0 lg:col-span-2">
            <label className="mb-1 block text-xs font-medium text-slate-600 dark:text-slate-400">
              Buscar pagamentos
            </label>

            <Input
              icon={Search}
              placeholder="Cliente, fornecedor ou documento..."
              value={draft.busca}
              onChange={(e) => updateField('busca', e.target.value)}
              containerClassName="w-full min-w-0"
            />
          </div>

          <LabeledSelect
            label="Tipo"
            options={TIPO_OPTIONS}
            value={draft.tipo}
            onChange={(v) => updateField('tipo', v)}
          />

          <LabeledSelect
            label="Status"
            options={STATUS_OPTIONS}
            value={draft.status}
            onChange={(v) => updateField('status', v)}
          />

          <LabeledSelect
            label="Forma de pagamento"
            options={FORMA_OPTIONS}
            value={draft.forma}
            onChange={(v) => updateField('forma', v)}
          />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <LabeledSelect
            label="Origem"
            options={ORIGEM_OPTIONS}
            value={draft.origem}
            onChange={(v) => updateField('origem', v)}
          />

          <LabeledSelect
            label="Período"
            options={PERIODO_OPTIONS}
            value={draft.campoData}
            onChange={(v) => updateField('campoData', v)}
          />

          <DateField
            label="Data inicial"
            value={draft.dataInicio}
            onChange={(v) => updateField('dataInicio', v)}
          />

          <DateField
            label="Data final"
            value={draft.dataFim}
            onChange={(v) => updateField('dataFim', v)}
          />

          <div className="grid grid-cols-2 gap-2">
            <NumberField
              label="Valor mínimo"
              value={draft.valorMinimo}
              onChange={(v) => updateField('valorMinimo', v)}
            />

            <NumberField
              label="Valor máximo"
              value={draft.valorMaximo}
              onChange={(v) => updateField('valorMaximo', v)}
            />
          </div>
        </div>
      </div>

      {/* Ações */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 bg-slate-50/70 px-4 py-3 dark:border-slate-800 dark:bg-slate-800/20">
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Ajuste os campos e aplique para atualizar os resultados.
        </p>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={clearFilters}
            icon={RotateCcw}
          >
            Limpar
          </Button>

          <Button
            size="sm"
            onClick={applyFilters}
            icon={Check}
          >
            Aplicar filtros
          </Button>
        </div>
      </div>
    </section>
  );
}

function LabeledSelect({ label, options, value, onChange }) {
  return (
    <label className="block min-w-0 text-xs font-medium text-slate-600 dark:text-slate-400">
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
    <label className="block min-w-0 text-xs font-medium text-slate-600 dark:text-slate-400">
      {label}

      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          mt-1 h-10 w-full min-w-0 rounded-lg
          border border-slate-200 bg-white px-2.5
          text-sm text-slate-800 outline-none
          transition-colors
          hover:border-slate-300
          focus:border-green-500 focus:ring-2 focus:ring-green-500/15
          dark:border-slate-700 dark:bg-slate-900
          dark:text-slate-100 dark:hover:border-slate-600
        "
      />
    </label>
  );
}

function NumberField({ label, value, onChange }) {
  return (
    <label className="block min-w-0 text-xs font-medium text-slate-600 dark:text-slate-400">
      {label}

      <input
        type="number"
        min={0}
        step={1}
        value={value || ''}
        onChange={(e) => onChange(Number(e.target.value) || 0)}
        placeholder="R$ 0,00"
        className="
          mt-1 h-10 w-full min-w-0 rounded-lg
          border border-slate-200 bg-white px-2.5
          text-sm text-slate-800 placeholder:text-slate-400
          outline-none transition-colors
          hover:border-slate-300
          focus:border-green-500 focus:ring-2 focus:ring-green-500/15
          dark:border-slate-700 dark:bg-slate-900
          dark:text-slate-100 dark:hover:border-slate-600
        "
      />
    </label>
  );
}
