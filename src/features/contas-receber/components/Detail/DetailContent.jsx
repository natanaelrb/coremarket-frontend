import { Skeleton } from "../../../../shared/components/ui/Skeleton";
import { StatusBadge } from "../List/StatusBadge";
import { ClienteInfo } from "./ClienteInfo";
import { FinanceiroInfo } from "./FinanceiroInfo";
import { PromessaBanner } from "./PromessaBanner";
import { PrimaryActions } from "./PrimaryActions";
import { VendaRelacionada } from "./VendaRelacionada";
import { HistoricoPagamentos } from "./HistoricoPagamentos";
import { QuickActions } from "./QuickActions";

export function DetailContent({ conta }) {
  return (
    <div key={conta.id} className="space-y-4 px-4 pb-4 animate-fade-up">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-[15px] font-bold text-ink">Conta #{conta.id}</h3>
        <StatusBadge status={conta.status} long />
      </div>
      <ClienteInfo conta={conta} />
      <FinanceiroInfo conta={conta} />
      <PromessaBanner promessa={conta.promessa} />
      <PrimaryActions conta={conta} />
      <VendaRelacionada conta={conta} />
      <HistoricoPagamentos conta={conta} />
      <QuickActions conta={conta} />
    </div>
  );
}

export const DetailSkeleton = () => (
  <div className="space-y-3 px-4 pb-4">
    {[28, 20, 36, 10, 40, 32].map((h, i) => (
      <Skeleton key={i} style={{ height: h * 2 }} className="w-full" />
    ))}
  </div>
);
