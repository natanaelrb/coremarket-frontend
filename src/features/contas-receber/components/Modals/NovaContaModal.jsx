import { Plus } from "lucide-react";
import { Modal } from "../../../../shared/components/ui/Modal";
import { CurrencyField } from "../../../../shared/components/forms/CurrencyField";
import { DateField } from "../../../../shared/components/forms/DateField";
import { SelectField } from "../../../../shared/components/forms/SelectField";
import { TextAreaField } from "../../../../shared/components/forms/TextAreaField";
import { TextField } from "../../../../shared/components/forms/TextField";
import { useFormState } from "../../../../shared/hooks/useFormState";

import { useAsyncSubmit } from "../../../../shared/hooks/useAsyncSubmit";
import { addDays } from "../../../../shared/utils/dateMath";
import { CLIENTES } from "../../data";
import { FORMA_OPTIONS } from "../../constants";
import { validateNovaConta } from "../../utils";
import { useContasReceberContext } from "../../hooks/useContasReceberContext";
import { ModalFooter } from "./ModalFooter";

export function NovaContaModal() {
  const { hoje, modals, actions, responsavelOptions } =
    useContasReceberContext();
  const { values, errors, setField, setErrors } = useFormState({
    clienteId: "",
    valor: "",
    emissao: hoje,
    vencimento: addDays(hoje, 30),
    forma: "PIX",
    responsavel: responsavelOptions[0]?.value ?? "",
    vendaId: "",
    documento: "",
    observacao: "",
  });
  const { submit, loading } = useAsyncSubmit(async () => {
    const e = validateNovaConta(values);
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    await actions.salvarNovaConta(values);
  });
  return (
    <Modal
      open
      onClose={modals.close}
      icon={Plus}
      size="lg"
      title="Nova conta a receber"
      subtitle="Cadastre um novo recebível manualmente."
      footer={
        <ModalFooter
          onCancel={modals.close}
          onSubmit={submit}
          loading={loading}
          submitLabel="Criar conta"
        />
      }
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <SelectField
          className="sm:col-span-2"
          required
          label="Cliente"
          placeholder="Selecione o cliente..."
          value={values.clienteId}
          error={errors.clienteId}
          onChange={(e) => setField("clienteId", e.target.value)}
          options={CLIENTES.map((c) => ({
            value: String(c.id),
            label: `${c.nome} — ${c.cpf}`,
          }))}
        />
        <CurrencyField
          required
          label="Valor"
          value={values.valor}
          error={errors.valor}
          onChange={(v) => setField("valor", v)}
        />
        <SelectField
          label="Forma de pagamento"
          value={values.forma}
          onChange={(e) => setField("forma", e.target.value)}
          options={FORMA_OPTIONS}
        />
        <DateField
          required
          label="Emissão"
          value={values.emissao}
          error={errors.emissao}
          onChange={(e) => setField("emissao", e.target.value)}
        />
        <DateField
          required
          label="Vencimento"
          value={values.vencimento}
          error={errors.vencimento}
          onChange={(e) => setField("vencimento", e.target.value)}
        />
        <TextField
          label="Venda relacionada"
          placeholder="V-10500 (opcional)"
          value={values.vendaId}
          onChange={(e) => setField("vendaId", e.target.value)}
        />
        <TextField
          label="Documento"
          placeholder="NF-8300 (opcional)"
          value={values.documento}
          onChange={(e) => setField("documento", e.target.value)}
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
