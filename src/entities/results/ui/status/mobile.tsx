import clsx from 'clsx';

import { ResultsWrapperTransition } from '../../config/transitions';
import { getStatus, getStatusInfo } from '../../lib/get-status';

import { useQuiz } from '@/entities/quiz';
import { MView } from '@/shared/ui/motion-view';
import { Picture } from '@/shared/ui/picture';
import { Text } from '@/shared/ui/text';
import { View } from '@/shared/ui/view';
import cup from '@/shared/assets/images/cup.png';
import { LINKS } from '@/shared/config/links';

export const ResultsStatusMobile = () => {
  const { correctAnswersCount } = useQuiz();

  const status = getStatus(correctAnswersCount);
  const { title, description, img } = getStatusInfo(status);

  const resultsWrapperClassnames = clsx('gap-8 rounded-3xl bg-secondary-100/80 px-4 py-12');

  return (
    <MView {...ResultsWrapperTransition}>
      <View vertical className={resultsWrapperClassnames} items='center'>
        <Text className='text-gradient-base w-fit text-center text-5xl leading-[1]' heading={2}>
          {title}
        </Text>

        <img alt='Кубок' className='absolute -right-8 top-24 w-32' src={cup} />

        <Text className='text-4xl' heading={4}>
          {correctAnswersCount}/7
        </Text>

        <View centered className='w-full max-w-96 animate-float-up'>
          <Picture alt='Ваш тотемный песель' src={img} />
        </View>

        <Text className='text-center text-lg' weight={3}>
          {description}
          {!status && (
            <span>
              Так что будь осторожнее и забирай свои{' '}
              <a
                className='text-gradient-base transition-opacity hover:opacity-60'
                href={LINKS.TG_BOT}
                rel='noreferrer'
                target='_blank'
              >
                стикеры.
              </a>{' '}
              Ну а тест ты всегда можешь перепройти!
            </span>
          )}
        </Text>
      </View>
    </MView>
  );
};
