import {
  ArrowUpRight,
  BadgeDollarSign,
  Plus,
  Receipt,
  Search,
  ShoppingBag,
  UserRound,
} from 'lucide-react'

import { SectionCard } from '@/components/ui/section-card'

export function SalesPage() {
  const sales = [
    {
      id: 1,
      product: 'iPhone 13 Pro 128GB',
      customer: 'Fulano',
      date: '14/03/2026',
      total: 'R$ 4.500,00',
      received: 'R$ 2.000,00',
      pending: 'R$ 2.500,00',
      status: 'Parcialmente pago',
      statusColor: 'text-amber-400',
      statusBg: 'bg-amber-500/15',
    },
    {
      id: 2,
      product: 'Notebook Dell',
      customer: 'Ciclano',
      date: '10/03/2026',
      total: 'R$ 3.200,00',
      received: 'R$ 3.200,00',
      pending: 'R$ 0,00',
      status: 'Pago',
      statusColor: 'text-emerald-400',
      statusBg: 'bg-emerald-500/15',
    },
    {
      id: 3,
      product: 'Monitor LG 27"',
      customer: 'Beltrano',
      date: '08/03/2026',
      total: 'R$ 1.100,00',
      received: 'R$ 0,00',
      pending: 'R$ 1.100,00',
      status: 'Em aberto',
      statusColor: 'text-sky-400',
      statusBg: 'bg-sky-500/15',
    },
  ]

  const debtors = [
    { name: 'Fulano', product: 'iPhone 13 Pro 128GB', due: '5º dia útil', amount: 'R$ 2.500,00' },
    { name: 'Beltrano', product: 'Monitor LG 27"', due: '5º dia útil', amount: 'R$ 1.100,00' },
  ]

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-white/10 bg-white/5 px-5 py-5 shadow-xl backdrop-blur">
        <div className="grid gap-5 xl:grid-cols-[1.5fr_1fr] xl:items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
              Módulo de vendas
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white xl:text-[2rem]">
              Vendas e recebimentos
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
              Registre produtos vendidos, acompanhe recebimentos e identifique
              rapidamente quem ainda está devendo.
            </p>

            <div className="mt-4 flex flex-wrap gap-2.5">
              <div className="rounded-2xl border border-emerald-500/10 bg-emerald-500/10 px-3.5 py-2.5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-emerald-300/80">
                  Recebido
                </p>
                <p className="mt-1 text-lg font-semibold text-white">
                  R$ 5.200,00
                </p>
              </div>

              <div className="rounded-2xl border border-amber-500/10 bg-amber-500/10 px-3.5 py-2.5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-amber-300/80">
                  Pendente
                </p>
                <p className="mt-1 text-lg font-semibold text-white">
                  R$ 3.600,00
                </p>
              </div>

              <div className="rounded-2xl border border-sky-500/10 bg-sky-500/10 px-3.5 py-2.5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-sky-300/80">
                  Próxima cobrança
                </p>
                <p className="mt-1 text-lg font-semibold text-white">
                  5º dia útil
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-2.5">
            <div className="rounded-2xl border border-white/5 bg-white/5 px-4 py-3.5">
              <p className="text-sm text-slate-400">Visão rápida</p>
              <p className="mt-1.5 font-medium leading-6 text-white">
                O módulo de vendas ajuda a separar o que já entrou do que ainda precisa ser cobrado.
              </p>
            </div>

            <div className="rounded-2xl border border-white/5 bg-white/5 px-4 py-3.5">
              <p className="text-sm text-slate-400">Observação</p>
              <p className="mt-1.5 font-medium leading-6 text-white">
                Os lembretes poderão ser gerados com base no 5º dia útil de cada cobrança.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 px-4 py-4 shadow-xl backdrop-blur">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-slate-400">Vendas registradas</p>
              <h3 className="mt-2 text-[2rem] font-bold leading-none text-white">3</h3>
            </div>

            <div className="rounded-2xl bg-sky-500/15 p-2.5 text-sky-400">
              <ShoppingBag size={18} />
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-sky-400">Módulo ativo</p>
            <span className="text-xs text-slate-400">opcional</span>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 px-4 py-4 shadow-xl backdrop-blur">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-slate-400">Valor vendido</p>
              <h3 className="mt-2 text-[2rem] font-bold leading-none text-white">R$ 8.800,00</h3>
            </div>

            <div className="rounded-2xl bg-violet-500/15 p-2.5 text-violet-400">
              <BadgeDollarSign size={18} />
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-violet-400">Total negociado</p>
            <span className="text-xs text-slate-400">bruto</span>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 px-4 py-4 shadow-xl backdrop-blur">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-slate-400">Pendente de receber</p>
              <h3 className="mt-2 text-[2rem] font-bold leading-none text-white">R$ 3.600,00</h3>
            </div>

            <div className="rounded-2xl bg-amber-500/15 p-2.5 text-amber-400">
              <ArrowUpRight size={18} />
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-amber-400">Cobranças em aberto</p>
            <span className="text-xs text-slate-400">acompanhar</span>
          </div>
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.6fr_1fr]">
        <SectionCard
          title="Vendas registradas"
          description="Produtos vendidos, clientes e situação de pagamento."
          action={
            <div className="flex flex-col gap-3 lg:flex-row">
              <div className="relative">
                <Search
                  size={16}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />
                <input
                  type="text"
                  placeholder="Buscar venda..."
                  className="w-full rounded-2xl border border-white/10 bg-white/5 py-2.5 pl-10 pr-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-400/40 lg:w-[220px]"
                />
              </div>

              <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-blue-400/30 bg-blue-500/20 px-4 py-2.5 text-sm font-medium text-blue-300 transition hover:bg-blue-500/30">
                <Plus size={16} />
                Nova venda
              </button>
            </div>
          }
        >
          <div className="grid gap-4">
            {sales.map((sale) => (
              <article
                key={sale.id}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/[0.07]"
              >
                <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-semibold text-white">{sale.product}</h3>
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${sale.statusBg} ${sale.statusColor}`}
                      >
                        {sale.status}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-300">
                      <UserRound size={15} />
                      <span>Vendido para {sale.customer}</span>
                    </div>

                    <p className="text-sm text-slate-400">Data da venda: {sale.date}</p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3 xl:min-w-[420px]">
                    <div className="rounded-2xl bg-white/5 px-4 py-3">
                      <p className="text-sm text-slate-400">Valor total</p>
                      <p className="mt-2 font-semibold text-white">{sale.total}</p>
                    </div>

                    <div className="rounded-2xl bg-white/5 px-4 py-3">
                      <p className="text-sm text-slate-400">Recebido</p>
                      <p className="mt-2 font-semibold text-emerald-400">{sale.received}</p>
                    </div>

                    <div className="rounded-2xl bg-white/5 px-4 py-3">
                      <p className="text-sm text-slate-400">Pendente</p>
                      <p className="mt-2 font-semibold text-amber-400">{sale.pending}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Devedores / cobranças">
          <div className="space-y-3">
            {debtors.map((debtor) => (
              <div
                key={`${debtor.name}-${debtor.product}`}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
              >
                <p className="font-semibold text-white">{debtor.name}</p>
                <p className="mt-1 text-sm text-slate-400">{debtor.product}</p>

                <div className="mt-3 flex items-center justify-between text-sm">
                  <span className="text-slate-400">Próxima cobrança</span>
                  <span className="text-slate-200">{debtor.due}</span>
                </div>

                <div className="mt-2 flex items-center justify-between text-sm">
                  <span className="text-slate-400">Valor pendente</span>
                  <span className="font-medium text-amber-400">{debtor.amount}</span>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </section>
    </div>
  )
}