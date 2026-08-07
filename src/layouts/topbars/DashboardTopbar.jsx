import { LayoutDashboard } from "lucide-react";

import TopbarBase from "./components/TopbarBase";
import TopbarPageInfo from "./components/TopbarPageInfo";

export default function DashboardTopbar() {
  return (
    <TopbarBase
      left={
        <TopbarPageInfo
          icon={LayoutDashboard}
          title="Dashboard"
          breadcrumb={["Home", "Dashboard"]}
        />
      }
      right={null}
    />
  );
}
