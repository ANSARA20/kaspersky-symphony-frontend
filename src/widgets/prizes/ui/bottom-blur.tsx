import { useMediaQuery } from 'react-responsive';

import Blur from '@/shared/assets/images/prizes/prizes_blur.png';
import { cn } from '@/shared/lib/utils/ui';

export const BottomBlur = () => {
  // ! ты перерендериваешь все содержимое, когда тут можно просто использовать css-media query
  const isMobile = !useMediaQuery({ query: '(min-width: 600px)' });

  // ! все таки когда классы не изменяемые, лучше использовать cslx
  const blurClass = cn('absolute bottom-0 left-1/2 -z-10 w-2/3 -translate-x-1/2 translate-y-1/4', {
    'scale-[250%]': isMobile,
  });

  return (
    <div className='pointer-events-none absolute bottom-0 flex h-1/2 w-dvw items-center justify-center overflow-hidden'>
      <img alt='blur' className={blurClass} src={Blur} />
      <div className='to-transparent; absolute bottom-0 h-[1px] w-2/3 bg-gradient-to-r from-transparent via-primary-700/20 opacity-50' />
    </div>
  );
};
