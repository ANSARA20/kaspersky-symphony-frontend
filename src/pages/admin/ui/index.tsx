import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';

import { View } from '@/shared/ui/view';
import { AdminHeader } from '@/widgets/admin-header';

export const AdminPage = () => {
  const token = Cookies.get('token');

  if (!token) return <Navigate to='/admin/login' />;

  return (
    <View centered>
      <View className='max-w-[80%]'>
        <AdminHeader />
      </View>
    </View>
  );
};
