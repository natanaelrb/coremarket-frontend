import SidebarNavItem from "./SidebarNavItem";

export default function SidebarSection({ section, currentPath }) {
  return (
    <div>
      <h2 className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sidebar-text-muted)]">
        {section.label}
      </h2>

      <div className="space-y-0.5">
        {section.items.map((item) => (
          <SidebarNavItem
            key={item.path}
            item={item}
            isActive={currentPath === item.path}
          />
        ))}
      </div>
    </div>
  );
}