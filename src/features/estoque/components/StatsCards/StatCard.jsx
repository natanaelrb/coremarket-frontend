import Card from "../../../../shared/components/layout/Card.jsx";
import { formatCurrency } from "../../../../shared/utils/formatCurrency.js";
import {
  TONE_ICON_STYLES,
  SUFFIX_TONE_STYLES,
} from "./statCardsConfig.js";

function formatValue(value, format) {
  if (format === "currency") return formatCurrency(value);

  if (format === "decimal") {
    return value.toLocaleString("pt-BR", {
      maximumFractionDigits: 1,
    });
  }

  return value.toLocaleString("pt-BR");
}

export default function StatCard({
  icon: Icon,
  tone,
  label,
  value,
  suffix,
  suffixTone,
  format,
  style,
}) {
  return (
    <Card
      className="
        flex items-center gap-3 p-4
        transition-all duration-200
        hover:-translate-y-0.5 hover:shadow-md
        animate-slide-up
      "
      style={style}
    >
      {/* Ícone */}
      <div
        className={`
          flex h-11 w-11 shrink-0
          items-center justify-center
          rounded-xl
          ${TONE_ICON_STYLES[tone] ?? TONE_ICON_STYLES.neutral}
        `}
      >
        <Icon size={20} strokeWidth={2} />
      </div>

      {/* Informações */}
      <div className="min-w-0">
        <p className="truncate text-xs font-medium text-gray-500 dark:text-gray-400">
          {label}
        </p>

        <p className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          {formatValue(value, format)}
        </p>

        {suffix && (
          <p
            className={`
              mt-0.5 truncate
              text-[11px] font-medium
              ${SUFFIX_TONE_STYLES[suffixTone] ?? SUFFIX_TONE_STYLES.neutral}
            `}
          >
            {suffix}
          </p>
        )}
      </div>
    </Card>
  );
}