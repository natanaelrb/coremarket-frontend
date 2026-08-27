export default function UserCell({ usuario }) {
  return (
    <div className="flex items-center gap-2">
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-sm">
        {usuario.avatar}
      </span>
      <span className="truncate text-sm text-slate-300">{usuario.nome}</span>
    </div>
  );
}
