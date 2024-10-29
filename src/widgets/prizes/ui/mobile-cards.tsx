import { useMemo } from 'react';

import { PrizesList } from '../config/prizes-list';
import { PrizesEmablaOptions } from '../config/embla-options';

import { View } from '@/shared/ui/view';
import { EPrizeTypes, PrizeCard } from '@/entities/prize';
import Carousel from '@/shared/ui/carousel';

interface Props {
  tabType: EPrizeTypes;
}

export const MobileCards = ({ tabType }: Props) => {
  const cards = useMemo(() => {
    const tabContent = PrizesList.filter((prize) => prize.type === tabType);

    return tabContent.map((prize) => <PrizeCard key={prize.name} {...prize} />);
  }, [tabType]);

  return (
    <View className='-mb-8 w-dvw'>
      <Carousel hideControls isAutoplay options={PrizesEmablaOptions} slides={cards} />
    </View>
  );
};
