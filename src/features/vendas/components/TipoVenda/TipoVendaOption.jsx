export function TipoVendaOption({
  selecionado,
  label,
  description,
  onSelecionar,
}) {
  return (
    <button
      type="button"
      onClick={onSelecionar}
      aria-pressed={selecionado}
      className={`
        group flex w-full items-start gap-4 rounded-xl border
        px-4 py-4 text-left
        transition-all duration-200
        hover:-translate-y-0.5
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-blue-500/50
        ${
          selecionado
            ? "border-blue-500/50 bg-blue-500/[0.08] shadow-sm shadow-blue-500/5"
            : "border-cm-border bg-transparent hover:border-blue-500/30 hover:bg-cm-surface-hover"
        }
      `}
    >
      <span
        className={`
          mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center
          rounded-full border-2 transition-colors duration-200
          ${
            selecionado
              ? "border-blue-500"
              : "border-cm-text-faint group-hover:border-blue-500/60"
          }
        `}
      >
        {selecionado && (
          <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
        )}
      </span>

      <span className="min-w-0 flex-1">
        <span
          className={`
            block text-sm font-semibold transition-colors
            ${
              selecionado
                ? "text-blue-700 dark:text-blue-400"
                : "text-cm-text"
            }
          `}
        >
          {label}
        </span>

        <span className="mt-1 block text-xs leading-relaxed text-cm-text-faint">
          {description}
        </span>
      </span>

      {selecionado && (
        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
      )}
    </button>
  );
}
