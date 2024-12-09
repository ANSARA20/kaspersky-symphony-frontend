export const fetchPrize = async () => {
  try {
    const url = process.env.API_URL;
    const response = await fetch(`${url}/user`, {
      method: 'POST',
    });

    if (!response.ok) throw new Error();

    return response.json();
  } catch (error) {
    return null;
  }
};
