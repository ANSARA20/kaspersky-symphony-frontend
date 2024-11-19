import { IPrize } from '../../model/prize.type';
import { PrizesBg } from '../../config/prizes-bg';

import { Picture } from '@/shared/ui/picture';
import { Text } from '@/shared/ui/text';
import { View } from '@/shared/ui/view';
import { cn } from '@/shared/lib/utils/ui';

export const PrizeCard = ({ name, feature, image, description, type }: IPrize) => {
  return (
    <View
      centered
      vertical
      className={cn(
        'relative h-[340px] max-w-[280px] rounded-3xl p-4 shadow-2xl md:h-[375px] md:max-w-[330px]',
        PrizesBg[type],
      )}
      gap='sm'
    >
      <Text as='h2' className='text-xl leading-6 md:text-2xl' weight={5}>
        {name}
      </Text>
      <Text as='h2' className='text-base leading-5 md:text-xl'>
        {feature}
      </Text>
      <View className='h-[200px] w-[200px]'>
        <Picture
          alt={name}
          className={cn('absolute left-1/2 top-1/2 -mt-3 -translate-x-1/2 -translate-y-1/2')}
          draggable={false}
          src={image}
          width={300}
        />
      </View>
      <Text
        as='h2'
        className='max-w-[240px] text-center text-base leading-6 md:max-w-[300px] md:text-xl'
        weight={4}
      >
        {description}
      </Text>
    </View>
  );
};
