/** Shimmering placeholder rows shown while the payments list is loading. */
export function TableSkeleton({ rows = 8, columns = 9 }) {
  return (
    <>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <tr key={rowIndex} className="border-b border-slate-100 dark:border-slate-800">
          {Array.from({ length: columns }).map((__, colIndex) => (
            <td key={colIndex} className="px-4 py-3">
              <div className="skeleton h-4 w-full max-w-[120px]" />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}
