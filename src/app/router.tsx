import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Suspense } from 'react';

import { HomePage } from '@/pages/home';
import { Spinner } from '@/shared/ui/spinner';
import { View } from '@/shared/ui/view';
import { LoginPage } from '@/pages/login';
import { AdminLayout } from '@/shared/ui/admin-layout';
import { AdminHeader } from '@/widgets/admin-header';
import { AdminUsersPage } from '@/pages/admin-users';
import { AdminPrizesPage } from '@/pages/admin-prizes';
import { AdminSpinsPage } from '@/pages/admin-spins';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense
        fallback={
          <View centered className='h-svh'>
            <Spinner />
          </View>
        }
      >
        <HomePage />
      </Suspense>
    ),
    errorElement: <Navigate to='/' />,
  },
  {
    path: '/admin',
    element: (
      <AdminLayout>
        <AdminHeader />
      </AdminLayout>
    ),
    errorElement: <Navigate to='/admin/login' />,
    children: [
      { index: true, element: <Navigate replace to='users' /> },
      { path: 'users', element: <AdminUsersPage /> },
      { path: 'spins', element: <AdminSpinsPage /> },
      { path: 'prizes', element: <AdminPrizesPage /> },
    ],
  },
  {
    path: '/admin/login',
    element: <LoginPage />,
  },
]);
