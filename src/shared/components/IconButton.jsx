/**
 * Botão quadrado apenas com ícone.
 * variant "outline" -> usado no header (tema, notificações)
 * variant "ghost"    -> usado nas ações de linha da tabela (ver, editar, excluir)
 */
export default function IconButton({
  icon: Icon,
  onClick,
  title,
  variant = "outline",
  tone = "default", // "default" | "danger"
  size = 16,
  className = "",
}) {
  const base = `
  flex
  items-center
  justify-center
  cursor-pointer
  transition-all
  duration-200
  hover:scale-110
  active:scale-95
  focus:outline-none
  focus:ring-2
  focus:ring-violet-500/40
  `;

  const variants = {
    outline:
      "w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-200 dark:border-white/10 bg-white shadow-sm hover:shadow-md dark:bg-white dark:bg-[#12162C] text-slate-500 dark:text-slate-300 hover:border-violet-300 dark:hover:border-violet-500/50",
    ghost:
      "w-8 h-8 rounded-md text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-100 dark:hover:bg-white/5",
  };

  const tones = {
    default: "hover:text-violet-600",
    danger: "hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className={`${base} ${variants[variant]} ${tones[tone]} ${className}`}
    >
      <Icon size={size} />
    </button>
  );
}
