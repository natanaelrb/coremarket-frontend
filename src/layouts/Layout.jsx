import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Layout({ children }) {
  return (
    <div
      className="
        flex
        h-screen
        overflow-hidden
        bg-[var(--bg-app)]
        text-[var(--text-primary)]
      "
    >
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Topbar />

        <main className="flex-1 overflow-y-auto px-8 py-8">
          {children}
        </main>
      </div>
    </div>
  );
}