import SidebarNavItem from "./SidebarNavItem";

export default function SidebarSection({ section, currentPath }) {
  return (
    <section className="min-w-0">

      <h2 className="mb-2.5 px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#CBD5E1]">
        {section.label}
      </h2>

      <div className="space-y-1">
        {section.items.map((item) => {
          const matchesPath = (path) =>
            Boolean(path && currentPath === path);

          const isActive =
            matchesPath(item.path) ||
            Boolean(
              item.children?.some(
                (child) =>
                  matchesPath(child.path) ||
                  child.children?.some((nested) =>
                    matchesPath(nested.path)
                  )
              )
            );

          return (
            <SidebarNavItem
              key={item.name}
              item={item}
              isActive={Boolean(isActive)}
              currentPath={currentPath}
            />
          );
        })}
      </div>

    </section>
  );
}
