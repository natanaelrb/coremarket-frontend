import {
  Plus,
  ShoppingCart,
  FileSpreadsheet,
  FileUp,
  FileDown,
  Printer,
  RefreshCw,
} from "lucide-react";

import { ToolbarButton } from "./ToolbarButton";

export function ComprasToolbar({
  onNovaCompra,
  onNovoPedido,
  onNovaCotacao,
  onImportarXml,
  onImportarNota,
  onExportar,
  onImprimir,
  onAtualizar,
  isExporting,
  isRefreshing,
}) {
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      <ToolbarButton
        icon={Plus}
        label="Nova Compra"
        primary
        onClick={onNovaCompra}
      />

      <ToolbarButton
        icon={ShoppingCart}
        label="Novo Pedido"
        color="blue"
        onClick={onNovoPedido}
      />

      <ToolbarButton
        icon={FileSpreadsheet}
        label="Nova Cotação"
        color="violet"
        onClick={onNovaCotacao}
      />

      <ToolbarButton
        icon={FileUp}
        label="Importar XML"
        color="cyan"
        onClick={onImportarXml}
      />

      <ToolbarButton
        icon={FileUp}
        label="Importar Nota"
        color="amber"
        onClick={onImportarNota}
      />

      <ToolbarButton
        icon={FileDown}
        label="Exportar"
        color="emerald"
        onClick={onExportar}
        loading={isExporting}
      />

      <ToolbarButton
        icon={Printer}
        label="Imprimir"
        color="slate"
        onClick={onImprimir}
      />

      <ToolbarButton
        icon={RefreshCw}
        label="Atualizar"
        color="green"
        onClick={onAtualizar}
        loading={isRefreshing}
      />
    </div>
  );
}
