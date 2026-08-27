/**
 * Item de opção de tipo de venda (radio estilizado) com título e descrição.
 * @param {{
 *  selecionado: boolean,
 *  label: string,
 *  description: string,
 *  onSelecionar: () => void,
 * }} props
 */
export function TipoVendaOption({ selecionado, label, description, onSelecionar }) {
  return (
    <button
      type="button"
      onClick={onSelecionar}
      className={`
        flex w-full items-start gap-3 rounded-lg border px-3.5 py-3 text-left transition-colors duration-150
        ${selecionado ? 'border-cm-accent bg-cm-accent-soft' : 'border-cm-border hover:bg-cm-surface-hover'}
      `}
    >
      <span
        className={`
          mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2
          ${selecionado ? 'border-cm-accent' : 'border-cm-text-faint'}
        `}
      >
        {selecionado && <span className="h-2 w-2 rounded-full bg-cm-accent" />}
      </span>
      <span>
        <span className={`block text-sm font-medium ${selecionado ? 'text-cm-accent' : 'text-cm-text'}`}>
          {label}
        </span>
        <span className="block text-xs text-cm-text-faint">{description}</span>
      </span>
    </button>
  );
}

