import { useMemo } from 'react';

import { PrizesCards } from '../utils/prizes-cards';
import { PrizesEmblaOptions } from '../config/embla-options';

import { View } from '@/shared/ui/view';
import { ESymphonyLevels } from '@/shared/model/types';
import Carousel from '@/shared/ui/carousel';

interface Props {
  setHoveredPrize: (type: null | ESymphonyLevels) => void;
}

export const DesktopCards = ({ setHoveredPrize }: Props) => {
  const prizesCards = useMemo(() => new PrizesCards(setHoveredPrize), [setHoveredPrize]);

  return (
    <View centered vertical className='w-dvw'>
      <Carousel hideDots options={PrizesEmblaOptions} slides={prizesCards.slides} />
    </View>
  );
};
