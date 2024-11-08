import { useMediaQuery } from 'react-responsive';

import { ResultsStatusDesktop } from './desktop';
import { ResultsStatusMobile } from './mobile';

export const ResultsStatus = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  return isDesktop ? <ResultsStatusDesktop /> : <ResultsStatusMobile />;
};
