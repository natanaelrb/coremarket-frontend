import { Handshake } from "lucide-react";
import { Modal } from "../../../../shared/components/ui/Modal";
import { CurrencyField } from "../../../../shared/components/forms/CurrencyField";
import { DateField } from "../../../../shared/components/forms/DateField";
import { TextAreaField } from "../../../../shared/components/forms/TextAreaField";
import { useFormState } from "../../../../shared/hooks/useFormState";

import { useAsyncSubmit } from "../../../../shared/hooks/useAsyncSubmit";
import { addDays } from "../../../../shared/utils/dateMath";
import { formatCurrency } from "../../../../shared/utils/formatCurrency";
import { parseMoney } from "../../../../shared/utils/masks";
import { validateNegociacao } from "../../utils";
import { ContaResumo } from "./ContaResumo";
import { ModalFooter } from "./ModalFooter";
import { useModalConta } from "./useModalConta";

export function NegociarDividaModal({ contaId }) {
  const { conta, hoje, modals, actions } = useModalConta(contaId);
  const { values, errors, setField, setErrors } = useFormState({
    novoVencimento: addDays(hoje, 15),
    desconto: "",
    observacao: "",
  });
  const { submit, loading } = useAsyncSubmit(async () => {
    const e = validateNegociacao(values, conta, hoje);
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    await actions.salvarNegociacao(conta.id, values);
  });
  if (!conta) return null;
  const novoSaldo = Math.max(0, conta.saldo - parseMoney(values.desconto));
  return (
    <Modal
      open
      onClose={modals.close}
      icon={Handshake}
      title="Negociar dívida"
      subtitle="Defina um novo prazo e, se quiser, um desconto."
      footer={
        <ModalFooter
          onCancel={modals.close}
          onSubmit={submit}
          loading={loading}
          submitLabel="Confirmar acordo"
        />
      }
    >
      <ContaResumo conta={conta} />
      <div className="grid gap-3 sm:grid-cols-2">
        <DateField
          required
          label="Novo vencimento"
          value={values.novoVencimento}
          error={errors.novoVencimento}
          onChange={(e) => setField("novoVencimento", e.target.value)}
        />
        <CurrencyField
          label="Desconto concedido"
          value={values.desconto}
          error={errors.desconto}
          onChange={(v) => setField("desconto", v)}
        />
        <TextAreaField
          className="sm:col-span-2"
          label="Condições do acordo"
          rows={2}
          value={values.observacao}
          onChange={(e) => setField("observacao", e.target.value)}
        />
      </div>
      <p className="mt-3 text-right text-xs text-ink-2">
        Novo saldo:{" "}
        <b className="tabular-nums text-ink">{formatCurrency(novoSaldo)}</b>
      </p>
    </Modal>
  );
}
