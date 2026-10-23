/** Shimmering placeholder rows shown while the payments list is loading. */
export function TableSkeleton({ rows = 8, columns = 9 }) {
  return (
    <>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <tr
          key={rowIndex}
          className="
            border-b border-slate-100
            last:border-0
            dark:border-white/[0.06]
          "
          aria-hidden="true"
        >
          {Array.from({ length: columns }).map((__, colIndex) => (
            <td
              key={colIndex}
              className="px-4 py-4 sm:px-5"
            >
              <div
                className={`
                  skeleton h-4 rounded-md
                  ${
                    colIndex === 2
                      ? 'max-w-[180px]'
                      : colIndex === 6
                        ? 'ml-auto max-w-[100px]'
                        : colIndex === 8
                          ? 'ml-auto max-w-[36px]'
                          : 'max-w-[120px]'
                  }
                `}
              />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}