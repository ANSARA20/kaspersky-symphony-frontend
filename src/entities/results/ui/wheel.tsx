import { clsx } from 'clsx';

import { WheelWrapperTransition } from '../config/transitions';
import { WheelPrizes } from '../config/wheel-prizes';
import { EResultsScenes } from '../model/scenes';
import { useScenes } from '../model/use-scenes';
import { getStatus } from '../lib/get-status';

import { NoPrize } from './prize/no-prize';
import { PrizeCard } from './prize/prize-card';

import { MView } from '@/shared/ui/motion-view';
import { Text } from '@/shared/ui/text';
import { Wheel } from '@/shared/ui/wheel';
import { Prizes } from '@/entities/prize';
import { useQuiz } from '@/entities/quiz';

export const ResultsWheel = () => {
  const {
    prize,
    setScene,
    isShowPrizeCard,
    setIsShowPrizeCard,
    setIsShowPrizeAnimation,
    scene,
    isShowPrizeAnimation,
  } = useScenes();

  const { correctAnswersCount } = useQuiz();

  const status = getStatus(correctAnswersCount);

  if (status === null) {
    return null;
  }

  const actualPrize = Prizes[prize?.itemId] || undefined;

  const isNotHavePrize = scene === 'prize' && !actualPrize;

  const handleGetPrize = () => {
    if (prize) {
      setIsShowPrizeCard(true);
      setTimeout(() => {
        setIsShowPrizeAnimation(true);
      }, 5000);
    } else {
      setScene('form' as EResultsScenes);
    }
  };

  return (
    <MView
      {...WheelWrapperTransition}
      vertical
      className={clsx(
        'relative mb-20 h-min gap-lg overflow-hidden rounded-3xl bg-default-100/90 p-4 pt-12 lg:p-12',
        isShowPrizeAnimation && 'min-h-[600px] sm:min-h-[678px]',
      )}
      items='center'
    >
      {isShowPrizeCard && actualPrize && <PrizeCard prize={actualPrize} />}

      {isNotHavePrize && <NoPrize />}

      {!isShowPrizeAnimation && !isNotHavePrize && (
        <>
          <Text className='text-3xl lg:text-4xl' heading={4}>
            {scene === 'wheel' ? 'Крутим колесо!' : 'Забери приз!'}
          </Text>
          <Text className='mb-[300px] max-w-[80%] text-center text-base lg:mb-[490px] lg:text-xl'>
            {scene === 'wheel' && (
              <>
                Пришло время призов! Готов испытать удачу? Жми на кнопку и крути{' '}
                <span className='text-gradient-base pr-px'>колесо фортуны</span>. <br /> Тебя ждут
                гарантированные подарки: от неожиданных сюрпризов до лучшего худи во всей истории.
              </>
            )}
            {scene === 'prize' && 'Поздравляем! Еще чуть-чуть и классный приз уже будет у тебя!'}
          </Text>

          <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[55%]'>
            <Wheel
              isShowPrizeCard={isShowPrizeCard}
              prize={prize}
              prizes={WheelPrizes}
              onGetPrize={handleGetPrize}
            />
          </div>
        </>
      )}
    </MView>
  );
};
