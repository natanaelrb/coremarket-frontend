import { Plus } from 'lucide-react';
import { Button } from '../../../../shared/components/ui/Button.jsx';
import { PeriodoPicker } from '../PeriodoPicker/PeriodoPicker.jsx';

export function PageHeader({
  periodo,
  onRegistrarRecebimento,
  onRegistrarPagamento,
}) {
  return (
    <section className="border-b border-slate-200 bg-white px-6 py-5 dark:border-slate-800 dark:bg-slate-900">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            Pagamentos
          </h1>

          <p className="mt-1 max-w-2xl text-sm text-slate-500 dark:text-slate-400">
            Controle os recebimentos, pagamentos, parcelas e movimentações
            financeiras da sua loja.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <PeriodoPicker periodo={periodo} />

          <Button
            icon={Plus}
            onClick={onRegistrarRecebimento}
            variant="success"
          >
            Registrar recebimento
          </Button>

          <Button
            icon={Plus}
            onClick={onRegistrarPagamento}
            variant="primary"
          >
            Registrar pagamento
          </Button>
        </div>
      </div>
    </section>
  );
}