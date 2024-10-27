import { useEffect, useMemo, useState } from 'react';

import { useQuiz } from '../model/use-quiz';

import { getStatusByProgress, QuizPercentProgresses } from './get-progress';

export const useProgressStep = () => {
  const { correctAnswersCount } = useQuiz();

  const [progressStep, setProgressStep] = useState('0%');
  const status = useMemo(() => getStatusByProgress(correctAnswersCount), [correctAnswersCount]);

  useEffect(() => {
    setProgressStep(QuizPercentProgresses[status]);
  }, [status]);

  return { progressStep };
};
