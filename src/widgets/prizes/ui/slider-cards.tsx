import { useMemo, useState } from 'react';
import { AnimatePresence, LayoutGroup, MotionConfigProps } from 'framer-motion';
import clsx from 'clsx';

import { CardsRotation } from '../config/cards-card-styles';
import { PrizeCardAnimation } from '../utils/prize-card-animation';
import { ComposedPrizes } from '../utils/composed-prizes';

import { View } from '@/shared/ui/view';
import { MView } from '@/shared/ui/motion-view';
import { ESymphonyLevels } from '@/shared/model/types';
import { PrizeCard } from '@/entities/prize';
import { ArrowRight } from '@/shared/assets/icons/arrow-right';

interface Props {
  setHoveredPrize: (type: null | ESymphonyLevels) => void;
}

export const SliderCards = ({ setHoveredPrize }: Props) => {
  const [startIndex, setStartIndex] = useState(0);
  const [isNext, setIsNext] = useState(true);
  const prizesCards = useMemo(() => {
    const composedPrizes = new ComposedPrizes();

    return composedPrizes.list;
  }, [setHoveredPrize]);

  const handleNext = () => {
    if (startIndex < prizesCards.length - 5) {
      setIsNext(true);
      setTimeout(() => {
        setStartIndex((prev) => prev + 1);
      }, 0);
    }
  };
  const handlePrev = () => {
    if (startIndex > 0) {
      setIsNext(false);
      setTimeout(() => {
        setStartIndex((prev) => prev - 1);
      }, 0);
    }
  };

  return (
    <View centered vertical className='relative w-dvw'>
      <View className='h-[500px] w-fit px-8'>
        <LayoutGroup>
          <AnimatePresence>
            {prizesCards.map((prize, index) => {
              const currentIndex = index - startIndex;
              const isVisible = currentIndex < 5 && currentIndex >= 0;

              return isVisible ? (
                <MView
                  key={prize.name}
                  initial
                  layoutId={prize.name}
                  onMouseOut={() => setHoveredPrize(null)}
                  onMouseOver={() => setHoveredPrize(prize.type)}
                  {...(new PrizeCardAnimation(currentIndex, isNext) as MotionConfigProps)}
                >
                  <div className={clsx(CardsRotation[currentIndex], 'min-w-[286px]')}>
                    <PrizeCard {...prize} />
                  </div>
                </MView>
              ) : null;
            })}
          </AnimatePresence>
        </LayoutGroup>
      </View>
      <View className='absolute top-1/2 w-full max-w-[1840px]' justify='between'>
        <button
          className='inner-shadow ml-8 rotate-180 rounded-2xl bg-default-100 p-4'
          onClick={handlePrev}
        >
          <ArrowRight />
        </button>
        <button className='inner-shadow mr-8 rounded-2xl bg-default-100 p-4' onClick={handleNext}>
          <ArrowRight />
        </button>
      </View>
    </View>
  );
};
