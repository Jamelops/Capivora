import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from '@/app/layouts/app-layout'
import { AuthLayout } from '@/app/layouts/auth-layout'
import { routes } from '@/constants/routes'
import { LoginPage } from '@/features/auth/pages/login-page'
import { RegisterPage } from '@/features/auth/pages/register-page'
import { DashboardPage } from '@/features/dashboard/pages/dashboard-page'
import { TransactionsPage } from '@/features/finances/pages/transactions-page'
import { IphonePurchasesPage } from '@/features/iphone-purchases/pages/iphone-purchases-page'
import { NewIphonePurchasePage } from '@/features/iphone-purchases/pages/new-iphone-purchase-page'

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: routes.home,
        element: <DashboardPage />,
      },
      {
        path: routes.finances,
        element: <TransactionsPage />,
      },
      {
        path: routes.iphonePurchases,
        element: <IphonePurchasesPage />,
      },
      {
        path: routes.newIphonePurchase,
        element: <NewIphonePurchasePage />,
      },
    ],
  },
  {
    path: routes.login,
    element: (
      <AuthLayout>
        <LoginPage />
      </AuthLayout>
    ),
  },
  {
    path: routes.register,
    element: (
      <AuthLayout>
        <RegisterPage />
      </AuthLayout>
    ),
  },
])