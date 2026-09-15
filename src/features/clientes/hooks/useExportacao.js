import { useState } from 'react'

/** Drives the export-to-Excel/PDF actions from the clients toolbar. */
export function useExportacao() {
  const [exportando, setExportando] = useState(null)

  // TODO(api): GET /api/clientes/exportar?formato=excel|pdf
  async function exportar(formato) {
    setExportando(formato)
    await new Promise((r) => setTimeout(r, 800))
    setExportando(null)
  }

  return { exportando, exportar }
}
