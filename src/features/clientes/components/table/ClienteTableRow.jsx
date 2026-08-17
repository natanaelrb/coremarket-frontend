import ClienteAvatar from "./ClienteAvatar";
import StatusBadges from "./StatusBadges";
import RowActions from "./RowActions";
import { currency, formatDate } from "../../utils/formatters";

export default function ClienteTableRow({
  cliente,
  visibleCols,
  selected,
  onToggleSelect,
  onView,
  onEdit,
  onDelete,
  delay = 0,
}) {
  return (
    <tr
      className="
      cm-fade-up
      group
      cursor-pointer
      border-b
      border-slate-100
      dark:border-white/5

      transition-all
      duration-300
      hover:scale-[1.003]

      hover:bg-gradient-to-r
      hover:from-violet-50/70
      hover:to-indigo-50/30

      dark:hover:from-violet-500/5
      dark:hover:to-indigo-500/5

      hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]
      "
      style={{ animationDelay: `${delay}ms` }}
    >
      <td className="px-4 py-4">
        <input
          type="checkbox"
          checked={selected}
          onChange={() => onToggleSelect(cliente.id)}
          className="accent-violet-600"
        />
      </td>

      {visibleCols.codigo && (
        <td className="px-6 py-5 text-slate-400 font-medium">
          {cliente.codigo}
        </td>
      )}

      {visibleCols.nome && (
        <td className="px-6 py-5">
          <div className="flex items-center gap-2.5">
            <ClienteAvatar nome={cliente.nome} />
            <div>
              <div className="flex flex-col">
                <span className="text-[15px] font-bold text-slate-800 dark:text-[var(--sidebar-text)] transition-colors group-hover:text-violet-500 dark:group-hover:text-violet-400">
                  {cliente.nome}
                </span>

                <span className="text-xs font-medium mt-0.5 text-slate-400">
                  {cliente.tipo}
                </span>
              </div>
            </div>
          </div>
        </td>
      )}

      {visibleCols.cpf && (
        <td className="px-6 py-5 text-slate-500 dark:text-slate-400">
          {cliente.cpf}
        </td>
      )}
      {visibleCols.telefone && (
        <td className="px-6 py-5 text-slate-500 dark:text-slate-400">
          {cliente.telefone}
        </td>
      )}
      {visibleCols.cidade && (
        <td className="px-6 py-5 text-slate-500 dark:text-slate-400">
          {cliente.cidade}
        </td>
      )}
      {visibleCols.ultimaCompra && (
        <td className="px-6 py-5 text-slate-500 dark:text-slate-400">
          {formatDate(cliente.ultimaCompra)}
        </td>
      )}
      {visibleCols.valorGasto && (
        <td
          className="
              px-6
              py-5

              font-bold
              text-emerald-600
              dark:text-emerald-400

              tabular-nums
              tracking-tight
              "
        >
          {currency(cliente.valorGasto)}
        </td>
      )}
      {visibleCols.status && (
        <td className="px-6 py-5">
          <StatusBadges cliente={cliente} />
        </td>
      )}

      <td className="px-6 py-5">
        <RowActions
          cliente={cliente}
          onView={onView}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </td>
    </tr>
  );
}
