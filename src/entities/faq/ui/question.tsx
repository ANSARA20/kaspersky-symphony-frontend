import { useMemo } from 'react';

import { FAQQuestions } from '../config/questions';

import { cn } from '@/shared/lib/utils/ui';
import { View } from '@/shared/ui/view';

interface Props {
  pickedQuestion: number;
  setPickedQuestion: (value: number) => void;
  index: number;
}

export const FAQQuestion = ({ pickedQuestion, setPickedQuestion, index }: Props) => {
  const questionClass = useMemo(() => {
    return cn(
      'rounded-[24px] md:px-6 md:py-4 text-start lg:text-lg px-5 py-2 leading-5 md:text-base text-sm last:mb-4 md:last:mb-10',
      {
        'bg-foreground/10 inner-shadow ': index != pickedQuestion,
        'bg-primary bottom-shadow': index === pickedQuestion,
        'mb-4 md:mb-10': index === FAQQuestions.length - 1,
      },
    );
  }, [pickedQuestion]);

  return (
    <>
      <button
        className={questionClass}
        onClick={() => {
          setPickedQuestion(index);
        }}
      >
        {FAQQuestions[index].question}
      </button>
      {index === pickedQuestion && (
        <View className='h-fit rounded-bl-3xl rounded-br-3xl rounded-tr-3xl bg-foreground p-3 px-5 last:mb-4 md:hidden'>
          {FAQQuestions[pickedQuestion].answer}
        </View>
      )}
    </>
  );
};
