import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Warehouse,
  Wallet,
  Landmark,
  DollarSign,
  Truck,
  ShoppingBag,
  BarChart3,
  Settings,
  UserCog,
  ShieldCheck,
} from 'lucide-react';

/**
 * Itens de navegação do sidebar principal do CoreMarket.
 * Reflete os módulos já entregues (Dashboard, Produtos, Clientes, Estoque, ...)
 * e mantém "Vendas" como item ativo nesta página.
 */
export const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
  { id: 'produtos', label: 'Produtos', icon: Package, href: '/produtos' },
  { id: 'vendas', label: 'Vendas', icon: ShoppingCart, href: '/vendas' },
  { id: 'clientes', label: 'Clientes', icon: Users, href: '/clientes' },
  { id: 'estoque', label: 'Estoque', icon: Warehouse, href: '/estoque' },
  { id: 'dividas', label: 'Dívidas', icon: Wallet, href: '/dividas' },
  { id: 'financeiro', label: 'Financeiro', icon: Landmark, href: '/financeiro' },
  { id: 'caixa', label: 'Caixa', icon: DollarSign, href: '/caixa' },
  { id: 'fornecedores', label: 'Fornecedores', icon: Truck, href: '/fornecedores' },
  { id: 'compras', label: 'Compras', icon: ShoppingBag, href: '/compras' },
  { id: 'relatorios', label: 'Relatórios', icon: BarChart3, href: '/relatorios' },
  { id: 'configuracoes', label: 'Configurações', icon: Settings, href: '/configuracoes' },
  { id: 'usuarios', label: 'Usuários', icon: UserCog, href: '/usuarios' },
  { id: 'auditoria', label: 'Auditoria', icon: ShieldCheck, href: '/auditoria' },
];
