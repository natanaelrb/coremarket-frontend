import { Search, UserRound, Wallet, ArrowUpRight } from 'lucide-react';
import { formatCurrency } from '../../../../shared/utils/formatters.js';

/**
 * Campo de busca de cliente (F3) com dropdown de sugestões.
 */
export function ClienteSearch({
  termo,
  onChangeTermo,
  sugestoes,
  onSelecionar,
  inputRef,
}) {
  return (
    <div className="relative">
      <label
        htmlFor="venda-busca-cliente"
        className="pl-1 mb-4 block text-xs font-semibold uppercase tracking-wider text-cm-text-muted"
      >
        Pesquisar por nome ou documento
      </label>

      <div
        className="
          group flex h-12 items-center gap-3 rounded-xl
          border border-cm-border bg-cm-bg/60 px-3.5
          transition-all duration-200
          hover:border-green-500/40
          focus-within:border-green-500
          focus-within:ring-4 focus-within:ring-green-500/10
        "
      >
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-500/10 text-green-600 transition-colors group-focus-within:bg-green-500/15 dark:text-green-400">
          <Search className="h-4 w-4" />
        </div>

        <input
          id="venda-busca-cliente"
          ref={inputRef}
          value={termo}
          onChange={(e) => onChangeTermo(e.target.value)}
          placeholder="Digite o nome ou CPF..."
          autoComplete="off"
          className="h-full min-w-0 flex-1 bg-transparent text-sm text-cm-text outline-none placeholder:text-cm-text-faint"
        />

        <kbd className="hidden shrink-0 rounded-md border border-cm-border bg-cm-surface px-2 py-1 text-[10px] font-semibold text-cm-text-faint sm:inline-flex">
          F3
        </kbd>
      </div>

      {sugestoes.length > 0 && (
        <div className="absolute left-0 right-0 top-full z-20 mt-2 overflow-hidden rounded-xl border border-cm-border bg-cm-surface shadow-xl shadow-black/10 animate-scale-in">
          <div className="flex items-center justify-between border-b border-cm-border bg-cm-surface-hover/60 px-3.5 py-2.5">
            <span className="text-xs font-semibold text-cm-text-muted">
              Clientes encontrados
            </span>

            <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-[10px] font-bold text-blue-600 dark:text-blue-400">
              {sugestoes.length}
            </span>
          </div>

          <ul className="max-h-60 overflow-y-auto p-1.5">
            {sugestoes.map((cliente) => (
              <li key={cliente.id}>
                <button
                  type="button"
                  onClick={() => onSelecionar(cliente)}
                  className="
                    group/item flex w-full items-center gap-3 rounded-lg
                    border border-transparent px-3 py-3 text-left
                    transition-all duration-150
                    hover:border-green-500/15 hover:bg-green-500/[0.06]
                    focus-visible:outline-none focus-visible:ring-2
                    focus-visible:ring-inset focus-visible:ring-green-500
                  "
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 transition-colors group-hover/item:bg-green-500/10 group-hover/item:text-green-600 dark:text-blue-400 dark:group-hover/item:text-green-400">
                    <UserRound className="h-5 w-5" />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-semibold text-cm-text">
                      {cliente.nome}
                    </span>

                    <span className="mt-1 block text-xs text-cm-text-faint">
                      Selecionar para esta venda
                    </span>
                  </span>

                  {cliente.dividaAberta > 0 && (
                    <span className="flex shrink-0 items-center gap-1.5 rounded-lg border border-amber-500/20 bg-amber-500/[0.08] px-2 py-1.5 text-xs font-semibold tabular-nums text-amber-700 dark:text-amber-400">
                      <Wallet className="h-3.5 w-3.5" />
                      {formatCurrency(cliente.dividaAberta)}
                    </span>
                  )}

                  <ArrowUpRight className="h-4 w-4 shrink-0 text-cm-text-faint transition-transform group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5 group-hover/item:text-green-600" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
