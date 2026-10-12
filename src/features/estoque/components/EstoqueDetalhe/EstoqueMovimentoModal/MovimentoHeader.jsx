import { X } from "lucide-react";

export default function MovimentoHeader({
  config,
  onClose,
}) {
  const Icon = config.icon;

  return (
    <header className="relative shrink-0 border-b border-gray-100 px-5 py-4 dark:border-white/10">
      <div className="flex items-center gap-3 pr-8">
        <div className={config.iconClass}>
          <Icon size={19} strokeWidth={2} />
        </div>

        <div>
          <h2 className="text-base font-bold text-gray-900 dark:text-white">
            {config.title}
          </h2>

          <p className="mt-0.5 text-xs text-gray-400 dark:text-gray-500">
            {config.description}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar"
        className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-white/5 dark:hover:text-gray-200"
      >
        <X size={17} />
      </button>
    </header>
  );
}