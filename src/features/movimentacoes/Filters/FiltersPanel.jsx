import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import PeriodFilter from './PeriodFilter';
import SelectFilter from './SelectFilter';
import ProductSearchFilter from './ProductSearchFilter';
import FilterActions from './FilterActions';
import {
  TIPO_MOVIMENTACAO_OPTIONS, ORIGEM_MOVIMENTACAO_OPTIONS, STATUS_OPTIONS,
} from "../constants/filterOptions";

const CATEGORIA_OPTIONS = [
  { value: 'TODAS', label: 'Todas as categorias' },
  { value: 'BEBIDAS', label: 'Bebidas' },
  { value: 'MERCEARIA', label: 'Mercearia' },
  { value: 'LATICINIOS', label: 'Laticínios' },
  { value: 'SNACKS', label: 'Snacks' },
];

const USUARIO_OPTIONS = [
  { value: 'TODOS', label: 'Todos os usuários' },
  { value: 'NATANAEL', label: 'Natanael Ribeiro' },
  { value: 'CAIXA1', label: 'Caixa 1' },
  { value: 'CAIXA2', label: 'Caixa 2' },
  { value: 'GERENTE', label: 'Gerente' },
];

// Painel completo de filtros — apenas orquestra os sub-componentes de filtro.
export default function FiltersPanel({ draftFilters, updateDraft, onApply, onClear }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl border border-white/5 bg-[#141833] p-5"
    >
      <div className="mb-4 flex items-center gap-2">
        <Filter className="h-4 w-4 text-violet-400" />
        <h2 className="text-sm font-semibold text-white">Filtros</h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <PeriodFilter
          inicio={draftFilters.periodoInicio}
          fim={draftFilters.periodoFim}
          onChangeInicio={(v) => updateDraft('periodoInicio', v)}
          onChangeFim={(v) => updateDraft('periodoFim', v)}
        />
        <SelectFilter
          label="Tipo de movimentação"
          value={draftFilters.tipo}
          onChange={(v) => updateDraft('tipo', v)}
          options={TIPO_MOVIMENTACAO_OPTIONS}
        />
        <SelectFilter
          label="Origem da movimentação"
          value={draftFilters.origem}
          onChange={(v) => updateDraft('origem', v)}
          options={ORIGEM_MOVIMENTACAO_OPTIONS}
        />
        <ProductSearchFilter
          value={draftFilters.produtoBusca}
          onChange={(v) => updateDraft('produtoBusca', v)}
        />
        <SelectFilter
          label="Categoria"
          value={draftFilters.categoria}
          onChange={(v) => updateDraft('categoria', v)}
          options={CATEGORIA_OPTIONS}
        />
        <SelectFilter
          label="Usuário responsável"
          value={draftFilters.usuario}
          onChange={(v) => updateDraft('usuario', v)}
          options={USUARIO_OPTIONS}
        />
        <SelectFilter
          label="Status"
          value={draftFilters.status}
          onChange={(v) => updateDraft('status', v)}
          options={STATUS_OPTIONS}
        />
        <FilterActions onClear={onClear} onApply={onApply} />
      </div>
    </motion.section>
  );
}
