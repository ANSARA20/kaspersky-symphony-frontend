import { useMediaQuery } from 'react-responsive';

import { CallToActionDesktop } from './desktop';
import { CallToActionMobile } from './mobile';

import { View } from '@/shared/ui/view';

export const CallToActionSection = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  return <View>{isDesktop ? <CallToActionDesktop /> : <CallToActionMobile />}</View>;
};
