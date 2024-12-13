import { Picture } from '@/shared/ui/picture';
import { Text } from '@/shared/ui/text';
import { View } from '@/shared/ui/view';
import puppy from '@/shared/assets/images/puppies/puppy_6.png';
import { CurvedLine } from '@/shared/assets/icons/curved-line';

export const HeroDescription = () => {
  return (
    <>
      <Text
        as='h2'
        className='mt-10 max-w-[1080px] text-center text-[20px] leading-7 md:text-[32px] md:leading-10 lg:leading-10 xl:text-[40px] xl:leading-10'
        weight={6}
      >
        Испытай себя в тесте от Kaspersky и линейки решений для защиты бизнеса{' '}
        <span className='text-gradient-base'>Kaspersky Symphony!</span>
      </Text>
      <View className='px-4' width='fit'>
        <Text className='max-w-[420px] text-center text-sm md:max-w-full xl:text-xl' weight={3}>
          Проверь свою мощь в кибербезопасности и получи своего{' '}
          <span className='relative font-semibold'>
            тотемного пёселя{' '}
            <CurvedLine className='absolute -right-4 -top-1 -z-10 w-[150px] xl:w-[192px]' />
            <Picture
              alt='dog'
              className='absolute -right-12 -top-4 -z-10 w-[36px] xl:w-[42px]'
              src={puppy}
            />
          </span>
        </Text>
      </View>
    </>
  );
};
