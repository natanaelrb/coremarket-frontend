export default function UserCell({ usuario }) {
  return (
    <div className="flex min-w-0 items-center gap-2.5">
      <span
        className="
          flex h-8 w-8 shrink-0
          items-center justify-center
          rounded-full
          border border-slate-200
          bg-slate-100
          text-sm
          font-semibold
          text-slate-600
          transition-colors
          group-hover:border-slate-300
          group-hover:bg-slate-200
        "
        title={usuario.nome}
      >
        {usuario.avatar}
      </span>

      <span
        className="
          min-w-0
          truncate
          text-sm
          font-medium
          text-slate-700
        "
        title={usuario.nome}
      >
        {usuario.nome}
      </span>
    </div>
  );
}