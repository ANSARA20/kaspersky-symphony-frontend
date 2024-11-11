import { ResultsFormInputs } from './form';
import { ResultsFormDog } from './dog';

import { View } from '@/shared/ui/view';
import { Text } from '@/shared/ui/text';

export const ResultsFormDesktop = () => {
  return (
    <>
      <View
        vertical
        className='inner-shadow mb-10 max-w-lg rounded-3xl bg-default-100 p-8'
        gap='xl'
      >
        <Text className='text-2xl' heading={3}>
          Чтобы получить приз, нужно авторизоваться:
        </Text>
        <ResultsFormInputs />
      </View>
      <ResultsFormDog />
    </>
  );
};
