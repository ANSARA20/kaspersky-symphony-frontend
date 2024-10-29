import { AnimatePresence, m, MotionProps } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

import { TypesColors } from '../../config/types-colors';

import { EPrizeTypes } from '@/entities/prize';
import { View } from '@/shared/ui/view';
import { cn } from '@/shared/lib/utils/ui';

interface Props {
  hoveredPrize: EPrizeTypes | null;
  type: EPrizeTypes;
  tabType: EPrizeTypes;
  setTabType: (type: EPrizeTypes) => void;
  isDesktop: boolean;
}

export const PrizesType = ({ hoveredPrize, type, isDesktop, tabType, setTabType }: Props) => {
  // ! ты перерендериваешь все содержимое, когда тут можно просто использовать css-media query
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

  // ! Вынести в config
  const animationProps: MotionProps = {
    initial: { opacity: 0, filter: 'blur(12px)' },
    animate: { opacity: 1, filter: 'blur(0px)' },
    exit: { opacity: 0, filter: 'blur(12px)' },
    transition: { duration: 0.3 },
  };

  const handleClick = () => {
    if (!isDesktop) {
      setTabType(type);
    }
  };

  // ! все таки когда классы не изменяемые, лучше использовать cslx
  const wrapperClass = cn('relative h-full px-4 py-4', {
    'px-2': isMobile,
  });

  // ! все таки когда классы не изменяемые, лучше использовать cslx
  const typeClass = cn(
    'inner-shadow h-full w-full rounded-xl bg-white bg-opacity-10 px-12 py-4 text-lg leading-5',
    {
      'max-w-[160px] text-wrap px-6 py-2': isMobile,
    },
    {
      'text-nowrap': !isMobile,
    },
  );

  return (
    <View centered className={wrapperClass} width={isDesktop ? 'fit' : 'full'}>
      <button className={typeClass} onClick={handleClick}>
        {type}
      </button>
      <AnimatePresence>
        {(isDesktop && hoveredPrize === type) || (!isDesktop && tabType === type) ? (
          <>
            <m.div
              {...animationProps}
              className={cn('absolute bottom-0 h-[1px] w-2/3', TypesColors[type].gradient)}
            />
            <m.img
              alt='blur'
              className='absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 scale-[200%]'
              src={TypesColors[type].bgBlur}
              {...animationProps}
            />
          </>
        ) : null}
      </AnimatePresence>
    </View>
  );
};
