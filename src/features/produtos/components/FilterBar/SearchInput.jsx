// Campo de busca por nome, código, SKU ou código de barras.
import { Search, X } from 'lucide-react';

export function SearchInput({ value, onChange }) {
  const hasValue = Boolean(value?.trim());

  return (
    <div className="group relative w-full min-w-0">
      {/* Ícone de pesquisa */}
      <Search
        size={15}
        strokeWidth={2}
        className="
          pointer-events-none absolute left-3 top-1/2
          -translate-y-1/2
          text-slate-400
          transition-colors duration-200
          group-focus-within:text-green-500
          dark:text-slate-500
          dark:group-focus-within:text-green-400
        "
      />

      {/* Campo de entrada */}
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Pesquisar produto..."
        aria-label="Pesquisar produto"
        className="
          h-10 w-full rounded-lg
          border border-slate-200
          bg-white
          py-2 pl-9 pr-9
          text-sm text-slate-700
          outline-none
          transition-all duration-200
          placeholder:text-slate-400
          hover:border-slate-300
          focus:border-green-500
          focus:ring-4 focus:ring-green-500/10
          dark:border-white/[0.10]
          dark:bg-[#151c2b]
          dark:text-slate-200
          dark:placeholder:text-slate-500
          dark:hover:border-white/[0.18]
          dark:focus:border-green-400
          dark:focus:ring-green-500/10
        "
      />

      {/* Botão para limpar a pesquisa */}
      {hasValue && (
        <button
          type="button"
          onClick={() => onChange('')}
          aria-label="Limpar pesquisa"
          className="
            absolute right-2 top-1/2
            flex h-6 w-6
            -translate-y-1/2
            items-center justify-center
            rounded-md
            text-slate-400
            transition-colors duration-150
            hover:bg-slate-100 hover:text-slate-600
            dark:hover:bg-white/[0.08]
            dark:hover:text-slate-200
          "
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
}