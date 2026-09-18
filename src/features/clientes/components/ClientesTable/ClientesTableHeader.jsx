import { CLIENTES_TABLE_COLUMNS } from "../../constants/tableColumns.js";

/** Table <thead> with a select-all checkbox in the first cell. */
export function ClientesTableHeader({ allSelected, onToggleAll }) {
  return (
    <thead>
      <tr className="border-b border-slate-200 text-left text-xs text-slate-500 dark:border-white/10 dark:text-slate-400">
        <th className="w-8 py-3 pl-4 pr-2">
          <input
            type="checkbox"
            checked={allSelected}
            onChange={onToggleAll}
            className="
              h-3.5 w-3.5
              cursor-pointer
              rounded
              border-slate-300
              accent-[#42c878]
              dark:border-slate-600
            "
          />
        </th>

        {CLIENTES_TABLE_COLUMNS.map((col) => (
          <th
            key={col.key}
            className="px-3 py-3 font-medium whitespace-nowrap"
          >
            {col.label}
          </th>
        ))}
      </tr>
    </thead>
  );
}