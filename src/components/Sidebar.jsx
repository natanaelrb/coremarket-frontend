import {
  LayoutDashboard,
  Users,
  Wallet,
  Package,
  BarChart3,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Clientes",
      path: "/clientes",
      icon: <Users size={20} />,
    },
    {
      name: "Contas a Receber",
      path: "/contas-receber",
      icon: <Wallet size={20} />,
    },
    {
      name: "Produtos",
      path: "/produtos",
      icon: <Package size={20} />,
    },
    {
      name: "Relatórios",
      path: "/relatorios",
      icon: <BarChart3 size={20} />,
    },
  ];

  return (
    <aside className="w-64 bg-[#0D1029] text-white h-screen p-5">
      <h1 className="text-2xl font-bold mb-10">CoreMarket</h1>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`
              flex items-center gap-3 w-full p-3 rounded-xl transition
              ${
                location.pathname === item.path
                  ? "bg-purple-600"
                  : "hover:bg-white/10"
              }
            `}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
