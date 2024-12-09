import { useState } from 'react';

import { FAQQuestions } from '../config/questions';

import { FAQQuestion } from './question';

import { Text } from '@/shared/ui/text';
import { View } from '@/shared/ui/view';

export const FAQ = () => {
  const [pickedQuestion, setPickedQuestion] = useState(0);

  return (
    <View
      vertical
      className='inner-shadow pointer-events-auto absolute left-1/2 top-1/2 max-w-[90%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl bg-default px-4 pt-4 md:max-w-[724px] md:px-10 md:pt-10 lg:max-w-[964px]'
      items='center'
    >
      <Text as='h1' className='text-2xl' weight={6}>
        FAQ
      </Text>
      <View gap='lg'>
        <View vertical className='max-h-[80vh] overflow-y-scroll md:max-h-[60vh]'>
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
