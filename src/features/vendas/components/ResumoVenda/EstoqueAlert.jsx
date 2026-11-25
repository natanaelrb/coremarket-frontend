import { CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';

export function EstoqueAlert({ disponivel }) {
  if (disponivel) {
    return (
      <div
        role="status"
        className="
          flex items-center gap-3 rounded-xl
          border border-green-200 bg-green-50 p-3
          transition-colors duration-200
          dark:border-green-900/60 dark:bg-green-950/30
        "
      >
        <div className="
          flex h-9 w-9 shrink-0 items-center justify-center
          rounded-lg bg-green-100 text-green-700
          dark:bg-green-900/50 dark:text-green-400
        ">
          <ShieldCheck className="h-[18px] w-[18px]" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-green-700 dark:text-green-400">
            Estoque disponível
          </p>
          <p className="mt-0.5 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
            Quantidades verificadas para esta venda.
          </p>
        </div>

        <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600 dark:text-green-400" />
      </div>
    );
  }

  return (
    <div
      role="alert"
      className="
        flex items-center gap-3 rounded-xl
        border border-red-200 bg-red-50 p-3
        transition-colors duration-200
        dark:border-red-900/60 dark:bg-red-950/30
      "
    >
      <div className="
        flex h-9 w-9 shrink-0 items-center justify-center
        rounded-lg bg-red-100 text-red-600
        dark:bg-red-900/50 dark:text-red-400
      ">
        <AlertTriangle className="h-[18px] w-[18px]" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-red-700 dark:text-red-400">
          Estoque insuficiente
        </p>
        <p className="mt-0.5 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
          Confira as quantidades antes de finalizar.
        </p>
      </div>
    </div>
  );
}
