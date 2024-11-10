import DogHelper from '@/shared/assets/images/dogs/dog_5.png';
import { ESymphonyLevels } from '@/shared/model/types';

type QuizDog = {
  img: string;
  message: string;
};

export const QuizDogs: Record<ESymphonyLevels, QuizDog> = {
  [ESymphonyLevels.SECURITY]: {
    img: DogHelper,
    message: 'Вопросы уровня Security',
  },
  [ESymphonyLevels.MDR]: {
    img: DogHelper,
    message: 'Вой, дог! А это вопросы покруче... уровня MDR',
  },
  [ESymphonyLevels.EDR]: {
    img: DogHelper,
    message: 'Вой, дог! А это вопросы покруче... уровня EDR',
  },
  [ESymphonyLevels.XDR]: {
    img: DogHelper,
    message: 'Вой, дог! А это вопросы покруче... уровня XDR',
  },
};
