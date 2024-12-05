export const fetchPrize = async () => {
  const url = process.env.API_URL;
  const response = await fetch(`${url}/user`, {
    method: 'POST',
  });

  return response.json();
};
