function Toast({ mensagem, tipo }) {

  return (

    <div
      className={`
        fixed
        top-5
        right-5
        px-5
        py-3
        rounded-xl
        text-white
        font-medium
        shadow-lg
        z-50
        animate-pulse

        ${tipo === "sucesso"
          ? "bg-green-500"
          : "bg-red-500"}
      `}
    >
      {mensagem}
    </div>

  )

}

export default Toast