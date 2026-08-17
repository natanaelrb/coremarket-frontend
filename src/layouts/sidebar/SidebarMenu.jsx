import SidebarSection from "./SidebarSection";
import menuSections from "./config/sidebarMenu";

export default function SidebarMenu({ currentPath }) {
  return (
    <nav className="flex-1 overflow-y-auto space-y-4 px-3 py-2.5 scrollbar-thin">
      {menuSections.map((section) => (
        <SidebarSection
          key={section.label}
          section={section}
          currentPath={currentPath}
        />
      ))}
    </nav>
  );
}