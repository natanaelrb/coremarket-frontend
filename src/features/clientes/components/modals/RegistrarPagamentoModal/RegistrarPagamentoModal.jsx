import { Modal } from "../../../../../shared/components/ui/Modal.jsx";
import { Button } from "../../../../../shared/components/ui/Button.jsx";
import { FormField, TextInput, TextArea } from "../../../../../shared/components/forms/FormField.jsx";
import { ClienteResumoPagamento } from './ClienteResumoPagamento.jsx'
import { ContaSelect } from './ContaSelect.jsx'
import { FormaPagamentoPicker } from './FormaPagamentoPicker.jsx'
import { useRegistrarPagamentoForm } from '../../../hooks/useRegistrarPagamentoForm.js'

/**
 * "Registrar pagamento" modal. `contasEmAberto` is the client's open
 * receivable list (see useContasReceber in the detail feature).
 */
export function RegistrarPagamentoModal({
  open,
  onClose,
  cliente,
  contasEmAberto,
  contaSelecionada,
  onConfirmado,
}) {
  const { form, setField, errors, submitting, confirmar } = useRegistrarPagamentoForm(
    cliente,
    contasEmAberto,
    contaSelecionada,
    (payload) => {
      onConfirmado(payload)
      onClose()
    },
  )

  if (!cliente) return null

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Registrar pagamento"
      size="sm"
      footer={
        <>
          <Button variant="secondary" onClick={onClose}>
            Cancelar
          </Button>
          <Button variant="success" onClick={confirmar} loading={submitting}>
            Confirmar pagamento
          </Button>
        </>
      }
    >
      <ClienteResumoPagamento cliente={cliente} />

      <div className="space-y-4">
        <ContaSelect
          contas={contasEmAberto}
          value={form.contaId}
          onChange={(v) => setField('contaId', v)}
          error={errors.contaId}
        />

        <FormField label="Valor do pagamento" required error={errors.valor}>
          <TextInput
            type="number"
            value={form.valor}
            onChange={(e) => setField('valor', e.target.value)}
            placeholder="R$ 100,00"
            error={errors.valor}
          />
        </FormField>

        <FormaPagamentoPicker
          value={form.formaPagamento}
          onChange={(v) => setField('formaPagamento', v)}
          error={errors.formaPagamento}
        />

        <FormField label="Data" required error={errors.data}>
          <TextInput type="date" value={form.data} onChange={(e) => setField('data', e.target.value)} error={errors.data} />
        </FormField>

        <FormField label="Observação (opcional)">
          <TextArea
            rows={2}
            value={form.observacao}
            onChange={(e) => setField('observacao', e.target.value)}
            placeholder="Ex: Pagamento parcial da conta."
          />
        </FormField>
      </div>
    </Modal>
  )
}
