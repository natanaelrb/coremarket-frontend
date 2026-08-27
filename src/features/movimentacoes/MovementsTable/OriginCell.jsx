import { Link2 } from 'lucide-react';

export default function OriginCell({ label, isLink }) {
  return (
    <div className="flex items-center gap-1.5">
      {isLink && <Link2 className="h-3.5 w-3.5 shrink-0 text-violet-400" />}
      <span className={`truncate text-sm ${isLink ? 'text-violet-400 hover:underline cursor-pointer' : 'text-slate-300'}`}>
        {label}
      </span>
    </div>
  );
}
