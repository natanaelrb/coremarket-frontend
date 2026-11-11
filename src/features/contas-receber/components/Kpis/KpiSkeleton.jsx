import { Skeleton } from "../../../../shared/components/ui/Skeleton";

export const KpiSkeleton = () => (
  <div className="rounded-xl border border-line bg-surface p-3">
    <Skeleton className="h-4 w-24" />
    <Skeleton className="mt-3 h-5 w-28" />
    <Skeleton className="mt-2 h-3 w-20" />
  </div>
);
