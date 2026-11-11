import { useEffect, useRef, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Button } from "../../../../shared/components/ui/Button";
import { useContasReceberContext } from "../../hooks/useContasReceberContext";

export function SearchBar() {
  const { filters, actions } = useContasReceberContext();
  const [value, setValue] = useState(filters.applied.busca);
  const timer = useRef();

  useEffect(() => {
    setValue(filters.applied.busca);
  }, [filters.applied.busca]);
  useEffect(() => () => clearTimeout(timer.current), []);

  const change = (v) => {
    setValue(v);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => filters.patch({ busca: v }), 250);
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="relative min-w-[240px] flex-1">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-ink-3" />
        <input
          value={value}
          onChange={(e) => change(e.target.value)}
          aria-label="Buscar contas"
          placeholder="Buscar cliente, CPF, venda, código da conta, documento..."
          className="h-9 w-full rounded-lg border border-line bg-surface pl-9 pr-8 text-xs text-ink outline-none transition placeholder:text-ink-3 focus:border-brand focus:ring-2 focus:ring-brand/20"
        />
        {value && (
          <button
            type="button"
            aria-label="Limpar busca"
            onClick={() => change("")}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-ink-3 hover:text-ink"
          >
            <X className="size-3.5" />
          </button>
        )}
      </div>
      <Button
        className="h-9"
        icon={SlidersHorizontal}
        onClick={actions.filtrosAvancados}
      >
        Filtros avançados
        {filters.advancedCount > 0 && (
          <span className="ml-0.5 grid size-4 place-items-center rounded-full bg-brand text-[9px] font-bold text-white">
            {filters.advancedCount}
          </span>
        )}
      </Button>
    </div>
  );
}
