import Marquee from 'react-fast-marquee';

import { Text } from '@/shared/ui/text';
import { View } from '@/shared/ui/view';

export const Leaders = () => {
  return (
    <View centered vertical className='mb-16 mt-32'>
      <Text
        as='h1'
        className='px-4 text-center text-[24px] md:text-[32px] lg:text-[40px]'
        weight={6}
      >
        Лидеры конкурса!
      </Text>
      <Text className='max-w-[340px] px-4 text-center text-base md:max-w-[640px] md:text-lg lg:text-[24px]'>
        Эти участники уже получили свои призы от{' '}
        <span className='text-gradient-base'>Symphony</span>, и мы рады вручить тебе твою
        заслуженную награду!
      </Text>
      <Marquee gradient={false} speed={50}>
        Это бегущая строка. Вы можете добавить сюда любой текст!
      </Marquee>
    </View>
  );
};
