import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Produtos from "../pages/Produtos";
import Compras from "../pages/Compras";
import Relatorios from "../pages/Relatorios";
import EmConstrucao from "../pages/EmConstrucao";
import Clientes from "../pages/Clientes";
import Fornecedores from "../pages/Fornecedores";
import Estoque from "../pages/Estoque";
import Movimentacoes from "../pages/Movimentacoes";
import Vendas from "../pages/Vendas";
import Pagamentos from "../pages/Pagamentos";
import ClienteDetalhe from "../pages/ClienteDetalhe";
import FornecedorDetalhe from "../pages/FornecedorDetalhe";
import ProdutoDetalhe from "../pages/ProdutoDetalhe";

import PageTransition from "../shared/components/transitions/PageTransition.jsx";

export default function AppRoutes() {
  return (
    <PageTransition>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        {/* Implementadas */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/produtos/:id" element={<ProdutoDetalhe />} />
        <Route path="/compras" element={<Compras />} />
        <Route path="/relatorios" element={<Relatorios />} />
        <Route path="/estoque" element={<Estoque />} />
        <Route path="/movimentacoes" element={<Movimentacoes />} />
        <Route path="/vendas" element={<Vendas />} />
        <Route path="/pagamentos" element={<Pagamentos />} />
        <Route path="/clientes/:id" element={<ClienteDetalhe />} />

        {/* Ainda sem backend — placeholders */}
        <Route
          path="/fornecedores"
          element={<Fornecedores titulo="Fornecedores" />}
        />

        <Route
          path="/fornecedores/:id"
          element={<FornecedorDetalhe />}
        />

        <Route
          path="/contas-pagar"
          element={<EmConstrucao titulo="Contas a Pagar" />}
        />

        <Route
          path="/fluxo-caixa"
          element={<EmConstrucao titulo="Fluxo de Caixa" />}
        />

        <Route
          path="/despesas"
          element={<EmConstrucao titulo="Despesas" />}
        />

        <Route
          path="/usuarios"
          element={<EmConstrucao titulo="Usuários" />}
        />

        <Route
          path="/configuracoes"
          element={<EmConstrucao titulo="Configurações" />}
        />

        <Route
          path="*"
          element={<Navigate to="/dashboard" replace />}
        />
      </Routes>
    </PageTransition>
  );
}