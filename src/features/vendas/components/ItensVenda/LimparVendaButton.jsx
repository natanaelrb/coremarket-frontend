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
          border border-red-500/25 bg-red-500/[0.06]
          px-3.5 py-2.5
          animate-scale-in
        "
        role="group"
        aria-label="Confirmar limpeza da venda"
      >
        <AlertTriangle className="h-4 w-4 shrink-0 text-red-500" />

        <span className="text-xs font-medium text-red-600 dark:text-red-400">
          Remover todos os itens?
        </span>

        <button
          type="button"
          onClick={() => {
            onConfirmar();
            setConfirmando(false);
          }}
          className="
            rounded-lg bg-red-500 px-3 py-1.5
            text-xs font-semibold text-white
            transition-colors hover:bg-red-600
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
            inline-flex items-center gap-1 rounded-lg
            px-2 py-1.5 text-xs font-medium
            text-cm-text-muted transition-colors
            hover:bg-cm-surface-hover hover:text-cm-text
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-cm-accent
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
      className="!border-0 !bg-transparent !text-[#dc2626]
                !opacity-100 !shadow-none
                hover:!bg-red-50 hover:!text-[#b91c1c]
                disabled:!text-red-300"
    >
      Limpar venda
    </Button>
  );
}
