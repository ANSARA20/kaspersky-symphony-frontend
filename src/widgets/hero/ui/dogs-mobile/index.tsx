import { useMediaQuery } from 'react-responsive';
import { useMemo } from 'react';

import { MobileDogsOptions } from '../../config/mobile-dogs-options';
import { HeroEmblaOptions } from '../../config/embla-options';

import { HeroDogMobile } from './dog-mobile';

import Carousel from '@/shared/ui/carousel';
import { View } from '@/shared/ui/view';

export const HeroDogsMobile = () => {
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
      <Carousel hideArrows options={HeroEmblaOptions} slides={slides} />
    </View>
  );
};
