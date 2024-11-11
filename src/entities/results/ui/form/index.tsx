import { useMediaQuery } from 'react-responsive';

import { ResultsWrapperTransition } from '../../config/transitions';

import { ResultsFormMobile } from './mobile';
import { ResultsFormDesktop } from './desktop';

import { MView } from '@/shared/ui/motion-view';

export const ResultsForm = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  return (
    <MView {...ResultsWrapperTransition} className='lg:justify-center lg:gap-16'>
      {isDesktop ? <ResultsFormDesktop /> : <ResultsFormMobile />}
    </MView>
  );
};
