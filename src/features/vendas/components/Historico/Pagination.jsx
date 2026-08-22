import { ChevronLeft, ChevronRight } from 'lucide-react';
import IconButton from '../../../../shared/components/actions/IconButton.jsx';
import { PAGE_SIZE_OPTIONS } from '../../constants/tableColumns.js';

/**
 * Controles de paginação: navegação por página + seletor de itens por página.
 */
export function Pagination({ paginacao, totalFiltrado }) {
  const {
    pagina,
    tamanhoPagina,
    totalPaginas,
    paginasVisiveis,
    irPara,
    proxima,
    anterior,
    alterarTamanhoPagina,
    temAnterior,
    temProxima,
  } = paginacao;

  const inicio =
    totalFiltrado === 0 ? 0 : (pagina - 1) * tamanhoPagina + 1;

  const fim = Math.min(pagina * tamanhoPagina, totalFiltrado);

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
      <p className="text-xs text-cm-text-faint">
        Mostrando {inicio} a {fim} de {totalFiltrado} vendas
      </p>

      <div className="flex items-center gap-1.5">
        <IconButton
          size={16}
          title="Página anterior"
          disabled={!temAnterior}
          onClick={anterior}
          icon={ChevronLeft}
        />

        {paginasVisiveis[0] > 1 && (
          <span className="px-1 text-xs text-cm-text-faint">…</span>
        )}

        {paginasVisiveis.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => irPara(p)}
            className={`
              flex h-8 w-8 items-center justify-center rounded-lg
              text-sm font-medium transition-colors duration-150
              ${
                p === pagina
                  ? 'bg-cm-accent text-white'
                  : 'text-cm-text-muted hover:bg-cm-surface-hover hover:text-cm-text'
              }
            `}
          >
            {p}
          </button>
        ))}

        {paginasVisiveis[paginasVisiveis.length - 1] < totalPaginas && (
          <span className="px-1 text-xs text-cm-text-faint">…</span>
        )}

        <IconButton
          size={16}
          title="Próxima página"
          disabled={!temProxima}
          onClick={proxima}
          icon={ChevronRight}
        />
      </div>

      <select
        value={tamanhoPagina}
        onChange={(e) => alterarTamanhoPagina(Number(e.target.value))}
        className="h-8 rounded-lg border border-cm-border bg-cm-bg/60 px-2 text-xs text-cm-text outline-none focus:border-cm-accent"
      >
        {PAGE_SIZE_OPTIONS.map((size) => (
          <option key={size} value={size}>
            {size} por página
          </option>
        ))}
      </select>
    </div>
  );
}