// Cabeçalho da página: título, descrição, breadcrumb e ações principais (Importar/Exportar/...).
import { Upload, Download, Printer, RefreshCw, Plus } from 'lucide-react';
import { Button } from '../../../../shared/components/ui/Button';

export function PageHeader({ onImport, onExport, onPrint, onRefresh, onNovoProduto, isRefreshing }) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-4">
      <div>
        <nav className="mb-1 text-xs text-gray-400 dark:text-gray-500">
          Dashboard <span className="mx-1">›</span> <span className="text-gray-600 dark:text-gray-300">Produtos</span>
        </nav>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Produtos</h1>
        <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
          Gerencie seu catálogo de produtos, estoque, preços e lotes
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Button icon={Upload} onClick={onImport}>Importar</Button>
        <Button icon={Download} onClick={onExport}>Exportar</Button>
        <Button icon={Printer} onClick={onPrint}>Imprimir</Button>
        <Button icon={RefreshCw} onClick={onRefresh} className={isRefreshing ? 'animate-spin' : ''}>
          Atualizar
        </Button>
        <Button icon={Plus} variant="primary" onClick={onNovoProduto}>Novo Produto</Button>
      </div>
    </div>
  );
}
