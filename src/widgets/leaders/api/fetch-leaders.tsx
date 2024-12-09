export const fetchLeaders = async () => {
  const url = process.env.API_URL;

  try {
    const response = await fetch(`${url}/users/leaders`);

    if (!response.ok) throw new Error();

    return response.json();
  } catch (error) {
    return [];
  }
};
