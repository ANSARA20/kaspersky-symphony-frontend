import { EmblaOptionsType } from 'embla-carousel';
import { useMediaQuery } from 'react-responsive';
import { useMemo } from 'react';

import { MobileDogsOptions } from '../../config/mobile-dogs-options';

import { HeroDogMobile } from './dog-mobile';

import Carousel from '@/shared/ui/carousel';
import { View } from '@/shared/ui/view';

export const HeroDogsMobile = () => {
  // ! Вынести в config
  const OPTIONS: EmblaOptionsType = { loop: true };
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

  const slides = useMemo(() => {
    return MobileDogsOptions.map((dog) => {
      const {
        textClassPositionMobile,
        textClassPositionTablet,
        blockClassPositionMobile,
        blockClassPositionTablet,
        ...restDog
      } = dog;

      const textClassPosition = isTablet ? textClassPositionTablet : textClassPositionMobile;
      const blockClassPosition = isTablet ? blockClassPositionTablet : blockClassPositionMobile;

      return (
        <HeroDogMobile
          key={dog.title}
          {...restDog}
          blockClassPosition={blockClassPosition}
          textClassPosition={textClassPosition}
        />
      );
    });
  }, [isTablet]);

  return (
    <View className='w-dvw'>
      <Carousel options={OPTIONS} slides={slides} />
    </View>
  );
};
