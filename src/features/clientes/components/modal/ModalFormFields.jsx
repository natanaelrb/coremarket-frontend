import React from "react";

export function ModalTextField({ label, value, onChange, placeholder, error }) {
  return (
    <div>
      <label className="text-[12px] text-slate-500 dark:text-slate-400 mb-1.5 block">
        {label}
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full rounded-lg border bg-white dark:bg-[#0E1226] px-3 py-2 text-[13px] text-slate-800 dark:text-slate-100 outline-none transition-colors ${
          error
            ? "border-red-400"
            : "border-slate-200 dark:border-slate-200 dark:border-white/10 focus:border-violet-500"
        }`}
      />
      {error && <p className="text-[11px] text-red-500 mt-1">{error}</p>}
    </div>
  );
}

export function ModalSelectField({ label, value, onChange, options }) {
  return (
    <div>
      <label className="text-[12px] text-slate-500 dark:text-slate-400 mb-1.5 block">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-slate-200 dark:border-slate-200 dark:border-white/10 bg-white dark:bg-[#0E1226] px-3 py-2 text-[13px] text-slate-800 dark:text-slate-100 outline-none focus:border-violet-500 transition-colors"
      >
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}
