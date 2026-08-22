/**
 * Small rounded thumbnail used both in the table rows and the detail panel
 * header. Falls back to a neutral placeholder block if the image fails.
 */
export default function ProductImage({ src, alt, size = 40 }) {
  return (
    <div
      className="shrink-0 overflow-hidden rounded-lg bg-gray-100 dark:bg-[#1E2142]"
      style={{ width: size, height: size }}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        loading="lazy"
        onError={(event) => {
          event.currentTarget.style.visibility = 'hidden'
        }}
      />
    </div>
  )
}
