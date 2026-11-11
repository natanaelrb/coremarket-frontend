import { ChartLine } from "lucide-react";
import Card from "../../../../shared/components/layout/Card";
import { EmptyState } from "../../../../shared/components/ui/EmptyState";
import { Skeleton } from "../../../../shared/components/ui/Skeleton";
import { useContasReceberContext } from "../../hooks/useContasReceberContext";
import { ChartLegend } from "./ChartLegend";
import { EvolucaoChart } from "./EvolucaoChart";
import { PeriodSelect } from "./PeriodSelect";

export function EvolucaoCard() {
  const { evolucao, loading } = useContasReceberContext();
  return (
    <Card
      className="flex min-h-[290px] flex-col p-4 animate-fade-up xl:col-span-2"
      style={{ animationDelay: "120ms" }}
    >
      <div className="mb-1 flex items-center justify-between gap-3">
        <h2 className="text-[13px] font-bold text-ink">
          Evolução das contas a receber
        </h2>
        <PeriodSelect
          value={evolucao.granularidade}
          onChange={evolucao.setGranularidade}
        />
      </div>
      <ChartLegend hidden={evolucao.hidden} onToggle={evolucao.toggleSeries} />
      <div className="min-h-[200px] flex-1">
        {loading ? (
          <Skeleton className="h-full min-h-[200px] w-full" />
        ) : evolucao.data.length ? (
          <EvolucaoChart data={evolucao.data} hidden={evolucao.hidden} />
        ) : (
          <EmptyState
            icon={ChartLine}
            title="Sem dados no período"
            description="Escolha outro intervalo de datas."
          />
        )}
      </div>
    </Card>
  );
}
