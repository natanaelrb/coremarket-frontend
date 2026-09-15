import { Banknote, QrCode, CreditCard, Wallet2, MoreHorizontal } from 'lucide-react'
import { FORMA_PAGAMENTO } from "../../../../../shared/constants/enums.js";
import { FORMA_PAGAMENTO_CONFIG } from "../../../constants/formaPagamentoConfig.js";
import { cn } from "../../../../../shared/utils/classNames.js";

const ICONS = {
  [FORMA_PAGAMENTO.DINHEIRO]: Banknote,
  [FORMA_PAGAMENTO.PIX]: QrCode,
  [FORMA_PAGAMENTO.CARTAO_CREDITO]: CreditCard,
  [FORMA_PAGAMENTO.CARTAO_DEBITO]: Wallet2,
  [FORMA_PAGAMENTO.OUTRO]: MoreHorizontal,
}

/** Grid of selectable payment-method buttons (Dinheiro, PIX, Cartão...). */
export function FormaPagamentoPicker({ value, onChange, error }) {
  return (
    <div>
      <span className="block text-xs font-medium text-slate-300 light:text-slate-600 mb-1.5">
        Forma de pagamento <span className="text-cm-red">*</span>
      </span>
      <div className="grid grid-cols-2 gap-2">
        {Object.entries(FORMA_PAGAMENTO_CONFIG).map(([key, cfg]) => {
          const Icon = ICONS[key]
          const active = value === key
          return (
            <button
              type="button"
              key={key}
              onClick={() => onChange(key)}
              className={cn(
                'flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-colors',
                active
                  ? 'border-cm-violet bg-cm-violet-dim text-cm-violet-soft'
                  : 'border-cm-border-dark light:border-cm-border-light text-slate-300 light:text-slate-600 hover:bg-white/5 light:hover:bg-black/5',
              )}
            >
              <Icon size={15} />
              {cfg.label}
            </button>
          )
        })}
      </div>
      {error && <span className="block text-[11px] text-cm-red mt-1">{error}</span>}
    </div>
  )
}
