import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Modal } from "../../../../shared/components/ui/Modal";
import { Button } from "../../../../shared/components/ui/Button";
import { TextAreaField } from "../../../../shared/components/forms/TextAreaField";
import { onlyDigits } from "../../../../shared/utils/masks";
import useToast from "../../../../shared/hooks/useToast";
import { buildCobrancaMessage } from "../../utils";
import { ContaResumo } from "./ContaResumo";
import { useModalConta } from "./useModalConta";

export function CobrancaWhatsAppModal({ contaId }) {
  const { conta, modals } = useModalConta(contaId);
  const toast = useToast();
  const [msg, setMsg] = useState(() =>
    conta ? buildCobrancaMessage(conta) : "",
  );
  if (!conta) return null;
  const abrir = () => {
    window.open(
      `https://wa.me/55${onlyDigits(conta.telefone)}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener",
    );
    toast.success(
      "Cobrança preparada",
      `Mensagem aberta no WhatsApp para ${conta.clienteNome}.`,
    );
    modals.close();
  };
  return (
    <Modal
      open
      onClose={modals.close}
      icon={MessageCircle}
      title="Enviar cobrança"
      subtitle={`WhatsApp · ${conta.telefone}`}
      footer={
        <>
          <Button onClick={modals.close}>Cancelar</Button>
          <Button variant="success" icon={MessageCircle} onClick={abrir}>
            Abrir no WhatsApp
          </Button>
        </>
      }
    >
      <ContaResumo conta={conta} />
      <TextAreaField
        label="Mensagem"
        rows={5}
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />
    </Modal>
  );
}
