import Card from "../../../../shared/components/layout/Card.jsx";

export default function ChartCard({
  title,
  description,
  children,
  className = "",
}) {
  return (
    <Card
      className={`
        group
        flex
        min-h-[330px]
        flex-col
        overflow-hidden
        p-5
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:shadow-md
        animate-slide-up
        ${className}
      `}
    >
      <div className="mb-4 shrink-0">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>

        {description && (
          <p className="mt-1 text-[11px] leading-4 text-gray-400 dark:text-gray-500">
            {description}
          </p>
        )}
      </div>

      <div className="min-h-0 flex-1">
        {children}
      </div>
    </Card>
  );
}