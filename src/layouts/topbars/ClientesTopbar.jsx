import { Users } from "lucide-react";

import TopbarBase from "./components/TopbarBase";
import TopbarPageInfo from "./components/TopbarPageInfo";
import TopbarSearch from "./components/TopbarSearch";
import TopbarActions from "./components/TopbarActions";

export default function ClientesTopbar() {
  return (
    <TopbarBase
      left={
        <TopbarPageInfo
          icon={Users}
          title="Gestão de clientes"
          breadcrumb={["Home", "Clientes"]}
          description="Gerencie sua base de clientes, acompanhe compras e recebimentos."
        />
      }
      right={
        <div className="flex items-center gap-3">
          <TopbarSearch />
          <TopbarActions action="cliente" />
        </div>
      }
    />
  );
}