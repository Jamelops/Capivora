import { z } from 'zod'

export const iphonePurchaseSchema = z.object({
  model: z.string().min(2, 'Informe o modelo do iPhone.'),
  storage: z.string().min(1, 'Selecione o armazenamento.'),
  color: z.string().min(2, 'Informe a cor.'),
  version: z.string().min(2, 'Informe a versão do aparelho.'),
  notes: z.string().optional(),

  marketplace: z.string().min(2, 'Informe o marketplace.'),
  agent: z.string().min(2, 'Informe o agente.'),
  paymentMethod: z.string().min(2, 'Informe o meio de pagamento.'),
  status: z.string().min(1, 'Selecione o status.'),

  deviceCost: z.string().min(1, 'Informe o custo do aparelho.'),
  internalShipping: z.string().min(1, 'Informe o frete interno / warehouse.'),
  internationalShipping: z.string().min(1, 'Informe o frete internacional.'),
  extraFees: z.string().min(1, 'Informe as taxas extras.'),

  estimatedSalePrice: z.string().min(1, 'Informe o preço estimado de venda.'),
})

export type IphonePurchaseFormValues = z.infer<typeof iphonePurchaseSchema>