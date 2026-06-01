function ClienteCard({ cliente }) {

  return (
    <div
      className="
        bg-zinc-900
        border
        border-zinc-800
        rounded-xl
        p-5
        hover:border-green-500
        hover:-translate-y-1
        hover:shadow-lg
        hover:shadow-green-500/10
        transition-all
        duration-300
        cursor-pointer
      "
    >

      <div className="flex items-center justify-between">

        <div>
          <div className="flex items-center gap-2 mb-2"></div>
            <h2 className="text-xl font-semibold  text-white">
              {cliente.nome}
            </h2>

            <span
              className="
                bg-green-500/20
                text-green-400
                text-xs
                px-2
                py-1
                rounded-full
                border
                border-green-500/20
              "
            > 
              Ativo
            </span>
<p className="text-zinc-400 text-sm">
            Telefone: {cliente.telefone || "Não informado"}
          </p>

          <p className="text-zinc-500 text-xs mt-1">
            ID: {cliente.id}
          </p>

        </div>

        <div
          className="
            w-14
            h-14
            rounded-full
            bg-green-500
            flex
            items-center
            justify-center
            font-bold
            text-lg
            text-black
            shadow-lg
            shadow-green-500/30
          "
        >
          {cliente.nome.charAt(0).toUpperCase()}
        </div>

      </div>

    </div>
  )
}

export default ClienteCard