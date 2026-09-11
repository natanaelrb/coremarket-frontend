import { Modal } from '../../../../shared/components/ui/Modal.jsx';
import { Button } from '../../../../shared/components/ui/Button.jsx';
import { Input } from '../../../../shared/components/ui/Input.jsx';
import { Select } from '../../../../shared/components/ui/Select.jsx';
import { FORMA_OPTIONS } from '../../constants/index.js';

/**
 * "Registrar pagamento" form modal — mirrors RegistrarRecebimentoModal
 * with fornecedor-oriented copy.
 * @param {{ modal: ReturnType<typeof import('../../hooks/useRegistrarPagamento.js').useRegistrarPagamento> }} props
 */
export function RegistrarPagamentoModal({ modal }) {
  const { isOpen, close, form, updateField, submit, isSubmitting } = modal;

  return (
    <Modal
      open={isOpen}
      onClose={close}
      title="Registrar pagamento"
      subtitle="Lance um novo pagamento avulso no fluxo de caixa."
      footer={
        <>
          <Button variant="outline" onClick={close}>
            Cancelar
          </Button>
          <Button onClick={submit} disabled={isSubmitting || !form.pessoa || !form.valor}>
            {isSubmitting ? 'Salvando...' : 'Registrar pagamento'}
          </Button>
        </>
      }
    >
      <div className="space-y-4">
        <Field label="Fornecedor / Beneficiário">
          <Input
            placeholder="Nome do fornecedor"
            value={form.pessoa}
            onChange={(e) => updateField('pessoa', e.target.value)}
          />
        </Field>
        <Field label="Referência (opcional)">
          <Input
            placeholder="Ex: Compra #582"
            value={form.origemReferencia}
            onChange={(e) => updateField('origemReferencia', e.target.value)}
          />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Forma de pagamento">
            <Select
              options={FORMA_OPTIONS.filter((o) => o.value !== 'TODOS')}
              value={form.forma}
              onChange={(e) => updateField('forma', e.target.value)}
            />
          </Field>
          <Field label="Valor">
            <Input
              type="number"
              min={0}
              step="0.01"
              placeholder="R$ 0,00"
              value={form.valor}
              onChange={(e) => updateField('valor', e.target.value)}
            />
          </Field>
        </div>
        <Field label="Data de vencimento">
          <Input type="date" value={form.dataVencimento} onChange={(e) => updateField('dataVencimento', e.target.value)} />
        </Field>
      </div>
    </Modal>
  );
}

function Field({ label, children }) {
  return (
    <label className="block text-xs font-medium text-slate-500 dark:text-slate-400">
      {label}
      <div className="mt-1">{children}</div>
    </label>
  );
}
