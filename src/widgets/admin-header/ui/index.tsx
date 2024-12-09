import { Logout } from '@/features/logout';
import { Text } from '@/shared/ui/text';
import { View } from '@/shared/ui/view';

export const AdminHeader = () => {
  return (
    <View className='p-4' items='center' justify='between'>
      <Text as='h1' size='xl' weight={6}>
        Kaspersky Symphony Admin
      </Text>
      <Logout />
    </View>
  );
};
