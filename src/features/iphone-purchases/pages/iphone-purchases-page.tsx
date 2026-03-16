import {
  ArrowUpRight,
  Boxes,
  CircleDollarSign,
  PackageCheck,
  Pencil,
  Plus,
  Search,
  Smartphone,
  Truck,
} from 'lucide-react'

import { SectionCard } from '@/components/ui/section-card'

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
      statusColor: 'text-sky-400',
      profitColor: 'text-emerald-400',
      statusBg: 'bg-sky-500/15',
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
      statusBg: 'bg-emerald-500/15',
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
      statusBg: 'bg-amber-500/15',
    },
  ]

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-white/10 bg-white/5 px-5 py-5 shadow-xl backdrop-blur">
        <div className="grid gap-5 xl:grid-cols-[1.5fr_1fr] xl:items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
              Operações iPhone
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white xl:text-[2rem]">
              Compras e margem de revenda
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
              Acompanhe status logístico, custo total, revenda estimada e margem
              projetada de cada operação.
            </p>

            <div className="mt-4 flex flex-wrap gap-2.5">
              <div className="rounded-2xl border border-sky-500/10 bg-sky-500/10 px-3.5 py-2.5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-sky-300/80">
                  Fluxo padrão
                </p>
                <p className="mt-1 text-lg font-semibold text-white">
                  Xianyu → ACBuy
                </p>
              </div>

              <div className="rounded-2xl border border-violet-500/10 bg-violet-500/10 px-3.5 py-2.5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-violet-300/80">
                  Pagamento
                </p>
                <p className="mt-1 text-lg font-semibold text-white">
                  CoinPal + Bybit
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-500/10 bg-emerald-500/10 px-3.5 py-2.5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-emerald-300/80">
                  Margem média
                </p>
                <p className="mt-1 text-lg font-semibold text-white">
                  R$ 956,00
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-2.5">
            <div className="rounded-2xl border border-white/5 bg-white/5 px-4 py-3.5">
              <p className="text-sm text-slate-400">Visão rápida</p>
              <p className="mt-1.5 font-medium leading-6 text-white">
                Você já tem 3 operações registradas e 1 delas ainda está em andamento.
              </p>
            </div>

            <div className="rounded-2xl border border-white/5 bg-white/5 px-4 py-3.5">
              <p className="text-sm text-slate-400">Observação</p>
              <p className="mt-1.5 font-medium leading-6 text-white">
                A margem projetada permanece positiva nas três compras registradas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 px-4 py-4 shadow-xl backdrop-blur">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-slate-400">Compras registradas</p>
              <h3 className="mt-2 text-[2rem] font-bold leading-none text-white">
                3
              </h3>
            </div>

            <div className="rounded-2xl bg-sky-500/15 p-2.5 text-sky-400">
              <Boxes size={18} />
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-sky-400">Base inicial do módulo</p>
            <span className="text-xs text-slate-400">ativo</span>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 px-4 py-4 shadow-xl backdrop-blur">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-slate-400">Custo total investido</p>
              <h3 className="mt-2 text-[2rem] font-bold leading-none text-white">
                R$ 7.580,00
              </h3>
            </div>

            <div className="rounded-2xl bg-rose-500/15 p-2.5 text-rose-400">
              <CircleDollarSign size={18} />
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-rose-400">Capital em operação</p>
            <span className="text-xs text-slate-400">em uso</span>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 px-4 py-4 shadow-xl backdrop-blur">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-slate-400">Lucro estimado</p>
              <h3 className="mt-2 text-[2rem] font-bold leading-none text-white">
                R$ 2.870,00
              </h3>
            </div>

            <div className="rounded-2xl bg-emerald-500/15 p-2.5 text-emerald-400">
              <ArrowUpRight size={18} />
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-emerald-400">Projeção atual de revenda</p>
            <span className="text-xs text-slate-400">positiva</span>
          </div>
        </div>
      </section>

      <SectionCard
        title="Compras de iPhone"
        description="Acompanhe custos, status logístico e margem estimada de cada compra."
        action={
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="relative">
              <Search
                size={16}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              />
              <input
                type="text"
                placeholder="Buscar compra..."
                className="w-full rounded-2xl border border-white/10 bg-white/5 py-2.5 pl-10 pr-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-400/40 lg:w-[220px]"
              />
            </div>

            <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-blue-400/30 bg-blue-500/20 px-4 py-2.5 text-sm font-medium text-blue-300 transition hover:bg-blue-500/30">
              <Plus size={16} />
              Nova compra
            </button>
          </div>
        }
      >
        <div className="grid gap-4">
          {purchases.map((purchase) => (
            <article
              key={purchase.id}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/[0.07]"
            >
              <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-semibold text-white">
                      {purchase.model} {purchase.storage}
                    </h3>

                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${purchase.statusBg} ${purchase.statusColor}`}
                    >
                      {purchase.status}
                    </span>
                  </div>

                  <p className="text-sm text-slate-400">
                    {purchase.color} • {purchase.version}
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl bg-white/5 px-4 py-3">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                        Fluxo da compra
                      </p>
                      <p className="mt-2 text-sm text-slate-300">{purchase.route}</p>
                    </div>

                    <div className="rounded-2xl bg-white/5 px-4 py-3">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                        Margem estimada
                      </p>
                      <p className={`mt-2 text-lg font-semibold ${purchase.profitColor}`}>
                        {purchase.profit}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3 xl:min-w-[440px]">
                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-sm text-slate-400">Status logístico</p>
                    <div className="mt-3 flex items-center gap-2">
                      <Truck size={16} className={purchase.statusColor} />
                      <p className={`text-sm font-medium ${purchase.statusColor}`}>
                        {purchase.status}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-sm text-slate-400">Custo total</p>
                    <p className="mt-3 text-base font-semibold text-white">
                      {purchase.cost}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-sm text-slate-400">Revenda estimada</p>
                    <p className="mt-3 text-base font-semibold text-white">
                      {purchase.resale}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-3 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <PackageCheck size={16} />
                  <span>Operação registrada e pronta para acompanhamento</span>
                </div>

                <div className="flex gap-3">
                  <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10">
                    <Smartphone size={16} />
                    Ver detalhes
                  </button>

                  <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-blue-400/30 bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-300 transition hover:bg-blue-500/30">
                    <Pencil size={16} />
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