import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Truck,
  Package,
  ClipboardList,
  RefreshCw,
  ShoppingCart,
  Receipt,
  CreditCard,
  Wallet,
  Banknote,
  TrendingDown,
  BarChart3,
  UserCog,
  Settings,
  TrendingUp,
} from "lucide-react";

// ==========================================
// Configuração do Menu (Data-driven pattern)
// ==========================================

const MENU_SECTIONS = [
  {
    label: "Principal",
    items: [
      { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
      { name: "Clientes", path: "/clientes", icon: Users },
      { name: "Fornecedores", path: "/fornecedores", icon: Truck },
      { name: "Produtos", path: "/produtos", icon: Package },
    ],
  },
  {
    label: "Estoque",
    items: [
      { name: "Estoque", path: "/estoque", icon: ClipboardList },
      { name: "Movimentações", path: "/movimentacoes", icon: RefreshCw },
    ],
  },
  {
    label: "Compras e Vendas",
    items: [
      { name: "Compras", path: "/compras", icon: ShoppingCart },
      { name: "Vendas", path: "/vendas", icon: Receipt },
      { name: "Pagamentos", path: "/pagamentos", icon: CreditCard },
    ],
  },
  {
    label: "Financeiro",
    items: [
      { name: "Contas a Receber", path: "/contas-receber", icon: Wallet },
      { name: "Contas a Pagar", path: "/contas-pagar", icon: Banknote },
      { name: "Fluxo de Caixa", path: "/fluxo-caixa", icon: TrendingUp },
      { name: "Despesas", path: "/despesas", icon: TrendingDown },
    ],
  },
  {
    label: "Relatórios",
    items: [{ name: "Relatórios", path: "/relatorios", icon: BarChart3 }],
  },
  {
    label: "Administração",
    items: [
      { name: "Usuários", path: "/usuarios", icon: UserCog },
      { name: "Configurações", path: "/configuracoes", icon: Settings },
    ],
  },
];

// ==========================================
// Componente Principal
// ==========================================

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside
      className="flex h-screen w-56 flex-shrink-0 flex-col
            bg-[var(--sidebar-bg)]
            text-[var(--sidebar-text)]
            transition-colors duration-200"
    >
      {/* Brand Header */}
      <SidebarHeader />

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto space-y-4 px-3 py-2.5 scrollbar-thin">
        {MENU_SECTIONS.map((section) => (
          <SidebarSection
            key={section.label}
            section={section}
            currentPath={location.pathname}
          />
        ))}
      </nav>

      {/* User Profile Footer */}
      <SidebarFooter />
    </aside>
  );
}

// ==========================================
// Subcomponentes
// ==========================================

function SidebarHeader() {
  return (
    <div className="flex flex-shrink-0 items-center gap-3 border-b border-[var(--sidebar-border)] px-4 py-4 dark:border-slate-200 dark:border-white/10">
      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-violet-600 text-white shadow-sm">
        <TrendingUp size={18} />
      </div>
      <div>
        <h1 className="text-[15px] font-bold leading-tight text-[var(--sidebar-text)]">
          CoreMarket
        </h1>
        <p className="text-[11px] leading-tight text-[var(--sidebar-text-muted)]">
          Sistema de Gestão
        </p>
      </div>
    </div>
  );
}

function SidebarSection({ section, currentPath }) {
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

function SidebarNavItem({ item, isActive }) {
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
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
    >
      <Icon size={16} className="flex-shrink-0" />
      <span className="flex-1 truncate">{item.name}</span>
    </Link>
  );
}

function SidebarFooter() {
  return (
    <div className="flex-shrink-0 border-t border-[var(--sidebar-border)] px-3 py-4 dark:border-slate-200 dark:border-white/10">
      <div className="group flex cursor-pointer items-center gap-2.5 rounded-lg px-2 py-2 transition hover:bg-slate-100 dark:hover:bg-slate-100 dark:hover:bg-white/5">
        <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-violet-600 font-semibold text-[11px] text-white">
          AD
        </div>
        <div className="flex-1 min-w-0">
          <p className="truncate text-xs font-medium text-slate-800 dark:text-white/90">
            Admin
          </p>
          <p className="truncate text-[10px] text-[var(--sidebar-text-muted)]">
            Administrador
          </p>
        </div>
        <Settings
          size={18}
          className="flex-shrink-0 text-slate-400 transition group-hover:text-slate-600 dark:text-white/30 dark:group-hover:text-white/60"
        />
      </div>
    </div>
  );
}
