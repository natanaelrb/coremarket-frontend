import { useState } from 'react';
import { Trash2, AlertTriangle } from 'lucide-react';
import { Button } from "../../../../shared/components/ui/Button.jsx";

/**
 * Botão para limpar a venda atual, com confirmação inline para evitar
 * remoções acidentais do carrinho.
 * @param {{ onConfirmar: () => void, disabled?: boolean }} props
 */
export function LimparVendaButton({ onConfirmar, disabled = false }) {
  const [confirmando, setConfirmando] = useState(false);

  if (confirmando) {
    return (
      <div className="flex animate-scale-in items-center gap-2 rounded-lg border border-cm-danger/30 bg-cm-danger-soft px-3 py-1.5">
        <AlertTriangle className="h-4 w-4 shrink-0 text-cm-danger" />
        <span className="text-xs text-cm-danger">Limpar todos os itens?</span>
        <button
          type="button"
          onClick={() => {
            onConfirmar();
            setConfirmando(false);
          }}
          className="text-xs font-semibold text-cm-danger underline"
        >
          Sim
        </button>
        <button
          type="button"
          onClick={() => setConfirmando(false)}
          className="text-xs text-cm-text-muted underline"
        >
          Cancelar
        </button>
      </div>
    );
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      icon={Trash2}
      disabled={disabled}
      onClick={() => setConfirmando(true)}
      className="!text-cm-danger hover:!bg-cm-danger-soft"
    >
      Limpar venda
    </Button>
  );
}

