import { CLIENTES_TABLE_COLUMNS } from '../../constants/tableColumns.js'

/** Table <thead> with a select-all checkbox in the first cell. */
export function ClientesTableHeader({ allSelected, onToggleAll }) {
  return (
    <thead>
      <tr className="text-left text-xs text-slate-400 light:text-slate-500 border-b border-cm-border-dark light:border-cm-border-light">
        <th className="py-3 pl-4 pr-2 w-8">
          <input
            type="checkbox"
            checked={allSelected}
            onChange={onToggleAll}
            className="rounded border-cm-border-dark accent-cm-violet"
          />
        </th>
        {CLIENTES_TABLE_COLUMNS.map((col) => (
          <th key={col.key} className="py-3 px-3 font-medium">
            {col.label}
          </th>
        ))}
      </tr>
    </thead>
  )
}
