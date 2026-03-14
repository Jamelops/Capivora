export function NewIphonePurchasePage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-slate-400">
            Cadastro de compra
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            Nova compra de iPhone
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Registre o aparelho, origem da compra, custos envolvidos e projeção de revenda.
          </p>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.5fr_0.9fr]">
        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
            <h3 className="text-lg font-semibold text-white">Informações do aparelho</h3>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-slate-300">Modelo</label>
                <input
                  type="text"
                  placeholder="Ex: iPhone 13 Pro"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-400/40"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">Armazenamento</label>
                <select className="w-full rounded-2xl border border-white/10 bg-[#1b2438] px-4 py-3 text-white outline-none focus:border-blue-400/40">
                  <option>128GB</option>
                  <option>256GB</option>
                  <option>512GB</option>
                  <option>1TB</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">Cor</label>
                <input
                  type="text"
                  placeholder="Ex: Green"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-400/40"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">Versão</label>
                <input
                  type="text"
                  placeholder="Ex: US Version / Factory Unlocked"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-400/40"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm text-slate-300">Observações</label>
                <textarea
                  rows={4}
                  placeholder="Ex: bateria, condição estética, Face ID, histórico do aparelho..."
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-400/40"
                />
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
            <h3 className="text-lg font-semibold text-white">Origem e logística</h3>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-slate-300">Marketplace</label>
                <input
                  type="text"
                  placeholder="Ex: Xianyu"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-400/40"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">Agente</label>
                <input
                  type="text"
                  placeholder="Ex: ACBuy"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-400/40"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">Meio de pagamento</label>
                <input
                  type="text"
                  placeholder="Ex: CoinPal / Bybit / USDT"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-400/40"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">Status</label>
                <select className="w-full rounded-2xl border border-white/10 bg-[#1b2438] px-4 py-3 text-white outline-none focus:border-blue-400/40">
                  <option>Aguardando envio</option>
                  <option>Em transporte</option>
                  <option>Em warehouse</option>
                  <option>Entregue</option>
                  <option>Finalizado</option>
                </select>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
            <h3 className="text-lg font-semibold text-white">Custos da operação</h3>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-slate-300">Preço do aparelho</label>
                <input
                  type="text"
                  placeholder="R$ 0,00"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-400/40"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">Frete interno / warehouse</label>
                <input
                  type="text"
                  placeholder="R$ 0,00"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-400/40"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">Frete internacional</label>
                <input
                  type="text"
                  placeholder="R$ 0,00"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-400/40"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">Taxas extras</label>
                <input
                  type="text"
                  placeholder="R$ 0,00"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-400/40"
                />
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
            <h3 className="text-lg font-semibold text-white">Resumo da compra</h3>

            <div className="mt-5 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Custo do aparelho</span>
                <span className="text-white">R$ 2.050,00</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Fretes + taxas</span>
                <span className="text-white">R$ 330,00</span>
              </div>

              <div className="border-t border-white/10 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Custo total</span>
                  <span className="text-xl font-semibold text-white">R$ 2.380,00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
            <h3 className="text-lg font-semibold text-white">Revenda</h3>

            <div className="mt-5">
              <label className="mb-2 block text-sm text-slate-300">Preço estimado de venda</label>
              <input
                type="text"
                placeholder="R$ 0,00"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-400/40"
              />
            </div>

            <div className="mt-5 rounded-2xl bg-white/5 p-4">
              <p className="text-sm text-slate-400">Lucro estimado</p>
              <p className="mt-2 text-2xl font-bold text-emerald-400">R$ 970,00</p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
            <div className="flex flex-col gap-3">
              <button className="rounded-2xl border border-blue-400/30 bg-blue-500/20 px-4 py-3 text-sm font-medium text-blue-300 transition hover:bg-blue-500/30">
                Salvar compra
              </button>

              <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10">
                Salvar como rascunho
              </button>
            </div>
          </div>
        </aside>
      </section>
    </div>
  )
}