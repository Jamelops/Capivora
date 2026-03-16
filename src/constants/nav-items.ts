import {
  LayoutDashboard,
  Wallet,
  Smartphone,
  PlusCircle,
  ShoppingBag,
} from 'lucide-react'

import { routes } from './routes'
import { appConfig } from './app-config'

export const navItems = [
  {
    label: 'Dashboard',
    path: routes.home,
    icon: LayoutDashboard,
  },
  {
    label: 'Finanças',
    path: routes.finances,
    icon: Wallet,
  },

  ...(appConfig.modules.sales
    ? [
        {
          label: 'Vendas',
          path: routes.sales,
          icon: ShoppingBag,
        },
      ]
    : []),

  ...(appConfig.modules.iphone
    ? [
        {
          label: 'Compras de iPhone',
          path: routes.iphonePurchases,
          icon: Smartphone,
        },
        {
          label: 'Nova compra',
          path: routes.newIphonePurchase,
          icon: PlusCircle,
        },
      ]
    : []),
]