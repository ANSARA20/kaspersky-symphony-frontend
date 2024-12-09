import { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

import { LoginFormFields, LoginFormValidateSchema } from '../model/validate';
import { login } from '../api/login';
import { IAuthData } from '../model/auth-data.type';

import { Button } from '@/shared/ui/button';

type FormErrors = Partial<Record<LoginFormFields | 'auth', string[] | undefined>>;

export const LoginForm = () => {
  const [error, setError] = useState<FormErrors | null>();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: IAuthData = {
      login: formData.get('login') as string,
      password: formData.get('password') as string,
    };
    const { success, error: validationError } = LoginFormValidateSchema.safeParse(data);

    if (!success) {
      {
        setError(validationError.flatten().fieldErrors);
      }
    }
    setError(null);
    setIsLoading(true);
    const { error, token } = await login(data);

    setIsLoading(false);
    if (error) setError({ auth: [error] });
    Cookies.set('token', token);
    navigate('/admin');
  };

  const inputClass = 'py-2 px-4 rounded-xl border-none focus:outline-none text-black';

  return (
    <form
      className='absolute left-1/2 top-1/2 flex w-[300px] -translate-x-1/2 -translate-y-1/2 flex-col gap-4'
      onSubmit={handleSubmit}
    >
      <input
        className={inputClass}
        id={LoginFormFields.LOGIN}
        name={LoginFormFields.LOGIN}
        placeholder='Логин'
      />
      <input
        className={inputClass}
        id={LoginFormFields.PASSWORD}
        name={LoginFormFields.PASSWORD}
        placeholder='Пароль'
        type='password'
      />
      <Button isDisabled={isLoading} type='submit'>
        Войти
      </Button>
      {error && (
        <div className='absolute -bottom-20 mb-4 w-full animate-fade-blur rounded-xl bg-red-500/20 p-3 font-medium text-red-500'>
          {Object.values(error)[0]?.[0]}
        </div>
      )}
    </form>
  );
};
