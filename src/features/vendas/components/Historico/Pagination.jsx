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
    <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
      <p className="text-xs text-cm-text-muted">
        Mostrando{' '}
        <span className="font-semibold tabular-nums text-cm-text">
          {inicio}–{fim}
        </span>{' '}
        de{' '}
        <span className="font-semibold tabular-nums text-cm-text">
          {totalFiltrado}
        </span>{' '}
        {totalFiltrado === 1 ? 'venda' : 'vendas'}
      </p>

      <nav
        aria-label="Paginação do histórico de vendas"
        className="flex items-center justify-center gap-1"
      >
        <IconButton
          size={16}
          title="Página anterior"
          disabled={!temAnterior}
          onClick={anterior}
          icon={ChevronLeft}
        />

        {paginasVisiveis[0] > 1 && (
          <>
            <button
              type="button"
              onClick={() => irPara(1)}
              className="flex h-8 min-w-8 items-center justify-center rounded-lg px-2 text-xs font-medium text-cm-text-muted transition-colors hover:bg-cm-surface-hover hover:text-cm-text"
              aria-label="Ir para a primeira página"
            >
              1
            </button>
            <span className="px-0.5 text-xs text-cm-text-faint" aria-hidden="true">
              …
            </span>
          </>
        )}

        {paginasVisiveis.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => irPara(p)}
            aria-label={`Página ${p}`}
            aria-current={p === pagina ? 'page' : undefined}
            className={`
              flex h-8 min-w-8 items-center justify-center rounded-lg px-2
              text-xs font-semibold tabular-nums
              transition-colors duration-200
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-green-500/50
              ${
                p === pagina
                  ? 'bg-green-600 text-white shadow-sm shadow-green-600/20'
                  : 'text-cm-text-muted hover:bg-cm-surface-hover hover:text-cm-text'
              }
            `}
          >
            {p}
          </button>
        ))}

        {paginasVisiveis[paginasVisiveis.length - 1] < totalPaginas && (
          <>
            <span className="px-0.5 text-xs text-cm-text-faint" aria-hidden="true">
              …
            </span>
            <button
              type="button"
              onClick={() => irPara(totalPaginas)}
              className="flex h-8 min-w-8 items-center justify-center rounded-lg px-2 text-xs font-medium text-cm-text-muted transition-colors hover:bg-cm-surface-hover hover:text-cm-text"
              aria-label="Ir para a última página"
            >
              {totalPaginas}
            </button>
          </>
        )}

        <IconButton
          size={16}
          title="Próxima página"
          disabled={!temProxima}
          onClick={proxima}
          icon={ChevronRight}
        />
      </nav>

      <label className="flex items-center justify-center gap-2 text-xs text-cm-text-muted sm:justify-end">
        Itens por página

        <select
          value={tamanhoPagina}
          onChange={(e) => alterarTamanhoPagina(Number(e.target.value))}
          className="h-9 rounded-xl border border-cm-border bg-cm-surface px-3 text-xs font-medium text-cm-text outline-none transition-colors hover:border-cm-text-faint focus:border-green-500 focus:ring-2 focus:ring-green-500/10"
        >
          {PAGE_SIZE_OPTIONS.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
