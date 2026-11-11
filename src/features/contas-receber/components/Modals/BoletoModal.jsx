import { Barcode, Copy, Printer } from "lucide-react";
import { Modal } from "../../../../shared/components/ui/Modal";
import { Button } from "../../../../shared/components/ui/Button";
import { copyText } from "../../../../shared/utils/copyText";
import { formatCurrency } from "../../../../shared/utils/formatCurrency";
import { formatDateBR } from "../../../../shared/utils/formatDate";
import useToast from "../../../../shared/hooks/useToast";
import { buildBoletoLine } from "../../utils";
import { ContaResumo } from "./ContaResumo";
import { useModalConta } from "./useModalConta";

export function BoletoModal({ contaId }) {
  const { conta, modals, exportacao } = useModalConta(contaId);
  const toast = useToast();
  if (!conta) return null;
  const line = buildBoletoLine(conta);
  const copiar = async () => {
    (await copyText(line))
      ? toast.success("Linha digitável copiada")
      : toast.error("Não foi possível copiar");
  };
  return (
    <Modal
      open
      onClose={modals.close}
      icon={Barcode}
      title="Boleto gerado"
      subtitle="Documento de demonstração."
      footer={
        <>
          <Button
            icon={Printer}
            onClick={() => exportacao.imprimirConta(conta)}
          >
            Imprimir conta
          </Button>
          <Button variant="primary" icon={Copy} onClick={copiar}>
            Copiar linha digitável
          </Button>
        </>
      }
    >
      <ContaResumo conta={conta} />
      <div className="rounded-xl border border-dashed border-line p-3 animate-pop">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-ink-3">
          Linha digitável
        </p>
        <p className="mt-1 break-all font-mono text-[13px] font-semibold text-ink">
          {line}
        </p>
        <div className="mt-3 flex items-center justify-between text-[11px] text-ink-2">
          <span>
            Vencimento:{" "}
            <b className="text-ink">{formatDateBR(conta.vencimento)}</b>
          </span>
          <span>
            Valor: <b className="text-ink">{formatCurrency(conta.saldo)}</b>
          </span>
        </div>
      </div>
    </Modal>
  );
}
