import { NavLink } from 'react-router-dom';

import { AdminLinks } from '../config/links';

import { Logout } from '@/features/logout';
import { Text } from '@/shared/ui/text';
import { View } from '@/shared/ui/view';

export const AdminHeader = () => {
  return (
    <View className='bg-inherit p-4' items='center' justify='between'>
      <Text as='h1' size='xl' weight={6}>
        Kaspersky Symphony Admin
      </Text>

      <View gap='lg' items='center' width='fit'>
        {AdminLinks.map(({ title, to }) => (
          <NavLink key={to} className={({ isActive }) => (!isActive ? 'opacity-50' : '')} to={to}>
            {title}
          </NavLink>
        ))}
      </View>
      <div className='flex w-[260px] justify-end'>
        <Logout />
      </div>
    </View>
  );
};
