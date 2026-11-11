import Card from "../../../../shared/components/layout/Card";
import { Skeleton } from "../../../../shared/components/ui/Skeleton";
import { useContasReceberContext } from "../../hooks/useContasReceberContext";
import { BucketTable } from "./BucketTable";

export function VencimentosProximosCard() {
  const { proximos, filters, loading } = useContasReceberContext();
  return (
    <Card className="pb-3 animate-fade-up" style={{ animationDelay: "170ms" }}>
      <div className="px-4 pt-4 pb-2 mb-2">
        <h3 className="text-base font-semibold text-foreground">
          Vencimentos próximos
        </h3>
        <p className="text-sm text-muted-foreground">
          Todas as contas em aberto
        </p>
      </div>
      <div className="px-3">
        {loading ? (
          <Skeleton className="h-44 w-full" />
        ) : (
          <BucketTable
            labelHead="Período"
            rows={proximos.rows}
            total={proximos.total}
            totalLabel="Total"
            activeId={filters.applied.vencimento}
            onSelect={(id) =>
              filters.patch({
                vencimento: filters.applied.vencimento === id ? "TODOS" : id,
              })
            }
          />
        )}
      </div>
    </Card>
  );
}
