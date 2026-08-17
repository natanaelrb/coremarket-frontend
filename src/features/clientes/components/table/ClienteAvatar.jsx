import { initials } from "../../utils/formatters";

const COLORS = [
  "from-violet-500 to-fuchsia-500",
  "from-blue-500 to-cyan-500",
  "from-emerald-500 to-teal-500",
  "from-amber-500 to-orange-500",
  "from-rose-500 to-pink-500",
  "from-indigo-500 to-violet-500",
];

export default function ClienteAvatar({ nome }) {
  const color =
    COLORS[
      nome.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) %
        COLORS.length
    ];

  return (
    <div
      className={`
        w-10
        h-10
        rounded-xl
        bg-gradient-to-br
        ${color}
        flex
        items-center
        justify-center
        text-[var(--sidebar-text)]
        text-xs
        font-bold
        shadow-md
        transition-all
        duration-300
        group-hover:scale-110
        group-hover:shadow-lg
        shrink-0
      `}
    >
      {initials(nome)}
    </div>
  );
}
