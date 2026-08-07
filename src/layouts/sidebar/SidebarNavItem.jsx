import { Link } from "react-router-dom";

export default function SidebarNavItem({ item, isActive }) {
  const Icon = item.icon;

  const baseClasses =
    "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-150";

  const activeClasses =
    "bg-violet-500/15 text-violet-600 shadow-sm dark:bg-violet-500/20 dark:text-violet-300";

  const inactiveClasses =
    "text-[var(--sidebar-text)] hover:bg-[var(--sidebar-hover)]";

  return (
    <Link
      to={item.path}
      className={`${baseClasses} ${
        isActive ? activeClasses : inactiveClasses
      }`}
    >
      <Icon size={16} className="flex-shrink-0" />

      <span className="flex-1 truncate">
        {item.name}
      </span>
    </Link>
  );
}