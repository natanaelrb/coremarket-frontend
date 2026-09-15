import { Modal } from "../../../../../shared/components/ui/Modal.jsx";
import { Button } from "../../../../../shared/components/ui/Button.jsx";
import { StepIndicator } from './StepIndicator.jsx'
import {
  SelecionarArquivoStep,
  MapearColunasStep,
  ValidarDadosStep,
  ConfirmarStep,
} from './steps/index.js'
import { useImportarClientes } from '../../../hooks/useImportarClientes.js'

/** Full 4-step "Importar clientes" wizard modal. */
export function ImportarClientesModal({ open, onClose, onImportado }) {
  const wizard = useImportarClientes((resumo) => {
    onImportado?.(resumo)
    onClose()
  })

  function handleClose() {
    wizard.reset()
    onClose()
  }

  async function handlePrimary() {
    if (wizard.currentStep === 'selecionar') return wizard.avancar()
    if (wizard.currentStep === 'mapear') return wizard.validar()
    if (wizard.currentStep === 'validar') return wizard.avancar()
    if (wizard.currentStep === 'confirmar') return wizard.confirmarImportacao()
  }

  const primaryLabel = {
    selecionar: 'Próximo',
    mapear: 'Validar dados',
    validar: 'Próximo',
    confirmar: 'Importar clientes',
  }[wizard.currentStep]

  return (
    <Modal
      open={open}
      onClose={handleClose}
      title="Importar clientes"
      size="md"
      footer={
        <>
          {wizard.stepIndex > 0 && (
            <Button variant="secondary" onClick={wizard.voltar}>
              Voltar
            </Button>
          )}
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button
            onClick={handlePrimary}
            loading={wizard.importando}
            disabled={wizard.currentStep === 'selecionar' && !wizard.arquivo}
          >
            {primaryLabel}
          </Button>
        </>
      }
    >
      <StepIndicator stepIndex={wizard.stepIndex} />

      {wizard.currentStep === 'selecionar' && (
        <SelecionarArquivoStep arquivo={wizard.arquivo} onSelecionar={wizard.selecionarArquivo} />
      )}
      {wizard.currentStep === 'mapear' && <MapearColunasStep />}
      {wizard.currentStep === 'validar' && <ValidarDadosStep resumo={wizard.resumo} />}
      {wizard.currentStep === 'confirmar' && <ConfirmarStep resumo={wizard.resumo} />}
    </Modal>
  )
}
