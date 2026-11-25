import { Routes, Route, Navigate } from "react-router-dom";

// Dashboard
import Dashboard from "../pages/Dashboard";

// Cadastros
import Clientes from "../pages/Clientes";
import ClienteDetalhe from "../pages/ClienteDetalhe";
import Produtos from "../pages/Produtos";
import ProdutoDetalhe from "../pages/ProdutoDetalhe";
import Fornecedores from "../pages/Fornecedores";
import FornecedorDetalhe from "../pages/FornecedorDetalhe";

// Estoque
import Estoque from "../pages/Estoque";
import EstoqueDetalhe from "../pages/EstoqueDetalhe";
import Movimentacoes from "../pages/Movimentacoes";
import MovimentacaoDetalhe from "../pages/MovimentacaoDetalhe";

// Operações
import Compras from "../pages/Compras";
import CompraDetalhe from "../pages/CompraDetalhe";
import Vendas from "../pages/Vendas";
import NovaVenda from "../pages/Vendas/NovaVenda";
import HistoricoVendas from "../pages/Vendas/HistoricoVendas";
import AnalisesVendas from "../pages/Vendas/AnalisesVendas";
import CategoriasVendas from "../pages/Vendas/CategoriasVendas";

// Financeiro
import Pagamentos from "../pages/Pagamentos";
import PagamentoDetalhe from "../pages/PagamentoDetalhe";
import ContasReceber from "../pages/ContasReceber";

// Outros
import Relatorios from "../pages/Relatorios";
import EmConstrucao from "../pages/EmConstrucao";

// Layout
import PageTransition from "../shared/components/transitions/PageTransition.jsx";

export default function AppRoutes() {
  return (
    <PageTransition>
      <Routes>
        {/* Redirecionamento */}
        <Route
          path="/"
          element={<Navigate to="/dashboard" replace />}
        />

        {/* Principal */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Clientes */}
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/clientes/:id" element={<ClienteDetalhe />} />

        {/* Produtos */}
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/produtos/:id" element={<ProdutoDetalhe />} />

        {/* Fornecedores */}
        <Route
          path="/fornecedores"
          element={<Fornecedores titulo="Fornecedores" />}
        />
        <Route
          path="/fornecedores/:id"
          element={<FornecedorDetalhe />}
        />

        {/* Estoque */}
        <Route path="/estoque" element={<Estoque />} />
        <Route path="/estoque/:id" element={<EstoqueDetalhe />} />
        <Route path="/movimentacoes" element={<Movimentacoes />} />
        <Route
          path="/movimentacoes/:id"
          element={<MovimentacaoDetalhe />}
        />

        {/* Compras */}
        <Route path="/compras" element={<Compras />} />
        <Route path="/compras/:id" element={<CompraDetalhe />} />

        {/* Vendas */}
        <Route path="/vendas" element={<Vendas />} />
        <Route path="/vendas/nova" element={<NovaVenda />} />
        <Route path="/vendas/historico" element={<HistoricoVendas />} />
        <Route path="/vendas/analises" element={<AnalisesVendas />} />
        <Route path="/vendas/categorias" element={<CategoriasVendas />} />

        {/* Financeiro */}
        <Route path="/pagamentos" element={<Pagamentos />} />
        <Route
          path="/pagamentos/:id"
          element={<PagamentoDetalhe />}
        />
        <Route path="/contas-receber" element={<ContasReceber />} />

        {/* Relatórios */}
        <Route path="/relatorios" element={<Relatorios />} />

        {/* Funcionalidades em desenvolvimento */}
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

        {/* Rota não encontrada */}
        <Route
          path="*"
          element={<Navigate to="/dashboard" replace />}
        />
      </Routes>
    </PageTransition>
  );
}
