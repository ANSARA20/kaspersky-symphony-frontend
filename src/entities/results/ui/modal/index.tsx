import { ResultsStatus } from './status';
import { PrizeWheel } from './wheel';

import { View } from '@/shared/ui/view';

export const ResultsModal = () => {
  return (
    <View vertical className='mt-[10vh] gap-xl lg:gap-5xl' width='fit'>
      <ResultsStatus />
      <PrizeWheel />
    </View>
  );
};
