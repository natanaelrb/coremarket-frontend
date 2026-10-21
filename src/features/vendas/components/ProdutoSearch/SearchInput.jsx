import { Search, Barcode, Camera } from "lucide-react";
import { Button } from "../../../../shared/components/ui/Button.jsx";

export function SearchInput({ value, onChange, inputRef, onEscanear }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      {/* Campo de pesquisa */}
      <div className="group flex h-12 min-w-0 flex-1 items-center gap-3 rounded-xl border border-cm-border bg-cm-bg/60 px-4 transition-all duration-200 hover:border-green-500/40 focus-within:border-green-500 focus-within:bg-cm-surface focus-within:ring-4 focus-within:ring-green-500/10 motion-reduce:transition-none">
        <Search
          size={19}
          strokeWidth={2}
          className="shrink-0 text-cm-text-muted transition-colors duration-200 group-focus-within:text-green-500"
        />

        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Buscar por nome, código ou código de barras..."
          aria-label="Buscar produto"
          autoComplete="off"
          className="h-full min-w-0 flex-1 bg-transparent text-sm text-cm-text outline-none placeholder:text-cm-text-faint"
        />

        <span
          title="Pesquisa por código de barras"
          className="hidden shrink-0 items-center gap-1.5 rounded-lg border border-cm-border bg-cm-surface px-2 py-1 text-cm-text-muted sm:inline-flex"
        >
          <Barcode size={16} />
          <span className="text-[10px] font-medium">Código</span>
        </span>
      </div>

      {/* Ação de escaneamento */}
      <div className="shrink-0">
        <Button
          variant="primary"
          size="lg"
          icon={Camera}
          onClick={onEscanear}
          className="h-12 w-full rounded-xl transition-all duration-200 hover:shadow-md motion-reduce:transition-none sm:w-auto"
        >
          Escanear
        </Button>
      </div>
    </div>
  );
}
