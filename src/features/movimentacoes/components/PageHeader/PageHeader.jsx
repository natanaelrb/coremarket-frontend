import { ArrowLeftRight } from 'lucide-react';

import Breadcrumb from './Breadcrumb';
import PageHeaderActions from './PageHeaderActions';

export default function PageHeader({
  onNewMovement,
  onExport,
  onPrint,
  onRefresh,
  isRefreshing,
}) {
  return (
    <header className="mb-7">
      <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
        {/* Identificação da página */}
        <div className="min-w-0">
          <Breadcrumb items={['Home', 'Movimentações']} />

          <div className="mt-3 flex items-center gap-3.5">
            {/* Ícone da página */}
            <div
              className="
                flex
                -mt-2
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-xl
                border
                border-emerald-200
                bg-emerald-50
                text-emerald-600
                shadow-sm
                transition-all
                duration-200
                dark:border-emerald-500/20
                dark:bg-emerald-500/10
                dark:text-emerald-400
              "
            >
              <ArrowLeftRight
                className="h-5 w-5"
                strokeWidth={2}
              />
            </div>

            <div className="min-w-0">
              <h1
                className="
                  text-2xl
                  font-bold
                  tracking-tight
                  text-slate-900
                  dark:text-white
                  sm:text-[28px]
                "
              >
                Movimentações de Estoque
              </h1>

              <p
                className="
                  mt-1.5
                  max-w-2xl
                  text-sm
                  leading-6
                  text-slate-500
                  dark:text-slate-400
                "
              >
                Acompanhe entradas, saídas, ajustes, perdas e transferências
                realizadas no estoque.
              </p>
            </div>
          </div>
        </div>

        {/* Ações */}
        <PageHeaderActions
          onNewMovement={onNewMovement}
          onExport={onExport}
          onPrint={onPrint}
          onRefresh={onRefresh}
          isRefreshing={isRefreshing}
        />
      </div>
    </header>
  );
}