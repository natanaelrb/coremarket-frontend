import { useLocation } from "react-router-dom";

import SidebarHeader from "./sidebar/SidebarHeader";
import SidebarSection from "./sidebar/SidebarSection";
import SidebarFooter from "./sidebar/SidebarFooter";

import menuSections from "./config/sidebarConfig";

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col overflow-hidden border-r border-[#26364D] bg-[#101C34] text-slate-200">

      <SidebarHeader />

      <nav className="flex-1 overflow-y-auto px-3 py-5 scrollbar-thin scrollbar-thumb-slate-600/40 scrollbar-track-transparent">
        <div className="space-y-7">
          {menuSections.map((section) => (
            <SidebarSection
              key={section.label}
              section={section}
              currentPath={location.pathname}
            />
          ))}
        </div>
      </nav>

      <SidebarFooter />

    </aside>
  );
}
