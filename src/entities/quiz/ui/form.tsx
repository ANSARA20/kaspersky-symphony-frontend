import { AnimatePresence, m } from 'framer-motion';
import { useMemo, useState } from 'react';
import { clsx } from 'clsx';

import { useQuiz } from '../model/use-quiz';
import { getStatusByProgress } from '../lib/get-progress';
import { QuizQuestions } from '../config/questions';
import { ButtonTransition, LiTransition, TitleTransition } from '../model/transitions';
import { getRandomUniqueQuestion } from '../lib/get-random-question';

import { QuizDogAnnouncer } from './dog-announcer';

import { RadioButton } from '@/shared/ui/radio';
import { View } from '@/shared/ui/view';
import { Button } from '@/shared/ui/button';
import { useModal } from '@/shared/ui/modal';
import { ArrowRight } from '@/shared/assets/icons/arrow-right';
import { ResultsModal } from '@/entities/results';

export const QuizForm = () => {
  const { setModal } = useModal();
  const {
    incCorrectAnswers,
    nextQuestion,
    currentQuestionNumber,
    currentQuestionId,
    correctAnswersCount,
    answeredQuestionsIds,
    setIsQuizEnded,
    setCurrentQuestionId,
    pushToAnsweredQuestionsIds,
  } = useQuiz();

  const status = useMemo(() => getStatusByProgress(correctAnswersCount), [correctAnswersCount]);
  const questionsList = useMemo(() => QuizQuestions[status], [status]);

  const { id, question, correctVariant, variants } = useMemo(() => {
    if (currentQuestionId) {
      return questionsList.find(({ id }) => currentQuestionId === id);
    } else {
      const question = getRandomUniqueQuestion(questionsList, answeredQuestionsIds);

      setCurrentQuestionId(question.id);

      return question;
    }
  }, [currentQuestionNumber, questionsList]);

  const [value, setValue] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(false);

  const isLastQuestion = useMemo(() => currentQuestionNumber === 7, [currentQuestionNumber]);

  const handleSubmit: React.FormEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();

    if (!isChecked) {
      pushToAnsweredQuestionsIds(id);
      setIsChecked(true);
    } else {
      if (value === correctVariant.toString()) {
        incCorrectAnswers();
      }

      setCurrentQuestionId(undefined);

      if (isLastQuestion) {
        setIsQuizEnded(true);
        setModal(<ResultsModal />, {
          save: true,
          scrollable: true,
          containerProps: { justify: 'start', items: 'center' },
        });
      } else {
        nextQuestion();
        setIsChecked(false);
        setValue(null);
      }
    }
  };

  return (
    <View vertical as='form' gap='xl' onSubmit={handleSubmit}>
      <m.h3
        key={`${id}_text`}
        {...TitleTransition}
        className='max-w-[830px] flex-shrink-0 select-none font-sans text-xl leading-relaxed lg:text-2xl'
      >
        {question}
      </m.h3>

      <View key={`${id}_questions`} vertical as='ul' className='mb-36 flex-shrink-0 lg:mb-0'>
        {variants.map(({ variant, title, description }, index) => {
          const radioColor = (() => {
            if (!isChecked) return 'default';
            if (variant === correctVariant) return 'success';
            if (value === variant.toString() && variant !== correctVariant) return 'danger';
          })();

          return (
            <m.li
              key={variant}
              {...LiTransition}
              transition={{ type: 'spring', duration: 0.7, bounce: 0, delay: 0.1 * index }}
            >
              <RadioButton
                className={clsx({ 'cursor-default': isChecked })}
                classNames={{
                  label: 'select-none font-light',
                }}
                color={radioColor}
                description={isChecked && description}
                disabled={isChecked}
                id={variant.toString()}
                name={`quiz_${id}`}
                onChange={(e) => setValue(e.target.id)}
              >
                {title}
              </RadioButton>
            </m.li>
          );
        })}
      </View>

      <AnimatePresence>
        {value && !isChecked && (
          <m.div
            key='button-check'
            {...ButtonTransition}
            className='absolute bottom-12 right-4 h-16 w-[calc(100%-2rem)] origin-bottom lg:right-12 lg:w-72'
          >
            <Button
              className='shadow-blum h-16 w-full rounded-full active:translate-y-2 lg:w-72'
              type='submit'
            >
              Проверить ответ
              <ArrowRight />
            </Button>
          </m.div>
        )}

        {value && isChecked && (
          <m.div
            key='button-next'
            {...ButtonTransition}
            animate={{ scale: 1, opacity: 1, transition: { delay: 0.4 } }}
            className='absolute bottom-12 right-4 h-16 w-[calc(100%-2rem)] origin-bottom lg:right-12 lg:w-72'
          >
            <Button
              className='shadow-blum h-16 w-full rounded-full active:translate-y-2 lg:w-72'
              type='submit'
            >
              {isLastQuestion ? 'Показать результаты' : 'Следующий вопрос'}
              <ArrowRight />
            </Button>
          </m.div>
        )}

        {!value && !isChecked && <QuizDogAnnouncer />}
      </AnimatePresence>
    </View>
  );
};
