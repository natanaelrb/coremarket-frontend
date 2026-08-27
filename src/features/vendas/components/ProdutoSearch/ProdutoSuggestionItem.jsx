import { Plus } from 'lucide-react';
import { formatCurrency, formatNumber } from '../../../../shared/utils/formatters.js';

/**
 * Linha de sugestão de produto na busca, com botão rápido de adicionar.
 * @param {{ produto: import('../../types/venda.types.js').Produto, onAdicionar: () => void }} props
 */
export function ProdutoSuggestionItem({ produto, onAdicionar }) {
  return (
    <li className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors duration-150 hover:bg-cm-surface-hover">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cm-accent-soft text-xs font-semibold text-cm-accent">
        {produto.nome.slice(0, 2).toUpperCase()}
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-cm-text">{produto.nome}</p>
        <p className="truncate text-xs text-cm-text-faint">{produto.codigoBarras}</p>
      </div>

      <div className="hidden shrink-0 text-xs text-cm-text-muted sm:block">
        Estoque: {formatNumber(produto.estoque)} un
      </div>

      <div className="w-20 shrink-0 text-right text-sm font-semibold text-cm-text">
        {formatCurrency(produto.preco)}
      </div>

      <button
        type="button"
        onClick={onAdicionar}
        aria-label={`Adicionar ${produto.nome}`}
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cm-accent text-white transition-transform duration-150 hover:bg-cm-accent-hover active:scale-90"
      >
        <Plus className="h-4 w-4" />
      </button>
    </li>
  );
}

