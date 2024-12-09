import Cookies from 'js-cookie';

export const fetchPrizes = async () => {
  try {
    const apiUrl = process.env.API_URL;
    const response = await fetch(`${apiUrl}/prizes`, {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    });

    if (!response.ok) throw new Error(response.status.toString());

    return { prizes: await response.json() };
  } catch (error) {
    return { error: 'Ошибка загрузки призов', status: +error };
  }
};
