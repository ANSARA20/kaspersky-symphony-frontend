import clsx from 'clsx';

import { ResultsWrapperTransition } from '../../config/transitions';

import { QuizDogs, useQuiz } from '@/entities/quiz';
import { MView } from '@/shared/ui/motion-view';
import { Picture } from '@/shared/ui/picture';
import { Text } from '@/shared/ui/text';
import { View } from '@/shared/ui/view';
import cup from '@/shared/assets/images/cup.png';

export const ResultsStatusMobile = () => {
  const { correctAnswersCount } = useQuiz();

  const resultsWrapperClassnames = clsx('gap-8 rounded-3xl bg-secondary-100/80 px-4 py-12');

  return (
    <MView {...ResultsWrapperTransition}>
      <View vertical className={resultsWrapperClassnames} items='center'>
        <Text className='text-gradient-base w-fit text-5xl leading-[1]' heading={2}>
          Ультра-дог
        </Text>

        <img alt='Кубок' className='absolute -right-8 top-24 w-32' src={cup} />

        <Text className='text-4xl' heading={4}>
          {correctAnswersCount}/7
        </Text>

        <View centered className='w-full max-w-96 animate-float-up'>
          <Picture alt='Ваш тотемный пёсель' src={QuizDogs.xdr.img} />
        </View>

        <Text className='text-center text-lg' weight={3}>
          Вы настоящий терминатор-гигачад в вопросах кибер-безопасности. Если это не ваша работа, то
          возможно, пора подумать о смене профессии. Понять, о чем разговаривают два сотрудника
          службы безопасности для вас...
        </Text>
      </View>
    </MView>
  );
};
