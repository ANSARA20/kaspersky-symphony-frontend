import React, { ComponentPropsWithRef, useCallback, useEffect, useState } from 'react';
import { EmblaCarouselType } from 'embla-carousel';

import { ArrowRight } from '@/shared/assets/icons/arrow-right';

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

type PropType = ComponentPropsWithRef<'button'>;

export const PrevButton: React.FC<PropType> = (props) => {
  return (
    <button
      className='inner-shadow rotate-180 rounded-2xl bg-default-100 p-4'
      type='button'
      {...props}
    >
      <ArrowRight />
    </button>
  );
};

export const NextButton: React.FC<PropType> = (props) => {
  return (
    <button className='inner-shadow rounded-2xl bg-default-100 p-4' type='button' {...props}>
      <ArrowRight />
    </button>
  );
};
