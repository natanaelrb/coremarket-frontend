export default function FilterSelect({
  label,
  value,
  onChange,
  options,
}) {
  return (
    <div className="min-w-0">
      <label
        className="
          mb-1.5 block
          truncate
          text-xs font-semibold
          text-slate-500
          dark:text-slate-400
        "
      >
        {label}
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          h-10
          w-full
          min-w-0
          cursor-pointer
          rounded-lg
          border border-slate-200
          bg-white
          px-3
          text-sm
          text-slate-700
          outline-none
          transition-all
          hover:border-slate-300
          focus:border-emerald-500
          focus:ring-2
          focus:ring-emerald-500/10
          dark:border-[#252a4a]
          dark:bg-[#0f1230]
          dark:text-slate-200
          dark:hover:border-[#3a4168]
          dark:focus:border-emerald-500
          dark:focus:ring-emerald-500/10
        "
      >
        {options.map((opt) => (
          <option
            key={opt.value}
            value={opt.value}
          >
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}