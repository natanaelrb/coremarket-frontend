import Sidebar from "../components/Sidebar";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#F5F6FA]">
      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-8 min-w-0">{children}</main>
      </div>
    </div>
  );
}

export default Layout;
