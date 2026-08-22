import { Search } from 'lucide-react';
import { formatCurrency } from '../../../../shared/utils/formatters.js';

/**
 * Campo de busca de cliente (F3) com dropdown de sugestões.
 * @param {{
 *  termo: string,
 *  onChangeTermo: (value: string) => void,
 *  sugestoes: import('../../types/venda.types.js').Cliente[],
 *  onSelecionar: (cliente: import('../../types/venda.types.js').Cliente) => void,
 *  inputRef?: React.RefObject<HTMLInputElement>,
 * }} props
 */
export function ClienteSearch({ termo, onChangeTermo, sugestoes, onSelecionar, inputRef }) {
  return (
    <div className="relative">
      <div className="flex h-11 items-center gap-2.5 rounded-lg border border-cm-border bg-cm-bg/60 px-3.5 transition-colors focus-within:border-cm-accent">
        <Search className="h-4 w-4 shrink-0 text-cm-text-faint" />
        <input
          ref={inputRef}
          value={termo}
          onChange={(e) => onChangeTermo(e.target.value)}
          placeholder="Buscar cliente (F3)..."
          className="h-full w-full bg-transparent text-sm text-cm-text placeholder:text-cm-text-faint outline-none"
        />
      </div>

      {sugestoes.length > 0 && (
        <ul className="absolute left-0 right-0 top-full z-10 mt-1.5 max-h-56 animate-scale-in overflow-y-auto rounded-lg border border-cm-border bg-cm-surface p-1.5 shadow-lg shadow-black/30">
          {sugestoes.map((cliente) => (
            <li key={cliente.id}>
              <button
                type="button"
                onClick={() => onSelecionar(cliente)}
                className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-cm-surface-hover"
              >
                <span className="text-cm-text">{cliente.nome}</span>
                {cliente.dividaAberta > 0 && (
                  <span className="text-xs text-cm-warning">{formatCurrency(cliente.dividaAberta)}</span>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

