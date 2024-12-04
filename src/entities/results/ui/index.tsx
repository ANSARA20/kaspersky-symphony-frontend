import { ResultsSceneController } from './scene-controller';
import { ResultsStatus } from './status';

import { View } from '@/shared/ui/view';

export const ResultsModal = () => {
  return (
    <View vertical className='mt-[10vh] gap-xl lg:gap-3xl' width='fit'>
      <ResultsStatus />
      <ResultsSceneController />
    </View>
  );
};
