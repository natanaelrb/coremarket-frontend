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
  },

  "/clientes": {
    title: "Clientes",
    icon: Users,
    breadcrumb: ["Home", "Clientes"],
    action: "cliente",
  },

  "/produtos": {
    title: "Produtos",
    icon: Package,
    breadcrumb: ["Home", "Produtos"],
    action: "produto",
  },

  "/fornecedores": {
    title: "Fornecedores",
    icon: Truck,
    breadcrumb: ["Home", "Fornecedores"],
    action: "fornecedor",
  },

  "/compras": {
    title: "Compras",
    icon: ShoppingCart,
    breadcrumb: ["Home", "Compras"],
    action: "compra",
  },

  "/vendas": {
    title: "Vendas",
    icon: Receipt,
    breadcrumb: ["Home", "Vendas"],
    action: "venda",
  },

  "/pagamentos": {
    title: "Pagamentos",
    icon: CreditCard,
    breadcrumb: ["Home", "Pagamentos"],
    action: "pagamento",
  },

  "/estoque": {
    title: "Estoque",
    icon: ClipboardList,
    breadcrumb: ["Home", "Estoque"],
    action: null,
  },

  "/movimentacoes": {
    title: "Movimentações",
    icon: RefreshCw,
    breadcrumb: ["Home", "Movimentações"],
    action: null,
  },

  "/contas-receber": {
    title: "Contas a Receber",
    icon: Wallet,
    breadcrumb: ["Home", "Financeiro"],
    action: null,
  },

  "/contas-pagar": {
    title: "Contas a Pagar",
    icon: Banknote,
    breadcrumb: ["Home", "Financeiro"],
    action: null,
  },

  "/fluxo-caixa": {
    title: "Fluxo de Caixa",
    icon: TrendingUp,
    breadcrumb: ["Home", "Financeiro"],
    action: null,
  },

  "/despesas": {
    title: "Despesas",
    icon: TrendingDown,
    breadcrumb: ["Home", "Financeiro"],
    action: null,
  },

  "/relatorios": {
    title: "Relatórios",
    icon: BarChart3,
    breadcrumb: ["Home", "Relatórios"],
    action: null,
  },

  "/usuarios": {
    title: "Usuários",
    icon: UserCog,
    breadcrumb: ["Home", "Administração"],
    action: null,
  },

  "/configuracoes": {
    title: "Configurações",
    icon: Settings,
    breadcrumb: ["Home", "Administração"],
    action: null,
  },
};

export default headerConfig;