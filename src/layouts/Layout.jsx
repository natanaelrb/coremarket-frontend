function Layout({ children }) {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="flex">
        
        <aside className="w-64 h-screen bg-zinc-900 border-r border-zinc-800 p-4">
          <h1 className="text-2xl font-bold text-green-500">
            CoreMarket
          </h1>

          <nav className="mt-8 flex flex-col gap-2">
            <button className="text-left p-3 rounded-lg hover:bg-zinc-800 transition">
              Clientes
            </button>

            <button className="text-left p-3 rounded-lg hover:bg-zinc-800 transition">
              Dashboard
            </button>
          </nav>
        </aside>

        <main className="flex-1 p-6">
          {children}
        </main>

      </div>
    </div>
  )
}

export default Layout