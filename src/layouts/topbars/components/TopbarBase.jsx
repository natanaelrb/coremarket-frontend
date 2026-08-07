import TopbarThemeButton from "./TopbarThemeButton";
import TopbarNotifications from "./TopbarNotifications";
import TopbarUser from "./TopbarUser";

export default function TopbarBase({ left, right }) {
  return (
    <header className="sticky top-2 z-40 border-b border-slate-200 dark:border-white/10 bg-[var(--bg-app)] backdrop-blur">
      <div className="px-8 py-4">
        {/* Linha superior */}
        <div className="flex items-center justify-end gap-3">
          <TopbarThemeButton />

          <TopbarNotifications />

          <TopbarUser />
        </div>

        {/* Linha inferior */}
        <div className="mt-6 flex items-center justify-between">
          {left}

          {right}
        </div>
      </div>
    </header>
  );
}
