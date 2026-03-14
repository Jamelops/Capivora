import { SectionCard } from '@/components/ui/section-card'
import { StatCard } from '@/components/ui/stat-card'

export function IphonePurchasesPage() {
  const purchases = [
    {
      id: 1,
      model: 'iPhone 13 Pro',
      storage: '128GB',
      color: 'Green',
      version: 'US Version',
      status: 'Em transporte',
      route: 'Xianyu → ACBuy → CoinPal → Bybit',
      cost: 'R$ 2.380,00',
      resale: 'R$ 3.350,00',
      profit: 'R$ 970,00',
      statusColor: 'text-blue-400',
      profitColor: 'text-emerald-400',
    },
    {
      id: 2,
      model: 'iPhone 14 Pro',
      storage: '256GB',
      color: 'Deep Purple',
      version: 'Factory Unlocked',
      status: 'Entregue',
      route: 'Xianyu → ACBuy → CoinPal → Bybit',
      cost: 'R$ 3.150,00',
      resale: 'R$ 4.250,00',
      profit: 'R$ 1.100,00',
      statusColor: 'text-emerald-400',
      profitColor: 'text-emerald-400',
    },
    {
      id: 3,
      model: 'iPhone 13',
      storage: '128GB',
      color: 'Midnight',
      version: 'US Version',
      status: 'Aguardando envio',
      route: 'Xianyu → ACBuy → CoinPal → Bybit',
      cost: 'R$ 2.050,00',
      resale: 'R$ 2.850,00',
      profit: 'R$ 800,00',
      statusColor: 'text-amber-400',
      profitColor: 'text-emerald-400',
    },
  ]

  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-3">
        <StatCard
          label="Compras registradas"
          value="3"
          hint="Base inicial do módulo"
        />

        <StatCard
          label="Custo total investido"
          value="R$ 7.580,00"
          hint="Capital em operação"
          hintColor="text-rose-400"
        />

        <StatCard
          label="Lucro estimado"
          value="R$ 2.870,00"
          hint="Projeção atual de revenda"
          hintColor="text-emerald-400"
        />
      </section>

      <SectionCard
        title="Compras de iPhone"
        description="Acompanhe custos, status logístico e margem estimada de cada compra."
        action={
          <button className="rounded-2xl border border-blue-400/30 bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-300 transition hover:bg-blue-500/30">
            Nova compra
          </button>
        }
      >
        <div className="grid gap-4">
          {purchases.map((purchase) => (
            <article
              key={purchase.id}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/[0.07]"
            >
              <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {purchase.model} {purchase.storage}
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      {purchase.color} • {purchase.version}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                      Fluxo da compra
                    </p>
                    <p className="mt-2 text-sm text-slate-300">{purchase.route}</p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3 xl:min-w-[420px]">
                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-sm text-slate-400">Status</p>
                    <p className={`mt-2 text-sm font-medium ${purchase.statusColor}`}>
                      {purchase.status}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-sm text-slate-400">Custo total</p>
                    <p className="mt-2 text-base font-semibold text-white">
                      {purchase.cost}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-sm text-slate-400">Revenda estimada</p>
                    <p className="mt-2 text-base font-semibold text-white">
                      {purchase.resale}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-3 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-slate-400">Margem estimada</p>
                  <p className={`mt-1 text-lg font-semibold ${purchase.profitColor}`}>
                    {purchase.profit}
                  </p>
                </div>

                <div className="flex gap-3">
                  <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10">
                    Ver detalhes
                  </button>

                  <button className="rounded-2xl border border-blue-400/30 bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-300 transition hover:bg-blue-500/30">
                    Editar compra
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionCard>
    </div>
  )
}