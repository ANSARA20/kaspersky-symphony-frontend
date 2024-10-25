import { Circles } from '@/shared/assets/icons/circles';
import { Picture } from '@/shared/ui/picture';
import { View } from '@/shared/ui/view';
import SButton from '@/shared/assets/images/s_button.png';

export const DesktopImageBlock = () => {
  return (
    <View centered className='relative h-full'>
      <Picture
        alt='button'
        className='absolute left-0 -ml-20 -mt-10 -translate-y-1/4'
        src={SButton}
      />
      <Circles className='absolute bottom-0 top-0 -z-20 mt-20 -translate-x-1/4' />
    </View>
  );
};
