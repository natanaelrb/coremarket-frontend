import AnexoItem from './AnexoItem.jsx'

export default function AnexosRecentes({ anexos }) {
  return (
    <div className="animate-fade-in-up stagger-5 flex flex-col rounded-xl border border-gray-100 bg-white p-4 shadow-sm dark:border-[#1c2044] dark:bg-[#141833]">
      <h4 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-200">Anexos Recentes</h4>

      <div className="flex-1 space-y-2">
        {anexos && anexos.length > 0 ? (
          anexos.map((anexo) => <AnexoItem key={anexo.nome} anexo={anexo} />)
        ) : (
          <p className="py-6 text-center text-sm text-gray-400 dark:text-gray-500">Nenhum anexo disponível.</p>
        )}
      </div>

      <button className="mt-3 w-full rounded-lg border border-gray-200 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 dark:border-[#252a4a] dark:text-gray-300 dark:hover:bg-[#1a1e3d]">
        Ver todos anexos
      </button>
    </div>
  )
}
