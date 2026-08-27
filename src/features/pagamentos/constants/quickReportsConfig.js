import { Landmark, ArrowDownToLine, ArrowUpFromLine, AlertOctagon, CreditCard, FileBarChart } from 'lucide-react';

/** Static config for the "Relatórios rápidos" tile grid. */
export const QUICK_REPORTS_CONFIG = [
  { id: 'fluxo-caixa', label: 'Fluxo de caixa', icon: Landmark },
  { id: 'contas-a-receber', label: 'Contas a receber', icon: ArrowDownToLine },
  { id: 'contas-a-pagar', label: 'Contas a pagar', icon: ArrowUpFromLine },
  { id: 'inadimplencia', label: 'Inadimplência', icon: AlertOctagon },
  { id: 'meios-pagamento', label: 'Meios de pagamento', icon: CreditCard },
  { id: 'mais-relatorios', label: 'Mais relatórios', icon: FileBarChart },
];
