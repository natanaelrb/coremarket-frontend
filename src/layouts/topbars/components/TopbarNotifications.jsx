import { Bell } from "lucide-react";

export default function TopbarNotifications() {
  return (
    <button className="relative w-10 h-10 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12162C] flex items-center justify-center">
      <Bell size={17} />

      <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-[10px] text-white flex items-center justify-center">
        3
      </span>
    </button>
  );
}