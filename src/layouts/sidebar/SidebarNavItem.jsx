import { Link } from "react-router-dom";

export default function SidebarNavItem({ item, isActive }) {
  const Icon = item.icon;

  const baseClasses =
    "group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200";

  const activeClasses =
    "bg-emerald-500/20 text-emerald-300 shadow-sm";

  const inactiveClasses =
    "text-[var(--sidebar-text)] hover:bg-white/[0.05] hover:text-white";

  return (
    <Link
      to={item.path}
      className={`${baseClasses} ${
        isActive ? activeClasses : inactiveClasses
      }`}
    >
      {/* Barra lateral verde */}
      {isActive && (
        <span className="absolute left-0 h-6 w-[3px] rounded-r-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.6)]" />
      )}

      <Icon
        size={17}
        className={`flex-shrink-0 transition-colors ${
          isActive
            ? "text-emerald-400"
            : "text-[var(--sidebar-text-muted)] group-hover:text-white"
        }`}
      />

      <span className="flex-1 truncate">
        {item.name}
      </span>
    </Link>
  );
}