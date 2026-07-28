
export default function TableSkeleton({ rows = 5 }) {
  return (
    <>
      {Array.from({ length: rows }).map((_, i) => (
        <tr key={i} className="border-b border-slate-50 dark:border-white/[0.03]">
          <td className="px-5 py-4" colSpan={10}>
            <div
              className="h-4 rounded bg-slate-100 dark:bg-white/5 animate-pulse"
              style={{ width: `${70 - i * 8}%` }}
            />
          </td>
        </tr>
      ))}
    </>
  );
}
