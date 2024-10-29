import { FooterColsConst } from '../config/cols';

import { Text } from '@/shared/ui/text';
import { View } from '@/shared/ui/view';

export const FooterCols = () => {
  return (
    <View className='hidden lg:flex' justify='between'>
      {FooterColsConst.map(({ title, rows }, index) => (
        <View key={index} vertical className='max-w-[270px]'>
          <Text as='h3' className='text-lg text-primary-400'>
            {title}
          </Text>
          <View vertical className='gap-3'>
            {rows.map((row, index) => (
              <Text key={index} as='a' href={row.href} size='sm'>
                {row.title}
              </Text>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
};
