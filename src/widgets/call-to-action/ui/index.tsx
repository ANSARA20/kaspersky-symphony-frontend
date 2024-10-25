import { useMediaQuery } from 'react-responsive';

import { CallToActionDesktop } from './desktop';
import { CallToActionMobile } from './mobile';

export const CallToActionSection = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  return isDesktop ? <CallToActionDesktop /> : <CallToActionMobile />;
};
