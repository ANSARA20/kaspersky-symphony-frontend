import { WheelWrapperTransition } from '../../config/transitions';

import { MView } from '@/shared/ui/motion-view';
import { Text } from '@/shared/ui/text';

export const PrizeWheel = () => {
  return (
    <MView
      {...WheelWrapperTransition}
      vertical
      className='mb-20 h-[681px] gap-lg rounded-3xl bg-default-100/90 p-4 lg:p-12'
      items='center'
    >
      <Text className='text-2xl lg:text-4xl' heading={4}>
        Крутим колесо!
      </Text>
      <Text className='max-w-[80%] text-center text-xl'>
        А теперь самая приятная часть — получение гарантированного приза от{' '}
        <span className='text-gradient-base pr-px'>Symphony</span>. Осталось только крутануть колесо
        фортуны!
      </Text>
    </MView>
  );
};
