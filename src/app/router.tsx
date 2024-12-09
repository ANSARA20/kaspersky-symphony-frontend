import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Suspense } from 'react';

import { HomePage } from '@/pages/home';
import { Spinner } from '@/shared/ui/spinner';
import { View } from '@/shared/ui/view';
import { AdminPage } from '@/pages/admin';
import { LoginPage } from '@/pages/login';

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
    element: <AdminPage />,
    errorElement: <Navigate to='/admin/login' />,
  },
  {
    path: '/admin/login',
    element: <LoginPage />,
  },
]);
