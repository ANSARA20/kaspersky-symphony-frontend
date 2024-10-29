import { clsx } from 'clsx';

import { ResultsWrapperTransition } from '../../config/transitions';

import { QuizDogs, useQuiz } from '@/entities/quiz';
import { Text } from '@/shared/ui/text';
import { View } from '@/shared/ui/view';
import { Picture } from '@/shared/ui/picture';
import { MView } from '@/shared/ui/motion-view';

export const ResultsStatus = () => {
  const { correctAnswersCount } = useQuiz();

  const resultsWrapperClassnames = clsx(
    'max-w-[616px] gap-12 rounded-3xl bg-secondary-100/80 p-4 lg:p-12',
  );

  return (
    <MView {...ResultsWrapperTransition}>
      <View centered className='w-full lg:w-[647px]'>
        <Picture alt='Ваш тотемный пёсель' src={QuizDogs.xdr.img} />
      </View>
      <View vertical className={resultsWrapperClassnames} items='center'>
        <Text className='text-gradient-base w-fit text-2xl leading-[1] lg:text-[90px]' heading={2}>
          Ультра-дог
        </Text>
        <Text className='text-6xl' heading={4}>
          {correctAnswersCount}/7
        </Text>
        <Text className='text-center text-2xl' weight={3}>
          Вы настоящий терминатор-гигачад в вопросах кибер-безопасности. Если это не ваша работа, то
          возможно, пора подумать о смене профессии. Понять, о чем разговаривают два сотрудника
          службы безопасности для вас...
        </Text>
      </View>
    </MView>
  );
};
