import { Skeleton } from "../../../../shared/components/ui/Skeleton";
import { useContasReceberContext } from "../../hooks/useContasReceberContext";
import { StatusSummaryCard } from "./StatusSummaryCard";

export function StatusSummary() {
  const { statusSummary, filters, loading } = useContasReceberContext();
  if (loading)
    return (
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 xl:grid-cols-7">
        {Array.from({ length: 7 }, (_, i) => (
          <Skeleton key={i} className="h-[66px]" />
        ))}
      </div>
    );
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 xl:grid-cols-7">
      {statusSummary.map((tab, i) => (
        <StatusSummaryCard
          key={tab.id}
          tab={tab}
          index={i}
          active={filters.applied.status === tab.id}
          onClick={() => filters.patch({ status: tab.id })}
        />
      ))}
    </div>
  );
}
