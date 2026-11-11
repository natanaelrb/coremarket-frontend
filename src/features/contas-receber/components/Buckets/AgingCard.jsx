import Card from "../../../../shared/components/layout/Card";
import { Skeleton } from "../../../../shared/components/ui/Skeleton";
import { AGING_BUCKETS } from "../../constants";
import { useContasReceberContext } from "../../hooks/useContasReceberContext";
import { BucketTable } from "./BucketTable";

export function AgingCard() {
  const { aging, filters, loading } = useContasReceberContext();
  const toneOf = (r) => AGING_BUCKETS.find((b) => b.id === r.id).tone;
  const onSelect = (id) => {
    // "A vencer" limpa o filtro de vencimento e mostra só o status; demais faixas filtram por atraso.
    if (id === "AGING_A_VENCER")
      return filters.patch({ vencimento: "TODOS", status: "A_VENCER" });
    return filters.patch({
      vencimento: filters.applied.vencimento === id ? "TODOS" : id,
      status: "TODOS",
    });
  };
  return (
    <Card className="pb-3 animate-fade-up" style={{ animationDelay: "220ms" }}>
      <div className="px-4 pt-4 pb-2 mb-2">
        <h3 className="text-base font-semibold text-foreground">
          Aging de recebíveis (atraso)
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
            labelHead="Faixa de atraso"
            rows={aging.rows}
            total={aging.total}
            totalLabel="Total vencido"
            activeId={filters.applied.vencimento}
            onSelect={onSelect}
            valueTone={toneOf}
          />
        )}
      </div>
    </Card>
  );
}
