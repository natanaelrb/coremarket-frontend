import { useMemo } from "react";
import { CircleDollarSign } from "lucide-react";
import { Modal } from "../../../../shared/components/ui/Modal";
import { Button } from "../../../../shared/components/ui/Button";
import { CurrencyField } from "../../../../shared/components/forms/CurrencyField";
import { DateField } from "../../../../shared/components/forms/DateField";
import { SelectField } from "../../../../shared/components/forms/SelectField";
import { TextAreaField } from "../../../../shared/components/forms/TextAreaField";
import { useFormState } from "../../../../shared/hooks/useFormState";

import { useAsyncSubmit } from "../../../../shared/hooks/useAsyncSubmit";
import { formatCurrency } from "../../../../shared/utils/formatCurrency";
import { moneyToInput, parseMoney } from "../../../../shared/utils/masks";
import { FORMA_OPTIONS } from "../../constants";
import { validateRecebimento } from "../../utils";
import { useContasReceberContext } from "../../hooks/useContasReceberContext";
import { ModalFooter } from "./ModalFooter";

export function RegistrarRecebimentoModal({ contaId }) {
  const { contas, hoje, modals, actions, responsavelOptions } =
    useContasReceberContext();
  const abertas = useMemo(() => contas.filter((c) => c.aberto), [contas]);
  const inicial = abertas.find((c) => c.id === contaId);
  const { values, errors, setField, setValues, setErrors } = useFormState({
    contaId: inicial?.id ?? "",
    valor: inicial ? moneyToInput(inicial.saldo) : "",
    forma: inicial?.formaPagamento ?? "PIX",
    data: hoje,
    responsavel: inicial?.responsavel ?? responsavelOptions[0]?.value ?? "",
    observacao: "",
  });
  const conta = abertas.find((c) => c.id === values.contaId);
  const valor = parseMoney(values.valor);

  const escolherConta = (id) => {
    const c = abertas.find((x) => x.id === id);
    setValues((v) => ({
      ...v,
      contaId: id,
      valor: c ? moneyToInput(c.saldo) : "",
      forma: c?.formaPagamento ?? v.forma,
    }));
    setErrors({});
  };
  const { submit, loading } = useAsyncSubmit(async () => {
    const e = validateRecebimento(values, conta);
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    await actions.salvarRecebimento(conta.id, {
      ...values,
      valorNumero: valor,
    });
  });

  return (
    <Modal
      open
      onClose={modals.close}
      icon={CircleDollarSign}
      title="Registrar recebimento"
      subtitle="Lance um pagamento total ou parcial."
      footer={
        <ModalFooter
          onCancel={modals.close}
          onSubmit={submit}
          loading={loading}
          submitLabel="Registrar recebimento"
        />
      }
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <SelectField
          className="sm:col-span-2"
          required
          label="Conta em aberto"
          value={values.contaId}
          error={errors.contaId}
          placeholder="Selecione..."
          onChange={(e) => escolherConta(e.target.value)}
          options={abertas.map((c) => ({
            value: c.id,
            label: `#${c.id} — ${c.clienteNome} — saldo ${formatCurrency(c.saldo)}`,
          }))}
        />
        <div>
          <CurrencyField
            required
            label="Valor recebido"
            value={values.valor}
            error={errors.valor}
            onChange={(v) => setField("valor", v)}
          />
          {conta && (
            <div className="mt-1.5 flex gap-1.5">
              <Button
                size="sm"
                variant="soft"
                onClick={() => setField("valor", moneyToInput(conta.saldo))}
              >
                Total
              </Button>
              <Button
                size="sm"
                variant="soft"
                onClick={() => setField("valor", moneyToInput(conta.saldo / 2))}
              >
                50%
              </Button>
            </div>
          )}
        </div>
        <DateField
          required
          label="Data do recebimento"
          value={values.data}
          error={errors.data}
          onChange={(e) => setField("data", e.target.value)}
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
      {conta && (
        <div className="mt-4 grid grid-cols-3 gap-2 rounded-xl border border-line bg-surface-2/70 p-3 text-center text-[11px] animate-fade-up">
          <div>
            <p className="text-ink-3">Saldo atual</p>
            <p className="font-bold tabular-nums text-ink">
              {formatCurrency(conta.saldo)}
            </p>
          </div>
          <div>
            <p className="text-ink-3">Recebendo</p>
            <p className="font-bold tabular-nums text-emerald-500">
              {formatCurrency(valor)}
            </p>
          </div>
          <div>
            <p className="text-ink-3">Saldo após</p>
            <p className="font-bold tabular-nums text-ink">
              {formatCurrency(Math.max(0, conta.saldo - valor))}
            </p>
          </div>
        </div>
      )}
    </Modal>
  );
}
