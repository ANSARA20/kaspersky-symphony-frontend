import { useState } from 'react';

import { FAQQuestions } from '../config/questions';

import { FAQQuestion } from './question';

import { CloseIcon } from '@/shared/assets/icons/close-icon';
import { Text } from '@/shared/ui/text';
import { View } from '@/shared/ui/view';
import { useModal } from '@/shared/ui/modal';

export const FAQ = () => {
  const { closeModal } = useModal();
  const [pickedQuestion, setPickedQuestion] = useState(0);

  return (
    <View
      vertical
      className='inner-shadow absolute left-1/2 top-1/2 max-w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-default p-4 md:max-w-[724px] md:p-10 lg:max-w-[964px]'
      items='center'
    >
      <Text as='h1' className='text-2xl' weight={6}>
        FAQ
      </Text>
      <button className='absolute right-4 top-4 md:right-6 md:top-6' onClick={closeModal}>
        <CloseIcon className='w-5 md:w-8' />
      </button>
      <View gap='lg'>
        <View vertical>
          {FAQQuestions.map((_, index) => (
            <FAQQuestion
              key={index}
              index={index}
              pickedQuestion={pickedQuestion}
              setPickedQuestion={setPickedQuestion}
            />
          ))}
        </View>
        <View className='hidden h-fit rounded-bl-3xl rounded-br-3xl rounded-tr-3xl bg-foreground p-6 md:flex'>
          {FAQQuestions[pickedQuestion].answer}
        </View>
      </View>
    </View>
  );
};
