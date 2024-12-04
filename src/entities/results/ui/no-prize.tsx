import NoPrizeIcon from '@/shared/assets/images/no_prize.png';
import { Text } from '@/shared/ui/text';
import { View } from '@/shared/ui/view';

export const NoPrize = () => {
  return (
    <View vertical className='items-center justify-center'>
      <img alt='Ой! Где все подарки?' className='h-36 w-36' src={NoPrizeIcon} />
      <Text className='text-center text-lg font-medium sm:w-96' heading={4}>
        Ой! Где все подарки? Тут что, прошло нашествие кошачьих? Не переживай, мы точно с этим
        разберемся. Заходи на следующей неделе и забирай свой приз из нового дропа!
      </Text>
    </View>
  );
};
