import { Pencil } from "lucide-react";
import { Modal } from "../../../../shared/components/ui/Modal";
import { CurrencyField } from "../../../../shared/components/forms/CurrencyField";
import { DateField } from "../../../../shared/components/forms/DateField";
import { SelectField } from "../../../../shared/components/forms/SelectField";
import { TextAreaField } from "../../../../shared/components/forms/TextAreaField";
import { useFormState } from "../../../../shared/hooks/useFormState";

import { useAsyncSubmit } from "../../../../shared/hooks/useAsyncSubmit";
import { moneyToInput } from "../../../../shared/utils/masks";
import { FORMA_OPTIONS } from "../../constants";
import { validateEdicao } from "../../utils";
import { ContaResumo } from "./ContaResumo";
import { ModalFooter } from "./ModalFooter";
import { useModalConta } from "./useModalConta";

export function EditarContaModal({ contaId }) {
  const { conta, modals, actions, responsavelOptions } = useModalConta(contaId);
  const { values, errors, setField, setErrors } = useFormState({
    vencimento: conta?.vencimento ?? "",
    forma: conta?.formaPagamento ?? "PIX",
    responsavel: conta?.responsavel ?? "",
    valor: conta ? moneyToInput(conta.valorOriginal) : "",
    observacao: conta?.observacao ?? "",
  });
  const { submit, loading } = useAsyncSubmit(async () => {
    const e = validateEdicao(values, conta);
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    await actions.salvarEdicao(conta.id, values);
  });
  if (!conta) return null;
  return (
    <Modal
      open
      onClose={modals.close}
      icon={Pencil}
      title="Editar conta"
      subtitle="Ajuste vencimento, forma de pagamento e responsável."
      footer={
        <ModalFooter
          onCancel={modals.close}
          onSubmit={submit}
          loading={loading}
          submitLabel="Salvar alterações"
        />
      }
    >
      <ContaResumo conta={conta} />
      <div className="grid gap-3 sm:grid-cols-2">
        <DateField
          required
          label="Vencimento"
          value={values.vencimento}
          error={errors.vencimento}
          onChange={(e) => setField("vencimento", e.target.value)}
        />
        <CurrencyField
          label="Valor original"
          value={values.valor}
          error={errors.valor}
          onChange={(v) => setField("valor", v)}
          disabled={conta.pagamentos.length > 0}
          hint={
            conta.pagamentos.length
              ? "Bloqueado: já existem pagamentos."
              : undefined
          }
        />
        <SelectField
          label="Forma de pagamento"
          value={values.forma}
          onChange={(e) => setField("forma", e.target.value)}
          options={FORMA_OPTIONS}
        />
        <SelectField
          label="Responsável"
          value={values.responsavel}
          onChange={(e) => setField("responsavel", e.target.value)}
          options={responsavelOptions}
        />
        <TextAreaField
          className="sm:col-span-2"
          label="Observação"
          rows={2}
          value={values.observacao}
          onChange={(e) => setField("observacao", e.target.value)}
        />
      </div>
    </Modal>
  );
}
