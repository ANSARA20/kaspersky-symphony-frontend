import { CurvedLine } from '@/shared/assets/icons/curved-line';
import { Text } from '@/shared/ui/text';

export const CallToActionText = () => {
  return (
    <>
      <Text
        as='h1'
        className='max-w-[250px] text-center text-[20px] leading-6 sm:max-w-[500px] sm:text-[24px] sm:leading-8 md:max-w-full xl:text-start xl:text-[36px]'
        weight={6}
      >
        За успешное прохождение тебя ждут{' '}
        <span className='text-gradient-base'>гарантированные призы</span>
      </Text>
      <Text
        className='xl:text:start mt-2 max-w-[280px] text-center text-sm sm:max-w-[500px] md:max-w-full xl:text-xl'
        weight={3}
      >
        Чем больше правильных ответов ты дашь, тем круче твой лут! Только не зевай, у тебя есть{' '}
        <span className='relative font-semibold'>
          3 попытки в неделю!
          <CurvedLine className='absolute -right-2 -top-2 -z-10 w-[150px] rotate-3 xl:w-[212px]' />
        </span>
      </Text>
    </>
  );
};
