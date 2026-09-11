import { Inbox } from 'lucide-react';

/** Estado vazio padrão para tabelas/listas sem dados no período selecionado. */
export default function EmptyState({ message = 'Nenhum dado para o período selecionado.', icon: Icon = Inbox }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-10 text-center">
      <Icon className="h-8 w-8 text-[var(--text-tertiary)]" aria-hidden="true" />
      <p className="text-sm text-[var(--text-secondary)]">{message}</p>
    </div>
  );
}
