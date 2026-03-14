import { Outlet } from 'react-router-dom'
import { Sidebar } from '@/components/shared/sidebar'

export function AppLayout() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[1600px] gap-8 px-8 py-8 2xl:max-w-[1720px]">
        <Sidebar />

        <div className="flex-1">
          <header className="mb-8 flex flex-col gap-2">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
              Painel financeiro
            </p>

            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-white">
                  PhoneLedger
                </h1>
                <p className="mt-1 text-sm text-slate-400">
                  Controle financeiro pessoal com módulo de compras de iPhone
                </p>
              </div>
            </div>
          </header>

          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}