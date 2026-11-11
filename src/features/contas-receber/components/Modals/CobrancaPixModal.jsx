import { Copy, QrCode } from "lucide-react";
import { Modal } from "../../../../shared/components/ui/Modal";
import { Button } from "../../../../shared/components/ui/Button";
import { copyText } from "../../../../shared/utils/copyText";
import { formatCurrency } from "../../../../shared/utils/formatCurrency";
import useToast from "../../../../shared/hooks/useToast";
import { buildPixPayload } from "../../utils";
import { QrCodeArt } from "./QrCodeArt";
import { useModalConta } from "./useModalConta";

export  function CobrancaPixModal({ contaId }) {
  const { conta, modals } = useModalConta(contaId);
  const toast = useToast();
  if (!conta) return null;
  const code = buildPixPayload(conta);
  const copiar = async () => {
    (await copyText(code))
      ? toast.success("Código PIX copiado")
      : toast.error("Não foi possível copiar");
  };
  return (
    <Modal
      open
      onClose={modals.close}
      icon={QrCode}
      size="sm"
      title="Cobrança PIX"
      subtitle={`#${conta.id} · ${conta.clienteNome}`}
      footer={
        <>
          <Button onClick={modals.close}>Fechar</Button>
          <Button variant="primary" icon={Copy} onClick={copiar}>
            Copiar código
          </Button>
        </>
      }
    >
      <div className="flex flex-col items-center gap-3 text-center">
        <div className="animate-pop rounded-2xl border border-line p-2">
          <QrCodeArt seed={conta.id} />
        </div>
        <p className="text-xl font-bold tabular-nums text-ink">
          {formatCurrency(conta.saldo)}
        </p>
        <p className="w-full break-all rounded-lg bg-surface-2 p-2.5 text-left text-[10px] leading-relaxed text-ink-2">
          {code}
        </p>
        <p className="text-[10px] text-ink-3">
          QR e código ilustrativos — integre ao PSP/banco na etapa de API.
        </p>
      </div>
    </Modal>
  );
}
