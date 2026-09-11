import { useLocation } from "react-router-dom";
import {
  Search,
  Moon,
  Bell,
  CircleHelp,
  Menu,
  ChevronDown,
} from "lucide-react";

import TopbarThemeButton from "./topbars/components/TopbarThemeButton";
import TopbarNotifications from "./topbars/components/TopbarNotifications";
import TopbarUser from "./topbars/components/TopbarUser";

export default function Topbar() {
  const location = useLocation();

  return (
    <header
      className="
        sticky top-0 z-40
        h-12
        border-b border-slate-200/80
        bg-[var(--bg-app)]
        dark:border-white/[0.06]
      "
    >
      <div className="flex h-full items-center justify-between px-5">

        {/* ESQUERDA */}
        <div className="flex items-center gap-4">

          {/* Botão menu */}
          <button
            className="
              flex h-7 w-7 items-center justify-center
              rounded-md
              border border-slate-200
              text-slate-500
              hover:bg-slate-100
              dark:border-white/10
              dark:text-slate-400
              dark:hover:bg-white/5
            "
          >
            <Menu size={16} />
          </button>

          {/* Busca */}
          <div className="relative hidden md:block">
            <Search
              size={14}
              className="
                absolute left-3 top-1/2
                -translate-y-1/2
                text-slate-400
              "
            />

            <input
              type="text"
              placeholder="Buscar por produto, SKU, código, usuário ou nº da operação..."
              className="
                h-8 w-[440px]
                rounded-md
                border border-slate-200
                bg-slate-50
                pl-9 pr-16
                text-[11px]
                outline-none
                transition-all
                placeholder:text-slate-400
                focus:border-emerald-500/50
                focus:ring-2
                focus:ring-emerald-500/10
                dark:border-white/[0.08]
                dark:bg-white/[0.03]
                dark:text-white
              "
            />

            <span
              className="
                absolute right-2 top-1/2
                -translate-y-1/2
                rounded
                bg-slate-200
                px-1.5 py-0.5
                text-[9px]
                text-slate-500
                dark:bg-white/[0.06]
                dark:text-slate-500
              "
            >
              Ctrl + K
            </span>
          </div>
        </div>

        {/* DIREITA */}
        <div className="flex items-center gap-1">

          <TopbarNotifications />

          <TopbarThemeButton />

          <button
            className="
              flex h-8 w-8 items-center justify-center
              rounded-md
              text-slate-500
              hover:bg-slate-100
              dark:text-slate-400
              dark:hover:bg-white/5
            "
          >
            <CircleHelp size={16} />
          </button>

          {/* Separador */}
          <div className="mx-2 h-6 w-px bg-slate-200 dark:bg-white/10" />

          <TopbarUser />

        </div>
      </div>
    </header>
  );
}