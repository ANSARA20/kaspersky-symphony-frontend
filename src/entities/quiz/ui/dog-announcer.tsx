import { m } from 'framer-motion';
import { useMemo } from 'react';

import { useQuiz } from '../model/use-quiz';
import { getStatusByProgress } from '../lib/get-progress';
import { QuizDogs } from '../config/dogs';
import { QuizImgTransition, QuizMessageTransition } from '../model/transitions';

import { Text } from '@/shared/ui/text';
import { View } from '@/shared/ui/view';
import { MView } from '@/shared/ui/motion-view';

export const QuizDogAnnouncer = () => {
  const { correctAnswersCount } = useQuiz();

  const { img, message } = useMemo(
    () => QuizDogs[getStatusByProgress(correctAnswersCount)],
    [correctAnswersCount],
  );

  return (
    <View key={message} className='absolute -bottom-6 right-0 h-44 w-[19rem] gap-0 lg:w-96'>
      <MView
        {...QuizMessageTransition}
        key='message'
        className='inner-shadow absolute left-0 top-0 max-w-48 origin-bottom-right rounded-2xl rounded-br-none bg-foreground/10 p-4 lg:max-w-64 lg:p-6'
        height='min'
      >
        <Text className='text-sm lg:text-base' weight={6}>
          {message}
        </Text>
      </MView>

      <m.img
        key='img'
        draggable={false}
        {...QuizImgTransition}
        alt='Собака-помощник'
        className='absolute bottom-4 right-0 aspect-square w-36 select-none lg:-bottom-10 lg:-right-24 lg:w-64'
        src={img}
      />
    </View>
  );
};
