import clsx from 'clsx';

import { TGLink } from '../config/tg-link';

import { TG } from '@/shared/assets/icons/tg';

export const TGButton = () => {
  const positionStyle = 'absolute left-0 -translate-x-1/2 -translate-y-1/2 rounded-full';
  const circleBorderStyle = 'border-[1px] border-[#00A0B2]';
  const circleStyle = clsx(circleBorderStyle, 'z-0 animate-scale-opacity');

  return (
    <a
      className='fixed bottom-[50px] right-[50px] z-10 md:bottom-[80px] md:right-[80px]'
      href={TGLink}
      rel='noreferrer'
      target='_blank'
    >
      <div className={clsx(positionStyle, 'z-10 rounded-full bg-[#00A0B2] p-2 md:p-3')}>
        <TG size={36} />
      </div>
      <div className={positionStyle}>
        <div
          className={clsx(
            circleStyle,
            'h-[80px] w-[80px] animate-scale-opacity rounded-full md:h-[100px] md:w-[100px]',
          )}
        />
      </div>

      <div className={positionStyle}>
        <div
          className={clsx(
            circleStyle,
            'h-[100px] w-[100px] animate-scale-opacity rounded-full md:h-[120px] md:w-[120px]',
          )}
        />
      </div>
    </a>
  );
};
