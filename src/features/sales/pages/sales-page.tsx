import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ArrowUpRight,
  BadgeDollarSign,
  Plus,
  Search,
  ShoppingBag,
  UserRound,
} from 'lucide-react'

import { SectionCard } from '@/components/ui/section-card'
import { PrimaryButton } from '@/components/ui/primary-button'
import { routes } from '@/constants/routes'
import { formatCurrency } from '@/lib/formatters'

type SaleStatus = 'Pago' | 'Parcialmente pago' | 'Em aberto'

type Sale = {
  id: number
  product: string
  category: string
  customer: string
  date: string
  total: number
  received: number
  pending: number
  status: SaleStatus
}

const salesMock: Sale[] = [
  {
    id: 1,
    product: 'Notebook Dell Inspiron',
    category: 'Informática',
    customer: 'Carlos Henrique',
    date: '14/03/2026',
    total: 4500,
    received: 2000,
    pending: 2500,
    status: 'Parcialmente pago',
  },
  {
    id: 2,
    product: 'Monitor LG 27"',
    category: 'Periféricos',
    customer: 'Marina Souza',
    date: '10/03/2026',
    total: 3200,
    received: 3200,
    pending: 0,
    status: 'Pago',
  },
  {
    id: 3,
    product: 'Teclado Mecânico Keychron',
    category: 'Periféricos',
    customer: 'Rafael Lima',
    date: '08/03/2026',
    total: 1100,
    received: 0,
    pending: 1100,
    status: 'Em aberto',
  },
]

function getStatusStyles(status: SaleStatus) {
  if (status === 'Pago') {
    return {
      textColor: 'text-emerald-400',
      bgColor: 'bg-emerald-500/15',
    }
  }

  if (status === 'Parcialmente pago') {
    return {
      textColor: 'text-amber-400',
      bgColor: 'bg-amber-500/15',
    }
  }

  return {
    textColor: 'text-sky-400',
    bgColor: 'bg-sky-500/15',
  }
}

export function SalesPage() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')

  const filteredSales = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase()

    if (!normalizedSearch) return salesMock

    return salesMock.filter((sale) => {
      return (
        sale.product.toLowerCase().includes(normalizedSearch) ||
        sale.category.toLowerCase().includes(normalizedSearch) ||
        sale.customer.toLowerCase().includes(normalizedSearch) ||
        sale.status.toLowerCase().includes(normalizedSearch) ||
        sale.date.toLowerCase().includes(normalizedSearch)
      )
    })
  }, [search])

  const summary = useMemo(() => {
    const totalSold = salesMock.reduce((acc, sale) => acc + sale.total, 0)
    const totalReceived = salesMock.reduce((acc, sale) => acc + sale.received, 0)
    const totalPending = salesMock.reduce((acc, sale) => acc + sale.pending, 0)

    return {
      totalSales: salesMock.length,
      totalSold,
      totalReceived,
      totalPending,
    }
  }, [])

  const debtors = useMemo(() => {
    return salesMock
      .filter((sale) => sale.pending > 0)
      .map((sale) => ({
        id: sale.id,
        name: sale.customer,
        product: sale.product,
        due: '5º dia útil',
        amount: sale.pending,
      }))
  }, [])

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
                  {formatCurrency(summary.totalReceived)}
                </p>
              </div>

              <div className="rounded-2xl border border-amber-500/10 bg-amber-500/10 px-3.5 py-2.5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-amber-300/80">
                  Pendente
                </p>
                <p className="mt-1 text-lg font-semibold text-white">
                  {formatCurrency(summary.totalPending)}
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
              <h3 className="mt-2 text-[2rem] font-bold leading-none text-white">
                {summary.totalSales}
              </h3>
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
              <h3 className="mt-2 text-[2rem] font-bold leading-none text-white">
                {formatCurrency(summary.totalSold)}
              </h3>
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
              <h3 className="mt-2 text-[2rem] font-bold leading-none text-white">
                {formatCurrency(summary.totalPending)}
              </h3>
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
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Buscar venda..."
                  className="w-full rounded-2xl border border-white/10 bg-white/5 py-2.5 pl-10 pr-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-400/40 lg:w-[220px]"
                />
              </div>

              <PrimaryButton
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5"
                onClick={() => navigate(routes.newSale)}
              >
                <Plus size={16} />
                Nova venda
              </PrimaryButton>
            </div>
          }
        >
          <div className="grid gap-4">
            {filteredSales.length > 0 ? (
              filteredSales.map((sale) => {
                const statusStyles = getStatusStyles(sale.status)

                return (
                  <article
                    key={sale.id}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/[0.07]"
                  >
                    <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-xl font-semibold text-white">{sale.product}</h3>
                          <span
                            className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${statusStyles.bgColor} ${statusStyles.textColor}`}
                          >
                            {sale.status}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-slate-300">
                          <UserRound size={15} />
                          <span>Vendido para {sale.customer}</span>
                        </div>

                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-400">
                          <span>Categoria: {sale.category}</span>
                          <span>Data da venda: {sale.date}</span>
                        </div>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-3 xl:min-w-[420px]">
                        <div className="rounded-2xl bg-white/5 px-4 py-3">
                          <p className="text-sm text-slate-400">Valor total</p>
                          <p className="mt-2 font-semibold text-white">
                            {formatCurrency(sale.total)}
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/5 px-4 py-3">
                          <p className="text-sm text-slate-400">Recebido</p>
                          <p className="mt-2 font-semibold text-emerald-400">
                            {formatCurrency(sale.received)}
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/5 px-4 py-3">
                          <p className="text-sm text-slate-400">Pendente</p>
                          <p className="mt-2 font-semibold text-amber-400">
                            {formatCurrency(sale.pending)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })
            ) : (
              <div className="rounded-3xl border border-dashed border-white/10 bg-white/5 p-8 text-center">
                <p className="text-base font-medium text-white">
                  Nenhuma venda encontrada
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  Tente buscar por produto, cliente, categoria, status ou data.
                </p>
              </div>
            )}
          </div>
        </SectionCard>

        <SectionCard title="Devedores / cobranças">
          <div className="space-y-3">
            {debtors.length > 0 ? (
              debtors.map((debtor) => (
                <div
                  key={debtor.id}
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
                    <span className="font-medium text-amber-400">
                      {formatCurrency(debtor.amount)}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-center">
                <p className="text-sm text-slate-400">Nenhuma cobrança pendente no momento.</p>
              </div>
            )}
          </div>
        </SectionCard>
      </section>
    </div>
  )
}