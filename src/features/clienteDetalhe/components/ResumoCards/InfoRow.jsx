/** One label/value row inside a summary card. */
export function InfoRow({ label, value, tone = 'text-white light:text-slate-900' }) {
  return (
    <div className="flex items-center justify-between py-1.5 text-sm">
      <span className="text-slate-400 light:text-slate-500">{label}</span>
      <span className={`font-medium ${tone}`}>{value}</span>
    </div>
  )
}
