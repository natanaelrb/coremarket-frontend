export default function Breadcrumb({ items = [] }) {
  return (
    <p className="mt-0.5 text-sm text-gray-400 dark:text-gray-500">
      {items.map((item, index) => (
        <span key={item}>
          {index > 0 && <span className="mx-1.5">›</span>}
          {item}
        </span>
      ))}
    </p>
  )
}
