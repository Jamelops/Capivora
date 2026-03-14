import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { PageIntro } from '@/components/shared/page-intro'
import { SectionCard } from '@/components/ui/section-card'
import { PrimaryButton } from '@/components/ui/primary-button'
import { SecondaryButton } from '@/components/ui/secondary-button'
import { TextInput } from '@/components/forms/text-input'
import { SelectField } from '@/components/forms/select-field'
import { TextAreaField } from '@/components/forms/text-area-field'

import {
  iphonePurchaseSchema,
  type IphonePurchaseFormValues,
} from '@/features/iphone-purchases/schemas/iphone-purchase-schema'

export function NewIphonePurchasePage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<IphonePurchaseFormValues>({
    resolver: zodResolver(iphonePurchaseSchema),
    defaultValues: {
      model: '',
      storage: '128GB',
      color: '',
      version: '',
      notes: '',
      marketplace: 'Xianyu',
      agent: 'ACBuy',
      paymentMethod: 'CoinPal / Bybit / USDT',
      status: 'Aguardando envio',
      deviceCost: '',
      internalShipping: '',
      internationalShipping: '',
      extraFees: '',
      estimatedSalePrice: '',
    },
  })

  const deviceCost = watch('deviceCost')
  const internalShipping = watch('internalShipping')
  const internationalShipping = watch('internationalShipping')
  const extraFees = watch('extraFees')
  const estimatedSalePrice = watch('estimatedSalePrice')

  const parseCurrency = (value: string) => {
    const normalized = value
      .replace(/\./g, '')
      .replace(',', '.')
      .replace(/[^\d.-]/g, '')

    const parsed = Number(normalized)
    return Number.isNaN(parsed) ? 0 : parsed
  }

  const formatCurrency = (value: number) =>
    value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })

  const totals = useMemo(() => {
    const device = parseCurrency(deviceCost || '')
    const internal = parseCurrency(internalShipping || '')
    const international = parseCurrency(internationalShipping || '')
    const extra = parseCurrency(extraFees || '')
    const estimatedSale = parseCurrency(estimatedSalePrice || '')

    const fees = internal + international + extra
    const totalCost = device + fees
    const estimatedProfit = estimatedSale - totalCost

    return {
      device,
      fees,
      totalCost,
      estimatedSale,
      estimatedProfit,
    }
  }, [
    deviceCost,
    internalShipping,
    internationalShipping,
    extraFees,
    estimatedSalePrice,
  ])

  const onSubmit = async (data: IphonePurchaseFormValues) => {
    console.log('Dados da compra:', data)
    alert('Compra validada com sucesso. Próximo passo: salvar no Supabase.')
  }

  return (
    <div className="space-y-6">
      <PageIntro
        eyebrow="Cadastro de compra"
        title="Nova compra de iPhone"
        description="Registre o aparelho, origem da compra, custos envolvidos e projeção de revenda."
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-6 xl:grid-cols-[1.5fr_0.9fr]"
      >
        <div className="space-y-6">
          <SectionCard title="Informações do aparelho">
            <div className="grid gap-4 md:grid-cols-2">
              <TextInput
                label="Modelo"
                placeholder="Ex: iPhone 13 Pro"
                error={errors.model?.message}
                {...register('model')}
              />

              <SelectField
                label="Armazenamento"
                error={errors.storage?.message}
                {...register('storage')}
              >
                <option value="128GB">128GB</option>
                <option value="256GB">256GB</option>
                <option value="512GB">512GB</option>
                <option value="1TB">1TB</option>
              </SelectField>

              <TextInput
                label="Cor"
                placeholder="Ex: Green"
                error={errors.color?.message}
                {...register('color')}
              />

              <TextInput
                label="Versão"
                placeholder="Ex: US Version / Factory Unlocked"
                error={errors.version?.message}
                {...register('version')}
              />

              <div className="md:col-span-2">
                <TextAreaField
                  label="Observações"
                  rows={4}
                  placeholder="Ex: bateria, condição estética, Face ID, histórico do aparelho..."
                  error={errors.notes?.message}
                  {...register('notes')}
                />
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Origem e logística">
            <div className="grid gap-4 md:grid-cols-2">
              <TextInput
                label="Marketplace"
                placeholder="Ex: Xianyu"
                error={errors.marketplace?.message}
                {...register('marketplace')}
              />

              <TextInput
                label="Agente"
                placeholder="Ex: ACBuy"
                error={errors.agent?.message}
                {...register('agent')}
              />

              <TextInput
                label="Meio de pagamento"
                placeholder="Ex: CoinPal / Bybit / USDT"
                error={errors.paymentMethod?.message}
                {...register('paymentMethod')}
              />

              <SelectField
                label="Status"
                error={errors.status?.message}
                {...register('status')}
              >
                <option value="Aguardando envio">Aguardando envio</option>
                <option value="Em transporte">Em transporte</option>
                <option value="Em warehouse">Em warehouse</option>
                <option value="Entregue">Entregue</option>
                <option value="Finalizado">Finalizado</option>
              </SelectField>
            </div>
          </SectionCard>

          <SectionCard title="Custos da operação">
            <div className="grid gap-4 md:grid-cols-2">
              <TextInput
                label="Preço do aparelho"
                placeholder="R$ 0,00"
                error={errors.deviceCost?.message}
                {...register('deviceCost')}
              />

              <TextInput
                label="Frete interno / warehouse"
                placeholder="R$ 0,00"
                error={errors.internalShipping?.message}
                {...register('internalShipping')}
              />

              <TextInput
                label="Frete internacional"
                placeholder="R$ 0,00"
                error={errors.internationalShipping?.message}
                {...register('internationalShipping')}
              />

              <TextInput
                label="Taxas extras"
                placeholder="R$ 0,00"
                error={errors.extraFees?.message}
                {...register('extraFees')}
              />
            </div>
          </SectionCard>
        </div>

        <aside className="space-y-6">
          <SectionCard title="Resumo da compra">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Custo do aparelho</span>
                <span className="text-white">{formatCurrency(totals.device)}</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Fretes + taxas</span>
                <span className="text-white">{formatCurrency(totals.fees)}</span>
              </div>

              <div className="border-t border-white/10 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Custo total</span>
                  <span className="text-xl font-semibold text-white">
                    {formatCurrency(totals.totalCost)}
                  </span>
                </div>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Revenda">
            <TextInput
              label="Preço estimado de venda"
              placeholder="R$ 0,00"
              error={errors.estimatedSalePrice?.message}
              {...register('estimatedSalePrice')}
            />

            <div className="mt-5 rounded-2xl bg-white/5 p-4">
              <p className="text-sm text-slate-400">Lucro estimado</p>
              <p
                className={`mt-2 text-2xl font-bold ${
                  totals.estimatedProfit >= 0 ? 'text-emerald-400' : 'text-rose-400'
                }`}
              >
                {formatCurrency(totals.estimatedProfit)}
              </p>
            </div>
          </SectionCard>

          <SectionCard>
            <div className="flex flex-col gap-3">
              <PrimaryButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Salvando...' : 'Salvar compra'}
              </PrimaryButton>

              <SecondaryButton type="button">Salvar como rascunho</SecondaryButton>
            </div>
          </SectionCard>
        </aside>
      </form>
    </div>
  )
}