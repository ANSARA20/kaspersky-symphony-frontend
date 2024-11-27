import DogHelper from '@/shared/assets/images/dogs/dog_5.png';
import { getRandomItemFromArray } from '@/shared/lib/utils/helpers';
import { ESymphonyLevels } from '@/shared/model/types';

type QuizDog = {
  img: string;
  message: string;
};

const QuizMessages: Record<ESymphonyLevels, string[]> = {
  [ESymphonyLevels.SECURITY]: [
    'Всего-то? Какие-то легкие вопросы… или это начало?',
    'Плевое дело! Ты знаешь что тут ответить!',
  ],
  [ESymphonyLevels.MDR]: [
    'Кажется я ошибся, когда говорил, что вопросы легкие…',
    'Да.. это тебе не косточку жевать…',
  ],
  [ESymphonyLevels.EDR]: [
    'Как говорил мудрец: “У самурая нет цели, есть только путь”. Так что поднажми!',
    'Дорога может быть сложной, но результат того стоит!',
    'Ой, птичка, птичка! Кхм, прости кажется, это просто новый уровень.',
  ],
  [ESymphonyLevels.XDR]: [
    'Кажется я уже чувствую мягкое тепло худи… Ой, извини, это моя шерсть.',
    'Мы тут с друзьями болтали, они говорят, что так долго еще ни один не продержался.',
    'Чувствуешь? Ты же тоже его чувствуешь? Этот вкус победы…',
  ],
};

export const getQuizDog = (level: ESymphonyLevels): QuizDog => ({
  img: DogHelper,
  message: getRandomItemFromArray(QuizMessages[level]),
});
