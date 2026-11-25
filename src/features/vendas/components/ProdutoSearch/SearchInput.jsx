import { Search, Barcode, Camera } from "lucide-react";
import { Button } from "../../../../shared/components/ui/Button.jsx";

export function SearchInput({
  value,
  onChange,
  inputRef,
  onEscanear,
}) {
  return (
    <div className="flex min-w-0 flex-col gap-2.5 sm:flex-row sm:items-center">
      <div className="group flex h-12 min-w-0 flex-1 items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/70 px-4 transition-all duration-200 hover:border-blue-300 focus-within:border-blue-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-500/10 dark:border-white/10 dark:bg-white/[0.03] dark:focus-within:border-blue-500 dark:focus-within:bg-white/[0.05]">
        <Search
          size={19}
          strokeWidth={2}
          className="shrink-0 text-slate-400 transition-colors duration-200 group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400"
        />

        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Buscar por nome, código ou código de barras..."
          aria-label="Buscar produto"
          autoComplete="off"
          className="h-full min-w-0 flex-1 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400 dark:text-slate-100 dark:placeholder:text-slate-500"
        />

        <span
          title="Pesquisa por código de barras"
          className="hidden shrink-0 items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-slate-500 sm:inline-flex dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-400"
        >
          <Barcode size={15} />
          <span className="text-[10px] font-semibold">Código</span>
        </span>

        <kbd className="hidden shrink-0 rounded-md border border-blue-100 bg-blue-50 px-2 py-1 text-[10px] font-bold text-blue-700 sm:inline-flex dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300">
          F2
        </kbd>
      </div>

      <Button
        variant="primary"
        size="lg"
        icon={Camera}
        onClick={onEscanear}
        className="h-12 shrink-0 rounded-xl px-5 shadow-sm shadow-blue-900/15 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md motion-reduce:transform-none sm:w-auto"
      >
        Escanear
      </Button>
    </div>
  );
}