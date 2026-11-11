import { CalendarCheck } from "lucide-react";
import { Modal } from "../../../../shared/components/ui/Modal";
import { DateField } from "../../../../shared/components/forms/DateField";
import { TextAreaField } from "../../../../shared/components/forms/TextAreaField";
import { useFormState } from "../../../../shared/hooks/useFormState";

import { useAsyncSubmit } from "../../../../shared/hooks/useAsyncSubmit";
import { addDays } from "../../../../shared/utils/dateMath";
import { validatePromessa } from "../../utils";
import { ContaResumo } from "./ContaResumo";
import { ModalFooter } from "./ModalFooter";
import { useModalConta } from "./useModalConta";

export function PromessaModal({ contaId }) {
  const { conta, hoje, modals, actions } = useModalConta(contaId);
  const { values, errors, setField, setErrors } = useFormState({
    data: conta?.promessa?.data ?? addDays(hoje, 3),
    observacao: conta?.promessa?.observacao ?? "",
  });
  const { submit, loading } = useAsyncSubmit(async () => {
    const e = validatePromessa(values, hoje);
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    await actions.salvarPromessa(conta.id, values);
  });
  if (!conta) return null;
  return (
    <Modal
      open
      onClose={modals.close}
      icon={CalendarCheck}
      title="Promessa de pagamento"
      subtitle="Registre a data em que o cliente se comprometeu a pagar."
      footer={
        <ModalFooter
          onCancel={modals.close}
          onSubmit={submit}
          loading={loading}
          submitLabel="Registrar promessa"
        />
      }
    >
      <ContaResumo conta={conta} />
      <div className="space-y-3">
        <DateField
          required
          label="Data prometida"
          value={values.data}
          error={errors.data}
          onChange={(e) => setField("data", e.target.value)}
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
