import { TABLE_COLUMNS } from "../../constants/tableColumns.js";

export default function ProductTableHeader({
  allSelected,
  onToggleAll,
}) {
  return (
    <thead>
      <tr className="border-b border-gray-100 bg-gray-50/70 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500 dark:border-[#22254A] dark:bg-[#11142B]/70 dark:text-gray-400">
        <th className="w-10 py-3 pl-4">
          <input
            type="checkbox"
            checked={allSelected}
            onChange={onToggleAll}
            className="h-4 w-4 cursor-pointer rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 dark:border-gray-600"
          />
        </th>

        {TABLE_COLUMNS.map((col) => (
          <th
            key={col.key}
            className={`whitespace-nowrap px-3 py-3 ${
              col.align === "center"
                ? "text-center"
                : "text-left"
            }`}
          >
            {col.label}
          </th>
        ))}
      </tr>
    </thead>
  );
}