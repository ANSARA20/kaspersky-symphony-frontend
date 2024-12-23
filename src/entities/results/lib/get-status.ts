import { ESymphonyLevels } from '@/shared/model/types';
import Dog1 from '@/shared/assets/images/dogs/dog_1.png';
import Dog2 from '@/shared/assets/images/dogs/dog_2.png';
import Dog3 from '@/shared/assets/images/dogs/dog_3.png';
import Dog4 from '@/shared/assets/images/dogs/dog_4.png';
import Labrador from '@/shared/assets/images/dogs/labrador.png';

export const getStatus = (correctAnswersCount: number) => {
  switch (correctAnswersCount) {
    case 0:
    case 1:
    case 2:
    case 3:
      return null;
    case 4:
      return ESymphonyLevels.SECURITY;
    case 5:
      return ESymphonyLevels.MDR;
    case 6:
      return ESymphonyLevels.EDR;
    case 7:
      return ESymphonyLevels.XDR;
  }
};

const statuses = {
  null: {
    title: 'Релаксик',
    description:
      'Расслаблен как пес на диване и беспечен в вопросах кибербеза. Пароль “12345”? Легко! Обновить антивирус? Да ну его! Ссылка от незнакомца с котиком на аватарке? Кликаем! Пока ты спокоен, но однажды сова может принести весточку о взломе.',
    img: Dog1,
  },
  [ESymphonyLevels.SECURITY]: {
    title: 'Кликер',
    description:
      'Уже знаешь, что Интернет — это не только котики, но и куча опасностей. Правда, кибербез для тебя все еще магия вне Хогвартса. Пароль — имя питомца и пара цифр? Типично, но ты на пути к просветлению Только не кликай на письма “ВАШ АККАУНТ ВЗЛОМАН”. Там точно ничего хорошего.',
    img: Dog3,
  },
  [ESymphonyLevels.MDR]: {
    title: 'Лабротектор',
    description:
      'Шаришь в кибербезе: уникальные пароли, VPN и “песочница” тебе явно знакомы. Не кликаешь на фейки, не ведешься на “Привет, кинь сотку” от бывшего одноклассника и уже можешь учить бабушку безопасно сидеть в сети. Продолжай качать скиллы — настройка файрвола и мониторинг трафика ждут тебя!',
    img: Labrador,
  },
  [ESymphonyLevels.EDR]: {
    title: 'Киберстраж',
    description:
      'На “ты” с кибербезопасностью, понимаешь важность SIEM-систем, антивирусов и ручного анализа угроз. Двухфакторка и обновления — твоя специализация. Но не расслабляйся! Новые угрозы не дремлют. Изучай отчеты и будь готов к атаке нулевого дня.',
    img: Dog2,
  },
  [ESymphonyLevels.XDR]: {
    title: 'Гроза хакеров',
    description:
      'Находишься на вершине пищевой цепочки в мире кибербеза. Пароли — сложные, защита — идеальная, ну а злоумышленникам остается только курить в сторонке. Ты не просто защищаешь — ты охотишься. С такими навыками уже пора думать о смене профессии. Настоящие защитники нужны всем!',
    img: Dog4,
  },
};

export const getStatusInfo = (status: ESymphonyLevels) => {
  return statuses[status];
};
