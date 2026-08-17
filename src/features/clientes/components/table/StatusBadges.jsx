import { CheckCircle2, Star, AlertTriangle, Ban } from "lucide-react";

function Badge({ icon: Icon, children, className }) {
  return (
    <span
      className={`
        inline-flex items-center gap-1.5
        px-2.5 py-1
        rounded-full
        text-[11px] font-semibold
        border
        transition-all duration-200
        hover:scale-105
        ${className}
      `}
    >
      <Icon size={12} />
      {children}
    </span>
  );
}

export default function StatusBadges({ cliente }) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {cliente.status === "Ativo" ? (
        <Badge
          icon={CheckCircle2}
          className="
            bg-emerald-50
            text-emerald-700
            border-emerald-200

            dark:bg-emerald-500/10
            dark:text-emerald-400
            dark:border-emerald-500/20
          "
        >
          Ativo
        </Badge>
      ) : (
        <Badge
          icon={Ban}
          className="
            bg-slate-100
            text-slate-600
            border-slate-200

            dark:bg-white/5
            dark:text-slate-400
            dark:border-slate-200 dark:border-white/10
          "
        >
          Inativo
        </Badge>
      )}

      {cliente.vip && (
        <Badge
          icon={Star}
          className="
            bg-amber-50
            text-amber-700
            border-amber-200
            shadow-sm

            dark:bg-amber-500/10
            dark:text-amber-300
            dark:border-amber-500/20
          "
        >
          VIP
        </Badge>
      )}

      {cliente.inadimplente && (
        <Badge
          icon={AlertTriangle}
          className="
            bg-rose-50
            text-rose-700
            border-rose-200

            dark:bg-rose-500/10
            dark:text-rose-400
            dark:border-rose-500/20
          "
        >
          Inadimplente
        </Badge>
      )}
    </div>
  );
}
