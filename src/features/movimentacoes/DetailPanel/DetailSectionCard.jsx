export default function DetailSectionCard({ title, children }) {
  return (
    <div className="border-b border-white/5 px-5 py-4 last:border-b-0">
      {title && <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">{title}</h4>}
      {children}
    </div>
  );
}
