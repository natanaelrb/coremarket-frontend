export function DescontoVendaInput({ valor, onChange, inputRef, erro }) {
  return (
    <div className="flex items-start justify-between gap-4 py-1.5">
      <div className="flex min-w-0 items-center gap-2.5">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-green-600 dark:text-green-400">
          <span className="text-lg font-semibold">%</span>
        </span>

        <div className="min-w-0">
          <label
            htmlFor="desconto-venda"
            className="block text-sm font-medium text-cm-text"
          >
            Desconto na venda
          </label>
          <p className="mt-0.5 text-xs text-cm-text-muted">
            Aplicado ao valor total
          </p>
        </div>
      </div>

      <div className="flex w-36 shrink-0 flex-col items-end">
        <div
          className={`
            flex h-10 w-full items-center gap-2 rounded-xl border bg-cm-bg px-3
            transition-all duration-200
            ${
              erro
                ? 'border-cm-danger focus-within:ring-2 focus-within:ring-cm-danger/15'
                : 'border-cm-border hover:border-green-500/40 focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-500/15'
            }
          `}
        >
          <span className="text-xs font-semibold text-cm-text-muted">R$</span>

          <input
            id="desconto-venda"
            ref={inputRef}
            value={valor}
            onChange={(e) =>
              onChange(Number(e.target.value.replace(',', '.')) || 0)
            }
            inputMode="decimal"
            aria-invalid={Boolean(erro)}
            aria-describedby={erro ? 'desconto-venda-erro' : undefined}
            className="w-full min-w-0 bg-transparent text-right text-sm font-semibold tabular-nums text-cm-text outline-none"
          />
        </div>

        {erro && (
          <span
            id="desconto-venda-erro"
            className="mt-1.5 text-right text-[11px] font-medium text-cm-danger"
          >
            {erro}
          </span>
        )}
      </div>
    </div>
  );
}
