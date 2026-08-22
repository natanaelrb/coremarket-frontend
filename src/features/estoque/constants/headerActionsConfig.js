import { Plus, Minus, ArrowLeftRight, ClipboardList, Upload, Download, Settings } from 'lucide-react'

/**
 * Declarative config for the primary/secondary action buttons in the page
 * header. `action` matches a key handled by useEstoqueActions.
 */
export const PRIMARY_HEADER_ACTIONS = [
  { action: 'entradaManual', label: 'Entrada Manual', icon: Plus, variant: 'success' },
  { action: 'saidaManual', label: 'Saída Manual', icon: Minus, variant: 'danger' },
  { action: 'transferencia', label: 'Transferência', icon: ArrowLeftRight, variant: 'outline' },
  { action: 'inventario', label: 'Inventário', icon: ClipboardList, variant: 'outline' },
]

export const SECONDARY_HEADER_ACTIONS = [
  { action: 'importar', label: 'Importar', icon: Upload, variant: 'ghost' },
  { action: 'exportar', label: 'Exportar', icon: Download, variant: 'ghost' },
  { action: 'configuracoes', label: 'Configurações', icon: Settings, variant: 'ghost' },
]
