import { Button } from "../../../../shared/components/ui/Button";
import {
  FORMA_OPTIONS,
  PERIODO_CAMPO_OPTIONS,
  STATUS_FILTER_OPTIONS,
  VALOR_FAIXAS,
  VENCIMENTO_FILTER_OPTIONS,
} from "../../constants";
import { useContasReceberContext } from "../../hooks/useContasReceberContext";
import { FilterField } from "./FilterField";

const withAll = (opts, value, label) => [{ value, label }, ...opts];

export function FilterBar() {
  const { filters, clienteOptions, responsavelOptions } =
    useContasReceberContext();
  const { draft, setDraftField: set } = filters;
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 xl:grid-cols-[repeat(7,minmax(0,1fr))_auto]">
      <FilterField
        label="Status"
        value={draft.status}
        onChange={(v) => set("status", v)}
        options={STATUS_FILTER_OPTIONS}
      />
      <FilterField
        label="Período"
        value={draft.periodoCampo}
        onChange={(v) => set("periodoCampo", v)}
        options={PERIODO_CAMPO_OPTIONS}
      />
      <FilterField
        label="Vencimento"
        value={draft.vencimento}
        onChange={(v) => set("vencimento", v)}
        options={VENCIMENTO_FILTER_OPTIONS}
      />
      <FilterField
        label="Cliente"
        value={draft.cliente}
        onChange={(v) => set("cliente", v)}
        options={withAll(clienteOptions, "TODOS", "Todos")}
      />
      <FilterField
        label="Forma de pagamento"
        value={draft.forma}
        onChange={(v) => set("forma", v)}
        options={withAll(FORMA_OPTIONS, "TODAS", "Todas")}
      />
      <FilterField
        label="Valor"
        value={draft.valorFaixa}
        onChange={(v) => set("valorFaixa", v)}
        options={VALOR_FAIXAS}
      />
      <FilterField
        label="Responsável"
        value={draft.responsavel}
        onChange={(v) => set("responsavel", v)}
        options={withAll(responsavelOptions, "TODOS", "Todos")}
      />
      <div className="col-span-2 flex items-center gap-2 sm:col-span-4 xl:col-span-1">
        <Button
          size="sm"
          className="h-full min-h-9 flex-1"
          onClick={filters.clear}
          disabled={!filters.hasActive && !filters.hasPendingChanges}
        >
          Limpar filtros
        </Button>
        <Button
          variant="primary"
          size="sm"
          className="h-full min-h-9 flex-1"
          onClick={filters.apply}
          disabled={!filters.hasPendingChanges}
        >
          Aplicar filtros
        </Button>
      </div>
    </div>
  );
}
