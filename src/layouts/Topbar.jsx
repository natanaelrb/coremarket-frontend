import { Search, Sun, Moon, Bell, Plus } from "lucide-react";
import { useLocation } from "react-router-dom";

import IconButton from "../shared/components/IconButton";
import PrimaryButton from "../shared/components/PrimaryButton";

import { useTheme } from "../contexts/ThemeContext";

import headerConfig from "./headerConfig";

export default function Topbar() {
  const location = useLocation();

  const { tema, alternarTema } = useTheme();
  const isDark = tema === "dark";

  const page =
    headerConfig[location.pathname] ?? {
      title: "CoreMarket",
      icon: null,
      breadcrumb: [],
      action: null,
    };

  const Icon = page.icon;

  function renderAction() {
    switch (page.action) {
      case "cliente":
        return (
          <PrimaryButton icon={Plus}>
            Novo Cliente
          </PrimaryButton>
        );

      case "produto":
        return (
          <PrimaryButton icon={Plus}>
            Novo Produto
          </PrimaryButton>
        );

      case "fornecedor":
        return (
          <PrimaryButton icon={Plus}>
            Novo Fornecedor
          </PrimaryButton>
        );

      case "compra":
        return (
          <PrimaryButton icon={Plus}>
            Nova Compra
          </PrimaryButton>
        );

      case "venda":
        return (
          <PrimaryButton icon={Plus}>
            Nova Venda
          </PrimaryButton>
        );

      default:
        return null;
    }
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 dark:border-white/10 bg-[var(--bg-app)] backdrop-blur">
      <div className="px-8 py-5">

        {/* Linha superior */}
        <div className="flex justify-between items-center">

          <div className="relative">

          </div>

          <div className="flex items-center gap-3">

            <IconButton
              icon={isDark ? Sun : Moon}
              onClick={alternarTema}
            />

            <button className="relative w-10 h-10 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12162C] flex items-center justify-center">
              <Bell size={17} />

              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-[10px] text-white flex items-center justify-center">
                3
              </span>
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center text-white font-semibold">
                AD
              </div>

              <div>
                <p className="text-sm font-semibold">
                  Admin
                </p>

                <p className="text-xs text-slate-500">
                  Administrador
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Linha inferior */}

       <div className="mt-6 flex items-center justify-between">

  {/* Esquerda */}
  <div className="flex items-center gap-4">

    {Icon && (
      <div className="w-12 h-12 rounded-2xl bg-violet-600 flex items-center justify-center text-white">
        <Icon size={22} />
      </div>
    )}

    <div>
      <h1 className="text-3xl font-bold">
        {page.title}
      </h1>

      <div className="flex gap-2 mt-1 text-sm text-slate-500">
        {page.breadcrumb.map((item, index) => (
          <span key={item}>
            {index > 0 && "› "}
            {item}
          </span>
        ))}
      </div>
    </div>

  </div>

  {/* Direita */}
  <div className="flex items-center gap-3">

    <div className="relative">

      <Search
        size={16}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        placeholder="Pesquisar..."
        className="
          w-72
          h-11
          rounded-xl
          border
          border-slate-200
          dark:border-white/10
          bg-white
          dark:bg-[#12162C]
          pl-10
          pr-4
          text-sm
          outline-none
          focus:border-violet-500
        "
      />

    </div>

    {renderAction()}

  </div>

</div>

      </div>
    </header>
  );
}