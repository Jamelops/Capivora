export function TransactionsPage() {
  const transactions = [
    {
      id: 1,
      title: 'Venda de iPhone 13 Pro',
      category: 'Venda',
      date: '14/03/2026',
      type: 'Entrada',
      amount: '+ R$ 4.500,00',
      amountColor: 'text-emerald-400',
    },
    {
      id: 2,
      title: 'Recarga CoinPal',
      category: 'Compra internacional',
      date: '13/03/2026',
      type: 'Saída',
      amount: '- R$ 2.100,00',
      amountColor: 'text-rose-400',
    },
    {
      id: 3,
      title: 'Frete internacional',
      category: 'Logística',
      date: '13/03/2026',
      type: 'Saída',
      amount: '- R$ 180,00',
      amountColor: 'text-rose-400',
    },
    {
      id: 4,
      title: 'Venda de acessório',
      category: 'Venda',
      date: '12/03/2026',
      type: 'Entrada',
      amount: '+ R$ 320,00',
      amountColor: 'text-emerald-400',
    },
  ]

  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur">
          <p className="text-sm text-slate-400">Entradas no mês</p>
          <h3 className="mt-3 text-3xl font-bold text-white">R$ 8.420,00</h3>
          <p className="mt-2 text-sm text-emerald-400">Fluxo positivo</p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur">
          <p className="text-sm text-slate-400">Saídas no mês</p>
          <h3 className="mt-3 text-3xl font-bold text-white">R$ 4.230,00</h3>
          <p className="mt-2 text-sm text-rose-400">Custos e operações</p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur">
          <p className="text-sm text-slate-400">Resultado líquido</p>
          <h3 className="mt-3 text-3xl font-bold text-white">R$ 4.190,00</h3>
          <p className="mt-2 text-sm text-blue-400">Saldo mensal projetado</p>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">Transações</h2>
            <p className="mt-1 text-sm text-slate-400">
              Visualize entradas, saídas e movimentações financeiras do sistema.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="text"
              placeholder="Buscar transação..."
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-400/40"
            />
            <button className="rounded-2xl border border-blue-400/30 bg-blue-500/20 px-4 py-2.5 text-sm font-medium text-blue-300 transition hover:bg-blue-500/30">
              Nova transação
            </button>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-3xl border border-white/10">
          <div className="grid grid-cols-[1.8fr_1fr_1fr_1fr] bg-white/5 px-5 py-4 text-sm text-slate-400">
            <span>Descrição</span>
            <span>Categoria</span>
            <span>Data</span>
            <span className="text-right">Valor</span>
          </div>

          <div className="divide-y divide-white/10">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="grid grid-cols-[1.8fr_1fr_1fr_1fr] items-center px-5 py-4 text-sm transition hover:bg-white/[0.04]"
              >
                <div>
                  <p className="font-medium text-white">{transaction.title}</p>
                  <p className="mt-1 text-xs text-slate-500">{transaction.type}</p>
                </div>

                <span className="text-slate-300">{transaction.category}</span>
                <span className="text-slate-300">{transaction.date}</span>
                <span className={`text-right font-semibold ${transaction.amountColor}`}>
                  {transaction.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}