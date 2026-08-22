import { Bell } from 'lucide-react';
import AlertItem from './AlertItem';

export default function AlertsPanel({ alerts }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-[#141833] p-5">
      <div className="mb-3 flex items-center gap-2">
        <Bell className="h-4 w-4 text-violet-400" />
        <h3 className="text-sm font-semibold text-white">Alertas e Avisos</h3>
      </div>
      <ul className="space-y-2">
        {alerts.map((alert, i) => (
          <AlertItem key={alert.id} alert={alert} delay={i * 0.05} />
        ))}
      </ul>
    </div>
  );
}
