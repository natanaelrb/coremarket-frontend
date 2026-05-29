function ClienteCard({ cliente }) {

  return (
    <div
      className="
        bg-zinc-900
        border
        border-zinc-800
        rounded-xl
        p-4
        hover:border-green-500
        transition
        cursor-pointer
      "
    >

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-xl font-semibold">
            {cliente.nome}
          </h2>

          <p className="text-zinc-400 text-sm">
            ID: {cliente.id}
          </p>
        </div>

        <div
          className="
            w-12
            h-12
            rounded-full
            bg-green-500
            flex
            items-center
            justify-center
            font-bold
            text-lg
          "
        >
          {cliente.nome.charAt(0)}
        </div>

      </div>

    </div>
  )
}

export default ClienteCard