import { useMediaQuery } from 'react-responsive';

import { CurvedLine } from '@/shared/assets/icons/curved-line';
import { Text } from '@/shared/ui/text';
import { cn } from '@/shared/lib/utils/ui';

export const CallToActionText = () => {
  // ! ты перерендериваешь все содержимое, когда тут можно просто использовать css-media query
  const isDesktop = useMediaQuery({ query: '(min-width: 1260px)' });

  // ! все таки когда классы не изменяемые, лучше использовать cslx
  const titleClass = cn(
    'lg:text-[36px] sm:text-[24px] text-[20px] sm:max-w-[500px] md:max-w-full max-w-[250px] leading-6 sm:leading-8',
    {
      'text-center': !isDesktop,
    },
  );

  // ! все таки когда классы не изменяемые, лучше использовать cslx
  const descriptionClass = cn(
    'mt-2 text-sm xl:text-xl md:max-w-full sm:max-w-[500px] max-w-[280px]',
    {
      'text-center': !isDesktop,
    },
  );

  return (
    <>
      <Text as='h1' className={titleClass} weight={6}>
        За успешное прохождение тебя ждут{' '}
        <span className='text-gradient-base'>гарантированные призы</span>
      </Text>
      <Text className={descriptionClass} weight={3}>
        Чем больше правильных ответов ты дашь, тем круче твой лут! Только не зевай, у тебя есть{' '}
        <span className='relative font-semibold'>
          3 попытки в неделю!
          <CurvedLine
            className='absolute -right-2 -top-2 -z-10 rotate-3'
            size={isDesktop ? 212 : 150}
          />
        </span>
      </Text>
    </>
  );
};
