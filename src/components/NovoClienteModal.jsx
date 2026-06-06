import { useState } from "react";
import clienteService from "../services/clienteService";

function NovoClienteModal({ aberto, fechar, atualizarClientes, setToast }) {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [loading, setLoading] = useState(false);

  async function salvarCliente(e) {
    e.preventDefault();
    setLoading(true);

    try {
      await clienteService.criar({
        nome,
        telefone,
      });

      atualizarClientes();
      fechar();

      setNome("");
      setTelefone("");

      setToast({
        mensagem: "Cliente criado com sucesso!",
        tipo: "sucesso",
      });
    } catch (error) {
      console.log(error);
      setToast({
        mensagem: "Erro ao criar cliente",
        tipo: "erro",
      });
    } finally {
      setLoading(false);
    }
  }

  if (!aberto) return null;

  return (
    <div
      className="
        fixed
        inset-0
        bg-black/70
        flex
        items-center
        justify-center
      "
    >
      <div
        className="
          bg-zinc-900
          p-6
          rounded-2xl
          w-full
          max-w-md
          border
          border-zinc-800
        "
      >
        <h2 className="text-2xl font-bold mb-6">Novo Cliente</h2>

        <form onSubmit={salvarCliente} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nome do cliente"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="
              bg-zinc-950
              border
              border-zinc-800
              rounded-xl
              p-3
              outline-none
              focus:border-green-500
            "
          />

          <input
            type="text"
            placeholder="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            className="
              bg-zinc-950
              border
              border-zinc-800
              rounded-xl
              p-3
              outline-none
              focus:border-green-500
            "
          />

          <div className="flex gap-3 mt-2">
            <button
              type="button"
              onClick={fechar}
              className="
                flex-1
                bg-zinc-800
                hover:bg-zinc-700
                transition
                p-3
                rounded-xl
              "
            >
              Cancelar
            </button>

            <button
              onClick={salvarCliente}
              disabled={loading}
              className="
                px-4
                py-2
                rounded-lg
                bg-green-500
                hover:bg-green-600
                transition
                disabled:opacity-50
                "
            >
              {loading ? "Salvando..." : "Salvar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NovoClienteModal;
