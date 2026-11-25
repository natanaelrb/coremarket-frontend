import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function SidebarNavItem({
  item,
  isActive = false,
  currentPath,
  depth = 0,
}) {
  const [openOverride, setOpenOverride] = useState(null);

  const Icon = item.icon;
  const hasChildren = Boolean(item.children?.length);
  const isSubmenu = depth > 0;

  const matchesPath = (path) =>
    Boolean(path && currentPath === path);

  const childIsActive = (child) =>
    matchesPath(child.path) ||
    Boolean(child.children?.some(childIsActive));

  const selected = matchesPath(item.path);

  const active =
    isActive ||
    selected ||
    Boolean(item.children?.some(childIsActive));

  const isOpen = openOverride ?? active;

  // ITEM SEM SUBMENU
  if (!hasChildren) {
    return (
      <Link
        to={item.path}
        title={item.name}
        aria-current={selected ? "page" : undefined}
        className={`
          group relative flex min-w-0 items-center
          transition-all duration-200
          ${
            isSubmenu
              ? "gap-2 rounded-md px-3 py-2 text-[12px]"
              : "gap-3 rounded-lg px-3 py-2.5 text-[13px]"
          }
          ${
            selected
              ? "bg-[#2563EB] font-semibold text-white shadow-sm"
              : "text-[#E2E8F0] hover:bg-[#20344E] hover:text-white"
          }
        `}
      >
        {isSubmenu ? (
          <span
            className={`h-1.5 w-1.5 shrink-0 rounded-full ${
              selected
                ? "bg-blue-200"
                : "bg-[#526985] group-hover:bg-blue-400"
            }`}
          />
        ) : (
          Icon && (
            <Icon
              size={17}
              strokeWidth={1.8}
              className={`shrink-0 ${
                selected
                  ? "text-blue-100"
                  : "text-[#91A4BD] group-hover:text-blue-300"
              }`}
            />
          )
        )}

        <span className="min-w-0 flex-1 truncate">
          {item.name}
        </span>
      </Link>
    );
  }

  // ITEM EXPANSÍVEL
  return (
    <div className="min-w-0">
      <button
        type="button"
        onClick={() => setOpenOverride(!isOpen)}
        aria-expanded={isOpen}
        className={`
          group flex w-full min-w-0 items-center
          transition-all duration-200
          ${
            isSubmenu
              ? "gap-2 rounded-md px-3 py-2 text-[12px]"
              : "gap-3 rounded-lg px-3 py-2.5 text-[13px]"
          }
          ${
            active
              ? "font-bold text-blue-300 hover:bg-[#20344E]"
              : "text-[#E2E8F0] hover:bg-[#20344E] hover:text-white"
          }
        `}
      >
        {isSubmenu ? (
          <span
            className={`h-1.5 w-1.5 shrink-0 rounded-full ${
              active ? "bg-blue-400" : "bg-[#526985]"
            }`}
          />
        ) : (
          Icon && (
            <Icon
              size={17}
              strokeWidth={1.8}
              className={`shrink-0 ${
                active
                  ? "text-blue-400"
                  : "text-[#91A4BD] group-hover:text-blue-300"
              }`}
            />
          )
        )}

        <span className="min-w-0 flex-1 truncate text-left">
          {item.name}
        </span>

        <ChevronDown
          size={14}
          className={`shrink-0 text-[#7186A0] transition-transform duration-200 ${
            isOpen ? "rotate-180 text-blue-400" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            className={`mt-1 space-y-0.5 ${
              isSubmenu
                ? "ml-2 border-l border-[#2A405B] pl-1"
                : "ml-1 border-l border-[#2A405B] pl-1"
            }`}
          >
            {item.children.map((child) => (
              <SidebarNavItem
                key={child.path ?? child.name}
                item={child}
                isActive={childIsActive(child)}
                currentPath={currentPath}
                depth={depth + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
