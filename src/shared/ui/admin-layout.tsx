import Cookies from 'js-cookie';
import { Navigate, Outlet } from 'react-router-dom';
import { PropsWithChildren } from 'react';

import { View } from './view';

export const AdminLayout = ({ children }: PropsWithChildren) => {
  const token = Cookies.get('token');

  if (!token) return <Navigate to='/admin/login' />;

  return (
    <View centered className='gap-0'>
      <View vertical className='max-w-[80%]'>
        {children}
        <View vertical className='gap-0 px-4'>
          <Outlet />
        </View>
      </View>
    </View>
  );
};
