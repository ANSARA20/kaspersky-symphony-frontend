import { ESymphonyLevels } from '@/shared/model/types';

export type TUserDto = {
  name: string;
  email: string;
  phone: string;
  job: string;
  level: ESymphonyLevels;
};

export const fetchPrize = async (user: TUserDto) => {
  const url = process.env.API_URL;

  const response = await fetch(`${url}/users`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json();
};

export const PRIZE_ERRORS = {
  NO_PRIZE: 'Can not choose prize',
  EMAIL_EXISTS: 'User with such email already exist',
  PHONE_EXISTS: 'Emails are not equal',
  MORE_THAN_3_PRIZES: 'Can not get more than 3 prizes per week',
  MORE_THAN_4_PRIZES: 'You can not get more than 4 prizes',
};

export const PRIZE_ERRORS_MESSAGES = {
  [PRIZE_ERRORS.EMAIL_EXISTS]:
    'Пользователь с указанным email уже существует. Введите телефон, который указывали ранее для данного адреса электронной почты.',
  [PRIZE_ERRORS.PHONE_EXISTS]:
    'Пользователь с указанным номером телефона уже существует. Введите email, который указывали ранее для данного телефона.',
  [PRIZE_ERRORS.MORE_THAN_3_PRIZES]: 'Вы уже получили 3 приза за неделю. Приходите на следующей!',
  [PRIZE_ERRORS.MORE_THAN_4_PRIZES]: 'Вы уже получили 4 приза!',
  [PRIZE_ERRORS.NO_PRIZE]: 'Невозможно выбрать приз',
  unknown: 'Произошла неизвестная ошибка',
};

export const getPrizeErrorMessage = (error: string) => {
  return (
    PRIZE_ERRORS_MESSAGES[error as keyof typeof PRIZE_ERRORS_MESSAGES] ||
    PRIZE_ERRORS_MESSAGES.unknown
  );
};
