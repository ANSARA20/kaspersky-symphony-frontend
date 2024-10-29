import { QuizQuestion } from '../model/types';

import { getRandomItemFromArray } from '@/shared/lib/utils/helpers';

export const getRandomUniqueQuestion = (list: QuizQuestion[], answeredQuestionsIds: number[]) => {
  const listIds = list.map(({ id }) => id);

  const unAnsweredQuestionIds = listIds.filter((id) => !answeredQuestionsIds.includes(id));
  const questionId = getRandomItemFromArray(unAnsweredQuestionIds);
  const question = list.find(({ id }) => questionId === id);

  return question;
};
