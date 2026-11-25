import {
  LayoutDashboard,
  LayoutGrid,
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
  History,
} from "lucide-react";

export default [
  {
    label: "Principal",
    items: [
      {
        name: "Dashboard",
        path: "/dashboard",
        icon: LayoutDashboard,
      },
    ],
  },

  {
    label: "Gestão",
    items: [
      {
        name: "Cadastros",
        icon: Users,
        children: [
          {
            name: "Clientes",
            path: "/clientes",
            icon: Users,
          },
          {
            name: "Fornecedores",
            path: "/fornecedores",
            icon: Truck,
          },
        ],
      },
      {
        name: "Estoque",
        icon: Package,
        children: [
          {
            name: "Produtos",
            path: "/produtos",
            icon: Package,
          },
          {
            name: "Visão geral",
            path: "/estoque",
            icon: ClipboardList,
          },
          {
            name: "Movimentações",
            path: "/movimentacoes",
            icon: RefreshCw,
          },
        ],
      },
    ],
  },

  {
    label: "Operações",
    items: [
      {
        name: "Operações",
        icon: ShoppingCart,
        children: [
          {
            name: "Compras",
            path: "/compras",
            icon: ShoppingCart,
          },
          {
            name: "Vendas",
            icon: Receipt,
            children: [
              {
                name: "Visão geral",
                path: "/vendas",
                icon: LayoutGrid,
              },
              {
                name: "Análises",
                path: "/vendas/analises",
                icon: BarChart3,
              },
              {
                name: "Categorias",
                path: "/vendas/categorias",
                icon: LayoutGrid,
              },
              {
                name: "Nova venda (PDV)",
                path: "/vendas/nova",
                icon: ShoppingCart,
              },
              {
                name: "Histórico",
                path: "/vendas/historico",
                icon: History,
              },
            ],
          },
        ],
      },
    ],
  },

  {
    label: "Financeiro",
    items: [
      {
        name: "Financeiro",
        icon: Wallet,
        children: [
          {
            name: "Contas a Receber",
            path: "/contas-receber",
            icon: Wallet,
          },
          {
            name: "Contas a Pagar",
            path: "/contas-pagar",
            icon: Banknote,
          },
          {
            name: "Pagamentos",
            path: "/pagamentos",
            icon: CreditCard,
          },
          {
            name: "Fluxo de Caixa",
            path: "/fluxo-caixa",
            icon: TrendingUp,
          },
          {
            name: "Despesas",
            path: "/despesas",
            icon: TrendingDown,
          },
        ],
      },
    ],
  },

  {
    label: "Análises",
    items: [
      {
        name: "Relatórios",
        path: "/relatorios",
        icon: BarChart3,
      },
    ],
  },

  {
    label: "Administração",
    items: [
      {
        name: "Administração",
        icon: Settings,
        children: [
          {
            name: "Usuários",
            path: "/usuarios",
            icon: UserCog,
          },
          {
            name: "Configurações",
            path: "/configuracoes",
            icon: Settings,
          },
        ],
      },
    ],
  },
];
