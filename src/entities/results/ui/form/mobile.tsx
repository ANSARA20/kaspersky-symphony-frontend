import { ResultsFormDog } from './dog';
import { ResultsFormInputs } from './form';

import { Text } from '@/shared/ui/text';
import { View } from '@/shared/ui/view';

export const ResultsFormMobile = () => {
  return (
    <View vertical className='inner-shadow mb-10 rounded-3xl bg-default-100 p-6'>
      <Text className='text-2xl' heading={3}>
        Чтобы получить приз, нужно авторизоваться:
      </Text>
      <ResultsFormDog />
      <ResultsFormInputs />
    </View>
  );
};
