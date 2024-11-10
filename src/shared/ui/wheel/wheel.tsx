/* eslint-disable @conarti/feature-sliced/absolute-relative */

import { useRef, useState } from 'react';
import { clsx } from 'clsx';
import { m } from 'framer-motion';

import { IPrize } from '@/entities/prize';
import { WheelArrow } from '@/shared/assets/icons/wheel-arrow';
import { WheelSecret } from '@/shared/assets/icons/wheel-secret';

type Props = {
  prizes: IPrize[];
  onGetPrize?: () => void;
};

export const Wheel = ({ prizes, onGetPrize }: Props) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);

  const wheelRef = useRef<HTMLDivElement>(null);
  const segmentAngle = 360 / prizes.length;

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    const spins = 15;
    const totalRotation = spins * 360 + 180;

    if (wheelRef.current) {
      wheelRef.current.style.transform = `rotate(${totalRotation}deg)`;
    }

    setTimeout(() => {
      setIsSpinning(false);
    }, 5000);
  };

  const handlePress = () => {
    if (isSpinning) return;

    if (isPressed) {
      onGetPrize();

      return;
    }

    setIsPressed(true);
    spinWheel();
  };

  return (
    <div className='relative aspect-square w-[600px] lg:w-[1050px]'>
      <WheelArrow className='absolute left-1/2 z-20 w-16 -translate-x-1/2 lg:w-28' />
      {isPressed && (
        <m.button
          animate={{ opacity: 1 }}
          className='absolute left-1/2 z-10 h-1/2 w-[35%] -translate-x-1/2'
          initial={{ opacity: 0 }}
          transition={{ delay: 3 }}
          onClick={handlePress}
        >
          <WheelSecret className='z-10 -mt-[6.38rem] w-full lg:-mt-[5.2rem]' />
          <div className='absolute left-1/2 top-0 -z-10 h-full w-[150%] -translate-x-1/2 animate-pulse rounded-full bg-primary opacity-70 blur-3xl' />
          <p className='text-gradient-base absolute left-1/2 top-1/2 z-20 -mt-[25%] -translate-x-1/2 -translate-y-1/2 text-7xl font-semibold'>
            ?
          </p>
        </m.button>
      )}
      <div
        ref={wheelRef}
        className='inner-shadow absolute aspect-square w-[600px] overflow-hidden rounded-full lg:w-[1050px]'
        style={{
          transition: 'transform 5s cubic-bezier(0.37, 0, 0.92, 1)',
        }}
      >
        {prizes.map((prize, index) => (
          <div
            key={prize.name}
            className={clsx('absolute left-[33.8%] top-[25%] h-1/2 w-[32.6%] -translate-y-1/2', {
              'bg-default/80': index % 4 === 1,
              'bg-primary/60': index % 4 === 2,
              'bg-secondary/60': index % 4 === 3,
              'bg-tretiary/60': index % 4 === 0,
            })}
            style={{
              clipPath: 'polygon(100% 0, 0 0, 50% 100%)',
              rotate: `${index * segmentAngle}deg`,
            }}
          >
            <div
              className={clsx('-mt-[30%] flex h-full w-full flex-col items-center justify-center')}
            >
              <span className='translate-y-8 text-base font-semibold text-white'>{prize.name}</span>
              <img alt='wheel' className='w-[65%]' src={prize.image} />
            </div>
          </div>
        ))}
      </div>

      <button
        className='shadow-blum absolute left-1/2 top-1/2 z-10 aspect-square w-[30%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary text-white disabled:bg-primary-300'
        disabled={isSpinning}
        onClick={handlePress}
      >
        <div className='inner-shadow relative flex h-full w-full items-center justify-center rounded-full'>
          {isPressed ? (
            <p className='absolute left-1/2 top-[15%] -translate-x-1/2 text-xl font-semibold'>
              {isSpinning ? 'Крутится...' : 'Получить приз'}
            </p>
          ) : (
            <p className='absolute left-1/2 top-5 -translate-x-1/2 text-2xl font-semibold lg:top-[15%] lg:text-3xl'>
              Жмяк!
            </p>
          )}
        </div>
      </button>
    </div>
  );
};
