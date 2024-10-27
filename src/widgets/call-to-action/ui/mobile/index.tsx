import { CallToActionText } from '../text';

import { PassQuizButton } from '@/features/pass-quiz';
import { Picture } from '@/shared/ui/picture';
import { View } from '@/shared/ui/view';
import SButton from '@/shared/assets/images/s_button.png';

export const CallToActionMobile = () => {
  return (
    <View centered vertical as='section' className='mb-24 mt-36 px-4'>
      <PassQuizButton className='w-fit' />
      <Picture alt='button' className='mt-6 max-w-[300px] sm:max-w-[500px]' src={SButton} />
      <CallToActionText />
    </View>
  );
};
