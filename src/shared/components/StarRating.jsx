import { Star } from 'lucide-react'

/**
 * Exibe uma nota em estrelas (0 a 5), com suporte a meia-estrela visual simples.
 */
export default function StarRating({ value = 0, size = 14, showValue = false }) {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1)

  return (
    <div className="flex items-center gap-0.5">
      {stars.map((star) => (
        <Star
          key={star}
          size={size}
          className={
            star <= Math.round(value)
              ? 'fill-amber-400 text-amber-400'
              : 'fill-gray-200 text-gray-200 dark:fill-[#2a2e54] dark:text-[#2a2e54]'
          }
        />
      ))}
      {showValue && (
        <span className="ml-1 text-xs font-medium text-gray-500 dark:text-gray-400">
          {value.toFixed(1)}
        </span>
      )}
    </div>
  )
}
