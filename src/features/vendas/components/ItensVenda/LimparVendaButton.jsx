import { useState } from "react";
import { Trash2, AlertTriangle, X } from "lucide-react";
import { Button } from "../../../../shared/components/ui/Button.jsx";

export function LimparVendaButton({ onConfirmar, disabled = false }) {
  const [confirmando, setConfirmando] = useState(false);

  if (confirmando) {
    return (
      <div
        className="
          flex flex-wrap items-center gap-2.5 rounded-xl
          border border-red-200 bg-red-50/80
          px-3.5 py-2.5
          animate-scale-in
          dark:border-red-500/20 dark:bg-red-500/[0.07]
        "
        role="group"
        aria-label="Confirmar limpeza da venda"
      >
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-600 dark:bg-red-500/15 dark:text-red-400">
          <AlertTriangle className="h-4 w-4" />
        </div>

        <span className="text-xs font-semibold text-red-700 dark:text-red-400">
          Remover todos os itens?
        </span>

        <button
          type="button"
          onClick={() => {
            onConfirmar();
            setConfirmando(false);
          }}
          className="
            rounded-lg bg-red-600 px-3.5 py-2
            text-xs font-semibold text-white shadow-sm
            transition-all hover:bg-red-700
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-red-500 focus-visible:ring-offset-2
          "
        >
          Confirmar
        </button>

        <button
          type="button"
          onClick={() => setConfirmando(false)}
          className="
            inline-flex items-center gap-1.5 rounded-lg
            border border-cm-border bg-cm-surface
            px-3 py-2 text-xs font-semibold
            text-cm-text-muted transition-colors
            hover:bg-cm-surface-hover hover:text-cm-text
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-blue-500
          "
        >
          <X className="h-3.5 w-3.5" />
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
      className="
        !border !border-transparent !bg-transparent
        !text-red-600 !opacity-100 !shadow-none
        hover:!border-red-100 hover:!bg-red-50
        hover:!text-red-700
        disabled:!cursor-not-allowed disabled:!text-red-300
        dark:!text-red-400 dark:hover:!border-red-500/20
        dark:hover:!bg-red-500/10
      "
    >
      Limpar venda
    </Button>
  );
}
