import { ESymphonyLevels } from '@/shared/model/types';

type Progresses = '25%' | '50%' | '75%' | '100%';

export const QuizPercentProgresses: Record<ESymphonyLevels, Progresses> = {
  [ESymphonyLevels.SECURITY]: '25%',
  [ESymphonyLevels.MDR]: '50%',
  [ESymphonyLevels.EDR]: '75%',
  [ESymphonyLevels.XDR]: '100%',
};

export const getStatusByProgress = (currentQuestion: number) => {
  switch (currentQuestion) {
    case 0:
    case 1:
      return ESymphonyLevels.SECURITY;
    case 2:
    case 3:
      return ESymphonyLevels.MDR;
    case 4:
    case 5:
      return ESymphonyLevels.EDR;
    case 6:
    case 7:
    default:
      return ESymphonyLevels.XDR;
  }
};
