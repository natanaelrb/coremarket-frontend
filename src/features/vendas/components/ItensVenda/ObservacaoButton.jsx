import { useState } from 'react';
import { MessageSquarePlus, X } from 'lucide-react';

/**
 * Botão que expande um campo de texto para observações da venda.
 * @param {{ observacao: string, onChange: (value: string) => void }} props
 */
export function ObservacaoButton({ observacao, onChange }) {
  const [expandido, setExpandido] = useState(false);

  if (expandido || observacao) {
    return (
      <div className="flex animate-scale-in items-start gap-2 rounded-lg border border-cm-border bg-cm-bg/60 p-2.5">
        <MessageSquarePlus className="mt-1 h-4 w-4 shrink-0 text-cm-text-faint" />
        <textarea
          autoFocus
          value={observacao}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Digite uma observação para esta venda..."
          rows={2}
          className="flex-1 resize-none bg-transparent text-sm text-cm-text placeholder:text-cm-text-faint outline-none"
        />
        <button
          type="button"
          onClick={() => {
            onChange('');
            setExpandido(false);
          }}
          aria-label="Remover observação"
          className="shrink-0 text-cm-text-faint hover:text-cm-danger"
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
      className="flex items-center gap-2 text-sm font-medium text-cm-accent transition-colors hover:text-cm-accent-hover"
    >
      <MessageSquarePlus className="h-4 w-4" />
      Adicionar observação
    </button>
  );
}

