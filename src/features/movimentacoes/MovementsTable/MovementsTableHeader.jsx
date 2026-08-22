import { ChevronDown } from 'lucide-react';
import { TABLE_COLUMNS } from "../constants/tableColumns";

export default function MovementsTableHeader() {
  return (
    <thead>
      <tr className="border-b border-white/5 text-left text-xs font-medium uppercase tracking-wide text-slate-500">
        {TABLE_COLUMNS.map((col) => (
          <th key={col.key} className={`px-4 py-3 ${col.width}`}>
            <span className="inline-flex items-center gap-1">
              {col.label}
              {col.sortable && <ChevronDown className="h-3 w-3" />}
            </span>
          </th>
        ))}
      </tr>
    </thead>
  );
}
