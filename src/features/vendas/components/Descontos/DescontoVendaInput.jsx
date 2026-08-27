/**
 * Campo numérico para o desconto aplicado à venda como um todo.
 * @param {{
 *  valor: number,
 *  onChange: (valor: number) => void,
 *  inputRef?: React.RefObject<HTMLInputElement>,
 *  erro?: string | null,
 * }} props
 */
export function DescontoVendaInput({ valor, onChange, inputRef, erro }) {
  return (
    <div className="flex items-center justify-between gap-3 py-1.5">
      <label htmlFor="desconto-venda" className="text-sm text-cm-text-muted">
        Desconto na venda
      </label>
      <div className="flex flex-col items-end">
        <div
          className={`
            flex h-9 w-32 items-center gap-1.5 rounded-lg border bg-cm-bg/60 px-2.5
            ${erro ? 'border-cm-danger' : 'border-cm-border focus-within:border-cm-accent'}
          `}
        >
          <span className="text-xs text-cm-text-faint">R$</span>
          <input
            id="desconto-venda"
            ref={inputRef}
            value={valor}
            onChange={(e) => onChange(Number(e.target.value.replace(',', '.')) || 0)}
            inputMode="decimal"
            className="w-full bg-transparent text-right text-sm text-cm-text outline-none"
          />
        </div>
        {erro && <span className="mt-1 text-[11px] text-cm-danger">{erro}</span>}
      </div>
    </div>
  );
}

