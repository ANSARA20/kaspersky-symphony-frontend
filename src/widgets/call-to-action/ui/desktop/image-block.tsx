import { Link } from 'react-router-dom';

import { Circles } from '@/shared/assets/icons/circles';
import { Picture } from '@/shared/ui/picture';
import { View } from '@/shared/ui/view';
import SButton from '@/shared/assets/images/s_button.png';
import { LINKS } from '@/shared/config/links';

export const DesktopImageBlock = () => {
  return (
    <View centered className='relative h-full'>
      <Link className='transition-opacity hover:opacity-80' target='_blank' to={LINKS.PRODUCT}>
        <Picture
          alt='button'
          className='absolute left-0 -ml-20 -mt-10 -translate-y-1/4'
          src={SButton}
        />
      </Link>
      <Circles className='absolute bottom-0 top-0 -z-20 mt-20 -translate-x-1/4' />
    </View>
  );
};
