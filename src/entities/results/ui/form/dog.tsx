import { Text } from '@/shared/ui/text';
import { View } from '@/shared/ui/view';
import DogHelper from '@/shared/assets/images/dogs/dog_5.png';

export const ResultsFormDog = () => {
  return (
    <View className='relative my-6 h-min w-full gap-0 lg:mt-32 lg:w-96' justify='end'>
      <View
        className='inner-shadow mb-10 mr-28 max-w-72 rounded-2xl rounded-br-none bg-foreground/10 p-4 lg:max-w-64 lg:p-6'
        height='min'
      >
        <Text className='text-sm lg:text-base' weight={6}>
          Не напрягайся, кибер-дог! <br />
          Дело 10 секунд
          <br />
          <br /> Форма нужна для того, чтобы мы связались с тобой и твой приз достался именно тебе
          <br />
          <br />
          Команда Касперского не даст твои данные в обиду!
        </Text>
      </View>

      <img
        alt='Собака-помощник'
        className='absolute -bottom-8 -right-8 aspect-square w-48 select-none lg:-bottom-16 lg:-right-32 lg:w-80'
        draggable={false}
        src={DogHelper}
      />
    </View>
  );
};
