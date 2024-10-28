import { EmblaOptionsType } from 'embla-carousel';

import { PrizesList } from '../config/prizes-list';

import { View } from '@/shared/ui/view';
import { EPrizeTypes, PrizeCard } from '@/entities/prize';
import Carousel from '@/shared/ui/carousel';

interface Props {
  tabType: EPrizeTypes;
}

export const MobileCards = ({ tabType }: Props) => {
  // ! Вынести в конфиг
  const OPTIONS: EmblaOptionsType = { loop: true };
  // ! Мемоизировать
  const tabContent = PrizesList.filter((prize) => prize.type === tabType);
  // ! Мемоизировать
  const cards = tabContent.map((prize) => <PrizeCard key={prize.name} {...prize} />);

  return (
    <View className='-mb-8 w-dvw'>
      <Carousel hideControls isAutoplay options={OPTIONS} slides={cards} />
    </View>
  );
};