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
  TrendingUp,
  BarChart3,
  UserCog,
  Settings,
} from "lucide-react";

export default [
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
    items: [
      { name: "Relatórios", path: "/relatorios", icon: BarChart3 },
    ],
  },

  {
    label: "Administração",
    items: [
      { name: "Usuários", path: "/usuarios", icon: UserCog },
      { name: "Configurações", path: "/configuracoes", icon: Settings },
    ],
  },
];