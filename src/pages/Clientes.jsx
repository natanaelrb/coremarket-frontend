import { useEffect, useState } from "react"
import clienteService from "../services/clienteService"

function Clientes() {

  const [clientes, setClientes] = useState([])

  useEffect(() => {
    buscarClientes()
  }, [])

  async function buscarClientes() {
    try {
      const resposta = await clienteService.listar()

      setClientes(resposta.data)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">
          Clientes
        </h1>

        <button className="bg-green-500 hover:bg-green-600 transition px-4 py-2 rounded-lg font-medium">
          Novo Cliente
        </button>
      </div>

      <div className="grid gap-4">

        {clientes.map(cliente => (

          <div
            key={cliente.id}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 hover:border-green-500 transition"
          >

            <h2 className="text-xl font-semibold">
              {cliente.nome}
            </h2>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Clientes