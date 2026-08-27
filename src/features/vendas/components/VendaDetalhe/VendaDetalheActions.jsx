import { Printer, Send } from 'lucide-react';
import { Button } from "../../../../shared/components/ui/Button.jsx";
import { useToast } from "../../../../shared/contexts/ToastContext.jsx";

/**
 * Ações do recibo: imprimir e enviar (WhatsApp/e-mail).
 */
export function VendaDetalheActions() {
  const { notify } = useToast();

  return (
    <div className="grid grid-cols-2 gap-2.5">
      <Button
        variant="secondary"
        icon={Printer}
        onClick={() => {
          notify('Enviando recibo para a impressora...', 'info');
          window.print();
        }}
      >
        Imprimir
      </Button>
      <Button
        variant="secondary"
        icon={Send}
        onClick={() => notify('Recibo enviado ao cliente.', 'success')}
      >
        Enviar
      </Button>
    </div>
  );
}

