import Cookies from 'js-cookie';

export const fetchUsers = async ({ search, page }: { search?: string; page?: number }) => {
  try {
    const apiUrl = process.env.API_URL;
    const params = new URLSearchParams();

    if (search) params.append('search', search);
    if (page) params.append('page', page.toString());
    const response = await fetch(`${apiUrl}/users?${params}`, {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    });

    if (!response.ok) throw new Error(response.status.toString());

    return { items: await response.json() };
  } catch (error) {
    return { error: 'Ошибка загрузки пользователей', status: +error };
  }
};
