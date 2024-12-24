import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { TGLink } from '../config/tg-link';

import { Text } from '@/shared/ui/text';
import { View } from '@/shared/ui/view';
import BotDog from '@/shared/assets/images/dogs/bot_dog.png';

export const TGButton = () => {
  const positionStyle = 'absolute left-0 -translate-x-1/2 -translate-y-1/2 rounded-full';
  const circleBorderStyle = 'border-[1px] border-primary';
  const circleStyle = clsx(circleBorderStyle, 'z-0 animate-scale-opacity');

  return (
    <Link to={TGLink}>
      <button className='fixed bottom-[50px] right-[120px] z-10 md:bottom-[80px] md:right-[150px]'>
        <div
          className={clsx(
            positionStyle,
            'z-10 flex w-fit items-center rounded-full bg-primary px-1 py-1 md:px-2 md:py-2',
          )}
        >
          <img alt='doggy' className='w-10 flex-shrink-0 md:w-12' src={BotDog} />
          <View vertical className='ml-2 mr-14 flex-shrink-0 gap-0'>
            <Text
              className='text:sm w-full text-nowrap text-start leading-4 md:text-base'
              weight={6}
            >
              Мемный бот
            </Text>
            <Text
              className='w-full text-nowrap text-start text-[12px] leading-4 md:-mt-1 md:text-sm'
              opacity={5}
              weight={4}
            >
              Создай свой стикер пак
            </Text>
          </View>
        </div>
        <div className={positionStyle}>
          <div
            className={clsx(
              circleStyle,
              'h-[64px] w-[234px] animate-scale-opacity rounded-full md:h-[80px] md:w-[264px]',
            )}
          />
        </div>

        <div className={positionStyle}>
          <div
            className={clsx(
              circleStyle,
              'h-[72px] w-[250px] animate-scale-opacity rounded-full md:h-[94px] md:w-[284px]',
            )}
          />
        </div>
      </button>
    </Link>
  );
};
