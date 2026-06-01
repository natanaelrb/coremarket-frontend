import { useEffect, useState } from "react"
import clienteService from "../services/clienteService"
import ClienteCard from "../components/ClienteCard"
import NovoClienteModal from "../components/NovoClienteModal"
import Toast from "../components/Toast"

function Clientes() {

  const [clientes, setClientes] = useState([])
  const [modalAberto, setModalAberto] = useState(false)
  const [toast, setToast] = useState(null)

  useEffect(() => {
    buscarClientes()
  }, [])

  useEffect(() => {

  if (toast) {

    setTimeout(() => {
      setToast(null)
    }, 3000)

  }

}, [toast])

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

        <button
          onClick={() => setModalAberto(true)}
          className="bg-green-500 hover:bg-green-600 transition px-4 py-2 rounded-lg font-medium"
        >
          Novo Cliente
        </button>
      </div>

      <div className="grid gap-4">

        {clientes.map(cliente => (

          <ClienteCard
            key={cliente.id}
            cliente={cliente}
          />
          
        ))}

      </div>
        <NovoClienteModal
          aberto={modalAberto}
          fechar={() => setModalAberto(false)}
          atualizarClientes={buscarClientes}
          setToast={setToast}
        />

      {toast && (
        <Toast
          mensagem={toast.mensagem}
          tipo={toast.tipo}
      />
)}

    </div>
  )
}

export default Clientes