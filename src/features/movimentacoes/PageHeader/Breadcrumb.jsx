import { ChevronRight } from 'lucide-react';

export default function Breadcrumb({ items }) {
  return (
    <nav className="mb-2 flex items-center gap-1.5 text-sm text-slate-500">
      {items.map((item, i) => (
        <span key={item} className="flex items-center gap-1.5">
          {i > 0 && <ChevronRight className="h-3.5 w-3.5" />}
          <span className={i === items.length - 1 ? 'text-slate-500' : 'text-slate-400'}>{item}</span>
        </span>
      ))}
    </nav>
  );
}
