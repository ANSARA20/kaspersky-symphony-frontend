import { z } from 'zod';

export enum FormFields {
  NAME = 'name',
  WORK = 'work',
  PHONE = 'phone',
  EMAIL = 'email',
  RULES = 'rules',
  PRIVACY = 'privacy',
  AGREEMENT = 'agreement',
}

export const formValidationSchema = z.object({
  [FormFields.NAME]: z
    .string()
    .min(1, 'Поле "ФИО" обязательно для заполнения')
    .refine(
      (val) => val.trim().split(/\s+/).length >= 2,
      'Поле "ФИО" должно содержать минимум 2 слова – фамилию и имя',
    ),
  [FormFields.WORK]: z.string().min(1, 'Поле "Место работы" обязательно для заполнения'),
  [FormFields.PHONE]: z
    .string()
    .min(1, 'Поле "Телефон" обязательно для заполнения')
    .regex(/^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/, 'Введите корректный номер телефона'),
  [FormFields.EMAIL]: z
    .string()
    .email('Введите корректный email')
    .min(1, 'Поле "Email" обязательно для заполнения'),
  [FormFields.RULES]: z
    .union([z.literal('on'), z.undefined()])
    .refine((val) => val === 'on', 'Необходимо согласие с правилами'),
  [FormFields.PRIVACY]: z
    .union([z.literal('on'), z.undefined()])
    .refine((val) => val === 'on', 'Необходимо согласие на обработку данных'),
});
