import { useLocation } from "react-router-dom";

import SidebarHeader from "./sidebar/SidebarHeader";
import SidebarSection from "./sidebar/SidebarSection";
import SidebarFooter from "./sidebar/SidebarFooter";

import menuSections from "./config/sidebarConfig";

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="flex h-screen w-56 flex-shrink-0 flex-col bg-[var(--sidebar-bg)] text-[var(--sidebar-text)] transition-colors duration-200">
      <SidebarHeader />

      <nav className="flex-1 overflow-y-auto space-y-4 px-3 py-2.5 scrollbar-thin">
        {menuSections.map((section) => (
          <SidebarSection
            key={section.label}
            section={section}
            currentPath={location.pathname}
          />
        ))}
      </nav>

      <SidebarFooter />
    </aside>
  );
}