// Skeleton animado exibido enquanto os produtos estão carregando.
export function TableSkeleton({ rows = 8 }) {
  return (
    <div className="animate-pulse divide-y divide-gray-50 dark:divide-gray-800/60">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex items-center gap-4 px-4 py-3.5">
          <div className="h-4 w-4 rounded bg-gray-100 dark:bg-gray-800" />
          <div className="h-9 w-9 rounded-lg bg-gray-100 dark:bg-gray-800" />
          <div className="h-3 w-20 rounded bg-gray-100 dark:bg-gray-800" />
          <div className="h-3 w-32 rounded bg-gray-100 dark:bg-gray-800" />
          <div className="ml-auto h-3 w-16 rounded bg-gray-100 dark:bg-gray-800" />
        </div>
      ))}
    </div>
  );
}
