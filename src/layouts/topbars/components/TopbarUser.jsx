export default function TopbarUser() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center text-white font-semibold">
        A
      </div>

      <div>
        <p className="text-sm font-semibold">
          Admin
        </p>

        <p className="text-xs text-slate-500">
          Administrador
        </p>
      </div>
    </div>
  );
}