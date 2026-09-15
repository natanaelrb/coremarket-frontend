import { useState } from 'react'

const STEPS = ['selecionar', 'mapear', 'validar', 'confirmar']

/**
 * Owns the 4-step "Importar clientes" wizard: file selection, column
 * mapping, validation summary, and final confirmation.
 */
export function useImportarClientes(onImportar) {
  const [stepIndex, setStepIndex] = useState(0)
  const [arquivo, setArquivo] = useState(null)
  const [resumo, setResumo] = useState(null)
  const [importando, setImportando] = useState(false)

  function selecionarArquivo(file) {
    setArquivo(file)
  }

  function avancar() {
    setStepIndex((i) => Math.min(i + 1, STEPS.length - 1))
  }

  function voltar() {
    setStepIndex((i) => Math.max(i - 1, 0))
  }

  // TODO(api): POST /api/clientes/importar/validar (multipart file)
  async function validar() {
    await new Promise((r) => setTimeout(r, 600))
    setResumo({ validos: 342, comProblemas: 8 })
    avancar()
  }

  // TODO(api): POST /api/clientes/importar/confirmar
  async function confirmarImportacao() {
    setImportando(true)
    await new Promise((r) => setTimeout(r, 700))
    setImportando(false)
    onImportar?.(resumo)
  }

  function reset() {
    setStepIndex(0)
    setArquivo(null)
    setResumo(null)
  }

  return {
    steps: STEPS,
    stepIndex,
    currentStep: STEPS[stepIndex],
    arquivo,
    resumo,
    importando,
    selecionarArquivo,
    avancar,
    voltar,
    validar,
    confirmarImportacao,
    reset,
  }
}
