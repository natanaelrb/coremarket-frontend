// Modal de confirmação para cancelamento de compra. Isolado em seu próprio
// componente por ser uma ação destrutiva usada tanto pela tabela quanto
// pelo painel de detalhe.
import { AlertTriangle, Loader2 } from "lucide-react";

export function CancelCompraDialog({ isOpen, isCancelling, onConfirm, onDismiss }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 animate-fade-in" onClick={onDismiss} />
      <div className="relative bg-white dark:bg-[#131736] rounded-2xl shadow-xl border border-slate-200 dark:border-white/10 w-full max-w-sm p-6 animate-fade-in-scale">
        <div className="w-11 h-11 rounded-2xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center mb-4">
          <AlertTriangle className="w-5 h-5 text-red-500" />
        </div>
        <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Cancelar esta compra?</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5">
          Esta ação não pode ser desfeita. Parcelas geradas e entradas de estoque vinculadas a esta compra também serão afetadas.
        </p>
        <div className="flex items-center justify-end gap-2 mt-5">
          <button
            onClick={onDismiss}
            disabled={isCancelling}
            className="px-3.5 py-2 rounded-lg text-xs font-medium border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors disabled:opacity-50"
          >
            Manter compra
          </button>
          <button
            onClick={onConfirm}
            disabled={isCancelling}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium bg-red-600 hover:bg-red-500 text-white transition-colors disabled:opacity-60"
          >
            {isCancelling && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
            Sim, cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
