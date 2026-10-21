import { CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';

export function EstoqueAlert({ disponivel }) {
  if (disponivel) {
    return (
      <div
        role="status"
        className="flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 p-3 transition-colors duration-200"
      >
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-100 text-[#16a34a]">
          <ShieldCheck className="h-[18px] w-[18px]" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-green-700">
            Estoque disponível
          </p>
          <p className="mt-0.5 text-xs leading-relaxed text-slate-600">
            Quantidades verificadas para esta venda.
          </p>
        </div>

        <CheckCircle2 className="h-5 w-5 shrink-0 text-[#22c55e]" />
      </div>
    );
  }

  return (
    <div
      role="alert"
      className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 p-3 transition-colors duration-200"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-600">
        <AlertTriangle className="h-[18px] w-[18px]" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-red-700">
          Estoque insuficiente
        </p>
        <p className="mt-0.5 text-xs leading-relaxed text-slate-600">
          Confira as quantidades antes de finalizar.
        </p>
      </div>
    </div>
  );
}
