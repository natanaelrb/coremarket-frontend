import { Ban } from "lucide-react";
import { Modal } from "../../../../shared/components/ui/Modal";
import { SelectField } from "../../../../shared/components/forms/SelectField";
import { TextAreaField } from "../../../../shared/components/forms/TextAreaField";
import { useFormState } from "../../../../shared/hooks/useFormState";

import { useAsyncSubmit } from "../../../../shared/hooks/useAsyncSubmit";
import { MOTIVOS_CANCELAMENTO } from "../../constants";
import { ContaResumo } from "./ContaResumo";
import { ModalFooter } from "./ModalFooter";
import { useModalConta } from "./useModalConta";

export function CancelarContaModal({ contaId }) {
  const { conta, modals, actions } = useModalConta(contaId);
  const { values, setField } = useFormState({
    motivo: "ERRO_LANCAMENTO",
    observacao: "",
  });
  const { submit, loading } = useAsyncSubmit(() =>
    actions.salvarCancelamento(conta.id, values),
  );
  if (!conta) return null;
  return (
    <Modal
      open
      onClose={modals.close}
      icon={Ban}
      tone="danger"
      title="Cancelar conta"
      subtitle="O saldo restante deixará de ser cobrado."
      footer={
        <ModalFooter
          onCancel={modals.close}
          onSubmit={submit}
          loading={loading}
          variant="danger"
          submitLabel="Cancelar conta"
        />
      }
    >
      <ContaResumo conta={conta} />
      {conta.valorPago > 0 && (
        <p className="mb-3 rounded-lg border border-amber-400/40 bg-amber-400/10 p-2.5 text-[11px] text-amber-700 dark:text-amber-300">
          Esta conta já possui pagamentos registrados — avalie o estorno
          separadamente.
        </p>
      )}
      <div className="space-y-3">
        <SelectField
          label="Motivo"
          value={values.motivo}
          onChange={(e) => setField("motivo", e.target.value)}
          options={MOTIVOS_CANCELAMENTO}
        />
        <TextAreaField
          label="Observação"
          rows={2}
          value={values.observacao}
          onChange={(e) => setField("observacao", e.target.value)}
        />
      </div>
    </Modal>
  );
}
