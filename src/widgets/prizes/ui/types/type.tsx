import { AnimatePresence, m } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

import { TypesColors } from '../../config/types-colors';
import { TypeBgAnimationProps } from '../../config/type-bg-animation-props';

import { View } from '@/shared/ui/view';
import { cn } from '@/shared/lib/utils/ui';
import { ESymphonyLevels } from '@/shared/model/types';
import { SymphonyNames } from '@/shared/config/symphony-names';

interface Props {
  hoveredPrize: ESymphonyLevels | null;
  type: ESymphonyLevels;
  tabType: ESymphonyLevels;
  setTabType: (type: ESymphonyLevels) => void;
}

export const PrizesType = ({ hoveredPrize, type, tabType, setTabType }: Props) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  const handleClick = () => {
    if (!isDesktop) {
      setTabType(type);
    }
  };

  return (
    <View centered className='relative h-full w-full px-2 py-4 md:px-4 xl:w-fit'>
      <button
        className='inner-shadow h-full w-full max-w-[160px] text-wrap rounded-xl bg-white bg-opacity-10 px-6 py-2 text-lg leading-5 md:max-w-full md:text-nowrap md:px-12 md:py-4'
        onClick={handleClick}
      >
        {SymphonyNames[type]}
      </button>
      <AnimatePresence>
        {(isDesktop && hoveredPrize === type) || (!isDesktop && tabType === type) ? (
          <>
            <m.div
              {...TypeBgAnimationProps}
              className={cn('absolute bottom-0 h-[1px] w-2/3', TypesColors[type].gradient)}
            />
            <m.img
              alt='blur'
              className='absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 scale-[200%]'
              src={TypesColors[type].bgBlur}
              {...TypeBgAnimationProps}
            />
          </>
        ) : null}
      </AnimatePresence>
    </View>
  );
};
