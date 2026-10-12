import {
  Plus,
  Minus,
  ArrowLeftRight,
  ClipboardList,
  Upload,
  Download,
  Settings,
} from 'lucide-react'

/**
 * Ações principais exibidas diretamente no cabeçalho.
 */
export const PRIMARY_HEADER_ACTIONS = [
  {
    action: 'entradaManual',
    label: 'Entrada de estoque',
    icon: Plus,
    variant: 'success',
  },
  {
    action: 'saidaManual',
    label: 'Saída de estoque',
    icon: Minus,
    variant: 'danger',
  },
]

/**
 * Ações secundárias disponíveis no menu "Mais ações".
 */
export const SECONDARY_HEADER_ACTIONS = [
  {
    action: 'transferencia',
    label: 'Transferência',
    icon: ArrowLeftRight,
  },
  {
    action: 'inventario',
    label: 'Inventário',
    icon: ClipboardList,
  },
  {
    action: 'importar',
    label: 'Importar',
    icon: Upload,
  },
  {
    action: 'exportar',
    label: 'Exportar',
    icon: Download,
  },
  {
    action: 'configuracoes',
    label: 'Configurações',
    icon: Settings,
  },
]