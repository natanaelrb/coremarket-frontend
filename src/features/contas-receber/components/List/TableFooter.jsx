import { ChevronDown } from 'lucide-react';
import { PAGE_SIZES } from '../../constants';
import { useContasReceberContext } from '../../hooks/useContasReceberContext';
import { Pagination } from './Pagination';

export function TableFooter() {
  const { tabela: { pagination: p } } = useContasReceberContext();
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line px-4 py-3 text-[11px] text-ink-2">
      <p>Mostrando {p.from} a {p.to} de {p.total} contas</p>
      <Pagination page={p.page} totalPages={p.totalPages} onChange={p.setPage} />
      <label className="relative">
        <span className="sr-only">Itens por página</span>
        <select value={p.pageSize} onChange={(e) => p.setPageSize(Number(e.target.value))}
          className="h-7 appearance-none rounded-md border border-line bg-surface pl-2.5 pr-7 text-[11px] font-medium text-ink outline-none focus:border-brand">
          {PAGE_SIZES.map((s) => <option key={s} value={s}>{s} por página</option>)}
        </select>
        <ChevronDown className="pointer-events-none absolute right-2 top-1/2 size-3 -translate-y-1/2 text-ink-3" />
      </label>
    </div>
  );
}
