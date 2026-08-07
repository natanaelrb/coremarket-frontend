// Par label/valor reutilizado dentro das abas do painel de detalhes.
export function InfoField({ label, value, valueClassName = '' }) {
  return (
    <div>
      <p className="text-xs text-gray-400 dark:text-gray-500">{label}</p>
      <p className={`mt-0.5 text-sm font-medium text-gray-800 dark:text-gray-100 ${valueClassName}`}>{value ?? '—'}</p>
    </div>
  );
}
