import {
  LayoutDashboard,
  Users,
  Package,
  Truck,
  ShoppingCart,
  Receipt,
  CreditCard,
  Wallet,
  Banknote,
  TrendingUp,
  TrendingDown,
  ClipboardList,
  RefreshCw,
  BarChart3,
  UserCog,
  Settings,
} from "lucide-react";

const headerConfig = {
  "/dashboard": {
    title: "Dashboard",
    icon: LayoutDashboard,
    breadcrumb: ["Home", "Dashboard"],
    action: null,
    showSearch: false,
  },

  "/clientes": {
    title: "Clientes",
    icon: Users,
    breadcrumb: ["Home", "Clientes"],
    action: "null",
    showSearch: false,
  },

  "/produtos": {
    title: "Produtos",
    icon: Package,
    breadcrumb: ["Home", "Produtos"],
    action: "null",
    showSearch: false,
  },

  "/fornecedores": {
    title: "Fornecedores",
    icon: Truck,
    breadcrumb: ["Home", "Fornecedores"],
    action: "null",
    showSearch: false,
  },

  "/compras": {
    title: "Compras",
    icon: ShoppingCart,
    breadcrumb: ["Home", "Compras"],
    action: "compra",
    showSearch: true,
  },

  "/vendas": {
    title: "Vendas",
    icon: Receipt,
    breadcrumb: ["Home", "Vendas"],
    action: "venda",
    showSearch: true,
  },

  "/pagamentos": {
    title: "Pagamentos",
    icon: CreditCard,
    breadcrumb: ["Home", "Pagamentos"],
    action: "pagamento",
    showSearch: true,
  },

  "/estoque": {
    title: "Estoque",
    icon: ClipboardList,
    breadcrumb: ["Home", "Estoque"],
    action: null,
    showSearch: true,
  },

  "/movimentacoes": {
    title: "Movimentações",
    icon: RefreshCw,
    breadcrumb: ["Home", "Movimentações"],
    action: null,
    showSearch: true,
  },

  "/contas-receber": {
    title: "Contas a Receber",
    icon: Wallet,
    breadcrumb: ["Home", "Financeiro"],
    action: null,
    showSearch: true,
  },

  "/contas-pagar": {
    title: "Contas a Pagar",
    icon: Banknote,
    breadcrumb: ["Home", "Financeiro"],
    action: null,
    showSearch: true,
  },

  "/fluxo-caixa": {
    title: "Fluxo de Caixa",
    icon: TrendingUp,
    breadcrumb: ["Home", "Financeiro"],
    action: null,
    showSearch: true,
  },

  "/despesas": {
    title: "Despesas",
    icon: TrendingDown,
    breadcrumb: ["Home", "Financeiro"],
    action: null,
    showSearch: true,
  },

  "/relatorios": {
    title: "Relatórios",
    icon: BarChart3,
    breadcrumb: ["Home", "Relatórios"],
    action: null,
    showSearch: true,
  },

  "/usuarios": {
    title: "Usuários",
    icon: UserCog,
    breadcrumb: ["Home", "Administração"],
    action: null,
    showSearch: true,
  },

  "/configuracoes": {
    title: "Configurações",
    icon: Settings,
    breadcrumb: ["Home", "Administração"],
    action: null,
    showSearch: true,
  },
};

export default headerConfig;