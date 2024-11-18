/* eslint-disable @conarti/feature-sliced/absolute-relative */

import { useEffect, useRef, useState } from 'react';
import { clsx } from 'clsx';
import { m, useWillChange } from 'framer-motion';

import { IPrize } from '@/entities/prize';
import { WheelArrow } from '@/shared/assets/icons/wheel-arrow';
import { WheelSecret } from '@/shared/assets/icons/wheel-secret';
import { TResultPrize } from '@/entities/results';

type Props = {
  prizes: IPrize[];
  onGetPrize?: () => void;
  prize: TResultPrize | null;
  isShowPrizeCard: boolean;
};

export const Wheel = ({ isShowPrizeCard, prizes, onGetPrize, prize }: Props) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const willChange = useWillChange();

  const [isSelectedPrize] = useState(!!prize);

  const wheelRef = useRef<HTMLDivElement>(null);
  const segmentAngle = 360 / prizes.length;

  useEffect(() => {
    if (isSelectedPrize && !isShowPrizeCard) {
      spinWheel(true);
      setIsPressed(true);
    }
  }, []);

  const spinWheel = (disableAnimation = false) => {
    if (isSpinning) return;

    setIsSpinning(true);
    const spins = 15;
    const totalRotation = spins * 360 + 180;

    if (wheelRef.current) {
      wheelRef.current.style.transition = disableAnimation
        ? 'none'
        : 'transform 5s cubic-bezier(0.37, 0, 0.92, 1)';
      wheelRef.current.style.transform = `rotate(${totalRotation}deg)`;
    }

    setTimeout(
      () => {
        setIsSpinning(false);
      },
      disableAnimation ? 0 : 5000,
    );
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
      <m.div
        animate={isShowPrizeCard ? { opacity: 0 } : { opacity: 1 }}
        className='absolute left-1/2 z-20 w-16 -translate-x-1/2 lg:w-28'
        initial={false}
        transition={{ delay: 0.9 }}
      >
        <WheelArrow className='w-full' />
      </m.div>
      {isPressed && (
        <m.button
          animate={isShowPrizeCard ? { opacity: 0 } : { opacity: 1 }}
          className='absolute left-1/2 z-10 h-1/2 w-[35%] -translate-x-1/2'
          initial={isSelectedPrize ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 3, duration: isShowPrizeCard ? 2 : 1 }}
          onClick={handlePress}
        >
          <m.div
            animate={isShowPrizeCard ? { y: '100%' } : { y: 0 }}
            className='z-10 -mt-[6.38rem] lg:-mt-[5.2rem]'
            initial={false}
            transition={{ delay: 1, duration: 3, type: 'spring', bounce: 0 }}
          >
            <WheelSecret className='w-full' />
          </m.div>
          <m.div
            animate={
              isShowPrizeCard
                ? { opacity: 1, scale: 5, x: '-50%', filter: 'blur(10px)' }
                : { opacity: 0.7, scale: 1, x: '-50%', filter: 'blur(64px)' }
            }
            className={clsx(
              'absolute left-1/2 top-0 -z-10 h-full w-[150%] rounded-full bg-primary',
              { 'animate-pulse': !isShowPrizeCard },
            )}
            initial={{ x: '-50%', scale: 1, opacity: 0.7, filter: 'blur(64px)' }}
            style={{ willChange }}
            transition={{ duration: 1.25, ease: 'easeIn' }}
          />
          <m.p
            animate={isShowPrizeCard ? { opacity: 0 } : { opacity: 1 }}
            className='text-gradient-base absolute left-1/2 top-1/2 z-20 -mt-[25%] -translate-x-1/2 -translate-y-1/2 text-7xl font-semibold'
            initial={false}
            transition={{ delay: 1 }}
          >
            ?
          </m.p>
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

      <m.button
        animate={isShowPrizeCard ? { x: '-50%', y: '0%' } : { x: '-50%', y: '-50%' }}
        className='shadow-blum absolute left-1/2 top-1/2 z-10 aspect-square w-[30%] rounded-full bg-primary text-white disabled:bg-primary-300'
        disabled={isSpinning}
        initial={false}
        transition={{ delay: 1, duration: 3, type: 'spring', bounce: 0 }}
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
      </m.button>
    </div>
  );
};
