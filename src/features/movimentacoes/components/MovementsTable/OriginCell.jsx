import { Link2 } from 'lucide-react';

export default function OriginCell({ label, isLink }) {
  return (
    <div className="flex min-w-0 items-center gap-1.5">
      {isLink && (
        <Link2
          className="
            h-3.5
            w-3.5
            shrink-0
            text-green-600
            transition-colors
            group-hover:text-green-700
          "
          strokeWidth={2}
        />
      )}

      <span
        title={label}
        className={`
          min-w-0
          truncate
          text-sm
          font-medium
          transition-colors
          ${
            isLink
              ? `
                cursor-pointer
                text-green-600
                hover:text-green-700
                hover:underline
                hover:underline-offset-2
              `
              : 'text-slate-600'
          }
        `}
      >
        {label}
      </span>
    </div>
  );
}