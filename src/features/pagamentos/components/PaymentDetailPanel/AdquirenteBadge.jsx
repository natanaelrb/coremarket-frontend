/** Small "VISA"/"MASTERCARD" wordmark badge shown next to bandeira. */
export function AdquirenteBadge({ bandeira }) {
  if (!bandeira) return null;
  return (
    <span className="text-sm font-black italic tracking-tight text-blue-700 dark:text-blue-400">
      {bandeira === 'VISA' ? 'VISA' : bandeira}
    </span>
  );
}
