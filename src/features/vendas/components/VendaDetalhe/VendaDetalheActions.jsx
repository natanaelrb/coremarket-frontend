import { Printer, Send, Sparkles } from 'lucide-react';
import { Button } from '../../../../shared/components/ui/Button.jsx';
import { useToast } from '../../../../shared/contexts/ToastContext.jsx';

/**
 * Ações do recibo: imprimir e enviar (WhatsApp/e-mail).
 */
export function VendaDetalheActions() {
  const { notify } = useToast();

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-200/70 text-slate-600">
          <Sparkles className="h-4 w-4" />
        </div>

        <div>
          <p className="text-sm font-bold text-slate-800">
            Ações do comprovante
          </p>
          <p className="text-xs text-slate-500">
            Imprima ou compartilhe o registro da venda
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Button
          variant="secondary"
          icon={Printer}
          onClick={() => {
            notify('Preparando recibo para impressão...', 'info');
            window.print();
          }}
          className="!h-11 !justify-center !rounded-xl !border-slate-200 !bg-white !text-slate-700 !shadow-sm transition-all duration-200 hover:!-translate-y-0.5 hover:!border-sky-300 hover:!bg-sky-50 hover:!text-sky-700 hover:!shadow-md"
        >
          Imprimir recibo
        </Button>

        <Button
          variant="secondary"
          icon={Send}
          onClick={() => {
            notify(
              'O envio de recibos ainda não está disponível.',
              'info',
            );
          }}
          className="!h-11 !justify-center !rounded-xl !border-emerald-600 !bg-gradient-to-r !from-emerald-600 !to-teal-600 !text-white !shadow-sm !shadow-emerald-600/20 transition-all duration-200 hover:!-translate-y-0.5 hover:!from-emerald-700 hover:!to-teal-700 hover:!shadow-md"
        >
          Enviar recibo
        </Button>
      </div>
    </div>
  );
}
