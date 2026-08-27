/**
 * Central place for header/toolbar action handlers. Today these just log +
 * could show a toast; wire each one to its real flow (opening a modal,
 * calling an endpoint, etc.) as those flows are built.
 * TODO(api):
 *  - entradaManual -> POST /api/estoque/movimentacoes (tipo=ENTRADA)
 *  - saidaManual    -> POST /api/estoque/movimentacoes (tipo=SAIDA)
 *  - transferencia  -> POST /api/estoque/transferencias
 *  - inventario     -> POST /api/estoque/inventarios
 *  - importar       -> POST /api/estoque/importar (multipart)
 *  - exportar       -> GET  /api/estoque/exportar
 */
export function useEstoqueActions() {
  const handlers = {
    entradaManual: () => console.info('[Estoque] Abrir modal: Entrada Manual'),
    saidaManual: () => console.info('[Estoque] Abrir modal: Saída Manual'),
    transferencia: () => console.info('[Estoque] Abrir modal: Transferência'),
    inventario: () => console.info('[Estoque] Abrir modal: Inventário'),
    importar: () => console.info('[Estoque] Abrir modal: Importar'),
    exportar: () => console.info('[Estoque] Exportando estoque...'),
    configuracoes: () => console.info('[Estoque] Abrir configurações de estoque'),
  }

  const runAction = (actionKey) => {
    handlers[actionKey]?.()
  }

  return { runAction }
}
