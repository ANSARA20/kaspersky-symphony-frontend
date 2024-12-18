import { m } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { memo, useMemo } from 'react';

import DogAnnouncerImg from '@/shared/assets/images/dogs/dog_5.png';
import { Text } from '@/shared/ui/text';
import { View } from '@/shared/ui/view';
import { MView } from '@/shared/ui/motion-view';
// eslint-disable-next-line @conarti/feature-sliced/public-api
import { QuizImgTransition, QuizMessageTransition } from '@/entities/quiz/model/transitions';
import { getRandomItemFromArray } from '@/shared/lib/utils/helpers';

const DOG_ANNOUNCER_MESSAGES = [
  'Вот это приз! Ну что ж, поздравляю! Ты ведь поделишься со мной?',
  'Ура! Наконец-то подарки! Эй, а почему он только один? А как же я!',
];

export const PrizeDogAnnouncer = memo(() => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const dogAnnouncerMessage = useMemo(() => getRandomItemFromArray(DOG_ANNOUNCER_MESSAGES), []);

  return (
    <View className='absolute -bottom-6 right-6 h-44 w-[19rem] gap-0 lg:right-24 lg:top-10 lg:w-96'>
      <MView
        {...QuizMessageTransition}
        key='message'
        animate={{ ...QuizMessageTransition.animate, transition: { delay: isMobile ? 5.1 : 3.1 } }}
        className='inner-shadow absolute left-0 top-0 max-w-48 origin-bottom-right rounded-2xl rounded-br-none bg-foreground-100 p-4 lg:max-w-64 lg:p-6'
        exit={null}
        height='min'
      >
        <Text className='text-sm lg:text-base' weight={6}>
          {dogAnnouncerMessage}
        </Text>
      </MView>

      <m.img
        key='img'
        draggable={false}
        {...QuizImgTransition}
        alt='Собака-помощник'
        animate={{ ...QuizImgTransition.animate, transition: { delay: isMobile ? 5.1 : 3.1 } }}
        className='absolute bottom-4 right-0 aspect-square w-36 select-none lg:-bottom-10 lg:-right-24 lg:w-64'
        exit={null}
        src={DogAnnouncerImg}
      />
    </View>
  );
});
