export default function StatCardSkeleton() {
  return (
    <div
      className="
        rounded-xl
        border border-slate-200/80
        bg-white
        p-4
        shadow-sm
        dark:border-[#252a4a]
        dark:bg-[#141833]
      "
      aria-hidden="true"
    >
      <div className="flex items-center gap-3">
        {/* Ícone */}
        <div className="skeleton h-10 w-10 shrink-0 rounded-lg" />

        {/* Label e valor */}
        <div className="min-w-0 flex-1 space-y-2">
          <div className="skeleton h-2.5 w-24 rounded" />
          <div className="skeleton h-5 w-16 rounded" />
        </div>
      </div>

      {/* Caption */}
      <div className="skeleton mt-3 h-3 w-20 rounded" />
    </div>
  );
}