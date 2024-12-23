import { m } from 'framer-motion';

import { createFloatingAnimation } from '../utils/createFloatingAnimation';

import puppy1 from '@/shared/assets/images/puppies/puppy_1.png';
import puppy2 from '@/shared/assets/images/puppies/puppy_2.png';
import puppy3 from '@/shared/assets/images/puppies/puppy_3.png';
import puppy4 from '@/shared/assets/images/puppies/puppy_4.png';
import puppy5 from '@/shared/assets/images/puppies/puppy_5.png';
import { ArrowRight } from '@/shared/assets/icons/arrow-right';
import { Button } from '@/shared/ui/button';
import { Picture } from '@/shared/ui/picture';
import { useModal } from '@/shared/ui/modal';
import { Quiz, useQuiz } from '@/entities/quiz';
import { cn } from '@/shared/lib/utils/ui';
import { ResultsModal } from '@/entities/results';

interface Props {
  className?: string;
}

export const PassQuizButton = ({ className }: Props) => {
  const { setModal } = useModal();
  const { isQuizEnded } = useQuiz();

  const handleOpenQuiz = () => {
    if (isQuizEnded) {
      setModal(<ResultsModal />, {
        save: true,
        scrollable: true,
        containerProps: { justify: 'start', items: 'center' },
      });

      return;
    }

    setModal(<Quiz />, {
      save: true,
      scrollable: true,
      containerProps: { className: 'block pb-4 lg:pb-0 lg:flex lg:justify-center lg:items-center' },
    });
  };

  return (
    <div className={cn('relative', className)}>
      <Button
        className='shadow-blum gap-4 rounded-full px-16 py-8 text-xl hover:scale-105 active:translate-y-1 xl:px-32 xl:py-12'
        size='lg'
        onClick={handleOpenQuiz}
      >
        Пройти тест
        <ArrowRight />
      </Button>
      <m.div {...createFloatingAnimation(0.4)} className='absolute -bottom-6 right-6'>
        <Picture alt='puppy1' src={puppy1} width={48} />
      </m.div>
      <m.div {...createFloatingAnimation(1.2)} className='absolute -top-12 right-2 -z-10'>
        <Picture alt='puppy2' src={puppy2} width={68} />
      </m.div>
      <m.div {...createFloatingAnimation(0.8)} className='absolute -bottom-6 left-12'>
        <Picture alt='puppy3' src={puppy3} width={46} />
      </m.div>
      <m.div {...createFloatingAnimation(0)} className='absolute -top-6 right-28'>
        <Picture alt='puppy4' src={puppy4} width={40} />
      </m.div>
      <m.div {...createFloatingAnimation(1.6)} className='absolute -left-9 top-4 -z-10'>
        <Picture alt='puppy5' src={puppy5} width={52} />
      </m.div>
    </div>
  );
};
