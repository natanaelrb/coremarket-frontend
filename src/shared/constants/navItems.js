import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Users,
  Wallet,
  ShoppingBag,
  Truck,
  Landmark,
  Receipt,
  BarChart3,
  Boxes,
  Settings,
} from 'lucide-react';

/**
 * Static navigation model for the main sidebar. `key` must match the
 * router/page identifier used by the shell.
 */
export const NAV_ITEMS = [
  { key: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { key: 'vendas', label: 'Vendas', icon: ShoppingCart },
  { key: 'produtos', label: 'Produtos', icon: Package },
  { key: 'clientes', label: 'Clientes', icon: Users },
  { key: 'dividas', label: 'Dívidas', icon: Wallet },
  { key: 'compras', label: 'Compras', icon: ShoppingBag },
  { key: 'fornecedores', label: 'Fornecedores', icon: Truck },
  { key: 'caixa', label: 'Caixa', icon: Landmark },
  { key: 'pagamentos', label: 'Pagamentos', icon: Receipt },
  { key: 'relatorios', label: 'Relatórios', icon: BarChart3 },
  { key: 'estoque', label: 'Estoque', icon: Boxes },
  { key: 'configuracoes', label: 'Configurações', icon: Settings },
];
