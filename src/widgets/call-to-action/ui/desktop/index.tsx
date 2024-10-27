import { CallToActionText } from '../text';

import { DesktopImageBlock } from './image-block';

import { View } from '@/shared/ui/view';
import { PassQuizButton } from '@/features/pass-quiz';

export const CallToActionDesktop = () => {
  return (
    <View vertical as='section' className='relative overflow-hidden pb-20'>
      <View className='max-w-layout container mx-auto px-4'>
        <DesktopImageBlock />
        <View vertical className='py-40'>
          <CallToActionText />
          <PassQuizButton className='mt-32 w-fit' />
        </View>
      </View>
    </View>
  );
};
