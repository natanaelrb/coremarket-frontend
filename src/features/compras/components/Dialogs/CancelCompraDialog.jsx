import { AlertTriangle, Loader2, X } from "lucide-react";

export function CancelCompraDialog({
  isOpen,
  isCancelling,
  onConfirm,
  onDismiss,
}) {
  if (!isOpen) return null;

  const handleDismiss = () => {
    if (!isCancelling) onDismiss?.();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="presentation"
      onKeyDown={(event) => {
        if (event.key === "Escape") handleDismiss();
      }}
    >
      {/* Fundo */}
      <button
        type="button"
        aria-label="Fechar confirmação"
        onClick={handleDismiss}
        disabled={isCancelling}
        className="
          absolute inset-0 cursor-default bg-slate-950/45
          backdrop-blur-[3px] animate-fade-in
          disabled:cursor-wait
        "
      />

      {/* Modal */}
      <section
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="cancel-compra-title"
        aria-describedby="cancel-compra-description"
        className="
          relative z-10 w-full max-w-md overflow-hidden
          rounded-2xl border border-slate-200 bg-white
          shadow-2xl shadow-slate-950/15
          animate-fade-in-scale
          dark:border-slate-700/70 dark:bg-[#151b28]
          dark:shadow-black/40
        "
      >
        {/* Indicador superior */}
        <div className="h-1 w-full bg-red-500" />

        <div className="p-5 sm:p-6">
          {/* Cabeçalho */}
          <div className="flex items-start gap-4">
            <div
              className="
                flex h-12 w-12 shrink-0 items-center justify-center
                rounded-2xl border border-red-100 bg-red-50
                dark:border-red-400/15 dark:bg-red-400/10
              "
            >
              <AlertTriangle
                size={23}
                className="text-red-600 dark:text-red-400"
              />
            </div>

            <div className="min-w-0 flex-1 pt-0.5">
              <h2
                id="cancel-compra-title"
                className="text-base font-bold text-slate-900 dark:text-slate-100"
              >
                Cancelar esta compra?
              </h2>

              <p className="mt-1.5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                Esta ação é irreversível e pode afetar outros registros do
                sistema.
              </p>
            </div>

            <button
              type="button"
              onClick={handleDismiss}
              disabled={isCancelling}
              aria-label="Fechar modal"
              className="
                flex h-8 w-8 shrink-0 items-center justify-center
                rounded-lg text-slate-400 transition-colors
                hover:bg-slate-100 hover:text-slate-700
                disabled:cursor-not-allowed disabled:opacity-40
                dark:hover:bg-slate-800 dark:hover:text-slate-200
              "
            >
              <X size={17} />
            </button>
          </div>

          {/* Aviso */}
          <div
            id="cancel-compra-description"
            className="
              mt-5 rounded-xl border border-red-100 bg-red-50/70
              p-3.5 dark:border-red-400/15 dark:bg-red-400/5
            "
          >
            <p className="text-xs leading-relaxed text-red-800 dark:text-red-300">
              As parcelas geradas e as movimentações de estoque vinculadas
              a esta compra também poderão ser afetadas. Verifique os
              registros relacionados antes de continuar.
            </p>
          </div>

          {/* Ações */}
          <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={handleDismiss}
              disabled={isCancelling}
              className="
                inline-flex min-h-10 items-center justify-center
                rounded-xl border border-slate-200 bg-white px-4 py-2
                text-sm font-semibold text-slate-700 transition-colors
                hover:bg-slate-50
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-emerald-500
                disabled:cursor-not-allowed disabled:opacity-50
                dark:border-slate-700 dark:bg-slate-800/50
                dark:text-slate-200 dark:hover:bg-slate-800
              "
            >
              Manter compra
            </button>

            <button
              type="button"
              onClick={onConfirm}
              disabled={isCancelling}
              className="
                inline-flex min-h-10 items-center justify-center gap-2
                rounded-xl bg-red-600 px-4 py-2
                text-sm font-semibold text-white shadow-sm
                transition-colors hover:bg-red-700
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-red-500 focus-visible:ring-offset-2
                disabled:cursor-not-allowed disabled:opacity-60
                dark:focus-visible:ring-offset-[#151b28]
              "
            >
              {isCancelling ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Cancelando...
                </>
              ) : (
                <>
                  <AlertTriangle size={16} />
                  Sim, cancelar compra
                </>
              )}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}