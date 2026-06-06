import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Clientes from "../pages/Clientes";
import ContasReceber from "../pages/ContasReceber";
import Produtos from "../pages/Produtos";
import Relatorios from "../pages/Relatorios";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/clientes" element={<Clientes />} />

      <Route path="*" element={<Dashboard />} />

      <Route path="/contas-receber" element={<ContasReceber />} />

      <Route path="/produtos" element={<Produtos />} />

      <Route path="/relatorios" element={<Relatorios />} />
    </Routes>
  );
}
