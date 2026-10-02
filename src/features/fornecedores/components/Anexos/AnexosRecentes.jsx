import AnexoItem from "./AnexoItem.jsx";

export default function AnexosRecentes({ anexos = [] }) {
  const temAnexos = anexos.length > 0;

  return (
    <section
      className="
        animate-fade-in-up stagger-5 flex flex-col rounded-xl
        border border-slate-200/80 bg-white p-4
        shadow-sm shadow-slate-900/[0.02]
        dark:border-[#252a4a] dark:bg-[#141833] dark:shadow-black/10
      "
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100">
          Anexos Recentes
        </h4>

        {temAnexos && (
          <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 dark:bg-slate-500/10 dark:text-slate-400">
            {anexos.length}
          </span>
        )}
      </div>

      <div className="flex-1 space-y-2">
        {temAnexos ? (
          anexos.map((anexo, index) => (
            <AnexoItem
              key={anexo.id ?? anexo.nome ?? index}
              anexo={anexo}
            />
          ))
        ) : (
          <div className="flex min-h-28 items-center justify-center rounded-lg border border-dashed border-slate-200 bg-slate-50 px-4 py-6 text-center dark:border-[#3a4168] dark:bg-[#0f1230]">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Nenhum anexo disponível.
            </p>
          </div>
        )}
      </div>

      <button
        type="button"
        disabled={!temAnexos}
        className="
          mt-4 w-full rounded-lg border border-slate-200 px-3 py-2.5
          text-sm font-semibold text-slate-600 transition-colors
          hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700
          disabled:cursor-not-allowed disabled:opacity-50
          dark:border-[#3a4168] dark:text-slate-300
          dark:hover:border-emerald-500/20 dark:hover:bg-emerald-500/10
          dark:hover:text-emerald-400
        "
      >
        Ver todos os anexos
      </button>
    </section>
  );
}