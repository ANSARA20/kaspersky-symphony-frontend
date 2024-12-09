import Cookies from 'js-cookie';

export const fetchUsers = async () => {
  try {
    const apiUrl = process.env.API_URL;
    const response = await fetch(`${apiUrl}/users`, {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    });

    if (!response.ok) throw new Error(response.status.toString());

    return { users: await response.json() };
  } catch (error) {
    return { error: 'Ошибка загрузки пользователей', status: +error };
  }
};
