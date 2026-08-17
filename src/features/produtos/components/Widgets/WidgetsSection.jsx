// Composer da grade de widgets do rodapé da página.
import { ProximosVencimento } from './ProximosVencimento';
import { LotesVencidos } from './LotesVencidos';
import { ValorEmRisco } from './ValorEmRisco';
import { ResumoEstoque } from './ResumoEstoque';

export function WidgetsSection({ widgetsData, onVerTodosVencimento, onVerTodosVencidos, onVerRelatorioEstoque }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      <ProximosVencimento lotes={widgetsData.proximosVencimento} onVerTodos={onVerTodosVencimento} />
      <LotesVencidos lotes={widgetsData.lotesVencidos} onVerTodos={onVerTodosVencidos} />
      <ValorEmRisco data={widgetsData.valorEmRisco} />
      <ResumoEstoque resumo={widgetsData.resumoEstoque} onVerRelatorio={onVerRelatorioEstoque} />
    </div>
  );
}
