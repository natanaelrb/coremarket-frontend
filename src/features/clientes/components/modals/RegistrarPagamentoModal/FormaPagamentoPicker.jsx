import {
  Banknote,
  QrCode,
  CreditCard,
  Wallet2,
  MoreHorizontal,
} from "lucide-react";

import { FORMA_PAGAMENTO } from "../../../../../shared/constants/enums.js";
import { FORMA_PAGAMENTO_CONFIG } from "../../../constants/formaPagamentoConfig.js";
import { cn } from "../../../../../shared/utils/classNames.js";

const ICONS = {
  [FORMA_PAGAMENTO.DINHEIRO]: Banknote,
  [FORMA_PAGAMENTO.PIX]: QrCode,
  [FORMA_PAGAMENTO.CARTAO_CREDITO]: CreditCard,
  [FORMA_PAGAMENTO.CARTAO_DEBITO]: Wallet2,
  [FORMA_PAGAMENTO.OUTRO]: MoreHorizontal,
};

/** Grid of selectable payment-method buttons (Dinheiro, PIX, Cartão...). */
export function FormaPagamentoPicker({
  value,
  onChange,
  error,
}) {
  return (
    <div>
      <span className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-slate-300">
        Forma de pagamento{" "}
        <span className="text-[#dc2626]">*</span>
      </span>

      <div className="grid grid-cols-2 gap-2">
        {Object.entries(FORMA_PAGAMENTO_CONFIG).map(([key, cfg]) => {
          const Icon = ICONS[key];
          const active = value === key;

          return (
            <button
              type="button"
              key={key}
              onClick={() => onChange(key)}
              className={cn(
                `
                  flex items-center gap-2
                  rounded-lg
                  border
                  px-3 py-2
                  text-sm
                  font-medium
                  transition-all duration-150
                `,
                active
                  ? `
                      border-[#22c55e]
                      bg-[#dcfce7]
                      text-[#15803d]
                      shadow-sm
                    `
                  : `
                      border-slate-200
                      bg-white
                      text-slate-600
                      hover:border-[#86efac]
                      hover:bg-[#f0fdf4]
                      hover:text-[#15803d]
                      dark:border-white/10
                      dark:bg-zinc-900
                      dark:text-slate-300
                      dark:hover:border-emerald-700
                      dark:hover:bg-emerald-950/30
                      dark:hover:text-emerald-400
                    `,
              )}
            >
              <Icon size={15} />
              {cfg.label}
            </button>
          );
        })}
      </div>

      {error && (
        <span className="mt-1 block text-[11px] text-[#dc2626]">
          {error}
        </span>
      )}
    </div>
  );
}