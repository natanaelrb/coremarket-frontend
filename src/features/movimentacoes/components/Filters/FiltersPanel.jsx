import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';

import PeriodFilter from './PeriodFilter';
import SelectFilter from './SelectFilter';
import ProductSearchFilter from './ProductSearchFilter';
import FilterActions from './FilterActions';

import {
  TIPO_MOVIMENTACAO_OPTIONS,
  ORIGEM_MOVIMENTACAO_OPTIONS,
  STATUS_OPTIONS,
} from '../../constants/filterOptions';

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

// Painel completo de filtros.
// Organiza os filtros por prioridade para facilitar a busca operacional.
export default function FiltersPanel({
  draftFilters,
  updateDraft,
  onApply,
  onClear,
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        ease: 'easeOut',
      }}
      className="
        rounded-2xl
        border border-slate-200
        bg-white
        p-5
        shadow-sm
        shadow-slate-900/[0.04]
      "
    >
      
      {/* Cabeçalho + período */}
      <div className="mb-6 flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
        {/* Título */}
        <div className="flex items-start gap-3">
          <span
            className="
              flex h-9 w-9 shrink-0
              items-center justify-center
              rounded-xl
              bg-emerald-50
              text-emerald-600
            "
          >
            <Filter className="h-4 w-4" strokeWidth={2} />
          </span>

          <div>
            <h2 className="text-sm font-semibold text-slate-800">
              Filtrar movimentações
            </h2>

            <p className="mt-0.5 text-xs text-slate-400">
              Refine os registros por período, produto, tipo ou responsável.
            </p>
          </div>
        </div>

        {/* Período — canto superior direito */}
        <div className="xl:shrink-0">
          <PeriodFilter
            inicio={draftFilters.periodoInicio}
            fim={draftFilters.periodoFim}
            onChangeInicio={(value) =>
              updateDraft('periodoInicio', value)
            }
            onChangeFim={(value) =>
              updateDraft('periodoFim', value)
            }
          />
        </div>
      </div>

      {/* Filtros */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-12">

        {/* Produto */}
        <div className="xl:col-span-3">
          <ProductSearchFilter
            value={draftFilters.produtoBusca}
            onChange={(value) =>
              updateDraft('produtoBusca', value)
            }
          />
        </div>

        {/* Tipo */}
        <div className="xl:col-span-2">
          <SelectFilter
            label="Tipo de movimentação"
            value={draftFilters.tipo}
            onChange={(value) =>
              updateDraft('tipo', value)
            }
            options={TIPO_MOVIMENTACAO_OPTIONS}
          />
        </div>

        {/* Origem */}
        <div className="xl:col-span-2">
          <SelectFilter
            label="Origem"
            value={draftFilters.origem}
            onChange={(value) =>
              updateDraft('origem', value)
            }
            options={ORIGEM_MOVIMENTACAO_OPTIONS}
          />
        </div>

        {/* Categoria */}
        <div className="xl:col-span-2">
          <SelectFilter
            label="Categoria"
            value={draftFilters.categoria}
            onChange={(value) =>
              updateDraft('categoria', value)
            }
            options={CATEGORIA_OPTIONS}
          />
        </div>

        {/* Usuário */}
        <div className="xl:col-span-2">
          <SelectFilter
            label="Usuário responsável"
            value={draftFilters.usuario}
            onChange={(value) =>
              updateDraft('usuario', value)
            }
            options={USUARIO_OPTIONS}
          />
        </div>

        {/* Status */}
        <div className="xl:col-span-1">
          <SelectFilter
            label="Status"
            value={draftFilters.status}
            onChange={(value) =>
              updateDraft('status', value)
            }
            options={STATUS_OPTIONS}
          />
        </div>
      </div>

      {/* Ações */}
      <div className="mt-4 flex justify-end">
        <FilterActions
          onClear={onClear}
          onApply={onApply}
        />
      </div>
    </motion.section>
  );
}