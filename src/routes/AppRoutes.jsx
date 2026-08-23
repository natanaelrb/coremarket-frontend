import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Produtos from "../pages/Produtos";
import Compras from "../pages/Compras";
// import ContasReceber from "../pages/ContasReceber";
import Relatorios from "../pages/Relatorios";
import EmConstrucao from "../pages/EmConstrucao";
import Clientes from "../pages/Clientes";
import Fornecedores from "../pages/Fornecedores";
import Estoque from "../pages/Estoque";
import Movimentacoes from "../pages/Movimentacoes";
import Vendas from "../pages/Vendas";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      {/* Implementadas */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/clientes" element={<Clientes />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/compras" element={<Compras />} />
      {/* <Route path="/contas-receber" element={<ContasReceber />} /> */}
      <Route path="/relatorios" element={<Relatorios />} />
      <Route path="/estoque" element={<Estoque />} />
      <Route path="/movimentacoes" element={<Movimentacoes />} />
      <Route path="/vendas" element={<Vendas />} />

      {/* Ainda sem backend — placeholders */}
      <Route path="/fornecedores"   element={<Fornecedores titulo="Fornecedores" />} />
      {/* <Route path="/vendas"         element={<EmConstrucao titulo="Vendas" />} /> */}
      <Route path="/pagamentos"     element={<EmConstrucao titulo="Pagamentos" />} />
      <Route path="/contas-pagar"   element={<EmConstrucao titulo="Contas a Pagar" />} />
      <Route path="/fluxo-caixa"    element={<EmConstrucao titulo="Fluxo de Caixa" />} />
      <Route path="/despesas"       element={<EmConstrucao titulo="Despesas" />} />
      <Route path="/usuarios"       element={<EmConstrucao titulo="Usuários" />} />
      <Route path="/configuracoes"  element={<EmConstrucao titulo="Configurações" />} />

      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}
