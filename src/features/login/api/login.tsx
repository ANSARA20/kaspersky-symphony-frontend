import { IAuthData } from '../model/auth-data.type';

export const login = async (body: IAuthData) => {
  try {
    const apiUrl = process.env.API_URL;
    const response = await fetch(`${apiUrl}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) throw new Error();

    return response.json();
  } catch (error) {
    return { error: 'Ошибка авторизации' };
  }
};
