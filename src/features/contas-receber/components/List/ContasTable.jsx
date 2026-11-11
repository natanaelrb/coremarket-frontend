import { useContasReceberContext } from '../../hooks/useContasReceberContext';
import { ContasTableHead } from './ContasTableHead';
import { ContaRow } from './ContaRow';
import { TableSkeleton } from './TableSkeleton';
import { TableEmpty } from './TableEmpty';

export function ContasTable() {
  const { tabela, selection, detail, loading, filters } = useContasReceberContext();
  const ids = tabela.rows.map((c) => c.id);
  const selectedOnPage = ids.filter((id) => selection.isSelected(id)).length;
  const allSelected = ids.length > 0 && selectedOnPage === ids.length;

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1180px] border-collapse">
          <ContasTableHead sort={tabela.sort} onSort={tabela.toggleSort} allSelected={allSelected} someSelected={selectedOnPage > 0}
            onToggleAll={() => selection.setMany(ids, !allSelected)} />
          {loading ? <TableSkeleton /> : (
            <tbody key={`${tabela.pagination.page}-${tabela.pagination.pageSize}`}>
              {tabela.rows.map((c, i) => (
                <ContaRow key={c.id} conta={c} index={i} active={detail.isOpen && detail.selectedId === c.id}
                  selected={selection.isSelected(c.id)} onOpen={detail.select} onToggle={selection.toggle} />
              ))}
            </tbody>
          )}
        </table>
      </div>
      {!loading && tabela.rows.length === 0 && <TableEmpty hasFilters={filters.hasActive} onClear={filters.clear} />}
    </>
  );
}
