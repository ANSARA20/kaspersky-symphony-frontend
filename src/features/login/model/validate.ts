import { z } from 'zod';

export enum LoginFormFields {
  LOGIN = 'login',
  PASSWORD = 'password',
}

export const LoginFormValidateSchema = z.object({
  [LoginFormFields.LOGIN]: z.string().min(4, 'Слишком короткий логин'),
  [LoginFormFields.PASSWORD]: z.string().min(4, 'Слишком короткий пароль'),
});
