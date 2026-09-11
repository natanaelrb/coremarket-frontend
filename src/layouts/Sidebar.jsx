import { useLocation } from "react-router-dom";

import SidebarHeader from "./sidebar/SidebarHeader";
import SidebarSection from "./sidebar/SidebarSection";
import SidebarFooter from "./sidebar/SidebarFooter";

import menuSections from "./config/sidebarConfig";

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="flex h-screen w-64 flex-shrink-0 flex-col border-r border-slate-200/80 bg-[var(--sidebar-bg)] text-[var(--sidebar-text)] transition-all duration-300 dark:border-white/10">
      <SidebarHeader />

      <nav className="flex-1 overflow-y-auto px-3 py-5 scrollbar-thin">
        <div className="space-y-6">
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