import { WheelWrapperTransition } from '../config/transitions';
import { WheelPrizes } from '../config/wheel-prizes';
import { EResultsScenes } from '../model/scenes';
import { useScenes } from '../model/use-scenes';

import { MView } from '@/shared/ui/motion-view';
import { Text } from '@/shared/ui/text';
import { Wheel } from '@/shared/ui/wheel';

export const ResultsWheel = () => {
  const { setScene } = useScenes();

  return (
    <MView
      {...WheelWrapperTransition}
      vertical
      className='relative mb-20 h-min gap-lg overflow-hidden rounded-3xl bg-default-100/90 p-4 pt-12 lg:p-12'
      items='center'
    >
      <Text className='text-3xl lg:text-4xl' heading={4}>
        Крутим колесо!
      </Text>
      <Text className='mb-[300px] max-w-[80%] text-center text-base lg:mb-[490px] lg:text-xl'>
        А теперь самая приятная часть — получение гарантированного приза от{' '}
        <span className='text-gradient-base pr-px'>Symphony</span>. Осталось только крутануть колесо
        фортуны!
      </Text>

      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[55%]'>
        <Wheel prizes={WheelPrizes} onGetPrize={() => setScene('form' as EResultsScenes)} />
      </div>
    </MView>
  );
};
