import { Modal } from "../../../../../shared/components/ui/Modal.jsx";
import { Button } from "../../../../../shared/components/ui/Button.jsx";
import { DadosPessoaisSection } from './DadosPessoaisSection.jsx'
import { ContatoSection } from './ContatoSection.jsx'
import { EnderecoSection } from './EnderecoSection.jsx'
import { InformacoesComerciaisSection } from './InformacoesComerciaisSection.jsx'
import { useNovoClienteForm } from '../../../hooks/useNovoClienteForm.js'

/**
 * "Novo cliente" / edição modal. All form state lives in useNovoClienteForm;
 * this component only lays out the sections and wires the submit button.
 */
export function NovoClienteModal({ open, onClose, clienteParaEditar, onSaved }) {
  const { form, setField, errors, submitting, submit } = useNovoClienteForm(clienteParaEditar, (savedForm) => {
    onSaved(savedForm)
    onClose()
  })

  async function handleSubmit() {
    await submit()
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={clienteParaEditar ? 'Editar cliente' : 'Novo cliente'}
      size="lg"
      footer={
        <>
          <Button variant="secondary" onClick={onClose}>
            Cancelar
          </Button>
          <Button onClick={handleSubmit} loading={submitting}>
            {clienteParaEditar ? 'Salvar alterações' : 'Cadastrar cliente'}
          </Button>
        </>
      }
    >
      <div className="space-y-6">
        <DadosPessoaisSection form={form} setField={setField} errors={errors} />
        <ContatoSection form={form} setField={setField} errors={errors} />
        <EnderecoSection form={form} setField={setField} errors={errors} />
        <InformacoesComerciaisSection form={form} setField={setField} />
      </div>
    </Modal>
  )
}
