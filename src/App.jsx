import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layouts/Layout";

import Dashboard from "./pages/Dashboard";
import Clientes from "./pages/Clientes";
import Fiado from "./pages/Fiado";
import Estoque from "./pages/Estoque";
import Relatorios from "./pages/Relatorios";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/fiado" element={<Fiado />} />
          <Route path="/estoque" element={<Estoque />} />
          <Route path="/relatorios" element={<Relatorios />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;