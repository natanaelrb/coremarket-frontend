import { HeaderActions } from './HeaderActions';

export function PageHeader() {
  return (
    <header className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3 animate-fade-up">
      <div>
        <h1 className="text-[22px] font-bold leading-tight tracking-tight text-ink">Contas a Receber</h1>
        <p className="mt-1 text-xs text-ink-2">Acompanhe valores pendentes, vencimentos, recebimentos e inadimplência dos clientes.</p>
      </div>
      <HeaderActions />
    </header>
  );
}
