import { useState } from "react";
import { MessageSquarePlus, X } from "lucide-react";

/**
 * Botão que expande um campo de texto para observações da venda.
 */
export function ObservacaoButton({ observacao, onChange }) {
  const [expandido, setExpandido] = useState(false);

  if (expandido || observacao) {
    return (
      <div className="
        flex min-w-0 flex-1 animate-scale-in items-start gap-3
        rounded-xl border border-blue-100 bg-blue-50/60 p-3
        dark:border-blue-500/20 dark:bg-blue-500/[0.06]
      ">
        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400">
          <MessageSquarePlus className="h-4 w-4" />
        </div>

        <textarea
          autoFocus
          value={observacao}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Digite uma observação para esta venda..."
          rows={2}
          className="
            min-w-0 flex-1 resize-none bg-transparent py-1
            text-sm text-cm-text outline-none
            placeholder:text-cm-text-faint
          "
        />

        <button
          type="button"
          onClick={() => {
            onChange("");
            setExpandido(false);
          }}
          aria-label="Remover observação"
          className="
            flex h-8 w-8 shrink-0 items-center justify-center
            rounded-lg text-cm-text-faint transition-colors
            hover:bg-red-50 hover:text-red-600
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-blue-500
            dark:hover:bg-red-500/10 dark:hover:text-red-400
          "
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setExpandido(true)}
      className="
        inline-flex items-center gap-2 rounded-lg
        border border-transparent px-3 py-2
        text-sm font-semibold text-blue-700
        transition-all hover:border-blue-100 hover:bg-blue-50
        hover:text-blue-800
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-blue-500
        dark:text-blue-400 dark:hover:border-blue-500/20
        dark:hover:bg-blue-500/10 dark:hover:text-blue-300
      "
    >
      <MessageSquarePlus className="h-4 w-4" />
      Adicionar observação
    </button>
  );
}
