export default function SelectFilter({
  label,
  value,
  onChange,
  options,
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-medium text-slate-600">
        {label}
      </span>

      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="
          h-10
          w-full
          rounded-lg
          border border-slate-200
          bg-white
          px-3
          text-sm
          font-medium
          text-slate-700
          outline-none
          transition
          hover:border-slate-300
          focus:border-emerald-500
          focus:ring-2
          focus:ring-emerald-500/10
        "
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}