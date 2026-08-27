// Barra de ações principais acima dos filtros: criar compra/pedido/cotação
// e ações de integração (importar XML/Nota, exportar, imprimir, atualizar).
import { Plus, ShoppingCart, FileSpreadsheet, FileUp, FileDown, Printer, RefreshCw } from "lucide-react";
import { ToolbarButton } from "./ToolbarButton";

export function ComprasToolbar({ onNovaCompra, onNovoPedido, onNovaCotacao, onImportarXml, onImportarNota, onExportar, onImprimir, onAtualizar, isExporting, isRefreshing }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <ToolbarButton icon={Plus} label="Nova Compra" primary onClick={onNovaCompra} />
      <ToolbarButton icon={ShoppingCart} label="Novo Pedido" onClick={onNovoPedido} />
      <ToolbarButton icon={FileSpreadsheet} label="Nova Cotação" onClick={onNovaCotacao} />
      <ToolbarButton icon={FileUp} label="Importar XML" onClick={onImportarXml} />
      <ToolbarButton icon={FileUp} label="Importar Nota" onClick={onImportarNota} />
      <ToolbarButton icon={FileDown} label="Exportar" onClick={onExportar} loading={isExporting} />
      <ToolbarButton icon={Printer} label="Imprimir" onClick={onImprimir} />
      <ToolbarButton icon={RefreshCw} label="Atualizar" onClick={onAtualizar} loading={isRefreshing} />
    </div>
  );
}
