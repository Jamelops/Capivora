import { SectionCard } from '@/components/ui/section-card'
import { StatCard } from '@/components/ui/stat-card'

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-3">
        <StatCard
          label="Saldo total"
          value="R$ 12.480,00"
          hint="+8.2% este mês"
          hintColor="text-emerald-400"
        />

        <StatCard
          label="Gastos do mês"
          value="R$ 4.230,00"
          hint="-12 lançamentos recentes"
          hintColor="text-rose-400"
        />

        <StatCard
          label="Compras de iPhone"
          value="3 registradas"
          hint="1 em andamento"
          hintColor="text-blue-400"
        />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
        <SectionCard title="Últimas movimentações">
          <div className="space-y-4">
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
        </SectionCard>

        <SectionCard title="Compras recentes">
          <div className="space-y-4">
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
        </SectionCard>
      </section>
    </div>
  )
}