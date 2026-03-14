export function DashboardPage() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur">
          <p className="text-sm text-slate-400">Saldo total</p>
          <h3 className="mt-3 text-3xl font-bold text-white">R$ 12.480,00</h3>
          <p className="mt-2 text-sm text-emerald-400">+8.2% este mês</p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur">
          <p className="text-sm text-slate-400">Gastos do mês</p>
          <h3 className="mt-3 text-3xl font-bold text-white">R$ 4.230,00</h3>
          <p className="mt-2 text-sm text-rose-400">-12 lançamentos recentes</p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur">
          <p className="text-sm text-slate-400">Compras de iPhone</p>
          <h3 className="mt-3 text-3xl font-bold text-white">3 registradas</h3>
          <p className="mt-2 text-sm text-blue-400">1 em andamento</p>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
          <h2 className="text-xl font-semibold text-white">Últimas movimentações</h2>
          <div className="mt-5 space-y-4">
            <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
              <div>
                <p className="font-medium text-white">Compra de acessórios</p>
                <p className="text-sm text-slate-400">Hoje, 14:20</p>
              </div>
              <span className="text-rose-400">- R$ 320,00</span>
            </div>

            <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
              <div>
                <p className="font-medium text-white">Venda de iPhone 13 Pro</p>
                <p className="text-sm text-slate-400">Ontem, 19:10</p>
              </div>
              <span className="text-emerald-400">+ R$ 4.500,00</span>
            </div>

            <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
              <div>
                <p className="font-medium text-white">Recarga CoinPal</p>
                <p className="text-sm text-slate-400">Ontem, 11:05</p>
              </div>
              <span className="text-rose-400">- R$ 2.100,00</span>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
          <h2 className="text-xl font-semibold text-white">Compras recentes</h2>
          <div className="mt-5 space-y-4">
            <div className="rounded-2xl bg-white/5 p-4">
              <p className="font-medium text-white">iPhone 13 Pro 128GB</p>
              <p className="mt-1 text-sm text-slate-400">Xianyu → ACBuy → CoinPal</p>
              <p className="mt-3 text-sm text-blue-400">Em transporte</p>
            </div>

            <div className="rounded-2xl bg-white/5 p-4">
              <p className="font-medium text-white">iPhone 14 Pro 256GB</p>
              <p className="mt-1 text-sm text-slate-400">Compra finalizada</p>
              <p className="mt-3 text-sm text-emerald-400">Entregue</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}