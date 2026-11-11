import Card from "../../../../shared/components/layout/Card";
import { SearchBar } from "../Filters/SearchBar";
import { FilterBar } from "../Filters/FilterBar";
import { StatusSummary } from "../Filters/StatusSummary";
import { BulkBar } from "./BulkBar";
import { ContasTable } from "./ContasTable";
import { TableFooter } from "./TableFooter";

/** Card principal: busca, filtros, resumo por status, tabela e paginação. */
export function ContasListCard() {
  return (
    <Card className="animate-fade-up" style={{ animationDelay: "260ms" }}>
      <div className="space-y-3 p-4 pb-3">
        <SearchBar />
        <FilterBar />
        <StatusSummary />
        <BulkBar />
      </div>
      <ContasTable />
      <TableFooter />
    </Card>
  );
}
