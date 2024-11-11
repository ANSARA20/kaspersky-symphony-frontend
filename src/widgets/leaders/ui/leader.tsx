import { ILeader } from '../model/leader.type';

import { Prizes } from '@/entities/prize';
import { Picture } from '@/shared/ui/picture';
import { Text } from '@/shared/ui/text';
import { View } from '@/shared/ui/view';

export const Leader = ({ name, prizeId, phone }: ILeader) => {
  return (
    <View
      className='inner-shadow relative gap-2 overflow-hidden rounded-2xl bg-default-100 px-5 py-5 lg:gap-3 lg:rounded-3xl lg:px-8 lg:py-7'
      items='end'
    >
      <Picture
        className='absolute left-0 top-1/2 w-[60px] -translate-y-1/2 lg:w-[85px]'
        src={Prizes[prizeId].image}
      />
      <Text className='ml-8 text-base lg:ml-12 lg:text-2xl' weight={5}>
        {name.split(' ')[1]}
      </Text>
      <Text className='text-nowrap text-sm lg:text-xl'>{phone}</Text>
    </View>
  );
};
