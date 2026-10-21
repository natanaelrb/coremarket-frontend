import { useState } from 'react';
import { MessageSquarePlus, X } from 'lucide-react';

/**
 * Botão que expande um campo de texto para observações da venda.
 */
export function ObservacaoButton({ observacao, onChange }) {
  const [expandido, setExpandido] = useState(false);

  if (expandido || observacao) {
    return (
      <div className="flex animate-scale-in items-start gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3">
        <MessageSquarePlus className="mt-1 h-4 w-4 shrink-0 text-[#16a34a]" />

        <textarea
          autoFocus
          value={observacao}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Digite uma observação para esta venda..."
          rows={2}
          className="flex-1 resize-none bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
        />

        <button
          type="button"
          onClick={() => {
            onChange('');
            setExpandido(false);
          }}
          aria-label="Remover observação"
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-red-50 hover:text-red-600"
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
      className="inline-flex items-center gap-2 text-sm font-medium text-[#16a34a] transition-colors hover:text-[#15803d]"
    >
      <MessageSquarePlus className="h-4 w-4" />
      Adicionar observação
    </button>
  );
}
