import { useState, useMemo } from "react";
import { generateClientesMock } from "../mocks/clientesMock";

/**
 * Fonte de verdade da lista de clientes + operações de escrita.
 * >>> Em produção, substituir o estado inicial e as operações abaixo por
 *     chamadas reais ao backend (clienteService.listar/criar/excluir).
 */
export default function useClientes() {
  const [clients, setClients] = useState(() => generateClientesMock());

  function addCliente(form) {
    setClients((cs) => {
      const nextId = Math.max(0, ...cs.map((c) => c.id)) + 1;
      const novo = {
        id: nextId,
        codigo: `CLI-${String(1000 + cs.length)}`,
        nome: form.nome,
        tipo: form.tipo,
        cpf: form.cpf,
        telefone: form.telefone,
        email: form.email,
        cidade: form.cidade,
        ultimaCompra: null,
        valorGasto: 0,
        status: "Ativo",
        vip: false,
        inadimplente: false,
      };
      return [novo, ...cs];
    });
  }

  function deleteCliente(id) {
    setClients((cs) => cs.filter((c) => c.id !== id));
  }

  function deleteClientes(ids) {
    const idSet = new Set(ids);
    setClients((cs) => cs.filter((c) => !idSet.has(c.id)));
  }

  const stats = useMemo(() => {
    const total = clients.length;
    const ativos = clients.filter((c) => c.status === "Ativo").length;
    const inativos = total - ativos;
    const vip = clients.filter((c) => c.vip).length;
    const faturado = clients.reduce((sum, c) => sum + c.valorGasto, 0);
    const ticketMedio = total ? faturado / total : 0;
    return { total, ativos, inativos, vip, faturado, ticketMedio };
  }, [clients]);

  return { clients, stats, addCliente, deleteCliente, deleteClientes };
}
