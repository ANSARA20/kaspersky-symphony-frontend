import { useMediaQuery } from 'react-responsive';

import { ResultsFormDesktop } from './desktop';
import { ResultsFormMobile } from './mobile';

export const ResultsForm = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  return isDesktop ? <ResultsFormDesktop /> : <ResultsFormMobile />;
};
