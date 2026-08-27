import { Search } from 'lucide-react';
import { Button } from "../../../../shared/components/ui/Button.jsx";
import { CaixaStatus } from './CaixaStatus.jsx';
import { OperadorMenu } from './OperadorMenu.jsx';
import { DateTimeDisplay } from './DateTimeDisplay.jsx';

/**
 * Cabeçalho da página de Vendas: título, atalho de busca de produto (F2),
 * status do caixa, operador logado e relógio.
 * @param {{
 *  caixa: { numero: string, status: string },
 *  operador: { nome: string },
 *  onFocarBuscaProduto: () => void,
 * }} props
 */
export function VendasHeader({ caixa, operador, onFocarBuscaProduto }) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold text-cm-text">Vendas</h1>
        <p className="text-sm text-cm-text-muted">
          Registro, acompanhamento e gestão das vendas
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button variant="secondary" icon={Search} onClick={onFocarBuscaProduto}>
          <span className="mr-1 rounded bg-cm-border px-1.5 py-0.5 text-[10px] font-semibold text-cm-text-muted">
            F2
          </span>
          Buscar produto
        </Button>
        <CaixaStatus caixa={caixa} />
        <OperadorMenu operador={operador} />
        <DateTimeDisplay />
      </div>
    </header>
  );
}

