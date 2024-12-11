import Cookies from 'js-cookie';

export const fetchSpins = async ({ search, page }: { search?: string; page?: number }) => {
  try {
    const apiUrl = process.env.API_URL;
    const params = new URLSearchParams();

    if (search) params.append('id', search);
    if (page) params.append('page', page.toString());
    const response = await fetch(`${apiUrl}/spins?${params}`, {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    });

    if (!response.ok) throw new Error(response.status.toString());

    const spins = await response.json();

    return {
      items: spins.map((spin: any) => ({
        id: spin.id,
        date: new Date(spin.date).toLocaleString(),
        prizeId: spin.prizeId,
        prizeType: spin.prize.type,
        userId: spin.userId,
      })),
    };
  } catch (error) {
    return { error: 'Ошибка загрузки выйгышей', status: +error };
  }
};
