import Card from "../../../../shared/components/layout/Card.jsx";

/**
 * Shared wrapper for every chart panel in the Análises section: title +
 * consistent padding/sizing so charts only need to render their content.
 */
export default function ChartCard({ title, children, className = "" }) {
  return (
    <Card className={`p-5 animate-slide-up ${className}`}>
      <h3 className="mb-4 text-sm font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      {children}
    </Card>
  );
}
