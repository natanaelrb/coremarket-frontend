// import { useLocation } from "react-router-dom";

// import DashboardTopbar from "./topbars/DashboardTopbar";
// import ClientesTopbar from "./topbars/ClientesTopbar";
// // import ProdutosTopbar from "./topbars/ProdutosTopbar";
// // import FornecedoresTopbar from "./topbars/FornecedoresTopbar";
// // import EstoqueTopbar from "./topbars/EstoqueTopbar";
// // import MovimentacoesTopbar from "./topbars/MovimentacoesTopbar";
// // import ComprasTopbar from "./topbars/ComprasTopbar";
// // import VendasTopbar from "./topbars/VendasTopbar";
// // import PagamentosTopbar from "./topbars/PagamentosTopbar";
// // import ContasReceberTopbar from "./topbars/ContasReceberTopbar";
// // import ContasPagarTopbar from "./topbars/ContasPagarTopbar";
// // import FluxoCaixaTopbar from "./topbars/FluxoCaixaTopbar";
// // import DespesasTopbar from "./topbars/DespesasTopbar";
// // import RelatoriosTopbar from "./topbars/RelatoriosTopbar";
// // import UsuariosTopbar from "./topbars/UsuariosTopbar";
// // import ConfiguracoesTopbar from "./topbars/ConfiguracoesTopbar";

// export default function Topbar() {
//   const { pathname } = useLocation();

//   switch (pathname) {
//     case "/dashboard":
//       return <DashboardTopbar />;

//     case "/clientes":
//       return <ClientesTopbar />;

//     // case "/fornecedores":
//     //   return <FornecedoresTopbar />;

//     // case "/produtos":
//     //   return <ProdutosTopbar />;

//     // case "/estoque":
//     //   return <EstoqueTopbar />;

//     // case "/movimentacoes":
//     //   return <MovimentacoesTopbar />;

//     // case "/compras":
//     //   return <ComprasTopbar />;

//     // case "/vendas":
//     //   return <VendasTopbar />;

//     // case "/pagamentos":
//     //   return <PagamentosTopbar />;

//     // case "/contas-receber":
//     //   return <ContasReceberTopbar />;

//     // case "/contas-pagar":
//     //   return <ContasPagarTopbar />;

//     // case "/fluxo-caixa":
//     //   return <FluxoCaixaTopbar />;

//     // case "/despesas":
//     //   return <DespesasTopbar />;

//     // case "/relatorios":
//     //   return <RelatoriosTopbar />;

//     // case "/usuarios":
//     //   return <UsuariosTopbar />;

//     // case "/configuracoes":
//     //   return <ConfiguracoesTopbar />;

//     // default:
//     //   return <DashboardTopbar />;
//   }
// }

import { useLocation } from "react-router-dom";

import headerConfig from "./config/topbarConfig";

import TopbarPageInfo from "./topbars/components/TopbarPageInfo";
import TopbarSearch from "./topbars/components/TopbarSearch";
import TopbarThemeButton from "./topbars/components/TopbarThemeButton";
import TopbarNotifications from "./topbars/components/TopbarNotifications";
import TopbarUser from "./topbars/components/TopbarUser";
import TopbarActions from "./topbars/components/TopbarActions";

export default function Topbar() {
  const location = useLocation();

  const page = headerConfig[location.pathname] ?? {
    title: "CoreMarket",
    icon: null,
    breadcrumb: [],
    action: null,
    showSearch: false,
  };

  return (
    <header className="sticky top-2 z-40 border-b border-slate-200 dark:border-white/10 bg-[var(--bg-app)] backdrop-blur">
      <div className="px-8 py-2">
        {/* Linha superior */}
        <div className="flex items-center justify-between">
          <TopbarPageInfo
            icon={page.icon}
            title={page.title}
            breadcrumb={page.breadcrumb}
          />

          <div className="flex items-center gap-3">
            <TopbarThemeButton />
            <TopbarNotifications />
            <TopbarUser />
          </div>
        </div>

        {/* Linha inferior */}
        <div className="mt-6 flex justify-end items-center gap-3">
          {page.showSearch && <TopbarSearch />}

          <TopbarActions action={page.action} />
        </div>
      </div>
    </header>
  );
}
