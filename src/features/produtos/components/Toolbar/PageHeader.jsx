// Cabeçalho da página: título, descrição, breadcrumb e ações principais.
import {
  Upload,
  Download,
  Printer,
  RefreshCw,
  Plus,
  Package,
} from "lucide-react";

import { Button } from "../../../../shared/components/ui/Button";

export function PageHeader({
  onImport,
  onExport,
  onPrint,
  onRefresh,
  onNovoProduto,
  isRefreshing,
}) {
  return (
    <header className="animate-fade-in-up">
      <div className="-mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        {/* Informações da página */}
        <div className="min-w-0">
          <nav
            aria-label="Navegação estrutural"
            className="mb-2.5"
          >
            <ol className="flex items-center gap-1.5 text-sm">
              <li className="text-sm text-slate-400">
                Home
              </li>

              <li
                className="text-base font-medium text-slate-300"
                aria-hidden="true"
              >
                ›
              </li>

              <li
                className="text-sm font-medium text-emerald-600"
                aria-current="page"
              >
                Produtos
              </li>
            </ol>
          </nav>

          <div className="flex items-center gap-2.5">
            <div
              className="
                flex h-9 w-9 shrink-0 items-center justify-center
                rounded-lg
                bg-emerald-50
                text-emerald-600
                ring-1 ring-emerald-100
                dark:bg-emerald-500/10
                dark:text-emerald-400
                dark:ring-emerald-500/20
              "
            >
              <Package size={18} strokeWidth={2.2} />
            </div>

            <h1
              className="
                truncate
                text-2xl
                font-bold
                tracking-tight
                text-slate-900
                dark:text-white
              "
            >
              Gestão de Produtos
            </h1>
          </div>

          <p
            className="
              mt-2
              max-w-2xl
              text-sm
              leading-5
              text-slate-500
              dark:text-slate-400
            "
          >
            Gerencie seu catálogo de produtos, estoque, preços e lotes.
          </p>
        </div>

        {/* Ações */}
        <div className="flex flex-wrap items-center gap-2.5">
          <Button
            icon={Upload}
            onClick={onImport}
          >
            Importar
          </Button>

          <Button
            icon={Download}
            onClick={onExport}
          >
            Exportar
          </Button>

          <Button
            icon={Printer}
            onClick={onPrint}
          >
            Imprimir
          </Button>

          <Button
            icon={RefreshCw}
            onClick={onRefresh}
            loading={isRefreshing}
          >
            {isRefreshing ? "Atualizando..." : "Atualizar"}
          </Button>

          <Button
            icon={Plus}
            variant="primary"
            onClick={onNovoProduto}
          >
            Novo Produto
          </Button>
        </div>
      </div>
    </header>
  );
}

