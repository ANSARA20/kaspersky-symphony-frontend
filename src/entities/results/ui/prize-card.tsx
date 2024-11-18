import { m } from 'framer-motion';

import { useScenes } from '../model/use-scenes';

import { View } from '@/shared/ui/view';
import { Text } from '@/shared/ui/text';
import { IPrize } from '@/entities/prize';

type Props = {
  prize: IPrize;
};

export const PrizeCard = ({ prize }: Props) => {
  const { isShowPrizeAnimation } = useScenes();

  const { name, image } = prize;

  return (
    <m.div
      animate={{ opacity: 1 }}
      className='absolute inset-0 z-20 flex items-center justify-center bg-background p-4'
      initial={isShowPrizeAnimation ? { opacity: 1 } : { opacity: 0 }}
      transition={{ delay: 2 }}
    >
      <View
        vertical
        as='article'
        className='inner-shadow max-w-96 rounded-3xl bg-default-100 p-8'
        gap='lg'
        items='center'
      >
        <Text className='text-center text-2xl lg:text-3xl' heading={3}>
          Ухху, твой приз – <span className='text-gradient-base lowercase'>{name}!</span>
        </Text>
        <Text className='max-w-64 text-center'>Мы скоро свяжемся с тобой и передадим приз!</Text>
        <img alt='Приз!' className='-my-10' draggable={false} src={image} />
      </View>
    </m.div>
  );
};
