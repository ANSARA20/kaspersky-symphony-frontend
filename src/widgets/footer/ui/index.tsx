import { FooterCols } from '../config/footer-cols';

import { View } from '@/shared/ui/view';
import { Text } from '@/shared/ui/text';

export const Footer = () => {
  return (
    <View as='footer' className='border-t border-foreground/30'>
      <View vertical className='max-w-layout container mx-auto px-4 pb-6 pt-10'>
        <View justify='between'>
          {FooterCols.map(({ title, cols }, index) => (
            <View key={index} vertical className='max-w-[270px]'>
              <Text as='h3' className='text-lg text-primary-400'>
                {title}
              </Text>
              <View vertical className='gap-3'>
                {cols.map((row, index) => (
                  <Text key={index} as='a' href={row.href} size='sm'>
                    {row.title}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>
        <Text opacity={5}>© 2024 Kaspersky</Text>
        <View items='center' justify='between'>
          <View>
            <View>faq</View>
            <View>faq</View>
          </View>
          <View width='fit'>icons</View>
        </View>
      </View>
    </View>
  );
};
