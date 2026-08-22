import Breadcrumb from './Breadcrumb';
import PageHeaderActions from './PageHeaderActions';

export default function PageHeader({ onNewMovement, onExport, onPrint, onRefresh, isRefreshing }) {
  return (
    <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
      <div>
        <Breadcrumb items={['Estoque', 'Movimentações']} />
        <h1 className="text-2xl font-bold text-white">Movimentações de Estoque</h1>
        <p className="mt-1 text-sm text-slate-400">Acompanhe todas as entradas, saídas, ajustes e transferências realizadas no estoque.</p>
      </div>
      <PageHeaderActions
        onNewMovement={onNewMovement}
        onExport={onExport}
        onPrint={onPrint}
        onRefresh={onRefresh}
        isRefreshing={isRefreshing}
      />
    </div>
  );
}
