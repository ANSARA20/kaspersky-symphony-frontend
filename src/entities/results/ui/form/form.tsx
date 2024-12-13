import { useState } from 'react';
import { useMask } from '@react-input/mask';

import { FormFields, formValidationSchema } from '../../model/validate';
import { useScenes } from '../../model/use-scenes';
import { fetchPrize, getPrizeErrorMessage, PRIZE_ERRORS, TUserDto } from '../../api/fetch-prize';
import { getStatus } from '../../lib/get-status';
import { EResultsScenes } from '../../model/scenes';
import { TResultPrize } from '../../model/prize';

import { Button } from '@/shared/ui/button';
import { Checkbox } from '@/shared/ui/checkbox';
import { ArrowRight } from '@/shared/assets/icons/arrow-right';
import { useQuiz } from '@/entities/quiz';

type FormErrors = Partial<Record<FormFields, string[] | undefined>>;

export const ResultsFormInputs = () => {
  const { setScene, setPrize } = useScenes();
  const { correctAnswersCount } = useQuiz();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<FormErrors | null>(null);

  const inputPhoneRef = useMask({
    mask: '+7 (___) ___-__-__',
    replacement: { _: /\d/ },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const result = formValidationSchema.safeParse(data);

    if (!result.success) {
      setError(result.error.flatten().fieldErrors);
      setIsLoading(false);

      return;
    }
    setError(null);

    const status = getStatus(correctAnswersCount);

    const user: TUserDto = {
      name: result.data.name,
      email: result.data.email,
      phone: result.data.phone,
      job: result.data.work,
      level: status,
    };

    setIsLoading(true);

    try {
      const prize = await fetchPrize(user);

      if (!!prize.error) {
        throw new Error(prize.message);
      }

      setPrize(prize as TResultPrize);
      setScene('prize' as EResultsScenes);
    } catch (error) {
      if (error.message === PRIZE_ERRORS.NO_PRIZE) {
        setPrize(null);
        setScene('prize' as EResultsScenes);
      }

      const errorMessage = getPrizeErrorMessage(error.message);

      setError({ email: [errorMessage] });
    } finally {
      setIsLoading(false);
    }
  };

  const inputClassname = 'inner-shadow rounded-xl bg-foreground/10 p-3';

  return (
    <form className='flex flex-col gap-base' onSubmit={handleSubmit}>
      <input
        className={inputClassname}
        id={FormFields.NAME}
        name={FormFields.NAME}
        placeholder='ФИО'
        type='text'
      />
      <input
        className={inputClassname}
        id={FormFields.WORK}
        name={FormFields.WORK}
        placeholder='Место работы'
        type='text'
      />
      <input
        ref={inputPhoneRef}
        className={inputClassname}
        id={FormFields.PHONE}
        name={FormFields.PHONE}
        placeholder='Телефон'
        type='tel'
      />
      <input
        className={inputClassname}
        id={FormFields.EMAIL}
        name={FormFields.EMAIL}
        placeholder='Email'
        type='email'
      />

      <div className='my-4 flex flex-col gap-base'>
        <Checkbox id={FormFields.RULES} name={FormFields.RULES}>
          Я согласен с <span className='underline'>правилами акции</span>
        </Checkbox>

        <Checkbox id={FormFields.PRIVACY} name={FormFields.PRIVACY}>
          Я даю согласие на обработку <span className='underline'>Персональных данных</span>
        </Checkbox>

        <Checkbox id={FormFields.AGREEMENT} name={FormFields.AGREEMENT}>
          Я согласен получать сообщения от организатора акции
        </Checkbox>
      </div>

      {error && (
        <div className='mb-4 animate-fade-blur rounded-xl bg-red-500/20 p-3 font-medium text-red-500'>
          {Object.values(error)[0]?.[0]}
        </div>
      )}

      <Button
        className='shadow-blum mb-2 h-16 rounded-full active:translate-y-2'
        isLoading={isLoading}
        size='lg'
        spinnerProps={{ size: 'sm' }}
        type='submit'
      >
        Авторизоваться
        <ArrowRight />
      </Button>
    </form>
  );
};
