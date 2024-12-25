import { Link } from 'react-router-dom';

import { Picture } from '@/shared/ui/picture';
import { Text } from '@/shared/ui/text';
import { View } from '@/shared/ui/view';
import puppy from '@/shared/assets/images/puppies/puppy_6.png';
import { CurvedLine } from '@/shared/assets/icons/curved-line';
import { LINKS } from '@/shared/config/links';

export const HeroDescription = () => {
  return (
    <>
      <Text
        as='h2'
        className='mt-10 max-w-[1080px] text-center text-[20px] leading-7 md:text-[32px] md:leading-10 lg:leading-10 xl:text-[40px] xl:leading-10'
        weight={6}
      >
        Испытай себя в тесте от команды Kaspersky и линейки решений для защиты бизнеса{' '}
        <Link target='_blank' to={LINKS.PRODUCT}>
          <span className='text-gradient-base transition-opacity hover:opacity-80'>
            Kaspersky Symphony!
          </span>
        </Link>
      </Text>
      <View className='px-4' width='fit'>
        <Text className='max-w-[420px] text-center text-sm md:max-w-full xl:text-xl' weight={3}>
          Проверь свою мощь в кибербезе и получи{' '}
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
