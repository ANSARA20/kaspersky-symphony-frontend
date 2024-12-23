import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { TGLink } from '../config/tg-link';

import { TG } from '@/shared/assets/icons/tg';
import { Text } from '@/shared/ui/text';

export const TGButton = () => {
  const positionStyle = 'absolute left-0 -translate-x-1/2 -translate-y-1/2 rounded-full';
  const circleBorderStyle = 'border-[1px] border-[#00A0B2]';
  const circleStyle = clsx(circleBorderStyle, 'z-0 animate-scale-opacity');

  return (
    <Link to={TGLink}>
      <button className='fixed bottom-[50px] right-[80px] z-10 md:bottom-[80px] md:right-[100px]'>
        <div
          className={clsx(
            positionStyle,
            'z-10 flex w-fit items-center rounded-full bg-[#00A0B2] px-3 py-2 md:px-4 md:py-3',
          )}
        >
          <Text className='ml-2 mr-2 flex-shrink-0 text-start leading-4' weight={3}>
            Перейти <br />в чат-бот
          </Text>
          <TG size={32} />
        </div>
        <div className={positionStyle}>
          <div
            className={clsx(
              circleStyle,
              'h-[60px] w-[150px] animate-scale-opacity rounded-full md:h-[70px] md:w-[180px]',
            )}
          />
        </div>

        <div className={positionStyle}>
          <div
            className={clsx(
              circleStyle,
              'h-[56px] w-[170px] animate-scale-opacity rounded-full md:h-[85px] md:w-[200px]',
            )}
          />
        </div>
      </button>
    </Link>
  );
};
