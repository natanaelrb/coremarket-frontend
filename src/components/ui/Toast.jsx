import { useEffect, useState } from "react";
import { CheckCircle2, XCircle, AlertTriangle, Info, X } from "lucide-react";

const configs = {
  sucesso: { icon: CheckCircle2,  bg: "bg-emerald-50 dark:bg-emerald-500/10", border: "border-emerald-200 dark:border-emerald-500/20", text: "text-emerald-800 dark:text-emerald-300", icon_c: "text-emerald-500" },
  erro:    { icon: XCircle,       bg: "bg-red-50 dark:bg-red-500/10",         border: "border-red-200 dark:border-red-500/20",         text: "text-red-800 dark:text-red-300",         icon_c: "text-red-500" },
  aviso:   { icon: AlertTriangle, bg: "bg-amber-50 dark:bg-amber-500/10",     border: "border-amber-200 dark:border-amber-500/20",     text: "text-amber-800 dark:text-amber-300",     icon_c: "text-amber-500" },
  info:    { icon: Info,          bg: "bg-blue-50 dark:bg-blue-500/10",       border: "border-blue-200 dark:border-blue-500/20",       text: "text-blue-800 dark:text-blue-300",       icon_c: "text-blue-500" },
};

export default function Toast({ mensagem, tipo = "sucesso", onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
  }, []);

  const cfg = configs[tipo] || configs.info;
  const Icon = cfg.icon;

  return (
    <div
      className={`
        fixed bottom-5 right-5 z-50
        flex items-start gap-3 px-4 py-3 rounded-xl border shadow-lg text-sm max-w-sm
        transition-all duration-300
        ${cfg.bg} ${cfg.border} ${cfg.text}
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
      `}
    >
      <Icon size={16} className={`flex-shrink-0 mt-0.5 ${cfg.icon_c}`} />
      <p className="flex-1">{mensagem}</p>
      {onClose && (
        <button onClick={onClose} className="opacity-50 hover:opacity-100 transition mt-0.5">
          <X size={14} />
        </button>
      )}
    </div>
  );
}
