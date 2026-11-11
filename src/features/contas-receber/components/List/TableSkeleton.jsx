import { Skeleton } from "../../../../shared/components/ui/Skeleton";

export const TableSkeleton = ({ rows = 8 }) => (
  <tbody>
    {Array.from({ length: rows }, (_, i) => (
      <tr key={i} className="border-b border-line/70">
        <td colSpan={15} className="px-3 py-2.5">
          <Skeleton className="h-8 w-full" />
        </td>
      </tr>
    ))}
  </tbody>
);
